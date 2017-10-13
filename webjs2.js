! function(t, e) {
    function i(t) {
        var e = t.length,
            i = lt.type(t);
        return lt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function s(t) {
        var e = kt[t] = {};
        return lt.each(t.match(ct) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function n(t, i, s, n) {
        if (lt.acceptData(t)) {
            var o, r, a = lt.expando,
                l = "string" == typeof i,
                h = t.nodeType,
                c = h ? lt.cache : t,
                u = h ? t[a] : t[a] && a;
            if (u && c[u] && (n || c[u].data) || !l || s !== e) return u || (h ? t[a] = u = Z.pop() || lt.guid++ : u = a), c[u] || (c[u] = {}, h || (c[u].toJSON = lt.noop)), ("object" == typeof i || "function" == typeof i) && (n ? c[u] = lt.extend(c[u], i) : c[u].data = lt.extend(c[u].data, i)), o = c[u], n || (o.data || (o.data = {}), o = o.data), s !== e && (o[lt.camelCase(i)] = s), l ? (r = o[i], null == r && (r = o[lt.camelCase(i)])) : r = o, r
        }
    }

    function o(t, e, i) {
        if (lt.acceptData(t)) {
            var s, n, o, r = t.nodeType,
                l = r ? lt.cache : t,
                h = r ? t[lt.expando] : lt.expando;
            if (l[h]) {
                if (e && (o = i ? l[h] : l[h].data)) {
                    lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in o ? e = [e] : (e = lt.camelCase(e), e = e in o ? [e] : e.split(" "));
                    for (s = 0, n = e.length; n > s; s++) delete o[e[s]];
                    if (!(i ? a : lt.isEmptyObject)(o)) return
                }(i || (delete l[h].data, a(l[h]))) && (r ? lt.cleanData([t], !0) : lt.support.deleteExpando || l != l.window ? delete l[h] : l[h] = null)
            }
        }
    }

    function r(t, i, s) {
        if (s === e && 1 === t.nodeType) {
            var n = "data-" + i.replace(Dt, "-$1").toLowerCase();
            if (s = t.getAttribute(n), "string" == typeof s) {
                try {
                    s = "true" === s ? !0 : "false" === s ? !1 : "null" === s ? null : +s + "" === s ? +s : Ct.test(s) ? lt.parseJSON(s) : s
                } catch (o) {}
                lt.data(t, i, s)
            } else s = e
        }
        return s
    }

    function a(t) {
        var e;
        for (e in t)
            if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function h() {
        return !1
    }

    function c(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function u(t, e, i) {
        if (e = e || 0, lt.isFunction(e)) return lt.grep(t, function(t, s) {
            var n = !!e.call(t, s, t);
            return n === i
        });
        if (e.nodeType) return lt.grep(t, function(t) {
            return t === e === i
        });
        if ("string" == typeof e) {
            var s = lt.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (Bt.test(e)) return lt.filter(e, s, !i);
            e = lt.filter(e, s)
        }
        return lt.grep(t, function(t) {
            return lt.inArray(t, e) >= 0 === i
        })
    }

    function d(t) {
        var e = Ut.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function f(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function p(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }

    function g(t) {
        var e = ne.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i, s = 0; null != (i = t[s]); s++) lt._data(i, "globalEval", !e || lt._data(e[s], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && lt.hasData(t)) {
            var i, s, n, o = lt._data(t),
                r = lt._data(e, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a)
                    for (s = 0, n = a[i].length; n > s; s++) lt.event.add(e, i, a[i][s])
            }
            r.data && (r.data = lt.extend({}, r.data))
        }
    }

    function _(t, e) {
        var i, s, n;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !lt.support.noCloneEvent && e[lt.expando]) {
                n = lt._data(e);
                for (s in n.events) lt.removeEvent(e, s, n.handle);
                e.removeAttribute(lt.expando)
            }
            "script" === i && e.text !== t.text ? (p(e).text = t.text, g(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), lt.support.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, i) {
        var s, n, o = 0,
            r = typeof t.getElementsByTagName !== K ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== K ? t.querySelectorAll(i || "*") : e;
        if (!r)
            for (r = [], s = t.childNodes || t; null != (n = s[o]); o++) !i || lt.nodeName(n, i) ? r.push(n) : lt.merge(r, b(n, i));
        return i === e || i && lt.nodeName(t, i) ? lt.merge([t], r) : r
    }

    function y(t) {
        ee.test(t.type) && (t.defaultChecked = t.checked)
    }

    function w(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), s = e, n = Ce.length; n--;)
            if (e = Ce[n] + i, e in t) return e;
        return s
    }

    function x(t, e) {
        return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
    }

    function k(t, e) {
        for (var i, s, n, o = [], r = 0, a = t.length; a > r; r++) s = t[r], s.style && (o[r] = lt._data(s, "olddisplay"), i = s.style.display, e ? (o[r] || "none" !== i || (s.style.display = ""), "" === s.style.display && x(s) && (o[r] = lt._data(s, "olddisplay", M(s.nodeName)))) : o[r] || (n = x(s), (i && "none" !== i || !n) && lt._data(s, "olddisplay", n ? i : lt.css(s, "display"))));
        for (r = 0; a > r; r++) s = t[r], s.style && (e && "none" !== s.style.display && "" !== s.style.display || (s.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function C(t, e, i) {
        var s = ve.exec(e);
        return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : e
    }

    function D(t, e, i, s, n) {
        for (var o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += lt.css(t, i + ke[o], !0, n)), s ? ("content" === i && (r -= lt.css(t, "padding" + ke[o], !0, n)), "margin" !== i && (r -= lt.css(t, "border" + ke[o] + "Width", !0, n))) : (r += lt.css(t, "padding" + ke[o], !0, n), "padding" !== i && (r += lt.css(t, "border" + ke[o] + "Width", !0, n)));
        return r
    }

    function T(t, e, i) {
        var s = !0,
            n = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = ce(t),
            r = lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, o);
        if (0 >= n || null == n) {
            if (n = ue(t, e, o), (0 > n || null == n) && (n = t.style[e]), _e.test(n)) return n;
            s = r && (lt.support.boxSizingReliable || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + D(t, e, i || (r ? "border" : "content"), s, o) + "px"
    }

    function M(t) {
        var e = Q,
            i = ye[t];
        return i || (i = I(t, e), "none" !== i && i || (he = (he || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (he[0].contentWindow || he[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = I(t, e), he.detach()), ye[t] = i), i
    }

    function I(t, e) {
        var i = lt(e.createElement(t)).appendTo(e.body),
            s = lt.css(i[0], "display");
        return i.remove(), s
    }

    function S(t, e, i, s) {
        var n;
        if (lt.isArray(e)) lt.each(e, function(e, n) {
            i || Te.test(t) ? s(t, n) : S(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, s)
        });
        else if (i || "object" !== lt.type(e)) s(t, e);
        else
            for (n in e) S(t + "[" + n + "]", e[n], i, s)
    }

    function A(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n = 0,
                o = e.toLowerCase().match(ct) || [];
            if (lt.isFunction(i))
                for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
    }

    function E(t, i, s, n) {
        function o(l) {
            var h;
            return r[l] = !0, lt.each(t[l] || [], function(t, l) {
                var c = l(i, s, n);
                return "string" != typeof c || a || r[c] ? a ? !(h = c) : e : (i.dataTypes.unshift(c), o(c), !1)
            }), h
        }
        var r = {},
            a = t === Be;
        return o(i.dataTypes[0]) || !r["*"] && o("*")
    }

    function P(t, i) {
        var s, n, o = lt.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== e && ((o[n] ? t : s || (s = {}))[n] = i[n]);
        return s && lt.extend(!0, t, s), t
    }

    function j(t, i, s) {
        var n, o, r, a, l = t.contents,
            h = t.dataTypes,
            c = t.responseFields;
        for (a in c) a in s && (i[c[a]] = s[a]);
        for (;
            "*" === h[0];) h.shift(), o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    h.unshift(a);
                    break
                }
        if (h[0] in s) r = h[0];
        else {
            for (a in s) {
                if (!h[0] || t.converters[a + " " + h[0]]) {
                    r = a;
                    break
                }
                n || (n = a)
            }
            r = r || n
        }
        return r ? (r !== h[0] && h.unshift(r), s[r]) : e
    }

    function N(t, e) {
        var i, s, n, o, r = {},
            a = 0,
            l = t.dataTypes.slice(),
            h = l[0];
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
            for (n in t.converters) r[n.toLowerCase()] = t.converters[n];
        for (; s = l[++a];)
            if ("*" !== s) {
                if ("*" !== h && h !== s) {
                    if (n = r[h + " " + s] || r["* " + s], !n)
                        for (i in r)
                            if (o = i.split(" "), o[1] === s && (n = r[h + " " + o[0]] || r["* " + o[0]])) {
                                n === !0 ? n = r[i] : r[i] !== !0 && (s = o[0], l.splice(a--, 0, s));
                                break
                            }
                    if (n !== !0)
                        if (n && t["throws"]) e = n(e);
                        else try {
                            e = n(e)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + h + " to " + s
                            }
                        }
                }
                h = s
            }
        return {
            state: "success",
            data: e
        }
    }

    function H() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function O() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function F() {
        return setTimeout(function() {
            Je = e
        }), Je = lt.now()
    }

    function W(t, e) {
        lt.each(e, function(e, i) {
            for (var s = (ni[e] || []).concat(ni["*"]), n = 0, o = s.length; o > n; n++)
                if (s[n].call(t, e, i)) return
        })
    }

    function q(t, e, i) {
        var s, n, o = 0,
            r = si.length,
            a = lt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (n) return !1;
                for (var e = Je || F(), i = Math.max(0, h.startTime + h.duration - e), s = i / h.duration || 0, o = 1 - s, r = 0, l = h.tweens.length; l > r; r++) h.tweens[r].run(o);
                return a.notifyWith(t, [h, o, i]), 1 > o && l ? i : (a.resolveWith(t, [h]), !1)
            },
            h = a.promise({
                elem: t,
                props: lt.extend({}, e),
                opts: lt.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Je || F(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var s = lt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(s), s
                },
                stop: function(e) {
                    var i = 0,
                        s = e ? h.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; s > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (L(c, h.opts.specialEasing); r > o; o++)
            if (s = si[o].call(h, t, c, h.opts)) return s;
        return W(h, c), lt.isFunction(h.opts.start) && h.opts.start.call(t, h), lt.fx.timer(lt.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function L(t, e) {
        var i, s, n, o, r;
        for (n in t)
            if (s = lt.camelCase(n), o = e[s], i = t[n], lt.isArray(i) && (o = i[1], i = t[n] = i[0]), n !== s && (t[s] = i, delete t[n]), r = lt.cssHooks[s], r && "expand" in r) {
                i = r.expand(i), delete t[s];
                for (n in i) n in t || (t[n] = i[n], e[n] = o)
            } else e[s] = o
    }

    function z(t, e, i) {
        var s, n, o, r, a, l, h, c, u, d = this,
            f = t.style,
            p = {},
            g = [],
            m = t.nodeType && x(t);
        i.queue || (c = lt._queueHooks(t, "fx"), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() {
            c.unqueued || u()
        }), c.unqueued++, d.always(function() {
            d.always(function() {
                c.unqueued--, lt.queue(t, "fx").length || c.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === lt.css(t, "display") && "none" === lt.css(t, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== M(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", lt.support.shrinkWrapBlocks || d.always(function() {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], ti.exec(r)) {
                if (delete e[n], l = l || "toggle" === r, r === (m ? "hide" : "show")) continue;
                g.push(n)
            }
        if (o = g.length) {
            a = lt._data(t, "fxshow") || lt._data(t, "fxshow", {}), "hidden" in a && (m = a.hidden), l && (a.hidden = !m), m ? lt(t).show() : d.done(function() {
                lt(t).hide()
            }), d.done(function() {
                var e;
                lt._removeData(t, "fxshow");
                for (e in p) lt.style(t, e, p[e])
            });
            for (n = 0; o > n; n++) s = g[n], h = d.createTween(s, m ? a[s] : 0), p[s] = a[s] || lt.style(t, s), s in a || (a[s] = h.start, m && (h.end = h.start, h.start = "width" === s || "height" === s ? 1 : 0))
        }
    }

    function $(t, e, i, s, n) {
        return new $.prototype.init(t, e, i, s, n)
    }

    function B(t, e) {
        var i, s = {
                height: t
            },
            n = 0;
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = ke[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function R(t) {
        return lt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var Y, U, K = typeof e,
        Q = t.document,
        X = t.location,
        G = t.jQuery,
        V = t.$,
        J = {},
        Z = [],
        tt = "1.9.1",
        et = Z.concat,
        it = Z.push,
        st = Z.slice,
        nt = Z.indexOf,
        ot = J.toString,
        rt = J.hasOwnProperty,
        at = tt.trim,
        lt = function(t, e) {
            return new lt.fn.init(t, e, U)
        },
        ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = /\S+/g,
        ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        dt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^[\],:{}\s]*$/,
        gt = /(?:^|:|,)(?:\s*\[)+/g,
        mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        _t = /^-ms-/,
        bt = /-([\da-z])/gi,
        yt = function(t, e) {
            return e.toUpperCase()
        },
        wt = function(t) {
            (Q.addEventListener || "load" === t.type || "complete" === Q.readyState) && (xt(), lt.ready())
        },
        xt = function() {
            Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", wt, !1), t.removeEventListener("load", wt, !1)) : (Q.detachEvent("onreadystatechange", wt), t.detachEvent("onload", wt))
        };
    lt.fn = lt.prototype = {
        jquery: tt,
        constructor: lt,
        init: function(t, i, s) {
            var n, o;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : dt.exec(t), !n || !n[1] && i) return !i || i.jquery ? (i || s).find(t) : this.constructor(i).find(t);
                if (n[1]) {
                    if (i = i instanceof lt ? i[0] : i, lt.merge(this, lt.parseHTML(n[1], i && i.nodeType ? i.ownerDocument || i : Q, !0)), ft.test(n[1]) && lt.isPlainObject(i))
                        for (n in i) lt.isFunction(this[n]) ? this[n](i[n]) : this.attr(n, i[n]);
                    return this
                }
                if (o = Q.getElementById(n[2]), o && o.parentNode) {
                    if (o.id !== n[2]) return s.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = Q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? s.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return st.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            var e = lt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return lt.each(this, t, e)
        },
        ready: function(t) {
            return lt.ready.promise().done(t), this
        },
        slice: function() {
            return this.pushStack(st.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        map: function(t) {
            return this.pushStack(lt.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    }, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
        var t, i, s, n, o, r, a = arguments[0] || {},
            l = 1,
            h = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || lt.isFunction(a) || (a = {}), h === l && (a = this, --l); h > l; l++)
            if (null != (o = arguments[l]))
                for (n in o) t = a[n], s = o[n], a !== s && (c && s && (lt.isPlainObject(s) || (i = lt.isArray(s))) ? (i ? (i = !1, r = t && lt.isArray(t) ? t : []) : r = t && lt.isPlainObject(t) ? t : {}, a[n] = lt.extend(c, r, s)) : s !== e && (a[n] = s));
        return a
    }, lt.extend({
        noConflict: function(e) {
            return t.$ === lt && (t.$ = V), e && t.jQuery === lt && (t.jQuery = G), lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? lt.readyWait++ : lt.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--lt.readyWait : !lt.isReady) {
                if (!Q.body) return setTimeout(lt.ready);
                lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (Y.resolveWith(Q, [lt]), lt.fn.trigger && lt(Q).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === lt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === lt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[ot.call(t)] || "object" : typeof t
        },
        isPlainObject: function(t) {
            if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
            try {
                if (t.constructor && !rt.call(t, "constructor") && !rt.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            var s;
            for (s in t);
            return s === e || rt.call(t, s)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function(t) {
            throw Error(t)
        },
        parseHTML: function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Q;
            var s = ft.exec(t),
                n = !i && [];
            return s ? [e.createElement(s[1])] : (s = lt.buildFragment([t], e, n), n && lt(n).remove(), lt.merge([], s.childNodes))
        },
        parseJSON: function(i) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = lt.trim(i), i && pt.test(i.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? Function("return " + i)() : (lt.error("Invalid JSON: " + i), e)
        },
        parseXML: function(i) {
            var s, n;
            if (!i || "string" != typeof i) return null;
            try {
                t.DOMParser ? (n = new DOMParser, s = n.parseFromString(i, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(i))
            } catch (o) {
                s = e
            }
            return s && s.documentElement && !s.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + i), s
        },
        noop: function() {},
        globalEval: function(e) {
            e && lt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(_t, "ms-").replace(bt, yt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, s) {
            var n, o = 0,
                r = t.length,
                a = i(t);
            if (s) {
                if (a)
                    for (; r > o && (n = e.apply(t[o], s), n !== !1); o++);
                else
                    for (o in t)
                        if (n = e.apply(t[o], s), n === !1) break
            } else if (a)
                for (; r > o && (n = e.call(t[o], o, t[o]), n !== !1); o++);
            else
                for (o in t)
                    if (n = e.call(t[o], o, t[o]), n === !1) break; return t
        },
        trim: at && !at.call("\ufeffÂ ") ? function(t) {
            return null == t ? "" : at.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(ut, "")
        },
        makeArray: function(t, e) {
            var s = e || [];
            return null != t && (i(Object(t)) ? lt.merge(s, "string" == typeof t ? [t] : t) : it.call(s, t)), s
        },
        inArray: function(t, e, i) {
            var s;
            if (e) {
                if (nt) return nt.call(e, t, i);
                for (s = e.length, i = i ? 0 > i ? Math.max(0, s + i) : i : 0; s > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, i) {
            var s = i.length,
                n = t.length,
                o = 0;
            if ("number" == typeof s)
                for (; s > o; o++) t[n++] = i[o];
            else
                for (; i[o] !== e;) t[n++] = i[o++];
            return t.length = n, t
        },
        grep: function(t, e, i) {
            var s, n = [],
                o = 0,
                r = t.length;
            for (i = !!i; r > o; o++) s = !!e(t[o], o), i !== s && n.push(t[o]);
            return n
        },
        map: function(t, e, s) {
            var n, o = 0,
                r = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; r > o; o++) n = e(t[o], o, s), null != n && (l[l.length] = n);
            else
                for (o in t) n = e(t[o], o, s), null != n && (l[l.length] = n);
            return et.apply([], l)
        },
        guid: 1,
        proxy: function(t, i) {
            var s, n, o;
            return "string" == typeof i && (o = t[i], i = t, t = o), lt.isFunction(t) ? (s = st.call(arguments, 2), n = function() {
                return t.apply(i || this, s.concat(st.call(arguments)))
            }, n.guid = t.guid = t.guid || lt.guid++, n) : e
        },
        access: function(t, i, s, n, o, r, a) {
            var l = 0,
                h = t.length,
                c = null == s;
            if ("object" === lt.type(s)) {
                o = !0;
                for (l in s) lt.access(t, i, l, s[l], !0, r, a)
            } else if (n !== e && (o = !0, lt.isFunction(n) || (a = !0), c && (a ? (i.call(t, n), i = null) : (c = i, i = function(t, e, i) {
                    return c.call(lt(t), i)
                })), i))
                for (; h > l; l++) i(t[l], s, a ? n : n.call(t[l], l, i(t[l], s)));
            return o ? t : c ? i.call(t) : h ? i(t[0], s) : r
        },
        now: function() {
            return (new Date).getTime()
        }
    }), lt.ready.promise = function(e) {
        if (!Y)
            if (Y = lt.Deferred(), "complete" === Q.readyState) setTimeout(lt.ready);
            else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", wt, !1), t.addEventListener("load", wt, !1);
        else {
            Q.attachEvent("onreadystatechange", wt), t.attachEvent("onload", wt);
            var i = !1;
            try {
                i = null == t.frameElement && Q.documentElement
            } catch (s) {}
            i && i.doScroll && function n() {
                if (!lt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(n, 50)
                    }
                    xt(), lt.ready()
                }
            }()
        }
        return Y.promise(e)
    }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        J["[object " + e + "]"] = e.toLowerCase()
    }), U = lt(Q);
    var kt = {};
    lt.Callbacks = function(t) {
        t = "string" == typeof t ? kt[t] || s(t) : lt.extend({}, t);
        var i, n, o, r, a, l, h = [],
            c = !t.once && [],
            u = function(e) {
                for (n = t.memory && e, o = !0, a = l || 0, l = 0, r = h.length, i = !0; h && r > a; a++)
                    if (h[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, h && (c ? c.length && u(c.shift()) : n ? h = [] : d.disable())
            },
            d = {
                add: function() {
                    if (h) {
                        var e = h.length;
                        ! function s(e) {
                            lt.each(e, function(e, i) {
                                var n = lt.type(i);
                                "function" === n ? t.unique && d.has(i) || h.push(i) : i && i.length && "string" !== n && s(i)
                            })
                        }(arguments), i ? r = h.length : n && (l = e, u(n))
                    }
                    return this
                },
                remove: function() {
                    return h && lt.each(arguments, function(t, e) {
                        for (var s;
                            (s = lt.inArray(e, h, s)) > -1;) h.splice(s, 1), i && (r >= s && r--, a >= s && a--)
                    }), this
                },
                has: function(t) {
                    return t ? lt.inArray(t, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], this
                },
                disable: function() {
                    return h = c = n = e, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return c = e, n || d.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], !h || o && !c || (i ? c.push(e) : u(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, lt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", lt.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return n.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return lt.Deferred(function(i) {
                            lt.each(e, function(e, o) {
                                var r = o[0],
                                    a = lt.isFunction(t[e]) && t[e];
                                n[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && lt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r + "With"](this === s ? i.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? lt.extend(t, s) : s
                    }
                },
                n = {};
            return s.pipe = s.then, lt.each(e, function(t, o) {
                var r = o[2],
                    a = o[3];
                s[o[1]] = r.add, a && r.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = function() {
                    return n[o[0] + "With"](this === n ? s : this, arguments), this
                }, n[o[0] + "With"] = r.fireWith
            }), s.promise(n), t && t.call(n, n), n
        },
        when: function(t) {
            var e, i, s, n = 0,
                o = st.call(arguments),
                r = o.length,
                a = 1 !== r || t && lt.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : lt.Deferred(),
                h = function(t, i, s) {
                    return function(n) {
                        i[t] = this, s[t] = arguments.length > 1 ? st.call(arguments) : n, s === e ? l.notifyWith(i, s) : --a || l.resolveWith(i, s)
                    }
                };
            if (r > 1)
                for (e = Array(r), i = Array(r), s = Array(r); r > n; n++) o[n] && lt.isFunction(o[n].promise) ? o[n].promise().done(h(n, s, o)).fail(l.reject).progress(h(n, i, e)) : --a;
            return a || l.resolveWith(s, o), l.promise()
        }
    }), lt.support = function() {
        var e, i, s, n, o, r, a, l, h, c, u = Q.createElement("div");
        if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*"), s = u.getElementsByTagName("a")[0], !i || !s || !i.length) return {};
        o = Q.createElement("select"), a = o.appendChild(Q.createElement("option")), n = u.getElementsByTagName("input")[0], s.style.cssText = "top:1px;float:left;opacity:.5", e = {
            getSetAttribute: "t" !== u.className,
            leadingWhitespace: 3 === u.firstChild.nodeType,
            tbody: !u.getElementsByTagName("tbody").length,
            htmlSerialize: !!u.getElementsByTagName("link").length,
            style: /top/.test(s.getAttribute("style")),
            hrefNormalized: "/a" === s.getAttribute("href"),
            opacity: /^0.5/.test(s.style.opacity),
            cssFloat: !!s.style.cssFloat,
            checkOn: !!n.value,
            optSelected: a.selected,
            enctype: !!Q.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Q.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, n.checked = !0, e.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
        try {
            delete u.test
        } catch (d) {
            e.deleteExpando = !1
        }
        n = Q.createElement("input"), n.setAttribute("value", ""), e.input = "" === n.getAttribute("value"), n.value = "t", n.setAttribute("type", "radio"), e.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r = Q.createDocumentFragment(), r.appendChild(n), e.appendChecked = n.checked, e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), u.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) u.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || u.attributes[l].expando === !1;
        return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === u.style.backgroundClip, lt(function() {
            var i, s, n, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                r = Q.getElementsByTagName("body")[0];
            r && (i = Q.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", r.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = u.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e.reliableHiddenOffsets = h && 0 === n[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === u.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(u, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(u, null) || {
                width: "4px"
            }).width, s = u.appendChild(Q.createElement("div")), s.style.cssText = u.style.cssText = o, s.style.marginRight = s.style.width = "0", u.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), typeof u.style.zoom !== K && (u.innerHTML = "", u.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== u.offsetWidth, e.inlineBlockNeedsLayout && (r.style.zoom = 1)), r.removeChild(i), i = u = n = s = null)
        }), i = o = r = a = s = n = null, e
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Dt = /([A-Z])/g;
    lt.extend({
        cache: {},
        expando: "jQuery" + (tt + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando], !!t && !a(t)
        },
        data: function(t, e, i) {
            return n(t, e, i)
        },
        removeData: function(t, e) {
            return o(t, e)
        },
        _data: function(t, e, i) {
            return n(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return o(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && lt.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), lt.fn.extend({
        data: function(t, i) {
            var s, n, o = this[0],
                a = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = lt.data(o), 1 === o.nodeType && !lt._data(o, "parsedAttrs"))) {
                    for (s = o.attributes; s.length > a; a++) n = s[a].name, n.indexOf("data-") || (n = lt.camelCase(n.slice(5)), r(o, n, l[n]));
                    lt._data(o, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function() {
                lt.data(this, t)
            }) : lt.access(this, function(i) {
                return i === e ? o ? r(o, t, lt.data(o, t)) : null : (this.each(function() {
                    lt.data(this, t, i)
                }), e)
            }, null, i, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                lt.removeData(this, t)
            })
        }
    }), lt.extend({
        queue: function(t, i, s) {
            var n;
            return t ? (i = (i || "fx") + "queue", n = lt._data(t, i), s && (!n || lt.isArray(s) ? n = lt._data(t, i, lt.makeArray(s)) : n.push(s)), n || []) : e
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = lt.queue(t, e),
                s = i.length,
                n = i.shift(),
                o = lt._queueHooks(t, e),
                r = function() {
                    lt.dequeue(t, e)
                };
            "inprogress" === n && (n = i.shift(), s--), o.cur = n, n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, r, o)), !s && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return lt._data(t, i) || lt._data(t, i, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(t, e + "queue"), lt._removeData(t, i)
                })
            })
        }
    }), lt.fn.extend({
        queue: function(t, i) {
            var s = 2;
            return "string" != typeof t && (i = t, t = "fx", s--), s > arguments.length ? lt.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = lt.queue(this, t, i);
                lt._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && lt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                lt.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var s = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(s)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var s, n = 1,
                o = lt.Deferred(),
                r = this,
                a = this.length,
                l = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) s = lt._data(r[a], t + "queueHooks"), s && s.empty && (n++, s.empty.add(l));
            return l(), o.promise(i)
        }
    });
    var Tt, Mt, It = /[\t\r\n]/g,
        St = /\r/g,
        At = /^(?:input|select|textarea|button|object)$/i,
        Et = /^(?:a|area)$/i,
        Pt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        jt = /^(?:checked|selected)$/i,
        Nt = lt.support.getSetAttribute,
        Ht = lt.support.input;
    lt.fn.extend({
        attr: function(t, e) {
            return lt.access(this, lt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                lt.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return lt.access(this, lt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = lt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (i) {}
            })
        },
        addClass: function(t) {
            var e, i, s, n, o, r = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ct) || []; a > r; r++)
                    if (i = this[r], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(It, " ") : " ")) {
                        for (o = 0; n = e[o++];) 0 > s.indexOf(" " + n + " ") && (s += n + " ");
                        i.className = lt.trim(s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, s, n, o, r = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ct) || []; a > r; r++)
                    if (i = this[r], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(It, " ") : "")) {
                        for (o = 0; n = e[o++];)
                            for (; s.indexOf(" " + n + " ") >= 0;) s = s.replace(" " + n + " ", " ");
                        i.className = t ? lt.trim(s) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                s = "boolean" == typeof e;
            return lt.isFunction(t) ? this.each(function(i) {
                lt(this).toggleClass(t.call(this, i, this.className, e), e)
            }) : this.each(function() {
                if ("string" === i)
                    for (var n, o = 0, r = lt(this), a = e, l = t.match(ct) || []; n = l[o++];) a = s ? a : !r.hasClass(n), r[a ? "addClass" : "removeClass"](n);
                else(i === K || "boolean" === i) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, s = this.length; s > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(It, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, s, n, o = this[0];
            return arguments.length ? (n = lt.isFunction(t), this.each(function(i) {
                var o, r = lt(this);
                1 === this.nodeType && (o = n ? t.call(this, i, r.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), s = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], s && "set" in s && s.set(this, o, "value") !== e || (this.value = o))
            })) : o ? (s = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()], s && "get" in s && (i = s.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(St, "") : null == i ? "" : i)) : void 0
        }
    }), lt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, s = t.options, n = t.selectedIndex, o = "select-one" === t.type || 0 > n, r = o ? null : [], a = o ? n + 1 : s.length, l = 0 > n ? a : o ? n : 0; a > l; l++)
                        if (i = s[l], !(!i.selected && l !== n || (lt.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && lt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = lt(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    var i = lt.makeArray(e);
                    return lt(t).find("option").each(function() {
                        this.selected = lt.inArray(lt(this).val(), i) >= 0
                    }), i.length || (t.selectedIndex = -1), i
                }
            }
        },
        attr: function(t, i, s) {
            var n, o, r, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? typeof t.getAttribute === K ? lt.prop(t, i, s) : (o = 1 !== a || !lt.isXMLDoc(t), o && (i = i.toLowerCase(), n = lt.attrHooks[i] || (Pt.test(i) ? Mt : Tt)), s === e ? n && o && "get" in n && null !== (r = n.get(t, i)) ? r : (typeof t.getAttribute !== K && (r = t.getAttribute(i)), null == r ? e : r) : null !== s ? n && o && "set" in n && (r = n.set(t, s, i)) !== e ? r : (t.setAttribute(i, s + ""), s) : (lt.removeAttr(t, i), e)) : void 0
        },
        removeAttr: function(t, e) {
            var i, s, n = 0,
                o = e && e.match(ct);
            if (o && 1 === t.nodeType)
                for (; i = o[n++];) s = lt.propFix[i] || i, Pt.test(i) ? !Nt && jt.test(i) ? t[lt.camelCase("default-" + i)] = t[s] = !1 : t[s] = !1 : lt.attr(t, i, ""), t.removeAttribute(Nt ? i : s)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!lt.support.radioValue && "radio" === e && lt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, i, s) {
            var n, o, r, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (r = 1 !== a || !lt.isXMLDoc(t), r && (i = lt.propFix[i] || i, o = lt.propHooks[i]), s !== e ? o && "set" in o && (n = o.set(t, s, i)) !== e ? n : t[i] = s : o && "get" in o && null !== (n = o.get(t, i)) ? n : t[i]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var i = t.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : At.test(t.nodeName) || Et.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), Mt = {
        get: function(t, i) {
            var s = lt.prop(t, i),
                n = "boolean" == typeof s && t.getAttribute(i),
                o = "boolean" == typeof s ? Ht && Nt ? null != n : jt.test(i) ? t[lt.camelCase("default-" + i)] : !!n : t.getAttributeNode(i);
            return o && o.value !== !1 ? i.toLowerCase() : e;
        },
        set: function(t, e, i) {
            return e === !1 ? lt.removeAttr(t, i) : Ht && Nt || !jt.test(i) ? t.setAttribute(!Nt && lt.propFix[i] || i, i) : t[lt.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, Ht && Nt || (lt.attrHooks.value = {
        get: function(t, i) {
            var s = t.getAttributeNode(i);
            return lt.nodeName(t, "input") ? t.defaultValue : s && s.specified ? s.value : e
        },
        set: function(t, i, s) {
            return lt.nodeName(t, "input") ? (t.defaultValue = i, e) : Tt && Tt.set(t, i, s)
        }
    }), Nt || (Tt = lt.valHooks.button = {
        get: function(t, i) {
            var s = t.getAttributeNode(i);
            return s && ("id" === i || "name" === i || "coords" === i ? "" !== s.value : s.specified) ? s.value : e
        },
        set: function(t, i, s) {
            var n = t.getAttributeNode(s);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(s)), n.value = i += "", "value" === s || i === t.getAttribute(s) ? i : e
        }
    }, lt.attrHooks.contenteditable = {
        get: Tt.get,
        set: function(t, e, i) {
            Tt.set(t, "" === e ? !1 : e, i)
        }
    }, lt.each(["width", "height"], function(t, i) {
        lt.attrHooks[i] = lt.extend(lt.attrHooks[i], {
            set: function(t, s) {
                return "" === s ? (t.setAttribute(i, "auto"), s) : e
            }
        })
    })), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function(t, i) {
        lt.attrHooks[i] = lt.extend(lt.attrHooks[i], {
            get: function(t) {
                var s = t.getAttribute(i, 2);
                return null == s ? e : s
            }
        })
    }), lt.each(["href", "src"], function(t, e) {
        lt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    })), lt.support.style || (lt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function() {
        lt.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), lt.each(["radio", "checkbox"], function() {
        lt.valHooks[this] = lt.extend(lt.valHooks[this], {
            set: function(t, i) {
                return lt.isArray(i) ? t.checked = lt.inArray(lt(t).val(), i) >= 0 : e
            }
        })
    });
    var Ot = /^(?:input|select|textarea)$/i,
        Ft = /^key/,
        Wt = /^(?:mouse|contextmenu)|click/,
        qt = /^(?:focusinfocus|focusoutblur)$/,
        Lt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
            global: {},
            add: function(t, i, s, n, o) {
                var r, a, l, h, c, u, d, f, p, g, m, v = lt._data(t);
                if (v) {
                    for (s.handler && (h = s, s = h.handler, o = h.selector), s.guid || (s.guid = lt.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
                            return typeof lt === K || t && lt.event.triggered === t.type ? e : lt.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), i = (i || "").match(ct) || [""], l = i.length; l--;) r = Lt.exec(i[l]) || [], p = m = r[1], g = (r[2] || "").split(".").sort(), c = lt.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = lt.event.special[p] || {}, d = lt.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: s,
                        guid: s.guid,
                        selector: o,
                        needsContext: o && lt.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, h), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, c.setup && c.setup.call(t, n, g, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = s.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), lt.event.global[p] = !0;
                    t = null
                }
            },
            remove: function(t, e, i, s, n) {
                var o, r, a, l, h, c, u, d, f, p, g, m = lt.hasData(t) && lt._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(ct) || [""], h = e.length; h--;)
                        if (a = Lt.exec(e[h]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                            for (u = lt.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, d = c[f] || [], a = a[2] && RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !n && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || s && s !== r.selector && ("**" !== s || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                            l && !d.length && (u.teardown && u.teardown.call(t, p, m.handle) !== !1 || lt.removeEvent(t, f, m.handle), delete c[f])
                        } else
                            for (f in c) lt.event.remove(t, f + e[h], i, s, !0);
                    lt.isEmptyObject(c) && (delete m.handle, lt._removeData(t, "events"))
                }
            },
            trigger: function(i, s, n, o) {
                var r, a, l, h, c, u, d, f = [n || Q],
                    p = rt.call(i, "type") ? i.type : i,
                    g = rt.call(i, "namespace") ? i.namespace.split(".") : [];
                if (l = u = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !qt.test(p + lt.event.triggered) && (p.indexOf(".") >= 0 && (g = p.split("."), p = g.shift(), g.sort()), a = 0 > p.indexOf(":") && "on" + p, i = i[lt.expando] ? i : new lt.Event(p, "object" == typeof i && i), i.isTrigger = !0, i.namespace = g.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = n), s = null == s ? [i] : lt.makeArray(s, [i]), c = lt.event.special[p] || {}, o || !c.trigger || c.trigger.apply(n, s) !== !1)) {
                    if (!o && !c.noBubble && !lt.isWindow(n)) {
                        for (h = c.delegateType || p, qt.test(h + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l), u = l;
                        u === (n.ownerDocument || Q) && f.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0;
                        (l = f[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? h : c.bindType || p, r = (lt._data(l, "events") || {})[i.type] && lt._data(l, "handle"), r && r.apply(l, s), r = a && l[a], r && lt.acceptData(l) && r.apply && r.apply(l, s) === !1 && i.preventDefault();
                    if (i.type = p, !(o || i.isDefaultPrevented() || c._default && c._default.apply(n.ownerDocument, s) !== !1 || "click" === p && lt.nodeName(n, "a") || !lt.acceptData(n) || !a || !n[p] || lt.isWindow(n))) {
                        u = n[a], u && (n[a] = null), lt.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {}
                        lt.event.triggered = e, u && (n[a] = u)
                    }
                    return i.result
                }
            },
            dispatch: function(t) {
                t = lt.event.fix(t);
                var i, s, n, o, r, a = [],
                    l = st.call(arguments),
                    h = (lt._data(this, "events") || {})[t.type] || [],
                    c = lt.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = lt.event.handlers.call(this, t, h), i = 0;
                        (o = a[i++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, r = 0;
                            (n = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, s = ((lt.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, l), s !== e && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, i) {
                var s, n, o, r, a = [],
                    l = i.delegateCount,
                    h = t.target;
                if (l && h.nodeType && (!t.button || "click" !== t.type))
                    for (; h != this; h = h.parentNode || this)
                        if (1 === h.nodeType && (h.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], r = 0; l > r; r++) n = i[r], s = n.selector + " ", o[s] === e && (o[s] = n.needsContext ? lt(s, this).index(h) >= 0 : lt.find(s, this, null, [h]).length), o[s] && o.push(n);
                            o.length && a.push({
                                elem: h,
                                handlers: o
                            })
                        }
                return i.length > l && a.push({
                    elem: this,
                    handlers: i.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[lt.expando]) return t;
                var e, i, s, n = t.type,
                    o = t,
                    r = this.fixHooks[n];
                for (r || (this.fixHooks[n] = r = Wt.test(n) ? this.mouseHooks : Ft.test(n) ? this.keyHooks : {}), s = r.props ? this.props.concat(r.props) : this.props, t = new lt.Event(o), e = s.length; e--;) i = s[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, i) {
                    var s, n, o, r = i.button,
                        a = i.fromElement;
                    return null == t.pageX && null != i.clientX && (n = t.target.ownerDocument || Q, o = n.documentElement, s = n.body, t.pageX = i.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = i.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || r === e || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== Q.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === Q.activeElement && this.blur ? (this.blur(), !1) : e
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, s) {
                var n = lt.extend(new lt.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                s ? lt.event.trigger(n, null, e) : lt.event.dispatch.call(e, n), n.isDefaultPrevented() && i.preventDefault()
            }
        }, lt.removeEvent = Q.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var s = "on" + e;
            t.detachEvent && (typeof t[s] === K && (t[s] = null), t.detachEvent(s, i))
        }, lt.Event = function(t, i) {
            return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : h) : this.type = t, i && lt.extend(this, i), this.timeStamp = t && t.timeStamp || lt.now(), this[lt.expando] = !0, e) : new lt.Event(t, i)
        }, lt.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, lt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            lt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, s = this,
                        n = t.relatedTarget,
                        o = t.handleObj;
                    return (!n || n !== s && !lt.contains(s, n)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), lt.support.submitBubbles || (lt.event.special.submit = {
            setup: function() {
                return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function(t) {
                    var i = t.target,
                        s = lt.nodeName(i, "input") || lt.nodeName(i, "button") ? i.form : e;
                    s && !lt._data(s, "submitBubbles") && (lt.event.add(s, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), lt._data(s, "submitBubbles", !0))
                }), e)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), e)
            }
        }), lt.support.changeBubbles || (lt.event.special.change = {
            setup: function() {
                return Ot.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), lt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
                })), !1) : (lt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Ot.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
                    }), lt._data(e, "changeBubbles", !0))
                }), e)
            },
            handle: function(t) {
                var i = t.target;
                return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : e
            },
            teardown: function() {
                return lt.event.remove(this, "._change"), !Ot.test(this.nodeName)
            }
        }), lt.support.focusinBubbles || lt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = 0,
                s = function(t) {
                    lt.event.simulate(e, t.target, lt.event.fix(t), !0)
                };
            lt.event.special[e] = {
                setup: function() {
                    0 === i++ && Q.addEventListener(t, s, !0)
                },
                teardown: function() {
                    0 === --i && Q.removeEventListener(t, s, !0)
                }
            }
        }), lt.fn.extend({
            on: function(t, i, s, n, o) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof i && (s = s || i, i = e);
                    for (r in t) this.on(r, i, s, t[r], o);
                    return this
                }
                if (null == s && null == n ? (n = i, s = i = e) : null == n && ("string" == typeof i ? (n = s, s = e) : (n = s, s = i, i = e)), n === !1) n = h;
                else if (!n) return this;
                return 1 === o && (a = n, n = function(t) {
                    return lt().off(t), a.apply(this, arguments)
                }, n.guid = a.guid || (a.guid = lt.guid++)), this.each(function() {
                    lt.event.add(this, t, n, s, i)
                })
            },
            one: function(t, e, i, s) {
                return this.on(t, e, i, s, 1)
            },
            off: function(t, i, s) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, lt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, i, t[o]);
                    return this
                }
                return (i === !1 || "function" == typeof i) && (s = i, i = e), s === !1 && (s = h), this.each(function() {
                    lt.event.remove(this, t, s, i)
                })
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, s) {
                return this.on(e, t, i, s)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    lt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, i) {
                var s = this[0];
                return s ? lt.event.trigger(t, i, s, !0) : e
            }
        }),
        function(t, e) {
            function i(t) {
                return pt.test(t + "")
            }

            function s() {
                var t, e = [];
                return t = function(i, s) {
                    return e.push(i += " ") > C.cacheLength && delete t[e.shift()], t[i] = s
                }
            }

            function n(t) {
                return t[q] = !0, t
            }

            function o(t) {
                var e = E.createElement("div");
                try {
                    return t(e)
                } catch (i) {
                    return !1
                } finally {
                    e = null
                }
            }

            function r(t, e, i, s) {
                var n, o, r, a, l, h, c, f, p, g;
                if ((e ? e.ownerDocument || e : L) !== E && A(e), e = e || E, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (!j && !s) {
                    if (n = gt.exec(t))
                        if (r = n[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(r), !o || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && F(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (n[2]) return V.apply(i, J.call(e.getElementsByTagName(t), 0)), i;
                            if ((r = n[3]) && z.getByClassName && e.getElementsByClassName) return V.apply(i, J.call(e.getElementsByClassName(r), 0)), i
                        }
                    if (z.qsa && !N.test(t)) {
                        if (c = !0, f = q, p = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = u(t), (c = e.getAttribute("id")) ? f = c.replace(_t, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = h.length; l--;) h[l] = f + d(h[l]);
                            p = ft.test(t) && e.parentNode || e, g = h.join(",")
                        }
                        if (g) try {
                            return V.apply(i, J.call(p.querySelectorAll(g), 0)), i
                        } catch (m) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return y(t.replace(rt, "$1"), e, i, s)
            }

            function a(t, e) {
                var i = e && t,
                    s = i && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (s) return s;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function h(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, s) {
                        for (var n, o = t([], i.length, e), r = o.length; r--;) i[n = o[r]] && (i[n] = !(s[n] = i[n]))
                    })
                })
            }

            function u(t, e) {
                var i, s, n, o, a, l, h, c = Y[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], h = C.preFilter; a;) {
                    (!i || (s = at.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(n = [])), i = !1, (s = ht.exec(a)) && (i = s.shift(), n.push({
                        value: i,
                        type: s[0].replace(rt, " ")
                    }), a = a.slice(i.length));
                    for (o in C.filter) !(s = dt[o].exec(a)) || h[o] && !(s = h[o](s)) || (i = s.shift(), n.push({
                        value: i,
                        type: o,
                        matches: s
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? r.error(t) : Y(t, l).slice(0)
            }

            function d(t) {
                for (var e = 0, i = t.length, s = ""; i > e; e++) s += t[e].value;
                return s
            }

            function f(t, e, i) {
                var s = e.dir,
                    n = i && "parentNode" === s,
                    o = B++;
                return e.first ? function(e, i, o) {
                    for (; e = e[s];)
                        if (1 === e.nodeType || n) return t(e, i, o)
                } : function(e, i, r) {
                    var a, l, h, c = $ + " " + o;
                    if (r) {
                        for (; e = e[s];)
                            if ((1 === e.nodeType || n) && t(e, i, r)) return !0
                    } else
                        for (; e = e[s];)
                            if (1 === e.nodeType || n)
                                if (h = e[q] || (e[q] = {}), (l = h[s]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === k) return a === !0
                                } else if (l = h[s] = [c], l[1] = t(e, i, r) || k, l[1] === !0) return !0
                }
            }

            function p(t) {
                return t.length > 1 ? function(e, i, s) {
                    for (var n = t.length; n--;)
                        if (!t[n](e, i, s)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, e, i, s, n) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, s, n)) && (r.push(o), h && e.push(a));
                return r
            }

            function m(t, e, i, s, o, r) {
                return s && !s[q] && (s = m(s)), o && !o[q] && (o = m(o, r)), n(function(n, r, a, l) {
                    var h, c, u, d = [],
                        f = [],
                        p = r.length,
                        m = n || b(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !n && e ? m : g(m, d, t, a, l),
                        _ = i ? o || (n ? t : p || s) ? [] : r : v;
                    if (i && i(v, _, a, l), s)
                        for (h = g(_, f), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (_[f[c]] = !(v[f[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = _.length; c--;)(u = _[c]) && h.push(v[c] = u);
                                o(null, _ = [], h, l)
                            }
                            for (c = _.length; c--;)(u = _[c]) && (h = o ? Z.call(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u))
                        }
                    } else _ = g(_ === r ? _.splice(p, _.length) : _), o ? o(null, r, _, l) : V.apply(r, _)
                })
            }

            function v(t) {
                for (var e, i, s, n = t.length, o = C.relative[t[0].type], r = o || C.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, r, !0), h = f(function(t) {
                        return Z.call(e, t) > -1
                    }, r, !0), c = [function(t, i, s) {
                        return !o && (s || i !== S) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s))
                    }]; n > a; a++)
                    if (i = C.relative[t[a].type]) c = [f(p(c), i)];
                    else {
                        if (i = C.filter[t[a].type].apply(null, t[a].matches), i[q]) {
                            for (s = ++a; n > s && !C.relative[t[s].type]; s++);
                            return m(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1)).replace(rt, "$1"), i, s > a && v(t.slice(a, s)), n > s && v(t = t.slice(s)), n > s && d(t))
                        }
                        c.push(i)
                    }
                return p(c)
            }

            function _(t, e) {
                var i = 0,
                    s = e.length > 0,
                    o = t.length > 0,
                    a = function(n, a, l, h, c) {
                        var u, d, f, p = [],
                            m = 0,
                            v = "0",
                            _ = n && [],
                            b = null != c,
                            y = S,
                            w = n || o && C.find.TAG("*", c && a.parentNode || a),
                            x = $ += null == y ? 1 : Math.random() || .1;
                        for (b && (S = a !== E && a, k = i); null != (u = w[v]); v++) {
                            if (o && u) {
                                for (d = 0; f = t[d++];)
                                    if (f(u, a, l)) {
                                        h.push(u);
                                        break
                                    }
                                b && ($ = x, k = ++i)
                            }
                            s && ((u = !f && u) && m--, n && _.push(u))
                        }
                        if (m += v, s && v !== m) {
                            for (d = 0; f = e[d++];) f(_, p, a, l);
                            if (n) {
                                if (m > 0)
                                    for (; v--;) _[v] || p[v] || (p[v] = G.call(h));
                                p = g(p)
                            }
                            V.apply(h, p), b && !n && p.length > 0 && m + e.length > 1 && r.uniqueSort(h)
                        }
                        return b && ($ = x, S = y), _
                    };
                return s ? n(a) : a
            }

            function b(t, e, i) {
                for (var s = 0, n = e.length; n > s; s++) r(t, e[s], i);
                return i
            }

            function y(t, e, i, s) {
                var n, o, r, a, l, h = u(t);
                if (!s && 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && 9 === e.nodeType && !j && C.relative[o[1].type]) {
                        if (e = C.find.ID(r.matches[0].replace(yt, wt), e)[0], !e) return i;
                        t = t.slice(o.shift().value.length)
                    }
                    for (n = dt.needsContext.test(t) ? 0 : o.length; n-- && (r = o[n], !C.relative[a = r.type]);)
                        if ((l = C.find[a]) && (s = l(r.matches[0].replace(yt, wt), ft.test(o[0].type) && e.parentNode || e))) {
                            if (o.splice(n, 1), t = s.length && d(o), !t) return V.apply(i, J.call(s, 0)), i;
                            break
                        }
                }
                return M(t, h)(s, e, j, i, ft.test(t)), i
            }

            function w() {}
            var x, k, C, D, T, M, I, S, A, E, P, j, N, H, O, F, W, q = "sizzle" + -new Date,
                L = t.document,
                z = {},
                $ = 0,
                B = 0,
                R = s(),
                Y = s(),
                U = s(),
                K = typeof e,
                Q = 1 << 31,
                X = [],
                G = X.pop,
                V = X.push,
                J = X.slice,
                Z = X.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = et.replace("w", "w#"),
                st = "([*^$|!~]?=)",
                nt = "\\[" + tt + "*(" + et + ")" + tt + "*(?:" + st + tt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + tt + "*\\]",
                ot = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + nt.replace(3, 8) + ")*)|.*)\\)|)",
                rt = RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                at = RegExp("^" + tt + "*," + tt + "*"),
                ht = RegExp("^" + tt + "*([\\x20\\t\\r\\n\\f>+~])" + tt + "*"),
                ct = RegExp(ot),
                ut = RegExp("^" + it + "$"),
                dt = {
                    ID: RegExp("^#(" + et + ")"),
                    CLASS: RegExp("^\\.(" + et + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + et + ")['\"]?\\]"),
                    TAG: RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + nt),
                    PSEUDO: RegExp("^" + ot),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    needsContext: RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ft = /[\x20\t\r\n\f]*[+~]/,
                pt = /^[^{]+\{\s*\[native code/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                _t = /'|\\/g,
                bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                yt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                wt = function(t, e) {
                    var i = "0x" + e - 65536;
                    return i !== i ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                J.call(L.documentElement.childNodes, 0)[0].nodeType
            } catch (xt) {
                J = function(t) {
                    for (var e, i = []; e = this[t++];) i.push(e);
                    return i
                }
            }
            T = r.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, A = r.setDocument = function(t) {
                var s = t ? t.ownerDocument || t : L;
                return s !== E && 9 === s.nodeType && s.documentElement ? (E = s, P = s.documentElement, j = T(s), z.tagNameNoComments = o(function(t) {
                    return t.appendChild(s.createComment("")), !t.getElementsByTagName("*").length
                }), z.attributes = o(function(t) {
                    t.innerHTML = "<select></select>";
                    var e = typeof t.lastChild.getAttribute("multiple");
                    return "boolean" !== e && "string" !== e
                }), z.getByClassName = o(function(t) {
                    return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
                }), z.getByName = o(function(t) {
                    t.id = q + 0, t.innerHTML = "<a name='" + q + "'></a><div name='" + q + "'></div>", P.insertBefore(t, P.firstChild);
                    var e = s.getElementsByName && s.getElementsByName(q).length === 2 + s.getElementsByName(q + 0).length;
                    return z.getIdNotName = !s.getElementById(q), P.removeChild(t), e
                }), C.attrHandle = o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== K && "#" === t.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(t) {
                        return t.getAttribute("href", 2)
                    },
                    type: function(t) {
                        return t.getAttribute("type")
                    }
                }, z.getIdNotName ? (C.find.ID = function(t, e) {
                    if (typeof e.getElementById !== K && !j) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, C.filter.ID = function(t) {
                    var e = t.replace(yt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (C.find.ID = function(t, i) {
                    if (typeof i.getElementById !== K && !j) {
                        var s = i.getElementById(t);
                        return s ? s.id === t || typeof s.getAttributeNode !== K && s.getAttributeNode("id").value === t ? [s] : e : []
                    }
                }, C.filter.ID = function(t) {
                    var e = t.replace(yt, wt);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), C.find.TAG = z.tagNameNoComments ? function(t, i) {
                    return typeof i.getElementsByTagName !== K ? i.getElementsByTagName(t) : e
                } : function(t, e) {
                    var i, s = [],
                        n = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                        return s
                    }
                    return o
                }, C.find.NAME = z.getByName && function(t, i) {
                    return typeof i.getElementsByName !== K ? i.getElementsByName(name) : e
                }, C.find.CLASS = z.getByClassName && function(t, i) {
                    return typeof i.getElementsByClassName === K || j ? e : i.getElementsByClassName(t)
                }, H = [], N = [":focus"], (z.qsa = i(s.querySelectorAll)) && (o(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || N.push(":checked")
                }), o(function(t) {
                    t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && N.push("[*^$]=" + tt + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (z.matchesSelector = i(O = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                    z.disconnectedMatch = O.call(t, "div"), O.call(t, "[s!='']:x"), H.push("!=", ot)
                }), N = RegExp(N.join("|")), H = RegExp(H.join("|")), F = i(P.contains) || P.compareDocumentPosition ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        s = e && e.parentNode;
                    return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, W = P.compareDocumentPosition ? function(t, e) {
                    var i;
                    return t === e ? (I = !0, 0) : (i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & i || t.parentNode && 11 === t.parentNode.nodeType ? t === s || F(L, t) ? -1 : e === s || F(L, e) ? 1 : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var i, n = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        l = [t],
                        h = [e];
                    if (t === e) return I = !0, 0;
                    if (!o || !r) return t === s ? -1 : e === s ? 1 : o ? -1 : r ? 1 : 0;
                    if (o === r) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[n] === h[n];) n++;
                    return n ? a(l[n], h[n]) : l[n] === L ? -1 : h[n] === L ? 1 : 0
                }, I = !1, [0, 0].sort(W), z.detectDuplicates = I, E) : E
            }, r.matches = function(t, e) {
                return r(t, null, null, e)
            }, r.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== E && A(t), e = e.replace(bt, "='$1']"), !(!z.matchesSelector || j || H && H.test(e) || N.test(e))) try {
                    var i = O.call(t, e);
                    if (i || z.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (s) {}
                return r(e, E, null, [t]).length > 0
            }, r.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && A(t), F(t, e)
            }, r.attr = function(t, e) {
                var i;
                return (t.ownerDocument || t) !== E && A(t), j || (e = e.toLowerCase()), (i = C.attrHandle[e]) ? i(t) : j || z.attributes ? t.getAttribute(e) : ((i = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e : i && i.specified ? i.value : null
            }, r.error = function(t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, r.uniqueSort = function(t) {
                var e, i = [],
                    s = 1,
                    n = 0;
                if (I = !z.detectDuplicates, t.sort(W), I) {
                    for (; e = t[s]; s++) e === t[s - 1] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return t
            }, D = r.getText = function(t) {
                var e, i = "",
                    s = 0,
                    n = t.nodeType;
                if (n) {
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += D(t)
                    } else if (3 === n || 4 === n) return t.nodeValue
                } else
                    for (; e = t[s]; s++) i += D(e);
                return i
            }, C = r.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(yt, wt), t[3] = (t[4] || t[5] || "").replace(yt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || r.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && r.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[5] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : i && ct.test(i) && (e = u(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        return "*" === t ? function() {
                            return !0
                        } : (t = t.replace(yt, wt).toLowerCase(), function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        })
                    },
                    CLASS: function(t) {
                        var e = R[t + " "];
                        return e || (e = RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function(t) {
                            return e.test(t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(s) {
                            var n = r.attr(s, t);
                            return null == n ? "!=" === e : e ? (n += "", "=" === e ? n === i : "!=" === e ? n !== i : "^=" === e ? i && 0 === n.indexOf(i) : "*=" === e ? i && n.indexOf(i) > -1 : "$=" === e ? i && n.slice(-i.length) === i : "~=" === e ? (" " + n + " ").indexOf(i) > -1 : "|=" === e ? n === i || n.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, s, n) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === s && 0 === n ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, d, f, p, g = o !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                _ = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [r ? m.firstChild : m.lastChild], r && _) {
                                    for (c = m[q] || (m[q] = {}), h = c[t] || [], f = h[0] === $ && h[1], d = h[0] === $ && h[2], u = f && m.childNodes[f]; u = ++f && u && u[g] || (d = f = 0) || p.pop();)
                                        if (1 === u.nodeType && ++d && u === e) {
                                            c[t] = [$, f, d];
                                            break
                                        }
                                } else if (_ && (h = (e[q] || (e[q] = {}))[t]) && h[0] === $) d = h[1];
                                else
                                    for (;
                                        (u = ++f && u && u[g] || (d = f = 0) || p.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[q] || (u[q] = {}))[t] = [$, d]), u !== e)););
                                return d -= n, d === s || 0 === d % s && d / s >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || r.error("unsupported pseudo: " + t);
                        return s[q] ? s(e) : s.length > 1 ? (i = [t, t, "", e], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, i) {
                            for (var n, o = s(t, e), r = o.length; r--;) n = Z.call(t, o[r]), t[n] = !(i[n] = o[r])
                        }) : function(t) {
                            return s(t, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = M(t.replace(rt, "$1"));
                        return s[q] ? n(function(t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(e) {
                            return r(t, e).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || D(e)).indexOf(t) > -1
                        }
                    }),
                    lang: n(function(t) {
                        return ut.test(t || "") || r.error("unsupported lang: " + t), t = t.replace(yt, wt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = j ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === P
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var s = 0 > i ? i + e : i; --s >= 0;) t.push(s);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var s = 0 > i ? i + e : i; e > ++s;) t.push(s);
                        return t
                    })
                }
            };
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[x] = l(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[x] = h(x);
            M = r.compile = function(t, e) {
                var i, s = [],
                    n = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = u(t)), i = e.length; i--;) o = v(e[i]), o[q] ? s.push(o) : n.push(o);
                    o = U(t, _(n, s))
                }
                return o
            }, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, A(), r.attr = lt.attr, lt.find = r, lt.expr = r.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = r.uniqueSort, lt.text = r.getText, lt.isXMLDoc = r.isXML, lt.contains = r.contains
        }(t);
    var zt = /Until$/,
        $t = /^(?:parents|prev(?:Until|All))/,
        Bt = /^.[^:#\[\.,]*$/,
        Rt = lt.expr.match.needsContext,
        Yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    lt.fn.extend({
        find: function(t) {
            var e, i, s, n = this.length;
            if ("string" != typeof t) return s = this, this.pushStack(lt(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (lt.contains(s[e], this)) return !0
            }));
            for (i = [], e = 0; n > e; e++) lt.find(t, this[e], i);
            return i = this.pushStack(n > 1 ? lt.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + t, i
        },
        has: function(t) {
            var e, i = lt(t, this),
                s = i.length;
            return this.filter(function() {
                for (e = 0; s > e; e++)
                    if (lt.contains(this, i[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(u(this, t, !1))
        },
        filter: function(t) {
            return this.pushStack(u(this, t, !0))
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? Rt.test(t) ? lt(t, this.context).index(this[0]) >= 0 : lt.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function(t, e) {
            for (var i, s = 0, n = this.length, o = [], r = Rt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; n > s; s++)
                for (i = this[s]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
                    if (r ? r.index(i) > -1 : lt.find.matchesSelector(i, t)) {
                        o.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return this.pushStack(o.length > 1 ? lt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? lt(t, e) : lt.makeArray(t && t.nodeType ? [t] : t),
                s = lt.merge(this.get(), i);
            return this.pushStack(lt.unique(s))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), lt.fn.andSelf = lt.fn.addBack, lt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return lt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return lt.dir(t, "parentNode", i)
        },
        next: function(t) {
            return c(t, "nextSibling")
        },
        prev: function(t) {
            return c(t, "previousSibling")
        },
        nextAll: function(t) {
            return lt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return lt.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return lt.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return lt.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return lt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return lt.sibling(t.firstChild)
        },
        contents: function(t) {
            return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
        }
    }, function(t, e) {
        lt.fn[t] = function(i, s) {
            var n = lt.map(this, e, i);
            return zt.test(t) || (s = i), s && "string" == typeof s && (n = lt.filter(s, n)), n = this.length > 1 && !Yt[t] ? lt.unique(n) : n, this.length > 1 && $t.test(t) && (n = n.reverse()), this.pushStack(n)
        }
    }), lt.extend({
        filter: function(t, e, i) {
            return i && (t = ":not(" + t + ")"), 1 === e.length ? lt.find.matchesSelector(e[0], t) ? [e[0]] : [] : lt.find.matches(t, e)
        },
        dir: function(t, i, s) {
            for (var n = [], o = t[i]; o && 9 !== o.nodeType && (s === e || 1 !== o.nodeType || !lt(o).is(s));) 1 === o.nodeType && n.push(o), o = o[i];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Kt = / jQuery\d+="(?:null|\d+)"/g,
        Qt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Xt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Vt = /<([\w:]+)/,
        Jt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        te = /<(?:script|style|link)/i,
        ee = /^(?:checkbox|radio)$/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^$|\/(?:java|ecma)script/i,
        ne = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ae = d(Q),
        le = ae.appendChild(Q.createElement("div"));
    re.optgroup = re.option, re.tbody = re.tfoot = re.colgroup = re.caption = re.thead, re.th = re.td, lt.fn.extend({
        text: function(t) {
            return lt.access(this, function(t) {
                return t === e ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(t) {
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return lt.isFunction(t) ? this.each(function(e) {
                lt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = lt(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = lt.isFunction(t);
            return this.each(function(i) {
                lt(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, s = 0; null != (i = this[s]); s++)(!t || lt.filter(t, [i]).length > 0) && (e || 1 !== i.nodeType || lt.cleanData(b(i)), i.parentNode && (e && lt.contains(i.ownerDocument, i) && m(b(i, "script")), i.parentNode.removeChild(i)));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && lt.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && lt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return lt.clone(this, t, e)
            })
        },
        html: function(t) {
            return lt.access(this, function(t) {
                var i = this[0] || {},
                    s = 0,
                    n = this.length;
                if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Kt, "") : e;
                if (!("string" != typeof t || te.test(t) || !lt.support.htmlSerialize && Qt.test(t) || !lt.support.leadingWhitespace && Xt.test(t) || re[(Vt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Gt, "<$1></$2>");
                    try {
                        for (; n > s; s++) i = this[s] || {}, 1 === i.nodeType && (lt.cleanData(b(i, !1)), i.innerHTML = t);
                        i = 0
                    } catch (o) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            var e = lt.isFunction(t);
            return e || "string" == typeof t || (t = lt(t).not(this).detach()), this.domManip([t], !0, function(t) {
                var e = this.nextSibling,
                    i = this.parentNode;
                i && (lt(this).remove(), i.insertBefore(t, e))
            })
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, i, s) {
            t = et.apply([], t);
            var n, o, r, a, l, h, c = 0,
                u = this.length,
                d = this,
                m = u - 1,
                v = t[0],
                _ = lt.isFunction(v);
            if (_ || !(1 >= u || "string" != typeof v || lt.support.checkClone) && ie.test(v)) return this.each(function(n) {
                var o = d.eq(n);
                _ && (t[0] = v.call(this, n, i ? o.html() : e)), o.domManip(t, i, s)
            });
            if (u && (h = lt.buildFragment(t, this[0].ownerDocument, !1, this), n = h.firstChild, 1 === h.childNodes.length && (h = n), n)) {
                for (i = i && lt.nodeName(n, "tr"), a = lt.map(b(h, "script"), p), r = a.length; u > c; c++) o = h, c !== m && (o = lt.clone(o, !0, !0), r && lt.merge(a, b(o, "script"))), s.call(i && lt.nodeName(this[c], "table") ? f(this[c], "tbody") : this[c], o, c);
                if (r)
                    for (l = a[a.length - 1].ownerDocument, lt.map(a, g), c = 0; r > c; c++) o = a[c], se.test(o.type || "") && !lt._data(o, "globalEval") && lt.contains(l, o) && (o.src ? lt.ajax({
                        url: o.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : lt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
                h = n = null
            }
            return this
        }
    }), lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        lt.fn[t] = function(t) {
            for (var i, s = 0, n = [], o = lt(t), r = o.length - 1; r >= s; s++) i = s === r ? this : this.clone(!0), lt(o[s])[e](i), it.apply(n, i.get());
            return this.pushStack(n)
        }
    }), lt.extend({
        clone: function(t, e, i) {
            var s, n, o, r, a, l = lt.contains(t.ownerDocument, t);
            if (lt.support.html5Clone || lt.isXMLDoc(t) || !Qt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(o = le.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t)))
                for (s = b(o), a = b(t), r = 0; null != (n = a[r]); ++r) s[r] && _(n, s[r]);
            if (e)
                if (i)
                    for (a = a || b(t), s = s || b(o), r = 0; null != (n = a[r]); r++) v(n, s[r]);
                else v(t, o);
            return s = b(o, "script"), s.length > 0 && m(s, !l && b(t, "script")), s = a = n = null, o
        },
        buildFragment: function(t, e, i, s) {
            for (var n, o, r, a, l, h, c, u = t.length, f = d(e), p = [], g = 0; u > g; g++)
                if (o = t[g], o || 0 === o)
                    if ("object" === lt.type(o)) lt.merge(p, o.nodeType ? [o] : o);
                    else if (Zt.test(o)) {
                for (a = a || f.appendChild(e.createElement("div")), l = (Vt.exec(o) || ["", ""])[1].toLowerCase(), c = re[l] || re._default, a.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], n = c[0]; n--;) a = a.lastChild;
                if (!lt.support.leadingWhitespace && Xt.test(o) && p.push(e.createTextNode(Xt.exec(o)[0])), !lt.support.tbody)
                    for (o = "table" !== l || Jt.test(o) ? "<table>" !== c[1] || Jt.test(o) ? 0 : a : a.firstChild, n = o && o.childNodes.length; n--;) lt.nodeName(h = o.childNodes[n], "tbody") && !h.childNodes.length && o.removeChild(h);
                for (lt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else p.push(e.createTextNode(o));
            for (a && f.removeChild(a), lt.support.appendChecked || lt.grep(b(p, "input"), y), g = 0; o = p[g++];)
                if ((!s || -1 === lt.inArray(o, s)) && (r = lt.contains(o.ownerDocument, o), a = b(f.appendChild(o), "script"), r && m(a), i))
                    for (n = 0; o = a[n++];) se.test(o.type || "") && i.push(o);
            return a = null, f
        },
        cleanData: function(t, e) {
            for (var i, s, n, o, r = 0, a = lt.expando, l = lt.cache, h = lt.support.deleteExpando, c = lt.event.special; null != (i = t[r]); r++)
                if ((e || lt.acceptData(i)) && (n = i[a], o = n && l[n])) {
                    if (o.events)
                        for (s in o.events) c[s] ? lt.event.remove(i, s) : lt.removeEvent(i, s, o.handle);
                    l[n] && (delete l[n], h ? delete i[a] : typeof i.removeAttribute !== K ? i.removeAttribute(a) : i[a] = null, Z.push(n))
                }
        }
    });
    var he, ce, ue, de = /alpha\([^)]*\)/i,
        fe = /opacity\s*=\s*([^)]*)/,
        pe = /^(top|right|bottom|left)$/,
        ge = /^(none|table(?!-c[ea]).+)/,
        me = /^margin/,
        ve = RegExp("^(" + ht + ")(.*)$", "i"),
        _e = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
        be = RegExp("^([+-])=(" + ht + ")", "i"),
        ye = {
            BODY: "block"
        },
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xe = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ke = ["Top", "Right", "Bottom", "Left"],
        Ce = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(t, i) {
            return lt.access(this, function(t, i, s) {
                var n, o, r = {},
                    a = 0;
                if (lt.isArray(i)) {
                    for (o = ce(t), n = i.length; n > a; a++) r[i[a]] = lt.css(t, i[a], !1, o);
                    return r
                }
                return s !== e ? lt.style(t, i, s) : lt.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : x(this)) ? lt(this).show(): lt(this).hide()
            })
        }
    }), lt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = ue(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, i, s, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, a, l = lt.camelCase(i),
                    h = t.style;
                if (i = lt.cssProps[l] || (lt.cssProps[l] = w(h, l)), a = lt.cssHooks[i] || lt.cssHooks[l], s === e) return a && "get" in a && (o = a.get(t, !1, n)) !== e ? o : h[i];
                if (r = typeof s, "string" === r && (o = be.exec(s)) && (s = (o[1] + 1) * o[2] + parseFloat(lt.css(t, i)), r = "number"), !(null == s || "number" === r && isNaN(s) || ("number" !== r || lt.cssNumber[l] || (s += "px"), lt.support.clearCloneStyle || "" !== s || 0 !== i.indexOf("background") || (h[i] = "inherit"), a && "set" in a && (s = a.set(t, s, n)) === e))) try {
                    h[i] = s
                } catch (c) {}
            }
        },
        css: function(t, i, s, n) {
            var o, r, a, l = lt.camelCase(i);
            return i = lt.cssProps[l] || (lt.cssProps[l] = w(t.style, l)), a = lt.cssHooks[i] || lt.cssHooks[l], a && "get" in a && (r = a.get(t, !0, s)), r === e && (r = ue(t, i, n)), "normal" === r && i in xe && (r = xe[i]), "" === s || s ? (o = parseFloat(r), s === !0 || lt.isNumeric(o) ? o || 0 : r) : r
        },
        swap: function(t, e, i, s) {
            var n, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            n = i.apply(t, s || []);
            for (o in e) t.style[o] = r[o];
            return n
        }
    }), t.getComputedStyle ? (ce = function(e) {
        return t.getComputedStyle(e, null)
    }, ue = function(t, i, s) {
        var n, o, r, a = s || ce(t),
            l = a ? a.getPropertyValue(i) || a[i] : e,
            h = t.style;
        return a && ("" !== l || lt.contains(t.ownerDocument, t) || (l = lt.style(t, i)), _e.test(l) && me.test(i) && (n = h.width, o = h.minWidth, r = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = a.width, h.width = n, h.minWidth = o, h.maxWidth = r)), l
    }) : Q.documentElement.currentStyle && (ce = function(t) {
        return t.currentStyle
    }, ue = function(t, i, s) {
        var n, o, r, a = s || ce(t),
            l = a ? a[i] : e,
            h = t.style;
        return null == l && h && h[i] && (l = h[i]), _e.test(l) && !pe.test(i) && (n = h.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), h.left = "fontSize" === i ? "1em" : l, l = h.pixelLeft + "px", h.left = n, r && (o.left = r)), "" === l ? "auto" : l
    }), lt.each(["height", "width"], function(t, i) {
        lt.cssHooks[i] = {
            get: function(t, s, n) {
                return s ? 0 === t.offsetWidth && ge.test(lt.css(t, "display")) ? lt.swap(t, we, function() {
                    return T(t, i, n)
                }) : T(t, i, n) : e
            },
            set: function(t, e, s) {
                var n = s && ce(t);
                return C(t, e, s ? D(t, i, s, lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, n), n) : 0)
            }
        }
    }), lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(t, e) {
            return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                s = t.currentStyle,
                n = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = s && s.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(o.replace(de, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || s && !s.filter) || (i.filter = de.test(o) ? o.replace(de, n) : o + " " + n)
        }
    }), lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(t, i) {
                return i ? lt.swap(t, {
                    display: "inline-block"
                }, ue, [t, "marginRight"]) : e
            }
        }), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(t, i) {
            lt.cssHooks[i] = {
                get: function(t, s) {
                    return s ? (s = ue(t, i), _e.test(s) ? lt(t).position()[i] + "px" : s) : e
                }
            }
        })
    }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !lt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || lt.css(t, "display"))
    }, lt.expr.filters.visible = function(t) {
        return !lt.expr.filters.hidden(t)
    }), lt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        lt.cssHooks[t + e] = {
            expand: function(i) {
                for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[t + ke[s] + e] = o[s] || o[s - 2] || o[0];
                return n
            }
        }, me.test(t) || (lt.cssHooks[t + e].set = C)
    });
    var De = /%20/g,
        Te = /\[\]$/,
        Me = /\r?\n/g,
        Ie = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = lt.prop(this, "elements");
                return t ? lt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !lt(this).is(":disabled") && Se.test(this.nodeName) && !Ie.test(t) && (this.checked || !ee.test(t))
            }).map(function(t, e) {
                var i = lt(this).val();
                return null == i ? null : lt.isArray(i) ? lt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Me, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Me, "\r\n")
                }
            }).get()
        }
    }), lt.param = function(t, i) {
        var s, n = [],
            o = function(t, e) {
                e = lt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (i === e && (i = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (s in t) S(s, t[s], i, o);
        return n.join("&").replace(De, "+")
    }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        lt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), lt.fn.hover = function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var Ae, Ee, Pe = lt.now(),
        je = /\?/,
        Ne = /#.*$/,
        He = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        We = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        Le = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ze = lt.fn.load,
        $e = {},
        Be = {},
        Re = "*/".concat("*");
    try {
        Ee = X.href
    } catch (Ye) {
        Ee = Q.createElement("a"), Ee.href = "", Ee = Ee.href
    }
    Ae = Le.exec(Ee.toLowerCase()) || [], lt.fn.load = function(t, i, s) {
        if ("string" != typeof t && ze) return ze.apply(this, arguments);
        var n, o, r, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (n = t.slice(l, t.length), t = t.slice(0, l)), lt.isFunction(i) ? (s = i, i = e) : i && "object" == typeof i && (r = "POST"), a.length > 0 && lt.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: i
        }).done(function(t) {
            o = arguments, a.html(n ? lt("<div>").append(lt.parseHTML(t)).find(n) : t)
        }).complete(s && function(t, e) {
            a.each(s, o || [t.responseText, e, t])
        }), this
    }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        lt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), lt.each(["get", "post"], function(t, i) {
        lt[i] = function(t, s, n, o) {
            return lt.isFunction(s) && (o = o || n, n = s, s = e), lt.ajax({
                url: t,
                type: i,
                dataType: o,
                data: s,
                success: n
            })
        }
    }), lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ee,
            type: "GET",
            isLocal: Fe.test(Ae[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Re,
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
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? P(P(t, lt.ajaxSettings), e) : P(lt.ajaxSettings, t)
        },
        ajaxPrefilter: A($e),
        ajaxTransport: A(Be),
        ajax: function(t, i) {
            function s(t, i, s, n) {
                var o, u, _, b, w, k = i;
                2 !== y && (y = 2, l && clearTimeout(l), c = e, a = n || "", x.readyState = t > 0 ? 4 : 0, s && (b = j(d, x, s)), t >= 200 && 300 > t || 304 === t ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (lt.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (lt.etag[r] = w)), 204 === t ? (o = !0, k = "nocontent") : 304 === t ? (o = !0, k = "notmodified") : (o = N(d, b), k = o.state, u = o.data, _ = o.error, o = !_)) : (_ = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || k) + "", o ? g.resolveWith(f, [u, k, x]) : g.rejectWith(f, [x, k, _]), x.statusCode(v), v = e, h && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : _]), m.fireWith(f, [x, k]), h && (p.trigger("ajaxComplete", [x, d]), --lt.active || lt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var n, o, r, a, l, h, c, u, d = lt.ajaxSetup({}, i),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? lt(f) : lt.event,
                g = lt.Deferred(),
                m = lt.Callbacks("once memory"),
                v = d.statusCode || {},
                _ = {},
                b = {},
                y = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === y) {
                            if (!u)
                                for (u = {}; e = Oe.exec(a);) u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return y || (t = b[i] = b[i] || t, _[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), s(0, e), this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Ee) + "").replace(Ne, "").replace(qe, Ae[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = lt.trim(d.dataType || "*").toLowerCase().match(ct) || [""], null == d.crossDomain && (n = Le.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ae[1] && n[2] === Ae[2] && (n[3] || ("http:" === n[1] ? 80 : 443)) == (Ae[3] || ("http:" === Ae[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = lt.param(d.data, d.traditional)), E($e, d, i, x), 2 === y) return x;
            h = d.global, h && 0 === lt.active++ && lt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !We.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (je.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = He.test(r) ? r.replace(He, "$1_=" + Pe++) : r + (je.test(r) ? "&" : "?") + "_=" + Pe++)), d.ifModified && (lt.lastModified[r] && x.setRequestHeader("If-Modified-Since", lt.lastModified[r]), lt.etag[r] && x.setRequestHeader("If-None-Match", lt.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Re + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === y)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (c = E(Be, d, i, x)) {
                x.readyState = 1, h && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, c.send(_, s)
                } catch (k) {
                    if (!(2 > y)) throw k;
                    s(-1, k)
                }
            } else s(-1, "No Transport");
            return x
        },
        getScript: function(t, i) {
            return lt.get(t, e, i, "script")
        },
        getJSON: function(t, e, i) {
            return lt.get(t, e, i, "json")
        }
    }), lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return lt.globalEval(t), t
            }
        }
    }), lt.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), lt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, s = Q.head || lt("head")[0] || Q.documentElement;
            return {
                send: function(e, n) {
                    i = Q.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                    }, s.insertBefore(i, s.firstChild)
                },
                abort: function() {
                    i && i.onload(e, !0)
                }
            }
        }
    });
    var Ue = [],
        Ke = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || lt.expando + "_" + Pe++;
            return this[t] = !0, t
        }
    }), lt.ajaxPrefilter("json jsonp", function(i, s, n) {
        var o, r, a, l = i.jsonp !== !1 && (Ke.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (o = i.jsonpCallback = lt.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ke, "$1" + o) : i.jsonp !== !1 && (i.url += (je.test(i.url) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
            return a || lt.error(o + " was not called"), a[0]
        }, i.dataTypes[0] = "json", r = t[o], t[o] = function() {
            a = arguments
        }, n.always(function() {
            t[o] = r, i[o] && (i.jsonpCallback = s.jsonpCallback, Ue.push(o)), a && lt.isFunction(r) && r(a[0]), a = r = e
        }), "script") : e
    });
    var Qe, Xe, Ge = 0,
        Ve = t.ActiveXObject && function() {
            var t;
            for (t in Qe) Qe[t](e, !0)
        };
    lt.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && H() || O()
    } : H, Xe = lt.ajaxSettings.xhr(), lt.support.cors = !!Xe && "withCredentials" in Xe, Xe = lt.support.ajax = !!Xe, Xe && lt.ajaxTransport(function(i) {
        if (!i.crossDomain || lt.support.cors) {
            var s;
            return {
                send: function(n, o) {
                    var r, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in n) l.setRequestHeader(a, n[a])
                    } catch (h) {}
                    l.send(i.hasContent && i.data || null), s = function(t, n) {
                        var a, h, c, u;
                        try {
                            if (s && (n || 4 === l.readyState))
                                if (s = e, r && (l.onreadystatechange = lt.noop, Ve && delete Qe[r]), n) 4 !== l.readyState && l.abort();
                                else {
                                    u = {}, a = l.status, h = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                }
                        } catch (f) {
                            n || o(-1, f)
                        }
                        u && o(a, c, u, h)
                    }, i.async ? 4 === l.readyState ? setTimeout(s) : (r = ++Ge, Ve && (Qe || (Qe = {}, lt(t).unload(Ve)), Qe[r] = s), l.onreadystatechange = s) : s()
                },
                abort: function() {
                    s && s(e, !0)
                }
            }
        }
    });
    var Je, Ze, ti = /^(?:toggle|show|hide)$/,
        ei = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
        ii = /queueHooks$/,
        si = [z],
        ni = {
            "*": [function(t, e) {
                var i, s, n = this.createTween(t, e),
                    o = ei.exec(e),
                    r = n.cur(),
                    a = +r || 0,
                    l = 1,
                    h = 20;
                if (o) {
                    if (i = +o[2], s = o[3] || (lt.cssNumber[t] ? "" : "px"), "px" !== s && a) {
                        a = lt.css(n.elem, t, !0) || i || 1;
                        do l = l || ".5", a /= l, lt.style(n.elem, t, a + s); while (l !== (l = n.cur() / r) && 1 !== l && --h)
                    }
                    n.unit = s, n.start = a, n.end = o[1] ? a + (o[1] + 1) * i : i
                }
                return n
            }]
        };
    lt.Animation = lt.extend(q, {
        tweener: function(t, e) {
            lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, s = 0, n = t.length; n > s; s++) i = t[s], ni[i] = ni[i] || [], ni[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? si.unshift(t) : si.push(t)
        }
    }), lt.Tween = $, $.prototype = {
        constructor: $,
        init: function(t, e, i, s, n, o) {
            this.elem = t, this.prop = i, this.easing = n || "swing", this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (lt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = $.propHooks[this.prop];
            return t && t.get ? t.get(this) : $.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = $.propHooks[this.prop];
            return this.pos = e = this.options.duration ? lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, lt.each(["toggle", "show", "hide"], function(t, e) {
        var i = lt.fn[e];
        lt.fn[e] = function(t, s, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(B(e, !0), t, s, n)
        }
    }), lt.fn.extend({
        fadeTo: function(t, e, i, s) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, s)
        },
        animate: function(t, e, i, s) {
            var n = lt.isEmptyObject(t),
                o = lt.speed(e, i, s),
                r = function() {
                    var e = q(this, lt.extend({}, t), o);
                    r.finish = function() {
                        e.stop(!0)
                    }, (n || lt._data(this, "finish")) && e.stop(!0)
                };
            return r.finish = r, n || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(t, i, s) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof t && (s = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = lt.timers,
                    r = lt._data(this);
                if (i) r[i] && r[i].stop && n(r[i]);
                else
                    for (i in r) r[i] && r[i].stop && ii.test(i) && n(r[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(s), e = !1, o.splice(i, 1));
                (e || !s) && lt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, i = lt._data(this),
                    s = i[t + "queue"],
                    n = i[t + "queueHooks"],
                    o = lt.timers,
                    r = s ? s.length : 0;
                for (i.finish = !0, lt.queue(this, t, []), n && n.cur && n.cur.finish && n.cur.finish.call(this), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; r > e; e++) s[e] && s[e].finish && s[e].finish.call(this);
                delete i.finish
            })
        }
    }), lt.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        lt.fn[t] = function(t, i, s) {
            return this.animate(e, t, i, s)
        }
    }), lt.speed = function(t, e, i) {
        var s = t && "object" == typeof t ? lt.extend({}, t) : {
            complete: i || !i && e || lt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !lt.isFunction(e) && e
        };
        return s.duration = lt.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in lt.fx.speeds ? lt.fx.speeds[s.duration] : lt.fx.speeds._default, (null == s.queue || s.queue === !0) && (s.queue = "fx"), s.old = s.complete, s.complete = function() {
            lt.isFunction(s.old) && s.old.call(this), s.queue && lt.dequeue(this, s.queue)
        }, s
    }, lt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, lt.timers = [], lt.fx = $.prototype.init, lt.fx.tick = function() {
        var t, i = lt.timers,
            s = 0;
        for (Je = lt.now(); i.length > s; s++) t = i[s], t() || i[s] !== t || i.splice(s--, 1);
        i.length || lt.fx.stop(), Je = e
    }, lt.fx.timer = function(t) {
        t() && lt.timers.push(t) && lt.fx.start()
    }, lt.fx.interval = 13, lt.fx.start = function() {
        Ze || (Ze = setInterval(lt.fx.tick, lt.fx.interval))
    }, lt.fx.stop = function() {
        clearInterval(Ze), Ze = null
    }, lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(t) {
        return lt.grep(lt.timers, function(e) {
            return t === e.elem
        }).length
    }), lt.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            lt.offset.setOffset(this, t, e)
        });
        var i, s, n = {
                top: 0,
                left: 0
            },
            o = this[0],
            r = o && o.ownerDocument;
        return r ? (i = r.documentElement, lt.contains(i, o) ? (typeof o.getBoundingClientRect !== K && (n = o.getBoundingClientRect()), s = R(r), {
            top: n.top + (s.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: n.left + (s.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : n) : void 0
    }, lt.offset = {
        setOffset: function(t, e, i) {
            var s = lt.css(t, "position");
            "static" === s && (t.style.position = "relative");
            var n, o, r = lt(t),
                a = r.offset(),
                l = lt.css(t, "top"),
                h = lt.css(t, "left"),
                c = ("absolute" === s || "fixed" === s) && lt.inArray("auto", [l, h]) > -1,
                u = {},
                d = {};
            c ? (d = r.position(), n = d.top, o = d.left) : (n = parseFloat(l) || 0, o = parseFloat(h) || 0), lt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + n), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : r.css(u)
        }
    }, lt.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    s = this[0];
                return "fixed" === lt.css(s, "position") ? e = s.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (i = t.offset()), i.top += lt.css(t[0], "borderTopWidth", !0), i.left += lt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - lt.css(s, "marginTop", !0),
                    left: e.left - i.left - lt.css(s, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Q.documentElement; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
                return t || Q.documentElement
            })
        }
    }), lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var s = /Y/.test(i);
        lt.fn[t] = function(n) {
            return lt.access(this, function(t, n, o) {
                var r = R(t);
                return o === e ? r ? i in r ? r[i] : r.document.documentElement[n] : t[n] : (r ? r.scrollTo(s ? lt(r).scrollLeft() : o, s ? o : lt(r).scrollTop()) : t[n] = o, e)
            }, t, n, arguments.length, null)
        }
    }), lt.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        lt.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(s, n) {
            lt.fn[n] = function(n, o) {
                var r = arguments.length && (s || "boolean" != typeof n),
                    a = s || (n === !0 || o === !0 ? "margin" : "border");
                return lt.access(this, function(i, s, n) {
                    var o;
                    return lt.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : n === e ? lt.css(i, s, a) : lt.style(i, s, n, a)
                }, i, r ? n : e, r, null)
            }
        })
    }), t.jQuery = t.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return lt
    })
}(window),
function(t, e) {
    function i(e, i) {
        var n, o, r, a = e.nodeName.toLowerCase();
        return "area" === a ? (n = e.parentNode, o = n.name, e.href && o && "map" === n.nodeName.toLowerCase() ? (r = t("img[usemap=#" + o + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && s(e)
    }

    function s(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    var n = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), s && s.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var s = t.attr(e, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        function n(e, i, s, n) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + s] = function(i) {
            return i === e ? a["inner" + s].call(this) : this.each(function() {
                t(this).css(r, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? a["outer" + s].call(this, e) : this.each(function() {
                t(this).css(r, n(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n, o = t.ui[e].prototype;
                for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i) {
                var s, n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; s < n.length; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        n(e)
    }, t.widget = function(e, i, s) {
        var n, o, r, a, l = {},
            h = e.split(".")[0];
        e = e.split(".")[1], n = h + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function(e) {
            return !!t.data(e, n)
        }, t[h] = t[h] || {}, o = t[h][e], r = t[h][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new r(t, e)
        }, t.extend(r, o, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? void(l[e] = function() {
                var t = function() {
                        return i.prototype[e].apply(this, arguments)
                    },
                    n = function(t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }()) : void(l[e] = s)
        }), r.prototype = t.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix : e
        }, l, {
            constructor: r,
            namespace: h,
            widgetName: e,
            widgetFullName: n
        }), o ? (t.each(o._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r), t.widget.bridge(e, r)
    }, t.widget.extend = function(i) {
        for (var n, o, r = s.call(arguments, 1), a = 0, l = r.length; l > a; a++)
            for (n in r[a]) o = r[a][n], r[a].hasOwnProperty(n) && o !== e && (t.isPlainObject(o) ? i[n] = t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : i[n] = o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(r) {
            var a = "string" == typeof r,
                l = s.call(arguments, 1),
                h = this;
            return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r, a ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, l), s !== n && s !== e ? (h = s && s.jquery ? h.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + r + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(r || {})._init() : t.data(this, o, new n(r, this))
            }), h
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, r, a = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (a = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; r < n.length - 1; r++) o[n[r]] = o[n[r]] || {}, o = o[n[r]];
                    if (i = n.pop(), s === e) return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (s === e) return this.options[i] === e ? null : this.options[i];
                    a[i] = s
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, r) {
                function a() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0
                }
                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                var l = s.match(/^(\w+)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? n.delegate(c, h, a) : i.bind(h, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, r = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var r, a = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup(function() {
        i = !1
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var s = this,
                    n = 1 === e.which,
                    o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], void(s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n, o, r = this.options,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = s.options,
                o = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = this;
            t.each(s.sortables, function() {
                var o = !1,
                    r = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== r && this.instance._intersectsWith(this.instance.containerCache) && t.contains(r.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(e, i) {
            var s, n, o, r, a, l, h, c, u, d, f = t(this).data("ui-draggable"),
                p = f.options,
                g = p.snapTolerance,
                m = i.offset.left,
                v = m + f.helperProportions.width,
                _ = i.offset.top,
                b = _ + f.helperProportions.height;
            for (u = f.snapElements.length - 1; u >= 0; u--) a = f.snapElements[u].left, l = a + f.snapElements[u].width, h = f.snapElements[u].top, c = h + f.snapElements[u].height, a - g > v || m > l + g || h - g > b || _ > c + g || !t.contains(f.snapElements[u].item.ownerDocument, f.snapElements[u].item) ? (f.snapElements[u].snapping && f.options.snap.release && f.options.snap.release.call(f.element, e, t.extend(f._uiHash(), {
                snapItem: f.snapElements[u].item
            })), f.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (s = Math.abs(h - b) <= g, n = Math.abs(c - _) <= g, o = Math.abs(a - v) <= g, r = Math.abs(l - m) <= g, s && (i.position.top = f._convertPositionTo("relative", {
                top: h - f.helperProportions.height,
                left: 0
            }).top - f.margins.top), n && (i.position.top = f._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - f.margins.top), o && (i.position.left = f._convertPositionTo("relative", {
                top: 0,
                left: a - f.helperProportions.width
            }).left - f.margins.left), r && (i.position.left = f._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - f.margins.left)), d = s || n || o || r, "outer" !== p.snapMode && (s = Math.abs(h - _) <= g, n = Math.abs(c - b) <= g, o = Math.abs(a - m) <= g, r = Math.abs(l - v) <= g, s && (i.position.top = f._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - f.margins.top), n && (i.position.top = f._convertPositionTo("relative", {
                top: c - f.helperProportions.height,
                left: 0
            }).top - f.margins.top), o && (i.position.left = f._convertPositionTo("relative", {
                top: 0,
                left: a
            }).left - f.margins.left), r && (i.position.left = f._convertPositionTo("relative", {
                top: 0,
                left: l - f.helperProportions.width
            }).left - f.margins.left)), !f.snapElements[u].snapping && (s || n || o || r || d) && f.options.snap.snap && f.options.snap.snap.call(f.element, e, t.extend(f._uiHash(), {
                snapItem: f.snapElements[u].item
            })), f.snapElements[u].snapping = s || n || o || r || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                s = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; e < i.length; e++) i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "ui-droppable");
                return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function(t, e, s) {
        if (!e.offset) return !1;
        var n, o, r = (t.positionAbs || t.position.absolute).left,
            a = r + t.helperProportions.width,
            l = (t.positionAbs || t.position.absolute).top,
            h = l + t.helperProportions.height,
            c = e.offset.left,
            u = c + e.proportions.width,
            d = e.offset.top,
            f = d + e.proportions.height;
        switch (s) {
            case "fit":
                return r >= c && u >= a && l >= d && f >= h;
            case "intersect":
                return c < r + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < u && d < l + t.helperProportions.height / 2 && h - t.helperProportions.height / 2 < f;
            case "pointer":
                return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, i(o, d, e.proportions.height) && i(n, c, e.proportions.width);
            case "touch":
                return (l >= d && f >= l || h >= d && f >= h || d > l && h > f) && (r >= c && u >= r || a >= c && u >= a || c > r && a > u);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; s < o.length; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; n < a.length; n++)
                        if (a[n] === o[s].element[0]) {
                            o[s].proportions.height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions = {
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, r = t.ui.intersect(e, this, this.options.tolerance),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === n
                    }), o.length && (s = t.data(o[0], "ui-droppable"), s.greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    function i(t) {
        return parseInt(t, 10) || 0
    }

    function s(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, s, n, o, r = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({
                    zIndex: a.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                r.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = n && n[1] ? n[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), r._handles.show())
            }).mouseleave(function() {
                a.disabled || r.resizing || (t(this).addClass("ui-resizable-autohide"), r._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var s, n, o, r = this.options,
                a = this.element.position(),
                l = this.element;
            return this.resizing = !0, /absolute/.test(l.css("position")) ? l.css({
                position: "absolute",
                top: l.css("top"),
                left: l.css("left")
            }) : l.is(".ui-draggable") && l.css({
                position: "absolute",
                top: a.top,
                left: a.left
            }), this._renderProxy(), s = i(this.helper.css("left")), n = i(this.helper.css("top")), r.containment && (s += t(r.containment).scrollLeft() || 0, n += t(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalSize = this._helper ? {
                width: l.outerWidth(),
                height: l.outerHeight()
            } : {
                width: l.width(),
                height: l.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: l.outerWidth() - l.width(),
                height: l.outerHeight() - l.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), l.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, s = this.helper,
                n = {},
                o = this.originalMousePosition,
                r = this.axis,
                a = this.position.top,
                l = this.position.left,
                h = this.size.width,
                c = this.size.height,
                u = e.pageX - o.left || 0,
                d = e.pageY - o.top || 0,
                f = this._change[r];
            return f ? (i = f.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== a && (n.top = this.position.top + "px"), this.position.left !== l && (n.left = this.position.left + "px"), this.size.width !== h && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, r, a, l, h = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, r = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                top: l,
                left: a
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, o, r, a = this.options;
            r = {
                minWidth: s(a.minWidth) ? a.minWidth : 0,
                maxWidth: s(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: s(a.minHeight) ? a.minHeight : 0,
                maxHeight: s(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), s(t.left) && (this.position.left = t.left), s(t.top) && (this.position.top = t.top), s(t.height) && (this.size.height = t.height), s(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return s(t.height) ? t.width = t.height * this.aspectRatio : s(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = s(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = s(t.height) && e.maxHeight && e.maxHeight < t.height,
                r = s(t.width) && e.minWidth && e.minWidth > t.width,
                a = s(t.height) && e.minHeight && e.minHeight > t.height,
                l = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                c = /sw|nw|w/.test(i),
                u = /nw|ne|n/.test(i);
            return r && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), o && (t.height = e.maxHeight), r && c && (t.left = l - e.minWidth), n && c && (t.left = l - e.maxWidth), a && u && (t.top = h - e.minHeight), o && u && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, o = this.helper || this.element;
                for (t = 0; t < this._proportionallyResizeElements.length; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; e < i.length; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                r = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, s, n, o, r, a, l, h = t(this).data("ui-resizable"),
                c = h.options,
                u = h.element,
                d = c.containment,
                f = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            f && (h.containerElement = t(f), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {
                left: 0,
                top: 0
            }, h.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(f), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = i(e.css("padding" + n))
            }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
                height: e.innerHeight() - s[3],
                width: e.innerWidth() - s[1]
            }, n = h.containerOffset, o = h.containerSize.height, r = h.containerSize.width, a = t.ui.hasScroll(f, "left") ? f.scrollWidth : r, l = t.ui.hasScroll(f) ? f.scrollHeight : o, h.parentData = {
                element: f,
                left: n.left,
                top: n.top,
                width: a,
                height: l
            }))
        },
        resize: function(e) {
            var i, s, n, o, r = t(this).data("ui-resizable"),
                a = r.options,
                l = r.containerOffset,
                h = r.position,
                c = r._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = r.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? l.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top, i = Math.abs((r._helper ? r.offset.left - u.left : r.offset.left - u.left) + r.sizeDiff.width), s = Math.abs((r._helper ? r.offset.top - u.top : r.offset.top - l.top) + r.sizeDiff.height), n = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), n && o && (i -= r.parentData.left), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, c && (r.size.width = r.size.height * r.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: a.left - n.left - s.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                s(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("ui-resizable"),
                n = s.options,
                o = s.originalSize,
                r = s.originalPosition,
                a = {
                    height: s.size.height - o.height || 0,
                    width: s.size.width - o.width || 0,
                    top: s.position.top - r.top || 0,
                    left: s.position.left - r.left || 0
                },
                l = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            o = {},
                            r = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(r, function(t, e) {
                            var i = (n[e] || 0) + (a[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                l(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                o = e.originalPosition,
                r = e.axis,
                a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = a[0] || 1,
                h = a[1] || 1,
                c = Math.round((s.width - n.width) / l) * l,
                u = Math.round((s.height - n.height) / h) * h,
                d = n.width + c,
                f = n.height + u,
                p = i.maxWidth && i.maxWidth < d,
                g = i.maxHeight && i.maxHeight < f,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > f;
            i.grid = a, m && (d += l), v && (f += h), p && (d -= l), g && (f -= h), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = f) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = f, e.position.top = o.top - u) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = f, e.position.left = o.left - c) : (e.size.width = d, e.size.height = f, e.position.top = o.top - u, e.position.left = o.left - c)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    o = this.opos[0],
                    r = this.opos[1],
                    a = e.pageX,
                    l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                    left: o,
                    top: r,
                    width: a - o,
                    height: l - r
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > a || i.right < o || i.top > l || i.bottom < r) : "fit" === n.tolerance && (h = i.left > o && i.right < a && i.top > r && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return t > e && e + i > t
    }

    function s(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || s(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s && (!this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n)) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - t(document).scrollTop() < r.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < r.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + r.scrollSpeed)), e.pageX - t(document).scrollLeft() < r.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < r.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + r.scrollSpeed))), a !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + h > a && l > s + h,
                d = "y" === this.options.axis || e + c > o && r > e + c,
                f = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l;
        },
        _intersectsWithPointer: function(t) {
            var e = "x" === this.options.axis || i(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || i(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = e && s,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var e = i(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = i(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, s, n, o, r = [],
                a = [],
                l = this._connectWith();
            if (l && e)
                for (i = l.length - 1; i >= 0; i--)
                    for (n = t(l[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (a.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(function() {
                r.push(this)
            });
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, r, a, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (r = u[i][1], a = u[i][0], s = 0, h = a.length; h > s; s++) l = t(a[s]), l.data(this.widgetName + "-item", r), c.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(e) {
            var n, o, r, a, l, h, c, u, d, f, p = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (p && t.contains(this.containers[n].element[0], p.element[0])) continue;
                        p = this.containers[n], g = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (p)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", e, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (r = 1e4, a = null, f = p.floating || s(this.currentItem), l = f ? "left" : "top", h = f ? "width" : "height", c = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!f || i(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[l], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][h] - c) && (d = !0, u += this.items[o][h]), Math.abs(u - c) < r && (r = Math.abs(u - c), a = this.items[o], this.direction = d ? "up" : "down"));
                    if (!a && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[g].element, !0), this._trigger("change", e, this._uiHash()), this.containers[g]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", e, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; i < s.length; i++) s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; i < s.length; i++) s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery),
function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
            }

            function s(e) {
                var i = h(),
                    s = i._rgba = [];
                return e = e.toLowerCase(), p(l, function(t, n) {
                    var o, r = n.re.exec(e),
                        a = r && n.parse(r),
                        l = n.space || "rgba";
                    return a ? (o = i[l](a), i[c[l].cache] = o[c[l].cache], s = i._rgba = o._rgba, !1) : void 0
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i) : o[e]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = h.support = {},
                f = t("<p>")[0],
                p = t.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(c, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(n, r, a, l) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(r), r = e);
                    var u = this,
                        d = t.type(n),
                        f = this._rgba = [];
                    return r !== e && (n = [n, r, a, l], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (p(c.rgba.props, function(t, e) {
                        f[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (n instanceof h ? p(c, function(t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    }) : p(c, function(e, s) {
                        var o = s.cache;
                        p(s.props, function(t, e) {
                            if (!u[o] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[o] = s.to(u._rgba)
                            }
                            u[o][e.idx] = i(n[t], e, !0)
                        }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                    }), this) : void 0
                },
                is: function(t) {
                    var e = h(t),
                        i = !0,
                        s = this;
                    return p(c, function(t, n) {
                        var o, r = e[n.cache];
                        return r && (o = s[n.cache] || n.to && n.to(s._rgba) || [], p(n.props, function(t, e) {
                            return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                        })), i
                    }), i
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(c, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = h(t),
                        n = s._space(),
                        o = c[n],
                        r = 0 === this.alpha() ? h("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba),
                        l = a.slice();
                    return s = s[o.cache], p(o.props, function(t, n) {
                        var o = n.idx,
                            r = a[o],
                            h = s[o],
                            c = u[n.type] || {};
                        null !== h && (null === r ? l[o] = h : (c.mod && (h - r > c.mod / 2 ? r += c.mod : r - h > c.mod / 2 && (r -= c.mod)), l[o] = i((h - r) * e + r, n)))
                    }), this[n](l)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    r = t[3],
                    a = Math.max(s, n, o),
                    l = Math.min(s, n, o),
                    h = a - l,
                    c = a + l,
                    u = .5 * c;
                return e = l === a ? 0 : s === a ? 60 * (n - o) / h + 360 : n === a ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    o = t[3],
                    r = .5 >= s ? s * (1 + i) : s + i - s * i,
                    a = 2 * s - r;
                return [Math.round(255 * n(a, r, e + 1 / 3)), Math.round(255 * n(a, r, e)), Math.round(255 * n(a, r, e - 1 / 3)), o]
            }, p(c, function(s, n) {
                var o = n.props,
                    r = n.cache,
                    l = n.to,
                    c = n.from;
                h.fn[s] = function(s) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), s === e) return this[r].slice();
                    var n, a = t.type(s),
                        u = "array" === a || "object" === a ? s : arguments,
                        d = this[r].slice();
                    return p(o, function(t, e) {
                        var s = u["object" === a ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = h(c(d)), n[r] = d, n) : h(d)
                }, p(o, function(e, i) {
                    h.fn[e] || (h.fn[e] = function(n) {
                        var o, r = t.type(n),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = t.type(n)), null == n && i.empty ? this : ("string" === r && (o = a.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var o, r, a = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                if (n = h(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && r && r.style;) try {
                                        a = t.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (l) {}
                                    n = n.blend(a && "transparent" !== a ? a : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (l) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(r), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return p(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                return o
            }

            function s(e, i) {
                var s, n, r = {};
                for (s in i) n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (r[s] = n));
                return r
            }
            var n = ["add", "remove", "toggle"],
                o = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function() {
                    var o, r = t(this),
                        a = r.attr("class") || "",
                        h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), o = function() {
                        t.each(n, function(t, i) {
                            e[i] && r[i + "Class"](e[i])
                        })
                    }, o(), h = h.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), r.attr("class", a), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, s, n, o) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, s, n, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, n, o, r, a) {
                        return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, o, r, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: s
                        }, n, o, r)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, s, n, o) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, o)
                }
            })
        }(),
        function() {
            function s(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.10.3",
                save: function(t, e) {
                    for (var s = 0; s < e.length; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
                },
                restore: function(t, s) {
                    var n, o;
                    for (o = 0; o < s.length; o++) null !== s[o] && (n = t.data(i + s[o]), n === e && (n = ""), t.css(s[o], n))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (r) {
                        o = document.body
                    }
                    return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (n[i] = o[0] * s + o[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function s() {
                            t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e()
                        }
                        var n = t(this),
                            o = i.complete,
                            a = i.mode;
                        (n.is(":hidden") ? "hide" === a : "show" === a) ? (n[a](), s()) : r.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        o = i.queue,
                        r = t.effects.effect[i.effect];
                    return t.fx.off || !r ? n ? this[n](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
}(jQuery),
function(t, e) {
    var i = 0,
        s = {},
        n = {};
    s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "hide", n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
        },
        _refresh: function() {
            var e, s = this.options,
                n = s.heightStyle,
                o = this.element.parent(),
                r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++i);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this),
                    s = i.attr("id"),
                    n = i.next(),
                    o = n.attr("id");
                s || (s = r + "-header-" + e, i.attr("id", s)), o || (o = r + "-panel-" + e, n.attr("id", o)), i.attr("aria-controls", o), n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (e = o.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                e = Math.max(e, t(this).css("height", "").height())
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n[0] === s[0],
                r = o && i.collapsible,
                a = r ? t() : n.next(),
                l = s.next(),
                h = {
                    oldHeader: s,
                    oldPanel: l,
                    newHeader: r ? t() : n,
                    newPanel: a
                };
            e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = r ? !1 : this.headers.index(n), this.active = o ? t() : n, this._toggle(h), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, i) {
            var o, r, a, l = this,
                h = 0,
                c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {},
                d = c && u.down || u,
                f = function() {
                    l._toggleComplete(i)
                };
            return "number" == typeof d && (a = d), "string" == typeof d && (r = d), r = r || d.easing || u.easing, a = a || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(s, {
                duration: a,
                easing: r,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(n, {
                duration: a,
                easing: r,
                complete: f,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? h += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - h), h = 0)
                }
            })) : e.animate(s, a, r, f) : t.animate(n, a, r, f)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
}(jQuery),
function(t, e) {
    var i = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                r = "input" === n;
            this.isMultiLine = o ? !0 : r ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                        case o.NUMPAD_ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    });
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: s
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = this,
                e = ++i;
            return function(s) {
                e === i && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery),
function(t, e) {
    var i, s, n, o, r = "ui-button ui-widget ui-state-default ui-corner-all",
        a = "ui-state-hover ui-state-active ",
        l = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        h = function() {
            var e = t(this);
            setTimeout(function() {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        c = function(e) {
            var i = e.name,
                s = e.form,
                n = t([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), n
        };
    t.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                a = this.options,
                l = "checkbox" === this.type || "radio" === this.type,
                u = l ? "" : "ui-state-active",
                d = "ui-state-focus";
            null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                a.disabled || this === i && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                a.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(t) {
                a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                e.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                e.buttonElement.removeClass(d)
            }), l && (this.element.bind("change" + this.eventNamespace, function() {
                o || e.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                a.disabled || (o = !1, s = t.pageX, n = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                a.disabled || (s !== t.pageX || n !== t.pageY) && (o = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return a.disabled || o ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (a.disabled || o) return !1;
                t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                var i = e.element[0];
                c(i).not(i).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return a.disabled ? !1 : (t(this).addClass("ui-state-active"), i = this, void e.document.one("mouseup", function() {
                    i = null
                }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return a.disabled ? !1 : void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                return a.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", a.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " " + a + " " + l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? void(e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? c(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(l),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                o = [];
            s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function n(e, i) {
        t.extend(e, i);
        for (var s in i) null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var o, r = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, o, a) {
            var l, h, c, u, d, f = this._dialogInst;
            return f || (this.uuid += 1, l = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + l + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, t.data(this._dialogInput[0], r, f)), n(f.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(f, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, f), this
        },
        _destroyDatepicker: function(e) {
            var i, s = t(e),
                n = t.data(e, r);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, r);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, o) {
            var r, a, l, h, c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = o), void(c && (this._curInst === c && this._hideDatepicker(), a = this._getDateDatepicker(i, !0), l = this._getMinMaxDate(c, "min"), h = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== l && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, l)), null !== h && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, h)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, a), this._updateAlternate(c), this._updateDatepicker(c))))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var i, s, n = t.datepicker._getInst(e.target);
            return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(e) {
            var i, s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
            } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, o, r, a, l, h;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), o = s ? s.apply(e, [e, i]) : {}, o !== !1 && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return r |= "fixed" === t(this).css("position"), !r
                }), a = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: a.left + "px",
                    top: a.top + "px"
                }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, s = this._getNumberOfMonths(e),
                n = s[1],
                r = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i, s, n, o, a = this._curInst;
            !a || e && a !== t.data(e, r) || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var n, o, r, a, l = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                f = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                _ = -1,
                b = !1,
                y = function(t) {
                    var i = n + 1 < e.length && e.charAt(n + 1) === t;
                    return i && n++, i
                },
                w = function(t) {
                    var e = y(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = new RegExp("^\\d{1," + s + "}"),
                        o = i.substring(l).match(n);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(e, s, n) {
                    var o = -1,
                        r = t.map(y(e) ? n : s, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(r, function(t, e) {
                            var s = e[1];
                            return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0
                        }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                k = function() {
                    if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; n < e.length; n++)
                if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;
                else switch (e.charAt(n)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = x("M", f, p);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        a = new Date(w("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        a = new Date((w("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        y("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
                if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), _ > -1)
                for (m = 1, v = _;;) {
                    if (o = this._getDaysInMonth(g, m - 1), o >= v) break;
                    m++, v -= o
                }
            if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                h = function(t, e, i) {
                    var s = "" + e;
                    if (l(t))
                        for (; s.length < i;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) {
                    return l(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; s < t.length; s++)
                    if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
                    return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) {
                    var s = e + 1 < t.length && t.charAt(e + 1) === i;
                    return s && e++, s
                };
            for (e = 0; e < t.length; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    r = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, r) || n
                } catch (a) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                o = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), r = n.getMonth(), a = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                        switch (h[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(h[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(h[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r));
                                break;
                            case "y":
                            case "Y":
                                o += parseInt(h[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, r))
                        }
                        h = l.exec(i)
                    }
                    return new Date(o, r, a)
                },
                r = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return r = r && "Invalid Date" === r.toString() ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, r, a, l, h, c, u, d, f, p, g, m, v, _, b, y, w, x, k, C, D, T, M, I, S, A, E, P, j, N, H, O, F, W, q, L = new Date,
                z = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                $ = this._get(t, "isRTL"),
                B = this._get(t, "showButtonPanel"),
                R = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                K = this._get(t, "showCurrentAtPos"),
                Q = this._get(t, "stepMonths"),
                X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                V = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - K,
                tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = V && V > e ? V : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - Q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + i + "</span></a>" : R ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + Q, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + n + "</span></a>" : R ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? G : z, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ($ ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + ($ ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), f = this._get(t, "dayNamesMin"), p = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < U[0]; x++) {
                for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", M = "", X) {
                        if (M += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                M += " ui-datepicker-group-first", T = " ui-corner-" + ($ ? "right" : "left");
                                break;
                            case U[1] - 1:
                                M += " ui-datepicker-group-last", T = " ui-corner-" + ($ ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", T = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? $ ? o : s : "") + (/all|right/.test(T) && 0 === x ? $ ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, V, J, x > 0 || C > 0, p, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) S = (w + c) % 7, I += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[S] + "'>" + f[S] + "</span></th>";
                    for (M += I + "</tr></thead><tbody>", A = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), E = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, P = Math.ceil((E + A) / 7), j = X && this.maxRows > P ? this.maxRows : P, this.maxRows = j, N = this._daylightSavingAdjust(new Date(tt, Z, 1 - E)), H = 0; j > H; H++) {
                        for (M += "<tr>", O = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) F = m ? m.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], W = N.getMonth() !== Z, q = W && !_ || !F[0] || V && V > N || J && N > J, O += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (N.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (q ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + F[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (q ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : q ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === z.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        M += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), M += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                y += k
            }
            return y += h, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, r, a) {
            var l, h, c, u, d, f, p, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!h || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, p = f(u[0]), g = Math.max(p, f(u[1] || "")), p = s ? Math.max(p, s.getFullYear()) : p, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= p; p++) t.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0),
                n = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (a += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
}(jQuery),
function(t, e) {
    var i = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        s = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function() {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({
                    type: "button"
                }, s), n = s.click, s.click = function() {
                    n.apply(e.element[0], arguments)
                }, o = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, o) {
                    s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                s = this.options,
                n = s.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(s, n) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, o) {
                    s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var n = this,
                o = !1,
                r = {};
            t.each(e, function(t, e) {
                n._setOption(t, e), t in i && (o = !0), t in s && (r[t] = e)
            }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function(t, e) {
            var i, s, n = this.uiDialog;
            "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                        e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e, i = this.options.position,
                s = [],
                n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
                +s[t] === s[t] && (n[t] = s[t], s[t] = e)
            }), i = {
                my: s[0] + (n[0] < 0 ? n[0] : "+" + n[0]) + " " + s[1] + (n[1] < 0 ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
}(jQuery),
function(t, e) {
    var i = /up|down|vertical/,
        s = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(e, n) {
        var o, r, a, l = t(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(l, e.mode || "hide"),
            u = e.direction || "up",
            d = i.test(u),
            f = d ? "height" : "width",
            p = d ? "top" : "left",
            g = s.test(u),
            m = {},
            v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), o = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), r = o[f](), a = parseFloat(o.css(p)) || 0, m[f] = v ? r : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[p] = v ? a : r + a), v && (o.css(f, 0), g || o.css(p, a + r)), o.animate(m, {
            duration: e.duration,
            easing: e.easing,
            queue: !1,
            complete: function() {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "effect"),
            h = "hide" === l,
            c = "show" === l,
            u = e.direction || "up",
            d = e.distance,
            f = e.times || 5,
            p = 2 * f + (c || h ? 1 : 0),
            g = e.duration / p,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            _ = "up" === u || "left" === u,
            b = r.queue(),
            y = b.length;
        for ((c || h) && a.push("opacity"), t.effects.save(r, a), r.show(), t.effects.createWrapper(r), d || (d = r["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
                opacity: 1
            }, o[v] = 0, r.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), h && (d /= Math.pow(2, f - 1)), o = {}, o[v] = 0, s = 0; f > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, r.animate(n, g, m).animate(o, g, m), d = h ? 2 * d : d / 2;
        h && (n = {
            opacity: 0
        }, n[v] = (_ ? "-=" : "+=") + d, r.animate(n, g, m)), r.queue(function() {
            h && r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, p + 1))), r.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.clip = function(e, i) {
        var s, n, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(r, e.mode || "hide"),
            h = "show" === l,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            f = u ? "top" : "left",
            p = {};
        t.effects.save(r, a), r.show(), s = t.effects.createWrapper(r).css({
            overflow: "hidden"
        }), n = "IMG" === r[0].tagName ? s : r, o = n[d](), h && (n.css(d, 0), n.css(f, o / 2)), p[d] = h ? o : 0, p[f] = h ? 0 : o / 2, n.animate(p, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || r.hide(), t.effects.restore(r, a), t.effects.removeWrapper(r), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this),
            o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            r = t.effects.setMode(n, e.mode || "hide"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: a ? 1 : 0
            };
        t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, a && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }

        function n() {
            f.css({
                visibility: "visible"
            }), t(b).remove(), g || f.hide(), i()
        }
        var o, r, a, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            f = t(this),
            p = t.effects.setMode(f, e.mode || "hide"),
            g = "show" === p,
            m = f.show().css("visibility", "hidden").offset(),
            v = Math.ceil(f.outerWidth() / d),
            _ = Math.ceil(f.outerHeight() / u),
            b = [];
        for (o = 0; u > o; o++)
            for (l = m.top + o * _, c = o - (u - 1) / 2, r = 0; d > r; r++) a = m.left + r * v, h = r - (d - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -o * _
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: _,
                left: a + (g ? h * v : 0),
                top: l + (g ? c * _ : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: a + (g ? 0 : h * v),
                top: l + (g ? 0 : c * _),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, s)
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.fold = function(e, i) {
        var s, n, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(o, e.mode || "hide"),
            l = "show" === a,
            h = "hide" === a,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !!e.horizFirst,
            f = l !== d,
            p = f ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = f ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]), l && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[p[0]] = l ? n[0] : c, v[p[1]] = l ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(s, e.mode || "show"),
            r = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === o && (r.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this),
            o = t.effects.setMode(n, e.mode || "show"),
            r = "show" === o,
            a = "hide" === o,
            l = r || "hide" === o,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            c = e.duration / h,
            u = 0,
            d = n.queue(),
            f = d.length;
        for ((r || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++) n.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing), n.queue(function() {
            a && n.hide(), i()
        }), f > 1 && d.splice.apply(d, [1, 0].concat(d.splice(f, h + 1))), n.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "hide"),
            o = "hide" === n,
            r = parseInt(e.percent, 10) || 150,
            a = r / 100,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: o ? r : 100,
            from: o ? l : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var s = t(this),
            n = t.extend(!0, {}, e),
            o = t.effects.setMode(s, e.mode || "effect"),
            r = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            a = e.direction || "both",
            l = e.origin,
            h = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            c = {
                y: "horizontal" !== a ? r / 100 : 1,
                x: "vertical" !== a ? r / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), n.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function(e, i) {
        var s, n, o, r = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            f = t.effects.setMode(r, e.mode || "effect"),
            p = e.restore || "effect" !== f,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = r.css("position"),
            _ = p ? a : l,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === f && r.show(), s = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth()
        }, "toggle" === e.mode && "show" === f ? (r.from = e.to || b, r.to = e.from || s) : (r.from = e.from || ("show" === f ? b : s), r.to = e.to || ("hide" === f ? b : s)), o = {
            from: {
                y: r.from.height / s.height,
                x: r.from.width / s.width
            },
            to: {
                y: r.to.height / s.height,
                x: r.to.width / s.width
            }
        }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), r.from = t.effects.setTransition(r, u, o.from.y, r.from), r.to = t.effects.setTransition(r, u, o.to.y, r.to)), o.from.x !== o.to.x && (_ = _.concat(d), r.from = t.effects.setTransition(r, d, o.from.x, r.from), r.to = t.effects.setTransition(r, d, o.to.x, r.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(h), r.from = t.effects.setTransition(r, c, o.from.y, r.from), r.to = t.effects.setTransition(r, c, o.to.y, r.to)), t.effects.save(r, _), r.show(), t.effects.createWrapper(r), r.css("overflow", "hidden").css(r.from), m && (n = t.effects.getBaseline(m, s), r.from.top = (s.outerHeight - r.outerHeight()) * n.y, r.from.left = (s.outerWidth - r.outerWidth()) * n.x, r.to.top = (s.outerHeight - r.to.outerHeight) * n.y, r.to.left = (s.outerWidth - r.to.outerWidth) * n.x), r.css(r.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = a.concat(u).concat(d), r.find("*[width]").each(function() {
            var i = t(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            p && t.effects.save(i, h), i.from = {
                height: s.height * o.from.y,
                width: s.width * o.from.x,
                outerHeight: s.outerHeight * o.from.y,
                outerWidth: s.outerWidth * o.from.x
            }, i.to = {
                height: s.height * o.to.y,
                width: s.width * o.to.x,
                outerHeight: s.height * o.to.y,
                outerWidth: s.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                p && t.effects.restore(i, h)
            })
        })), r.animate(r.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === r.to.opacity && r.css("opacity", r.from.opacity), "hide" === f && r.hide(), t.effects.restore(r, _), p || ("static" === v ? r.css({
                    position: "relative",
                    top: r.to.top,
                    left: r.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    r.css(e, function(e, i) {
                        var s = parseInt(i, 10),
                            n = t ? r.to.left : r.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(r), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.shake = function(e, i) {
        var s, n = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(n, e.mode || "effect"),
            a = e.direction || "left",
            l = e.distance || 20,
            h = e.times || 3,
            c = 2 * h + 1,
            u = Math.round(e.duration / c),
            d = "up" === a || "down" === a ? "top" : "left",
            f = "up" === a || "left" === a,
            p = {},
            g = {},
            m = {},
            v = n.queue(),
            _ = v.length;
        for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), p[d] = (f ? "-=" : "+=") + l, g[d] = (f ? "+=" : "-=") + 2 * l, m[d] = (f ? "-=" : "+=") + 2 * l, n.animate(p, u, e.easing), s = 1; h > s; s++) n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(p, u / 2, e.easing).queue(function() {
            "hide" === r && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
}(jQuery),
function(t, e) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height"],
            r = t.effects.setMode(n, e.mode || "show"),
            a = "show" === r,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = {};
        t.effects.save(n, o), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), a && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === r && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery),
function(t, e) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            r = t("body"),
            a = o ? r.scrollTop() : 0,
            l = o ? r.scrollLeft() : 0,
            h = n.offset(),
            c = {
                top: h.top - a,
                left: h.left - l,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: u.top - a,
                left: u.left - l,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
}(jQuery),
function(t, e) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, o, r, a, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", o = String.fromCharCode(e.keyCode), r = !1, clearTimeout(this.filterTimer), o === n ? r = !0 : o = n + o, a = new RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(t(this).children("a").text())
                    }), s = r && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (o = String.fromCharCode(e.keyCode), a = new RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return a.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + a > r && this.activeMenu.scrollTop(o + n - r + a))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s - n < 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery),
function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o, r = Math.max,
        a = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        f = /%$/,
        p = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (o !== e) return o;
                var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    r = n.children()[0];
                return t("body").append(n), i = r.offsetWidth, n.css("overflow", "scroll"), s = r.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), o = i - s
            },
            getScrollInfo: function(e) {
                var i = e.isWindow ? "" : e.element.css("overflow-x"),
                    s = e.isWindow ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]);
                return {
                    element: i,
                    isWindow: s,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return p.apply(this, arguments);
            e = t.extend({}, e);
            var o, f, g, m, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                w = t.position.getScrollInfo(y),
                x = (e.collision || "flip").split(" "),
                k = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), f = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += f : "center" === e.at[0] && (v.left += f / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(k.at, f, g), v.left += o[0], v.top += o[1], this.each(function() {
                var n, h, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    p = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    C = u + p + s(this, "marginRight") + w.width,
                    D = d + _ + s(this, "marginBottom") + w.height,
                    T = t.extend({}, v),
                    M = i(k.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? T.left -= u : "center" === e.my[0] && (T.left -= u / 2), "bottom" === e.my[1] ? T.top -= d : "center" === e.my[1] && (T.top -= d / 2), T.left += M[0], T.top += M[1], t.support.offsetFractions || (T.left = l(T.left), T.top = l(T.top)), n = {
                    marginLeft: p,
                    marginTop: _
                }, t.each(["left", "top"], function(i, s) {
                    t.ui.position[x[i]] && t.ui.position[x[i]][s](T, {
                        targetWidth: f,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: C,
                        collisionHeight: D,
                        offset: [o[0] + M[0], o[1] + M[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (h = function(t) {
                    var i = m.left - T.left,
                        s = i + f - u,
                        n = m.top - T.top,
                        o = n + g - d,
                        l = {
                            target: {
                                element: b,
                                left: m.left,
                                top: m.top,
                                width: f,
                                height: g
                            },
                            element: {
                                element: c,
                                left: T.left,
                                top: T.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > f && a(i + s) < f && (l.horizontal = "center"), d > g && a(n + o) < g && (l.vertical = "middle"), r(a(i), a(s)) > r(a(n), a(o)) ? l.important = "horizontal" : l.important = "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(T, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        o = s.width,
                        a = t.left - e.collisionPosition.marginLeft,
                        l = n - a,
                        h = a + e.collisionWidth - o - n;
                    e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - n, t.left += l - i) : h > 0 && 0 >= l ? t.left = n : l > h ? t.left = n + o - e.collisionWidth : t.left = n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = r(t.left - a, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        o = e.within.height,
                        a = t.top - e.collisionPosition.marginTop,
                        l = n - a,
                        h = a + e.collisionHeight - o - n;
                    e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - n, t.top += l - i) : h > 0 && 0 >= l ? t.top = n : l > h ? t.top = n + o - e.collisionHeight : t.top = n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = r(t.top - a, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        o = n.offset.left + n.scrollLeft,
                        r = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - r - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        p = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + f + p + e.collisionWidth - r - o, (0 > i || i < a(c)) && (t.left += d + f + p)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + f + p - l, (s > 0 || a(s) < u) && (t.left += d + f + p))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        o = n.offset.top + n.scrollTop,
                        r = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - r - l,
                        d = "top" === e.my[1],
                        f = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (s = t.top + f + p + g + e.collisionHeight - r - o, t.top + f + p + g > c && (0 > s || s < a(c)) && (t.top += f + p + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + f + p + g - l, t.top + f + p + g > u && (i > 0 || a(i) < u) && (t.top += f + p + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, o, r = document.getElementsByTagName("body")[0],
                a = document.createElement("div");
            e = document.createElement(r ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (o in s) e.style[o] = s[o];
            e.appendChild(a), i = r || document.documentElement, i.insertBefore(e, i.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", n = t(a).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
}(jQuery),
function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
}(jQuery),
function(t, e) {
    var i = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                r = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) r.push(o);
            this.handles = n.add(t(r.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e);
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, r, a, l, h, c = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), r = e)
            }), a = this._start(e, r), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = r, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, o;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, o, r = this.options.range,
                a = this.options,
                l = this,
                h = this._animateOff ? !1 : a.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: a.animate
            }))
        },
        _handleEvents: {
            keydown: function(e) {
                var s, n, o, r, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), s = this._start(e, a), s === !1)) return
                }
                switch (r = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        o = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        o = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / i);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / i);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        o = this._trimAlignValue(n + r);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        o = this._trimAlignValue(n - r)
                }
                this._slide(e, a, o)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery),
function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = t.toString(),
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, void this.element.val(this._format(i))
            }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery),
function(t, e) {
    function i() {
        return ++n
    }

    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
    }
    var n = 0,
        o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) {
                return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(this.document[0].activeElement).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s === this.options.active ? !1 : s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, n) {
                var o, r, a, l = t(n).uniqueId().attr("id"),
                    h = t(n).closest("li"),
                    c = h.attr("aria-controls");
                s(n) ? (o = n.hash, r = e.element.find(e._sanitizeSelector(o))) : (a = e._tabId(h), o = "#" + a, r = e.element.find(o), r.length || (r = e._createPanel(a), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), c && h.data("ui-tabs-aria-controls", c), h.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": l
                }), r.attr("aria-labelledby", l)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n.closest("li"),
                r = o[0] === s[0],
                a = r && i.collapsible,
                l = a ? t() : this._getPanelForTab(o),
                h = s.length ? this._getPanelForTab(s) : t(),
                c = {
                    oldTab: s,
                    oldPanel: h,
                    newTab: a ? t() : o,
                    newPanel: l
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, s) : (r.show(), s())
            }
            var o = this,
                r = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), n()), a.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), r.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e) s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                o = this.tabs.eq(e),
                r = o.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(o),
                l = {
                    tab: o,
                    panel: a
                };
            s(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    a.html(t), n._trigger("load", i, l)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery),
function(t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"),
            s = (e.attr("aria-describedby") || "").split(/\s+/),
            n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            })))
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), void(i && this._open(e, t, i)))
        },
        _open: function(i, s, n) {
            function o(t) {
                h.of = t, r.is(":hidden") || r.position(h)
            }
            var r, a, l, h = t.extend({}, this.options.position);
            if (n) {
                if (r = this._find(s), r.length) return void r.find(".ui-tooltip-content").html(n);
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), r = this._tooltip(s), e(s, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : r.position(t.extend({
                    of: s
                }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                    r.is(":visible") && (o(h.of), clearInterval(l))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: r
                }), a = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(r)
                    }
                }, i && "mouseover" !== i.type || (a.mouseleave = "close"), i && "focusin" !== i.type || (a.focusout = "close"), this._on(!0, s, a)
            }
        },
        close: function(e) {
            var s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + s++,
                n = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery), ! function(t) {
    "use strict";
    t(function() {
        t.support.transition = function() {
            var t = function() {
                var t, e = document.createElement("bootstrap"),
                    i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (t in i)
                    if (void 0 !== e.style[t]) return i[t];
            }();
            return t && {
                end: t
            }
        }()
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        i = function(i) {
            t(i).on("click", e, this.close)
        };
    i.prototype.close = function(e) {
        function i() {
            s.trigger("closed").remove()
        }
        var s, n = t(this),
            o = n.attr("data-target");
        o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), s = t(o), e && e.preventDefault(), s.length || (s = n.hasClass("alert") ? n : n.parent()), s.trigger(e = t.Event("close")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.on(t.support.transition.end, i) : i())
    };
    var s = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var s = t(this),
                n = s.data("alert");
            n || s.data("alert", n = new i(this)), "string" == typeof e && n[e].call(s)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = s, this
    }, t(document).on("click.alert.data-api", e, i.prototype.close)
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, i)
    };
    e.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            s = i.data(),
            n = i.is("input") ? "val" : "html";
        t += "Text", s.resetText || i.data("resetText", i[n]()), i[n](s[t] || this.options[t]), setTimeout(function() {
            "loadingText" == t ? i.addClass(e).attr(e, e) : i.removeClass(e).removeAttr(e)
        }, 0)
    }, e.prototype.toggle = function() {
        var t = this.$element.closest('[data-toggle="buttons-radio"]');
        t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("button"),
                o = "object" == typeof i && i;
            n || s.data("button", n = new e(this, o)), "toggle" == i ? n.toggle() : i && n.setState(i)
        })
    }, t.fn.button.defaults = {
        loadingText: "loading..."
    }, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
        var i = t(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle")
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
    };
    e.prototype = {
        cycle: function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        },
        to: function(e) {
            var i = this.getActiveIndex(),
                s = this;
            if (!(e > this.$items.length - 1 || 0 > e)) return this.sliding ? this.$element.one("slid", function() {
                s.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
        },
        pause: function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function(e, i) {
            var s, n = this.$element.find(".item.active"),
                o = i || n[e](),
                r = this.interval,
                a = "next" == e ? "left" : "right",
                l = "next" == e ? "first" : "last",
                h = this;
            if (this.sliding = !0, r && this.pause(), o = o.length ? o : this.$element.find(".item")[l](), s = t.Event("slide", {
                    relatedTarget: o[0],
                    direction: a
                }), !o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var e = t(h.$indicators.children()[h.getActiveIndex()]);
                        e && e.addClass("active")
                    })), t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                    o.addClass(e), o[0].offsetWidth, n.addClass(a), o.addClass(a), this.$element.one(t.support.transition.end, function() {
                        o.removeClass([e, a].join(" ")).addClass("active"), n.removeClass(["active", a].join(" ")), h.sliding = !1, setTimeout(function() {
                            h.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(s), s.isDefaultPrevented()) return;
                    n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return r && this.cycle(), this
            }
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("carousel"),
                o = t.extend({}, t.fn.carousel.defaults, "object" == typeof i && i),
                r = "string" == typeof i ? i : o.slide;
            n || s.data("carousel", n = new e(this, o)), "number" == typeof i ? n.to(i) : r ? n[r]() : o.interval && n.pause().cycle()
        })
    }, t.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var i, s, n = t(this),
            o = t(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")),
            r = t.extend({}, o.data(), n.data());
        o.carousel(r), (s = n.attr("data-slide-to")) && o.data("carousel").pause().to(s).cycle(), e.preventDefault()
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, i), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
    };
    e.prototype = {
        constructor: e,
        dimension: function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        },
        show: function() {
            var e, i, s, n;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (e = this.dimension(), i = t.camelCase(["scroll", e].join("-")), s = this.$parent && this.$parent.find("> .accordion-group > .in"), s && s.length) {
                    if (n = s.data("collapse"), n && n.transitioning) return;
                    s.collapse("hide"), n || s.data("collapse", null)
                }
                this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][i])
            }
        },
        hide: function() {
            var e;
            !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hide"), "hidden"), this.$element[e](0))
        },
        reset: function(t) {
            var e = this.dimension();
            return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
        },
        transition: function(e, i, s) {
            var n = this,
                o = function() {
                    "show" == i.type && n.reset(), n.transitioning = 0, n.$element.trigger(s)
                };
            this.$element.trigger(i), i.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var i = t.fn.collapse;
    t.fn.collapse = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("collapse"),
                o = t.extend({}, t.fn.collapse.defaults, s.data(), "object" == typeof i && i);
            n || s.data("collapse", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.collapse.defaults = {
        toggle: !0
    }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
        var i, s = t(this),
            n = s.attr("data-target") || e.preventDefault() || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(n).data("collapse") ? "toggle" : s.data();
        s[t(n).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(n).collapse(o)
    })
}(window.jQuery), ! function(t) {
    "use strict";

    function e() {
        t(s).each(function() {
            i(t(this)).removeClass("open")
        })
    }

    function i(e) {
        var i, s = e.attr("data-target");
        return s || (s = e.attr("href"), s = s && /#/.test(s) && s.replace(/.*(?=#[^\s]*$)/, "")), i = s && t(s), i && i.length || (i = e.parent()), i
    }
    var s = "[data-toggle=dropdown]",
        n = function(e) {
            var i = t(e).on("click.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function() {
                i.parent().removeClass("open")
            })
        };
    n.prototype = {
        constructor: n,
        toggle: function(s) {
            var n, o, r = t(this);
            if (!r.is(".disabled, :disabled")) return n = i(r), o = n.hasClass("open"), e(), o || n.toggleClass("open"), r.focus(), !1
        },
        keydown: function(e) {
            var n, o, r, a, l;
            if (/(38|40|27)/.test(e.keyCode) && (n = t(this), e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled"))) {
                if (r = i(n), a = r.hasClass("open"), !a || a && 27 == e.keyCode) return 27 == e.which && r.find(s).focus(), n.click();
                o = t("[role=menu] li:not(.divider):visible a", r), o.length && (l = o.index(o.filter(":focus")), 38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).focus())
            }
        }
    };
    var o = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var i = t(this),
                s = i.data("dropdown");
            s || i.data("dropdown", s = new n(this)), "string" == typeof e && s[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o, this
    }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.dropdown-menu", function(t) {
        t.stopPropagation()
    }).on("click.dropdown.data-api", s, n.prototype.toggle).on("keydown.dropdown.data-api", s + ", [role=menu]", n.prototype.keydown)
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    e.prototype = {
        constructor: e,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var e = this,
                i = t.Event("show");
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                var i = t.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), i ? e.$element.one(t.support.transition.end, function() {
                    e.$element.focus().trigger("shown")
                }) : e.$element.focus().trigger("shown")
            }))
        },
        hide: function(e) {
            e && e.preventDefault();
            e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var e = this;
            t(document).on("focusin.modal", function(t) {
                e.$element[0] === t.target || e.$element.has(t.target).length || e.$element.focus()
            })
        },
        escape: function() {
            var t = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                27 == e.which && t.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var e = this,
                i = setTimeout(function() {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function() {
                clearTimeout(i), e.hideModal()
            })
        },
        hideModal: function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.removeBackdrop(), t.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        },
        backdrop: function(e) {
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && i;
                if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one(t.support.transition.end, e) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
        }
    };
    var i = t.fn.modal;
    t.fn.modal = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("modal"),
                o = t.extend({}, t.fn.modal.defaults, s.data(), "object" == typeof i && i);
            n || s.data("modal", n = new e(this, o)), "string" == typeof i ? n[i]() : o.show && n.show()
        })
    }, t.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = t(this),
            s = i.attr("href"),
            n = t(i.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            o = n.data("modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), i.data());
        e.preventDefault(), n.modal(o).one("hide", function() {
            i.focus()
        })
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("tooltip", t, e)
    };
    e.prototype = {
        constructor: e,
        init: function(e, i, s) {
            var n, o, r, a, l;
            for (this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.enabled = !0, r = this.options.trigger.split(" "), l = r.length; l--;) a = r[l], "click" == a ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != a && (n = "hover" == a ? "mouseenter" : "focus", o = "hover" == a ? "mouseleave" : "blur", this.$element.on(n + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(e) {
            return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        },
        enter: function(e) {
            var i, s = t.fn[this.type].defaults,
                n = {};
            return this._options && t.each(this._options, function(t, e) {
                s[t] != e && (n[t] = e)
            }, this), i = t(e.currentTarget)[this.type](n).data(this.type), i.options.delay && i.options.delay.show ? (clearTimeout(this.timeout), i.hoverState = "in", void(this.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show))) : i.show()
        },
        leave: function(e) {
            var i = t(e.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), i.options.delay && i.options.delay.hide ? (i.hoverState = "out", void(this.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide))) : i.hide()
        },
        show: function() {
            var e, i, s, n, o, r, a = t.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), i = this.getPosition(), s = e[0].offsetWidth, n = e[0].offsetHeight, o) {
                    case "bottom":
                        r = {
                            top: i.top + i.height,
                            left: i.left + i.width / 2 - s / 2
                        };
                        break;
                    case "top":
                        r = {
                            top: i.top - n,
                            left: i.left + i.width / 2 - s / 2
                        };
                        break;
                    case "left":
                        r = {
                            top: i.top + i.height / 2 - n / 2,
                            left: i.left - s
                        };
                        break;
                    case "right":
                        r = {
                            top: i.top + i.height / 2 - n / 2,
                            left: i.left + i.width
                        }
                }
                this.applyPlacement(r, o), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(t, e) {
            var i, s, n, o, r = this.tip(),
                a = r[0].offsetWidth,
                l = r[0].offsetHeight;
            r.offset(t).addClass(e).addClass("in"), i = r[0].offsetWidth, s = r[0].offsetHeight, "top" == e && s != l && (t.top = t.top + l - s, o = !0), "bottom" == e || "top" == e ? (n = 0, t.left < 0 && (n = -2 * t.left, t.left = 0, r.offset(t), i = r[0].offsetWidth, s = r[0].offsetHeight), this.replaceArrow(n - a + i, i, "left")) : this.replaceArrow(s - l, s, "top"), o && r.offset(t)
        },
        replaceArrow: function(t, e, i) {
            this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
        },
        setContent: function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function e() {
                var e = setTimeout(function() {
                    i.off(t.support.transition.end).detach()
                }, 500);
                i.one(t.support.transition.end, function() {
                    clearTimeout(e), i.detach()
                })
            }
            var i = this.tip(),
                s = t.Event("hide");
            return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : i.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "Sportpesa ::Football Betting Game")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var e = this.$element[0];
            return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
        },
        tip: function() {
            return this.$tip = this.$tip || t(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(e) {
            var i = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
            i.tip().hasClass("in") ? i.hide() : i.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("tooltip"),
                o = "object" == typeof i && i;
            n || s.data("tooltip", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {
        constructor: e,
        setContent: function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](i), t.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var t, e = this.$element,
                i = this.options;
            return t = ("function" == typeof i.content ? i.content.call(e[0]) : i.content) || e.attr("data-content")
        },
        tip: function() {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var i = t.fn.popover;
    t.fn.popover = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("popover"),
                o = "object" == typeof i && i;
            n || s.data("popover", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(window.jQuery), ! function(t) {
    "use strict";

    function e(e, i) {
        var s, n = t.proxy(this.process, this),
            o = t(t(e).is("body") ? window : e);
        this.options = t.extend({}, t.fn.scrollspy.defaults, i), this.$scrollElement = o.on("scroll.scroll-spy.data-api", n), this.selector = (this.options.target || (s = t(e).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
    }
    e.prototype = {
        constructor: e,
        refresh: function() {
            var e, i = this;
            this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function() {
                var e = t(this),
                    s = e.data("target") || e.attr("href"),
                    n = /^#\w/.test(s) && t(s);
                return n && n.length && [
                    [n.position().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), s]
                ] || null
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).each(function() {
                i.offsets.push(this[0]), i.targets.push(this[1])
            })
        },
        process: function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                s = i - this.$scrollElement.height(),
                n = this.offsets,
                o = this.targets,
                r = this.activeTarget;
            if (e >= s) return r != (t = o.last()[0]) && this.activate(t);
            for (t = n.length; t--;) r != o[t] && e >= n[t] && (!n[t + 1] || e <= n[t + 1]) && this.activate(o[t])
        },
        activate: function(e) {
            var i, s;
            this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), s = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(s).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        }
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("scrollspy"),
                o = "object" == typeof i && i;
            n || s.data("scrollspy", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {
        offset: 10
    }, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            e.scrollspy(e.data())
        })
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e) {
        this.element = t(e)
    };
    e.prototype = {
        constructor: e,
        show: function() {
            var e, i, s, n = this.element,
                o = n.closest("ul:not(.dropdown-menu)"),
                r = n.attr("data-target");
            r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), n.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], s = t.Event("show", {
                relatedTarget: e
            }), n.trigger(s), s.isDefaultPrevented() || (i = t(r), this.activate(n.parent("li"), o), this.activate(i, i.parent(), function() {
                n.trigger({
                    type: "shown",
                    relatedTarget: e
                })
            })))
        },
        activate: function(e, i, s) {
            function n() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), s && s()
            }
            var o = i.find("> .active"),
                r = s && t.support.transition && o.hasClass("fade");
            r ? o.one(t.support.transition.end, n) : n(), o.removeClass("in")
        }
    };
    var i = t.fn.tab;
    t.fn.tab = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("tab");
            n || s.data("tab", n = new e(this)), "string" == typeof i && n[i]()
        })
    }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), t(this).tab("show")
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
    };
    e.prototype = {
        constructor: e,
        select: function() {
            var t = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(t)).change(), this.hide()
        },
        updater: function(t) {
            return t
        },
        show: function() {
            var e = t.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: e.top + e.height,
                left: e.left
            }).show(), this.shown = !0, this
        },
        hide: function() {
            return this.$menu.hide(), this.shown = !1, this
        },
        lookup: function(e) {
            var i;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (i = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, i ? this.process(i) : this)
        },
        process: function(e) {
            var i = this;
            return e = t.grep(e, function(t) {
                return i.matcher(t)
            }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(t) {
            return ~t.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(t) {
            for (var e, i = [], s = [], n = []; e = t.shift();) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? s.push(e) : n.push(e) : i.push(e);
            return i.concat(s, n)
        },
        highlighter: function(t) {
            var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return t.replace(new RegExp("(" + e + ")", "ig"), function(t, e) {
                return "<strong>" + e + "</strong>"
            })
        },
        render: function(e) {
            var i = this;
            return e = t(e).map(function(e, s) {
                return e = t(i.options.item).attr("data-value", s), e.find("a").html(i.highlighter(s)), e[0]
            }), e.first().addClass("active"), this.$menu.html(e), this
        },
        next: function(e) {
            var i = this.$menu.find(".active").removeClass("active"),
                s = i.next();
            s.length || (s = t(this.$menu.find("li")[0])), s.addClass("active")
        },
        prev: function(t) {
            var e = this.$menu.find(".active").removeClass("active"),
                i = e.prev();
            i.length || (i = this.$menu.find("li").last()), i.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
        },
        eventSupported: function(t) {
            var e = t in this.$element;
            return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
        },
        move: function(t) {
            if (this.shown) {
                switch (t.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.prev();
                        break;
                    case 40:
                        t.preventDefault(), this.next()
                }
                t.stopPropagation()
            }
        },
        keydown: function(e) {
            this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
        },
        keypress: function(t) {
            this.suppressKeyPressRepeat || this.move(t)
        },
        keyup: function(t) {
            switch (t.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            t.stopPropagation(), t.preventDefault()
        },
        focus: function(t) {
            this.focused = !0
        },
        blur: function(t) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        },
        click: function(t) {
            t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
        },
        mouseenter: function(e) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
        },
        mouseleave: function(t) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var i = t.fn.typeahead;
    t.fn.typeahead = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("typeahead"),
                o = "object" == typeof i && i;
            n || s.data("typeahead", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function() {
        return t.fn.typeahead = i, this
    }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
        var i = t(this);
        i.data("typeahead") || i.typeahead(i.data())
    })
}(window.jQuery), ! function(t) {
    "use strict";
    var e = function(e, i) {
        this.options = t.extend({}, t.fn.affix.defaults, i), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function() {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = t(e), this.checkPosition()
    };
    e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e, i = t(document).height(),
                s = this.$window.scrollTop(),
                n = this.$element.offset(),
                o = this.options.offset,
                r = o.bottom,
                a = o.top,
                l = "affix affix-top affix-bottom";
            "object" != typeof o && (r = a = o), "function" == typeof a && (a = o.top()), "function" == typeof r && (r = o.bottom()), e = null != this.unpin && s + this.unpin <= n.top ? !1 : null != r && n.top + this.$element.height() >= i - r ? "bottom" : null != a && a >= s ? "top" : !1, this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? n.top - s : null, this.$element.removeClass(l).addClass("affix" + (e ? "-" + e : "")))
        }
    };
    var i = t.fn.affix;
    t.fn.affix = function(i) {
        return this.each(function() {
            var s = t(this),
                n = s.data("affix"),
                o = "object" == typeof i && i;
            n || s.data("affix", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {
        offset: 0
    }, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
        })
    })
}(window.jQuery), ! function(t) {
    var e = function(e, s) {
        if (this.element = t(e), this.format = i.parseFormat(s.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = t(i.template).appendTo("body").on({
                click: t.proxy(this.click, this)
            }), this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on") : !1, this.isInput ? this.element.on({
                focus: t.proxy(this.show, this),
                keyup: t.proxy(this.update, this)
            }) : this.component ? this.component.on("click", t.proxy(this.show, this)) : this.element.on("click", t.proxy(this.show, this)), this.minViewMode = s.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
            case "months":
                this.minViewMode = 1;
                break;
            case "years":
                this.minViewMode = 2;
                break;
            default:
                this.minViewMode = 0
        }
        if (this.viewMode = s.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
            case "months":
                this.viewMode = 1;
                break;
            case "years":
                this.viewMode = 2;
                break;
            default:
                this.viewMode = 0
        }
        this.startViewMode = this.viewMode, this.weekStart = s.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = s.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
    };
    e.prototype = {
        constructor: e,
        show: function(e) {
            this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), !this.isInput;
            var i = this;
            t(document).on("mousedown", function(e) {
                0 == t(e.target).closest(".datepicker").length && i.hide()
            }), this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.element.trigger({
                type: "hide",
                date: this.date
            })
        },
        set: function() {
            var t = i.formatDate(this.date, this.format);
            this.isInput ? this.element.prop("value", t) : (this.component && this.element.find("input").prop("value", t), this.element.data("date", t))
        },
        setValue: function(t) {
            "string" == typeof t ? this.date = i.parseDate(t, this.format) : this.date = new Date(t), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
        },
        place: function() {
            var t = this.component ? this.component.offset() : this.element.offset();
            this.picker.css({
                top: t.top + this.height,
                left: t.left
            })
        },
        update: function(t) {
            this.date = i.parseDate("string" == typeof t ? t : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
        },
        fillDow: function() {
            for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + i.dates.daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + i.dates.monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").append(t)
        },
        fill: function() {
            var t = new Date(this.viewDate),
                e = t.getFullYear(),
                s = t.getMonth(),
                n = this.date.valueOf();
            this.picker.find(".datepicker-days th:eq(1)").text(i.dates.months[s] + " " + e);
            var o = new Date(e, s - 1, 28, 0, 0, 0, 0),
                r = i.getDaysInMonth(o.getFullYear(), o.getMonth());
            o.setDate(r), o.setDate(r - (o.getDay() - this.weekStart + 7) % 7);
            var a = new Date(o);
            a.setDate(a.getDate() + 42), a = a.valueOf();
            for (var l, h, c, u = []; o.valueOf() < a;) o.getDay() === this.weekStart && u.push("<tr>"), l = this.onRender(o), h = o.getFullYear(), c = o.getMonth(), s > c && h === e || e > h ? l += " old" : (c > s && h === e || h > e) && (l += " new"), o.valueOf() === n && (l += " active"), u.push('<td class="day ' + l + '">' + o.getDate() + "</td>"), o.getDay() === this.weekEnd && u.push("</tr>"), o.setDate(o.getDate() + 1);
            this.picker.find(".datepicker-days tbody").empty().append(u.join(""));
            var d = this.date.getFullYear(),
                f = this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
            d === e && f.eq(this.date.getMonth()).addClass("active"), u = "", e = 10 * parseInt(e / 10, 10);
            var p = this.picker.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
            e -= 1;
            for (var g = -1; 11 > g; g++) u += '<span class="year' + (-1 === g || 10 === g ? " old" : "") + (d === e ? " active" : "") + '">' + e + "</span>", e += 1;
            p.html(u)
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault();
            var s = t(e.target).closest("span, td, th");
            if (1 === s.length) switch (s[0].nodeName.toLowerCase()) {
                case "th":
                    switch (s[0].className) {
                        case "switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            this.viewDate["set" + i.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + i.modes[this.viewMode].navFnc].call(this.viewDate) + i.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1)), this.fill(), this.set()
                    }
                    break;
                case "span":
                    if (s.is(".month")) {
                        var n = s.parent().find("span").index(s);
                        this.viewDate.setMonth(n)
                    } else {
                        var o = parseInt(s.text(), 10) || 0;
                        this.viewDate.setFullYear(o)
                    }
                    0 !== this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
                        type: "changeDate",
                        date: this.date,
                        viewMode: i.modes[this.viewMode].clsName
                    })), this.showMode(-1), this.fill(), this.set();
                    break;
                case "td":
                    if (s.is(".day") && !s.is(".disabled")) {
                        var r = parseInt(s.text(), 10) || 1,
                            n = this.viewDate.getMonth();
                        s.is(".old") ? n -= 1 : s.is(".new") && (n += 1);
                        var o = this.viewDate.getFullYear();
                        this.date = new Date(o, n, r, 0, 0, 0, 0), this.viewDate = new Date(o, n, Math.min(28, r), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
                            type: "changeDate",
                            date: this.date,
                            viewMode: i.modes[this.viewMode].clsName
                        })
                    }
            }
        },
        mousedown: function(t) {
            t.stopPropagation(), t.preventDefault()
        },
        showMode: function(t) {
            t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).show()
        }
    }, t.fn.datepicker = function(i, s) {
        return this.each(function() {
            var n = t(this),
                o = n.data("datepicker"),
                r = "object" == typeof i && i;
            o || n.data("datepicker", o = new e(this, t.extend({}, t.fn.datepicker.defaults, r))), "string" == typeof i && o[i](s)
        })
    }, t.fn.datepicker.defaults = {
        onRender: function(t) {
            return ""
        }
    }, t.fn.datepicker.Constructor = e;
    var i = {
        modes: [{
            clsName: "days",
            navFnc: "Month",
            navStep: 1
        }, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {
            clsName: "years",
            navFnc: "FullYear",
            navStep: 10
        }],
        dates: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        isLeapYear: function(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        getDaysInMonth: function(t, e) {
            return [31, i.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
        },
        parseFormat: function(t) {
            var e = t.match(/[.\/\-\s].*?/),
                i = t.split(/\W+/);
            if (!e || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separator: e,
                parts: i
            }
        },
        parseDate: function(t, e) {
            var i, s = t.split(e.separator),
                t = new Date;
            if (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), s.length === e.parts.length) {
                for (var n = t.getFullYear(), o = t.getDate(), r = t.getMonth(), a = 0, l = e.parts.length; l > a; a++) switch (i = parseInt(s[a], 10) || 1, e.parts[a]) {
                    case "dd":
                    case "d":
                        o = i, t.setDate(i);
                        break;
                    case "mm":
                    case "m":
                        r = i - 1, t.setMonth(i - 1);
                        break;
                    case "yy":
                        n = 2e3 + i, t.setFullYear(2e3 + i);
                        break;
                    case "yyyy":
                        n = i, t.setFullYear(i)
                }
                t = new Date(n, r, o, 0, 0, 0)
            }
            return t
        },
        formatDate: function(t, e) {
            var i = {
                d: t.getDate(),
                m: t.getMonth() + 1,
                yy: t.getFullYear().toString().substring(2),
                yyyy: t.getFullYear()
            };
            i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m;
            for (var t = [], s = 0, n = e.parts.length; n > s; s++) t.push(i[e.parts[s]]);
            return t.join(e.separator)
        },
        headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
    };
    i.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + "</table></div></div>"
}(window.jQuery),
function(t) {
    var e = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo ": "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        i = "Microsoft Internet Explorer" == navigator.appName,
        s = window.HTMLCanvasElement,
        n = null;
    t("document").ready(function() {
        var t, e = document.createElement("p"),
            i = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
        document.body.appendChild(e);
        for (var s in i) void 0 !== e.style[s] && (e.style[s] = "rotateX(1deg)", t = window.getComputedStyle(e).getPropertyValue(i[s]));
        document.body.removeChild(e), n = void 0 !== t && 0 < t.length && "none" !== t
    });
    var o = Math.PI,
        r = function(r, a, l) {
            this.animate = function(e) {
                if (this._Before(), typeof e !== l && e) {
                    e = this._Recto;
                    var i = this._Recto_color;
                    switch (this._Recto = this._Verso, this._Color = this._Recto_color = this._Verso_color, this._Verso = e, this._Color_target = this._Verso_color = i, this._Direction) {
                        case "TOP":
                            this._Direction = "BOTTOM";
                            break;
                        case "BOTTOM":
                            this._Direction = "TOP";
                            break;
                        case "LEFT":
                            this._Direction = "RIGHT";
                            break;
                        case "RIGHT":
                            this._Direction = "LEFT"
                    }
                }
                this._noCSS || !n ? (this.initiateFlippy(), this.cvO = document.getElementById("flippy" + this._UID), this.jO.data("_oFlippy_", this), this._Int = setInterval(t.proxy(this.drawFlippy, this), this._Refresh_rate)) : (this.jO.addClass("flippy_active").parent().css({
                    perspective: Math.floor(this._Depth * this._nW) + "px"
                }), this.jO.data("_oFlippy_", this), this._Int = setInterval(t.proxy(this.drawFlippyCSS, this), this._Refresh_rate))
            }, this.drawFlippyCSS = function() {
                this._Ang = "RIGHT" == this._Direction || "TOP" == this._Direction ? this._Ang + this._Step_ang : this._Ang - this._Step_ang;
                var t = "RIGHT" == this._Direction || "LEFT" == this._Direction ? "Y" : "X";
                (("RIGHT" == this._Direction || "TOP" == this._Direction) && 90 < this._Ang && this._Ang <= 90 + this._Step_ang || ("LEFT" == this._Direction || "BOTTOM" == this._Direction) && -90 > this._Ang && this._Ang >= -90 - this._Step_ang) && (this._Midway(), this.jO.css({
                    opacity: this._Color_target_alpha,
                    background: this._Color_target
                }).empty().append(this._Verso), this._Ang = "RIGHT" == this._Direction || "TOP" == this._Direction ? -90 : 90, this._Half = !0), this._Ang = "RIGHT" == this._Direction || "TOP" == this._Direction ? this._Ang > this._Step_ang && this._Half ? this._Ang - this._Step_ang : this._Ang : this._Ang < -this._Step_ang && this._Half ? this._Ang + this._Step_ang : this._Ang, ("RIGHT" == this._Direction || "TOP" == this._Direction) && 0 < this._Ang && this._Half || ("LEFT" == this._Direction || "BOTTOM" == this._Direction) && 0 > this._Ang && this._Half ? (this.jO.removeClass("flippy_active").css({
                    "-webkit-transform": "rotate" + t + "(0deg)",
                    "-moz-transform": "rotate" + t + "(0deg)",
                    "-o-transform": "rotate" + t + "(0deg)",
                    "-ms-transform": "rotate" + t + "(0deg)",
                    transform: "rotate" + t + "(0deg)"
                }).find(".flippy_light").remove(), clearInterval(this._Int), this._Half = !1, this._After()) : (this.jO.css({
                    "-webkit-transform": "rotate" + t + "(" + this._Ang + "deg)",
                    "-moz-transform": "rotate" + t + "(" + this._Ang + "deg)",
                    "-o-transform": "rotate" + t + "(" + this._Ang + "deg)",
                    "-ms-transform": "rotate" + t + "(" + this._Ang + "deg)",
                    transform: "rotate" + t + "(" + this._Ang + "deg)"
                }), this.applyLight())
            }, this.applyLight = function() {
                0 === this.jO.find(".flippy_light").size() ? this.jO.append('<div class="flippy_light"></div>').find(".flippy_light").css({
                    position: "absolute",
                    top: "0",
                    left: "0",
                    "min-width": this._nW + "px",
                    "min-height": this._nH + "px",
                    width: this._nW + "px",
                    height: this._nH + "px",
                    "background-color": "LEFT" == this._Direction && this._Half || "RIGHT" == this._Direction && !this._Half || "TOP" == this._Direction && this._Half || "BOTTOM" == this._Direction && !this._Half ? "#000" : "#FFF",
                    opacity: Math.abs(this._Ang) * this._Light / 90 / 100
                }) : this.jO.find(".flippy_light").css({
                    "background-color": "LEFT" == this._Direction && this._Half || "RIGHT" == this._Direction && !this._Half || "TOP" == this._Direction && this._Half || "BOTTOM" == this._Direction && !this._Half ? "#000" : "#FFF",
                    opacity: Math.abs(this._Ang) * this._Light / 90 / 100
                })
            }, this.initiateFlippy = function() {
                var t;
                switch (this.jO.addClass("flippy_active").empty().css({
                    opacity: this._Color_alpha,
                    background: "none",
                    position: "relative",
                    overflow: "visible"
                }), this._Direction) {
                    case "TOP":
                        this._CenterX = Math.sin(o / 2) * this._nW * this._Depth, this._CenterY = this._H / 2, t = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + (this._W + 2 * this._CenterX) + '" height="' + this._H + '"></canvas>', this.new_flippy(t), this.jO.find("#flippy" + this._UID).css({
                            position: "absolute",
                            top: "0",
                            left: "-" + this._CenterX + "px"
                        });
                        break;
                    case "BOTTOM":
                        this._CenterX = Math.sin(o / 2) * this._nW * this._Depth, this._CenterY = this._H / 2, t = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + (this._W + 2 * this._CenterX) + '" height="' + this._H + '"></canvas>', this.new_flippy(t), this.jO.find("#flippy" + this._UID).css({
                            position: "absolute",
                            top: "0",
                            left: "-" + this._CenterX + "px"
                        });
                        break;
                    case "LEFT":
                        this._CenterY = Math.sin(o / 2) * this._nH * this._Depth, this._CenterX = this._W / 2, t = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + this._W + '" height="' + (this._H + 2 * this._CenterY) + '"></canvas>', this.new_flippy(t), this.jO.find("#flippy" + this._UID).css({
                            position: "absolute",
                            top: "-" + this._CenterY + "px",
                            left: "0"
                        });
                        break;
                    case "RIGHT":
                        this._CenterY = Math.sin(o / 2) * this._nH * this._Depth, this._CenterX = this._W / 2, t = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + this._W + '" height="' + (this._H + 2 * this._CenterY) + '"></canvas>', this.new_flippy(t), this.jO.find("#flippy" + this._UID).css({
                            position: "absolute",
                            top: "-" + this._CenterY + "px",
                            left: "0"
                        })
                }
            }, this.drawFlippy = function() {
                this._Ang += this._Step_ang, 90 < this._Ang && this._Ang <= 90 + this._Step_ang && (this._Midway(), this.jO.css({
                    opacity: this._Color_target_alpha
                })), this._Ang = this._Ang > 180 + this._Step_ang ? this._Ang - (180 + this._Step_ang) : this._Ang;
                var t = this._Ang / 180 * o;
                if (null !== this.cvO) {
                    i && !s && G_vmlCanvasManager.initElement(this.cvO);
                    var e = this.cvO.getContext("2d");
                    e.clearRect(0, 0, this._W + 2 * this._CenterX, this._H + 2 * this._CenterY), e.beginPath();
                    var n = Math.sin(t) * this._H * this._Depth,
                        r = Math.sin(t) * this._W * this._Depth;
                    switch (this._Direction) {
                        case "LEFT":
                            r = Math.cos(t) * (this._W / 2), e.fillStyle = 90 < this._Ang ? this.changeColor(this._Color_target, Math.floor(Math.sin(t) * this._Light)) : this.changeColor(this._Color, -Math.floor(Math.sin(t) * this._Light)), e.moveTo(this._CenterX - r, this._CenterY + n), e.lineTo(this._CenterX + r, this._CenterY - n), e.lineTo(this._CenterX + r, this._CenterY + this._H + n), e.lineTo(this._CenterX - r, this._CenterY + this._H - n), e.lineTo(this._CenterX - r, this._CenterY), e.fill();
                            break;
                        case "RIGHT":
                            r = Math.cos(t) * (this._W / 2), e.fillStyle = 90 < this._Ang ? this.changeColor(this._Color_target, -Math.floor(Math.sin(t) * this._Light)) : this.changeColor(this._Color, Math.floor(Math.sin(t) * this._Light)), e.moveTo(this._CenterX + r, this._CenterY + n), e.lineTo(this._CenterX - r, this._CenterY - n), e.lineTo(this._CenterX - r, this._CenterY + this._H + n), e.lineTo(this._CenterX + r, this._CenterY + this._H - n), e.lineTo(this._CenterX + r, this._CenterY), e.fill();
                            break;
                        case "TOP":
                            n = Math.cos(t) * (this._H / 2), e.fillStyle = 90 < this._Ang ? this.changeColor(this._Color_target, -Math.floor(Math.sin(t) * this._Light)) : this.changeColor(this._Color, Math.floor(Math.sin(t) * this._Light)), e.moveTo(this._CenterX + r, this._CenterY - n), e.lineTo(this._CenterX - r, this._CenterY + n), e.lineTo(this._CenterX + this._W + r, this._CenterY + n), e.lineTo(this._CenterX + this._W - r, this._CenterY - n), e.lineTo(this._CenterX, this._CenterY - n), e.fill();
                            break;
                        case "BOTTOM":
                            n = Math.cos(t) * (this._H / 2), e.fillStyle = 90 < this._Ang ? this.changeColor(this._Color_target, Math.floor(Math.sin(t) * this._Light)) : this.changeColor(this._Color, -Math.floor(Math.sin(t) * this._Light)), e.moveTo(this._CenterX + r, this._CenterY + n), e.lineTo(this._CenterX - r, this._CenterY - n), e.lineTo(this._CenterX + this._W + r, this._CenterY - n), e.lineTo(this._CenterX + this._W - r, this._CenterY + n), e.lineTo(this._CenterX, this._CenterY + n), e.fill()
                    }
                    180 < this._Ang ? (this.jO.removeClass("flippy_active").css({
                        background: this._Color_target
                    }).append(this._Verso).removeClass("flippy_container").find(".flippy").remove(), clearInterval(this._Int), this._After()) : this._During()
                }
            }, this.new_flippy = function(t) {
                if (i && !s) {
                    this.jO.addClass("flippy_container").attr("id", "flippy_container" + this._UID);
                    var e = document.getElementById("flippy_container" + this._UID);
                    t = document.createElement(t), e.appendChild(t)
                } else this.jO.append(t)
            }, this.convertColor = function(t) {
                return t = e.hasOwnProperty(t) ? e[t] : t, /^transparent$/i.test(t) ? "#ffffff" : "rgb(" == t.substr(0, 4) ? ["#", this.toHex(t.substr(4, t.length).split(",")[0] >>> 0), this.toHex(t.substr(3, t.length).split(",")[1] >>> 0), this.toHex(t.substr(3, t.length - 4).split(",")[2] >>> 0)].join("") : "rgba(" == t.substr(0, 5) ? ["#", this.toHex(t.substr(5, t.length).split(",")[0] >>> 0), this.toHex(t.substr(3, t.length).split(",")[1] >>> 0), this.toHex(t.substr(3, t.length - 4).split(",")[2] >>> 0)].join("") : t
            }, this.toHex = function(t) {
                for (var e = []; 16 < Math.floor(t);) e.push(t % 16), t = Math.floor(t / 16);
                var i;
                switch (t) {
                    case 10:
                        t = "A";
                        break;
                    case 11:
                        t = "B";
                        break;
                    case 12:
                        t = "C";
                        break;
                    case 13:
                        t = "D";
                        break;
                    case 14:
                        t = "E";
                        break;
                    case 15:
                        t = "F";
                        break;
                    default:
                        t = "" + t
                }
                for (i = e.length - 1; i >= 0; i--) switch (e[i]) {
                    case 10:
                        t += "A";
                        break;
                    case 11:
                        t += "B";
                        break;
                    case 12:
                        t += "C";
                        break;
                    case 13:
                        t += "D";
                        break;
                    case 14:
                        t += "E";
                        break;
                    case 15:
                        t += "F";
                        break;
                    default:
                        t += "" + e[i]
                }
                return 1 == t.length ? "0" + t : t
            }, this.changeColor = function(t, e) {
                var i = t.substr(1, 2),
                    s = t.substr(3, 2),
                    n = t.substr(5, 2),
                    i = 255 < parseInt(i, 16) + e ? 255 : parseInt(i, 16) + e,
                    s = 255 < parseInt(s, 16) + e ? 255 : parseInt(s, 16) + e,
                    n = 255 < parseInt(n, 16) + e ? 255 : parseInt(n, 16) + e,
                    i = 0 >= i ? "00" : this.toHex(i),
                    s = 0 >= s ? "00" : this.toHex(s),
                    n = 0 >= n ? "00" : this.toHex(n);
                return "#" + i + s + n
            }, a = t.extend({
                step_ang: 10,
                refresh_rate: 15,
                duration: 300,
                depth: .12,
                color_target: "white",
                light: 60,
                content: "",
                direction: "LEFT",
                noCSS: !1,
                onStart: function() {},
                onMidway: function() {},
                onAnimation: function() {},
                onFinish: function() {}
            }, a), this._Half = !1, this._UID = Math.floor(1e6 * Math.random()), this.jO = r, this._noCSS = a.noCSS, this._Ang = 0, this._Step_ang = 200 * (a.refresh_rate / a.duration), this._Refresh_rate = a.refresh_rate, this._Duration = a.duration, this._Depth = a.depth, this._Color_target_is_rgba = "rgba(" == a.color_target.substr(0, 5), this._Color = r.css("background-color"), this._Color_target_alpha = this._Color_target_is_rgba ? a.color_target.substr(3, a.color_target.length - 4).split(",")[3] >>> 0 : 1, this._Color_alpha = /^transparent$/i.test("" + this._Color) ? 0 : "rgba(" == this._Color.substr(0, 5) ? this._Color.substr(3, this._Color.length - 4).split(",")[3] >>> 0 : 1, this._Color_target = this.convertColor(a.color_target), this._Color = this.convertColor(this._Color), this._Direction = a.direction, this._Light = a.light, this._Content = "object" == typeof a.content ? a.content.html() : a.content, this._Recto_color = this._Color, this._Verso_color = this._Color_target, this._Recto = a.recto !== l ? a.recto : this.jO.html(), this._Verso = a.verso !== l ? a.verso : this._Content, this._Before = a.onStart, this._During = a.onAnimation, this._Midway = a.onMidway, this._After = a.onFinish, this._nW = this.jO.width(), this._nH = this.jO.height(), this._W = this.jO.outerWidth(), this._H = this.jO.outerHeight(), a = null
        };
    t.fn.flippy = function(e) {
        return this.each(function() {
            $t = t(this), $t.hasClass("flippy_active") || new r($t, e).animate()
        })
    }, t.fn.flippyReverse = function() {
        return this.each(function() {
            $t = t(this), $t.hasClass("flippy_active") || $t.data("_oFlippy_").animate(!0)
        })
    }
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, s, n) {
            return jQuery.easing[jQuery.easing.def](t, e, i, s, n)
        },
        easeInQuad: function(t, e, i, s, n) {
            return s * (e /= n) * e + i
        },
        easeOutQuad: function(t, e, i, s, n) {
            return -s * (e /= n) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, s, n) {
            return s * (e /= n) * e * e + i
        },
        easeOutCubic: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, s, n) {
            return -s * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, s, n) {
            return s * (e /= n) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, s, n) {
            return s * ((e = e / n - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, s, n) {
            return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function(t, e, i, s, n) {
            return s * Math.sin(e / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
        },
        easeInExpo: function(t, e, i, s, n) {
            return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeOutExpo: function(t, e, i, s, n) {
            return e == n ? i + s : s * (-Math.pow(2, -10 * e / n) + 1) + i
        },
        easeInOutExpo: function(t, e, i, s, n) {
            return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, s, n) {
            return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, s, n) {
            return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, s, n) {
            return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (r || (r = .3 * n), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / r)) + i
        },
        easeOutElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == e) return i;
            if (1 == (e /= n)) return i + s;
            if (r || (r = .3 * n), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * n - o) * (2 * Math.PI) / r) + s + i
        },
        easeInOutElastic: function(t, e, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == e) return i;
            if (2 == (e /= n / 2)) return i + s;
            if (r || (r = n * (.3 * 1.5)), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return 1 > e ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / r)) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * (2 * Math.PI) / r) * .5 + s + i
        },
        easeInBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * (e /= n) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * ((e = e / n - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, s, n, o) {
            return void 0 == o && (o = 1.70158), (e /= n / 2) < 1 ? s / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + i : s / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, s, n) {
            return s - jQuery.easing.easeOutBounce(t, n - e, 0, s, n) + i
        },
        easeOutBounce: function(t, e, i, s, n) {
            return (e /= n) < 1 / 2.75 ? s * (7.5625 * e * e) + i : 2 / 2.75 > e ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, s, n) {
            return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, s, n) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, s, n) + .5 * s + i
        }
    }), eval(function(t, e, i, s, n, o) {
        if (n = function(t) {
                return (e > t ? "" : n(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
            }, !"".replace(/^/, String)) {
            for (; i--;) o[n(i)] = s[i] || n(i);
            s = [function(t) {
                return o[t]
            }], n = function() {
                return "\\w+"
            }, i = 1
        }
        for (; i--;) s[i] && (t = t.replace(new RegExp("\\b" + n(i) + "\\b", "g"), s[i]));
        return t
    }("(q($){f 2P=0,5G=[];$.2o.3G=q(D){Z c.3H(q(){l($(c).5H('5I')==1W){$(c).5H('5I',2P);5G.5J(2K $3e(c,D,2P));++2P}})};f 5K={1f:1,2L:8d,47:'',48:S,49:S,2z:S,N:'',k:1w,8e:1w,1m:1w,1s:1w,1N:1w,3f:1w,3g:'4V',B:1w,O:1w,1y:1,19:R,2X:R,4a:1w,5L:R,4b:R,3h:R,4c:R,4d:R,2p:R,4e:R,3i:R,3I:R,3J:1w,2q:0.75,2a:1L,2r:2Q,4W:1w,4X:1w,8f:20,4Y:'r',3j:R,2M:R,2R:R,4Z:'4f',2Y:R,51:'4f',1E:R,2s:{},2A:R,3k:R,3l:R,4g:0,2b:0,2Z:S,5M:R,4h:[],5N:1w,5O:1w,3K:S,4i:'4j',52:1w,5P:'<a 1O=\"#\" 1u=\"2c\">8g</a>'+'<a 1O=\"#\" 1u=\"23\">8h</a>'+'<2S 1u=\"1B\"></2S>'+'<1p 1u=\"4k\">'+'<1p 1u=\"1K\">'+'<a 1O=\"\"><P 1u=\"1a\" /></a>'+'<1p 1u=\"2t\"></1p>'+'</1p>'+'</1p>'};$.3G=q(3L,D,5Q){c.k=$(3L);c.31=1w;c.g=$.1P({},5K,D||{});c.2P=5Q;c.5R()};f $3e=$.3G;$3e.2o=$3e.53={};$3e.2o.1P=$.1P;$3e.2o.1P({5R:q(){f h=c;l(c.g.4e){f C=$(32).C();f H=$(32).H();c.k.C(C).H(H);c.k.w({'2B':'54','s':0,'r':0,'z-5S':5T});c.g.2Z=R;$('55').w({'8i':'8j'})}c.g.B=3m(c.k.w('C'));c.g.O=3m(c.k.w('H'));l(!c.g.B||!c.g.O){8k.8l('8m 5U H 4l 5V 1w! - 8n 8o');Z R}l(c.g.52){c.k.3n('3G-'+c.g.52)}c.k.1F(c.g.5P);c.g.N=c.5W(c.g.L);l(c.g.1f>=2)c.g.1f=1.3;l(c.g.1f<=0)c.g.1f=1;c.k.j('.1B').1q();c.k.j('.2t').1q();c.k.j('.2c').1q();c.k.j('.23').1q();c.k.j('.4k').C(c.g.B);c.k.j('.4k').H(c.g.O);f 3J=c.g.3J?c.g.3J:c.g.B;c.k.j('.2t').C(3J);f 4m=' 33',u=0;c.g.1m=2K 4n();f 56=q(2T,W,24,2z,26){h.g.1m.5J([W,2T,24,2z,26]);l(h.g.4b){f 4o='';l(h.g.B>h.g.O){4o='H=\"1v\"'}13{4o='C=\"1v\"'}h.k.j('.1B').1F('<2S 1u=\"1X'+4m+'\" 3o=\"'+(u-1)+'\" 4p=\"57'+u+'58'+h.2P+'\">'+'<P W=\"'+W+'\" '+4o+' />'+'</2S> ')}13{h.k.j('.1B').1F('<2S 1u=\"1X'+4m+'\" 3o=\"'+(u-1)+'\" 4p=\"57'+u+'58'+h.2P+'\">'+u+'</2S> ')}4m=''};l(c.g.3i){$.8p({4q:'8q',5X:c.g.3i,8r:R,8s:'3i',8t:q(3i){f 2C=$('<2C></2C>');$(3i).j('3G 8u').3H(q(){++u;f 2T=($(c).j('2T').3p())?$(c).j('2T').3p():'#';f W=$(c).j('1K').3p();f 24=$(c).j('1K').U('4q');f 2z=$(c).j('2z').3p();f 26=($(c).j('26').3p())?$(c).j('26').3p():'4V';56(2T,W,24,2z,26)})}})}13 l(c.g.8v){}13{c.k.j('2C 3q').3H(q(){++u;f 2T=($(c).j('a').1z)?$(c).j('a').U('1O'):'#';f W=$(c).j('P').U('W');f 24=$(c).j('P').U('1u');f 2z=$(c).j('.8w').34();f 26=($(c).j('a').1z&&$(c).j('a').U('26'))?$(c).j('a').U('26'):'4V';56(2T,W,24,2z,26)})}l(h.g.4b&&!h.g.4e){h.g.3h={V:0.3};h.g.4c={V:0.5};h.g.4d={V:1};h.k.j('.1B').3n('2N');f 4r=(u+1)*h.k.j('.2N .1X').C();h.k.j('.2N').C(4r);h.k.w({H:h.k.H()+h.k.j('.1B').H()});h.k.1F('<1p 1u=\"5Y\"></1p>');f 5Z=h.k.j('.1B').8x();h.k.j('.1B').28();h.k.j('.5Y').C(h.g.B).1F(5Z);f 59=0,B=c.g.B,O=c.g.O,3M=0,2N=h.k.j('.2N'),5a=0,60=h.k.3r().s;2N.j('.1X').3H(q(){59+=$(c).8y()});2N.C(59+'11');3M=2N.C();4s=c.g.B;4s=B-1v;l(4r>h.g.B){h.k.8z(q(e){5a=h.k.3r().r+90;f x=e.8A,y=e.8B,35=0;x=x-5a;y=y-60;61=3M-4s;35=-((61*x)/4s);l(35>0)35=0;l(35<-(3M-B))35=-(3M-B);l(y>O){2N.w({r:35})}})}h.k.j('.8C').w({'r':10});l(4r<h.g.B){h.k.j('.1B').C('36');h.k.j('.8D').1q();f 1Q='.1B';2D(h.g.4Y){J'4f':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({'r':18});K;J'2d':h.k.j(1Q).w({'r':'36','2d':'-8E'});K;J'r':h.k.j(1Q).w({'r':'8F'});K}}}13{f 1Q='.1B';l(h.g.3I){h.k.j('.1B').3n('5b').5c('1B');1Q='.5b'}2D(h.g.4Y){J'4f':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({'r':18});K;J'2d':h.k.j(1Q).w({'r':'36','2d':'62'});K;J'r':h.k.j(1Q).w({'r':'62'});K}l(!h.g.3I){l(h.k.j('.1B').H()>20){h.k.j('.1B').1q()}}}c.k.j('2C').1q();l(c.g.5L)c.g.1m.63(q(a,b){Z E.1n()-0.5});c.g.1s=c.g.1m[0][0];c.g.1N=c.g.1m[0][1];c.g.3f=c.g.1m[0][3];c.g.3g=c.g.1m[0][4];l(c.g.1m.1z>1){c.k.j('.2c').2O(q(){l(h.g.19==R){h.g.1y-=2;l(h.g.1y==-2){h.g.1y=h.g.1m.1z-2}13 l(h.g.1y==-1){h.g.1y=h.g.1m.1z-1}h.4t(h.g.1y)}Z R});c.k.j('.23').2O(q(){h.4t(h.g.1y);Z R});h.k.j('.23, .2c').4u('5d',h.g.5N);h.k.j('.23, .2c').4u('64',h.g.5O);c.k.j('.1X').3s(q(){l($(c).U('1u')!='1X 33'){l(h.g.4c){$(c).1R().I(h.g.4c,2Q)}}},q(){l($(c).U('1u')!='1X 33'){l(h.g.3h){$(c).1R().I(h.g.3h,1S)}}});c.k.j('.1X').2O(q(){l($(c).U('1u')!='1X 33'){f 4v=3t($(c).U('3o'));h.4t(4v)}Z R});l(h.g.3h){c.k.j('.1X').w(h.g.3h)}l(h.g.4d){c.k.j('.1X:8G(0)').w(h.g.4d)}l(h.g.3j&&h.g.3I){f 3j=$('<1p 1u=\"4w\"><2C></2C></1p>');1h(f i=0;i<c.g.1m.1z;i++){f 3q=$('<3q></3q>');f P=$('<P />');P.U('W',c.g.1m[i][0]);3q.1F(P);3j.j('2C').1F(3q)}f 65=3t(c.g.1m.1z*1v);3j.j('2C').C(65);$(1Q).1F(3j);h.k.j(1Q).j('.1X').8H(q(){f 66=3m(h.k.j(1Q).3r().r);f 67=3m($(c).3r().r);f 68=(67-66)-43;f 3o=3t($(c).U('3o'));f 8I=h.k.j('.8J P').U('W');f 69=-(3o*1v);h.k.j('.4w').j('2C').I({r:69},{4x:1L,3N:R,L:'6a'});h.k.j('.4w').1T(1,1).I({r:68},{4x:1L,3N:R})});h.k.j(1Q).64(q(){$('.4w').I({V:'1q'},{4x:1L,3N:R})})}}l(h.g.2M){h.6b()}l(h.g.2Y){h.6c()}l(h.g.1E&&h.g.3K){h.6d()}l(h.g.2p){h.2p()}l(h.g.5M){h.6e()}c.6f()},6f:q(){f h=c;f 2E=$('<1p 1u=\"2E\">8K</1p>');c.k.1F(2E);f t=c.g.1m.1z;f u=0;$.3H(c.g.1m,q(i){f 6g=c;f 2E=$('<2S 1u=\"4y\"></2S>');2E.w({2B:'54',s:'-8L'});h.k.1F(2E);f P=2K 8M();$(P).8N(q(){++u;l(u==t){h.k.j('.2E').28();h.k.j('.4y').28();h.6h()}}).8O(q(){h.k.j('.2E, .4y, .1X, .23, .2c').28();h.k.34('<p 2e=\"8P:8Q;4z:8R;\">8S 2E 6i. 8T 5U 8U 6i 8V 8W 8X.</p>')}).U('W',6g[0])})},6h:q(){f h=c;f 5e=R;l(c.g.48||c.g.4b)c.k.j('.1B').3O(1S);l(c.g.3I)c.k.j('.5b').3O(1S);l(c.g.2z)c.k.j('.2t').T();l(c.g.49){c.k.j('.2c').3O(1S);c.k.j('.23').3O(1S)}l(h.g.3K){h.3P()}h.6j();h.1Y();h.k.j('.1K a P').U({'W':h.g.1s});4A=h.k.j('.1K a');4A=h.4B(4A);4A.j('P').3O(8Y);h.3Q();h.5f();l(h.g.3K){h.6k()}f 5g=q(){l(h.g.2Z){5e=S;h.g.2X=S;h.2F(S);h.5h()}};h.k.5d(5g);h.k.j('.23').5d(5g);l(h.g.1m.1z>1&&!5e){l(h.g.3K){h.31=3R(q(){h.4C()},h.g.2L)}}13{h.k.j('.2E, .4y, .1X, .23, .2c').28()}l($.6l(h.g.4W))h.g.4W(h)},4t:q(4v){l(c.g.19==R){c.g.2b=0;c.k.j('.n').1R();c.2F(S);c.g.1y=E.6m(4v);c.k.j('.1K a').U({'1O':c.g.1N});c.k.j('.1a').U({'W':c.g.1s});c.k.j('.n').28();c.4C()}},4C:q(){f h=c;3S=['6n','6o','6p','6q','6r','6s','6t','6u','6v','6w','6x','6y','6z','6A','6B','6C','6D','6E','6F','6G','6H','6I','6J','6K','6L','6M','6N','6O','6P','6Q','6R','6S','6T','6U','6V'];l(h.g.1E)h.6W();24=(c.g.47==''&&c.g.1m[c.g.1y][2])?c.g.1m[c.g.1y][2]:(c.g.47==''?'3a':c.g.47);l(24=='8Z'){l(!c.g.4a){3S.63(q(){Z 0.5-E.1n()});c.g.4a=3S}24=c.g.4a[c.g.1y]}13 l(24=='1n'){f 6X=3t(E.1n()*3S.1z);24=3S[6X]}13 l(h.g.4h.1z>0){f 6Y=h.g.4h.1z;l(c.g.3u==1W){c.g.3u=0}24=h.g.4h[c.g.3u];++c.g.3u;l(c.g.3u>=6Y)c.g.3u=0}2D(24){J'6n':c.5i();K;J'6o':c.5i({1n:S});K;J'6p':c.6Z();K;J'6q':c.5j();K;J'6r':c.5j({1n:S});K;J'6s':c.71();K;J'6t':c.72();K;J'6u':c.73();K;J'6v':c.5k();K;J'6w':c.5k({1n:S});K;J'6x':c.5l();K;J'6y':c.74();K;J'6z':c.76();K;J'6A':c.77();K;J'6B':c.78();K;J'6C':c.5m({H:S});K;J'6D':c.5m({H:R,F:2u,1b:50});K;J'6E':c.3T({2v:'s'});K;J'6F':c.3T({2v:'3b'});K;J'6G':c.3T({2v:'2d',t:5});K;J'6H':c.3T({2v:'r',t:5});K;J'6I':c.79();K;J'91':c.7a();K;J'6J':c.7b();K;J'6K':c.7c();K;J'6L':c.7d();K;J'6M':c.7e();K;J'6N':c.7f();K;J'6O':c.7g();K;J'6P':c.5n({2v:'s'});K;J'6Q':c.5n({2v:'3b'});K;J'6R':c.7h();K;J'6S':c.5o();K;J'6T':c.5o({L:'5p'});K;J'6U':c.7i();K;J'6V':c.7j();K;3a:c.5l();K}},5i:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N=='')?'3c':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=c.g.O+1L;f 1g=c.g.O+1L;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X)+(X*5q);f 18=-h.g.B;f 1r=-(A*X);f 1o=-(v*14);f Y=(A*X);f 17=(v*14);f n=c.1x();n.1q();f G=50*(i);l(D.1n){G=40*(14);n.w({r:18+'11',s:1c+'11',C:v,H:A})}13{F=1S;n.w({r:(c.g.B)+(v*i),s:c.g.O+(A*i),C:v,H:A})}c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.T().1b(G).I({s:Y+'11',r:17+'11'},F,L,Q);l(D.1n){n.j('P').w({r:1o+1v,s:1r+50});n.j('P').1b(G+(F/2)).I({r:1o,s:1r},5T,'5p')}13{n.j('P').w({r:1o,s:1r});n.j('P').1b(G+(F/2)).1T(1v,0.5).1T(2Q,1)}X++;l(X==1j){X=0;14++}}},6Z:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/15));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:c.g.B+1v,s:0,C:v,H:A});n.j('P').w({r:-(v*i)});c.1d(n);f G=80*(i);f Q=(i==(t-1))?q(){h.1k()}:'';n.T().1b(G).I({s:Y,r:17},F,L);n.j('P').1q().1b(G+1v).I({V:'T'},F+2Q,L,Q)}},5j:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N=='')?'4D':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=c.g.B/16;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18+'11',s:1c+'11',C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;l(D.1n){F=(2u*(h.3V(2)+1))/c.g.1f;Y=1c;17=18;G=E.M(30*h.3V(30))}l(D.1n&&i==(t-1)){F=2u*3;G=30*30}f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'1q',s:Y+'11',r:17+'11'},F,L,Q);X++;l(X==1j){X=0;14++}}},71:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+'11',s:1c+'11',C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;G=(i==(t-1))?(t*50):G;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'1q'},F,L,Q);X++;l(X==1j){X=0;14++}}},7a:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'7k':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f u=-1;1h(i=0;i<t;i++){l(14%2!=0){l(X==0){u=u+1j+1}u--}13{l(14>0&&X==0){u=u+2}u++}1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+'11',s:1c+'11',C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);n.T();f G=(50*i);f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({C:'+=2G',H:'+=2G',s:'-=7l',r:'-=7l',V:'1q'},F,L,Q);X++;l(X==1j){X=0;14++}}},72:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'3d':c.g.N;f F=7m/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=E.M(c.g.B/6);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18,s:1c,C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'1q',C:'1q',H:'1q',s:1c+(v*1.5),r:18+(A*1.5)},F,L,Q);X++;l(X==1j){X=0;14++}}},73:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'3c':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/7));f v=(c.g.B);f A=E.M(c.g.O/t);1h(i=0;i<t;i++){f 17=(i%2==0?'':'')+v;f Y=(i*A);f n=c.1x();n.w({r:17+'11',s:Y+'11',C:v,H:A});n.j('P').w({r:0,s:-Y});c.1d(n);f G=90*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'T',s:Y,r:0},F,L,Q)}},5k:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-50,C:v,H:A});n.j('P').w({r:-(v*i),s:0});c.1d(n);l(D.1n){f 1n=c.3V(t);f G=50*1n;G=(i==(t-1))?(50*t):G}13{f G=70*(i);F=F-(i*2)}f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'T',s:Y+'11',r:17+'11'},F,L,Q)}},5l:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'7n':c.g.N;f F=7m/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f Y=0;f 1c=A;f 5r=v*i;f n=c.1x();n.w({r:5r,s:1c,H:A,C:v});n.j('P').w({r:-(5r)});c.1d(n);f 1n=c.3V(t);f G=30*1n;f Q=(i==(t-1))?q(){h.1k()}:'';n.T().1b(G).I({s:Y},F,L,Q)}},74:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=7o/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=2;1h(i=0;i<t;i++){f 1c=0;f 18=0;f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.I({V:'T',r:0,s:0},F,L,Q)}},76:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=1S/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=4;1h(i=0;i<t;i++){l(i==0){f 1c='-2G';f 18='-2G'}13 l(i==1){f 1c='-2G';f 18='2G'}13 l(i==2){f 1c='2G';f 18='-2G'}13 l(i==3){f 1c='2G';f 18='2G'}f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.I({V:'T',r:0,s:0},F,L,Q)}},77:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-c.g.O,C:v,H:A});n.j('P').w({r:-(v*i),s:0});c.1d(n);f G;l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}G=G/2.5;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({s:Y+'11',r:17+'11',V:'T'},F,L,Q)}},78:q(D){f h=c;f D=$.1P({},{H:R},D||{});c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j('P').w({r:-(v*i),s:0});c.1d(n);f G;l(!D.H){l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}f Q=(i==(t-1))?q(){h.1k()}:''}13{l(i<=((t/2)-1)){G=1L+(i*1L)}13 l(i>((t/2)-1)){G=(((t/2)-i)*1L)+(t*1v)}f Q=(i==(t/2))?q(){h.1k()}:''}G=G/2.5;l(!D.H){n.1b(G).I({V:'T',s:Y+'11',r:17+'11',C:'T'},F,L,Q)}13{F=F+(i*2);f L='1M';n.1b(G).I({V:'T',s:Y+'11',r:17+'11',H:'T'},F,L,Q)}}},5m:q(D){f h=c;f D=$.1P({},{H:S,F:1S,1b:1v},D||{});c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=D.F/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j('P').w({r:-(v*i),s:0});c.1d(n);f G=D.1b*i;f Q=(i==(t-1))?q(){h.1k()}:'';l(!D.H){n.1b(G).I({V:'T',s:Y+'11',r:17+'11',C:'T'},F,L,Q)}13{f L='1M';n.1b(G).I({V:'T',s:Y+'11',r:17+'11',H:'T'},F,L,Q)}}},3T:q(D){f h=c;f D=$.1P({},{2v:'s',4E:'4F',t:7},D||{});c.g.19=S;f L=(c.g.N=='')?'4G':c.g.N;f F=92/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});c.k.j('.1a').1q();f t=D.t;1h(i=0;i<t;i++){2D(D.2v){3a:J's':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J'3b':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=A;f 2U=1C;f 3w=-A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J'2d':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K;J'r':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=-v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K}2D(D.4E){J'7q':3a:f G=(i%2==0)?0:5q;K;J'1n':f G=30*(E.1n()*30);K;J'4F':f G=i*1v;K}f n=c.1U(1i);n.j('P').w({r:1o,s:1r});n.w({s:1Z,r:1C,C:v,H:A});c.1d(n);n.T();n.1b(G).I({s:3v,r:2U},F,L);f 2f=c.1x();2f.j('P').w({r:1o,s:1r});2f.w({s:3w,r:3x,C:v,H:A});c.1d(2f);2f.T();f Q=(i==(t-1))?q(){h.1k()}:'';2f.1b(G).I({s:3y,r:3z},F,L,Q)}},79:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 4H=2K 4n;f 3A=2K 4n;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));4H[i]=[1c,18];X++;l(X==1j){X=0;14++}}X=0;14=0;1h(i=0;i<t;i++){3A[i]=i};f 3A=h.7r(3A);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c;f 17=18;1c=4H[3A[i]][0];18=4H[3A[i]][1];f n=c.1x();n.w({r:18+'11',s:1c+'11',C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);f G=30*(E.1n()*30);l(i==(t-1))G=30*30;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({V:'T',s:Y+'11',r:17+'11'},F,L,Q);X++;l(X==1j){X=0;14++}}},7b:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'3c':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10))*2;f v=E.M(c.g.B/t)*2;f A=(c.g.O)/2;f 14=0;1h(i=0;i<t;i++){4I=(i%2)==0?S:R;f 1H=(v*(14));f 1I=(4I)?-h.g.O:h.g.O;f 2g=(v*(14));f 1G=(4I)?0:(A);f 17=-(v*14);f Y=(4I)?0:-(A);f G=93*14;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j('P').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.9),'1M');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.T().1b(G).I({s:1G,r:2g},F,L,Q);l((i%2)!=0)14++}},7c:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'3c':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 1H=(v*(i));f 1I=0;f 2g=(v*(i));f 1G=0;f 17=-(v*(i));f Y=0;f G=1v*i;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j('P').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.1),'3d');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({s:1G,r:2g,V:'T'},F,L,Q)}},7d:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'4D':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f 1A=1v;f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:h.g.1s,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({'4K-1D':1D+'11'});1A+=1v;c.1d(n);f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({s:1G,r:2g,V:'T'},F,L,Q)}},7e:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'4D':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({'4K-1D':1D+'11'});1A-=1v;c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({s:1G,r:2g,V:'1q'},F,L,Q)}},7f:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;l($.94.95){n=c.1U(1i);n.w({r:1H,s:1I,C:1A,H:1A}).3W({'4K-1D':1D+'11'});n.j('P').w({r:-1H,s:-1I})}13{n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({'4K-1D':1D+'11'})}1A-=1v;c.1d(n);n.T();f G=1v*i;f Q=(i==(t-1))?q(){h.1k()}:'';f 7s=(i%2==0)?'7t':'-7t';n.1b(G).I({s:1G,r:2g,V:'1q',2h:7s},F,L,Q)}},7g:q(D){f h=c;c.g.19=S;f L=(c.g.N=='')?'1M':c.g.N;f F=2u/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/4));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 96=R;f Y=0;f 17=0;f 3X=0;f 14=0;1h(i=0;i<t;i++){Y=A*3X;17=v*14;f G=30*(i);f n=c.1x();n.w({r:17,s:Y,C:v,H:A}).1q();n.j('P').w({r:-17,s:-Y});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({C:'T',H:'T'},F,L,Q);3X++;l(3X==1j){3X=0;14++}}},5n:q(D){f h=c;f D=$.1P({},{2v:'s'},D||{});c.g.19=S;f L=(c.g.N=='')?'3d':c.g.N;f F=2u/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f t=12;f v=E.M(c.g.B/t);f A=c.g.O;f 1G=(D.2v=='s')?-A:A;1h(i=0;i<t;i++){f 1c=0;f 18=(v*i);f 1r=0;f 1o=-(v*i);f n=c.1U(1i);n.w({r:18+'11',s:1c+'11',C:v,H:A});n.j('P').w({r:1o,s:1r});c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({s:1G},F,L,Q)}},7h:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N=='')?'5t':c.g.N;f F=3U/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/10));f t=1t;f v=E.M(c.g.B/1t);f A=c.g.O;1h(i=0;i<t;i++){f 1c=0;f 18=v*i;f 1r=0;f 1o=-(v*i);f 2g='+='+v;f n=c.1U(1i);n.w({r:0,s:0,C:v,H:A});n.j('P').w({r:1o,s:1r});f 3Y=c.1U(1i);3Y.w({r:18+'11',s:1c+'11',C:v,H:A});3Y.34(n);c.1d(3Y);n.T();3Y.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({r:2g},F,L,Q)}},5o:q(D){f h=c;f D=$.1P({},{2v:'s',4E:'4F',t:7,L:'5t'},D||{});c.g.19=S;f L=(c.g.N=='')?D.L:c.g.N;f F=1S/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});c.k.j('.1a').1q();f t=D.t;1h(i=0;i<t;i++){f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C+v;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;2D(D.4E){J'7q':3a:f G=(i%2==0)?0:5q;K;J'1n':f G=30*(E.1n()*30);K;J'4F':f G=i*1v;K}f n=c.1U(1i);n.j('P').w({r:1o,s:0});n.w({s:0,r:0,C:v,H:A});f 2f=c.1x();2f.j('P').w({r:1o,s:0});2f.w({s:0,r:-v,C:v,H:A});f 3Z=c.1x();3Z.34('').1F(n).1F(2f);3Z.w({s:0,r:1C,C:v,H:A});c.1d(3Z);3Z.T();n.T();2f.T();f Q=(i==(t-1))?q(){h.1k()}:'';n.1b(G).I({r:v},F,L);2f.1b(G).I({r:0},F,L,Q)}},7i:q(D){f h=c;f D=$.1P({},{2H:'3d',2I:'1M'},D||{});c.g.19=S;f 2H=(c.g.N=='')?D.2H:c.g.N;f 2I=(c.g.N=='')?D.2I:c.g.N;f F=7o/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});c.k.j('.1a').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j('P').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j('P').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j('P').w({r:0,s:A});2i.w({s:0,r:0,C:v,H:A});2j.j('P').w({r:0,s:-(A*t)});2j.w({s:A,r:0,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.j('P').I({s:A},F,2H,q(){21.28()});22.j('P').I({s:-(A*t)},F,2H,q(){22.28()});2i.j('P').I({s:0},F,2I);2j.j('P').I({s:-A},F,2I,Q)},7j:q(D){f h=c;f D=$.1P({},{2H:'4G',2I:'4G'},D||{});c.g.19=S;f 2H=(c.g.N=='')?D.2H:c.g.N;f 2I=(c.g.N=='')?D.2I:c.g.N;f F=97/c.g.1f;f 1i=c.k.j('.1a').U('W');c.1l();c.1Y();c.k.j('.1a').U({'W':c.g.1s});c.k.j('.1a').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j('P').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j('P').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j('P').w({r:0,s:0});2i.w({s:0,r:v,C:v,H:A});2j.j('P').w({r:0,s:-A});2j.w({s:A,r:-v,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.I({r:-v},F,2H,q(){21.28()});22.I({r:v},F,2H,q(){22.28()});2i.I({r:0},F,2I);2j.I({r:0},F,2I,Q)},1k:q(D){f h=c;c.k.j('.1a').T();c.5f();c.g.19=R;c.k.j('.1a').U({'W':c.g.1s});c.k.j('.1K a').U({'1O':c.g.1N});l(!c.g.2X&&!c.g.2A&&!c.g.3k){c.31=3R(q(){h.41()},c.g.2L)}h.3P()},41:q(){c.2F(S);c.k.j('.n').28();l(!c.g.2A&&!c.g.3k)c.4C()},1l:q(){l($.6l(c.g.4X))c.g.4X(c.g.1y,c);c.7u();c.7v();c.7w();c.7x()},7u:q(){f 7y=c.g.1m[c.g.1y][0];f 7z=c.g.1m[c.g.1y][1];f 7A=c.g.1m[c.g.1y][3];f 7B=c.g.1m[c.g.1y][4];c.g.1s=7y;c.g.1N=7z;c.g.3f=7A;c.g.3g=7B},7v:q(){f h=c;c.k.j('.33').5c('33');$('#57'+(c.g.1y+1)+'58'+h.2P).3n('33')},7x:q(){c.g.1y++;l(c.g.1y==c.g.1m.1z){c.g.1y=0}},1x:q(){l(c.g.1N!='#'){f 1V=$('<a 1O=\"'+c.g.1N+'\"><P W=\"'+c.g.1s+'\" /></a>');1V.U({'26':c.g.3g})}13{f 1V=$('<P W=\"'+c.g.1s+'\" />')}1V=c.4B(1V);f n=$('<1p 1u=\"n\"></1p>');n.1F(1V);Z n},1U:q(1i){l(c.g.1N!='#'){f 1V=$('<a 1O=\"'+c.g.1N+'\"><P W=\"'+1i+'\" /></a>');1V.U({'26':c.g.3g})}13{f 1V=$('<P W=\"'+1i+'\" />')}1V=c.4B(1V);f n=$('<1p 1u=\"n\"></1p>');n.1F(1V);Z n},4B:q(1V){l(c.g.4e){1V.j('P').H(c.g.O)}Z 1V},1d:q(n){c.k.j('.4k').1F(n)},5W:q(L){f 7C=['4D','1M','3d','99','9a','9b','9c','9d','9e','9f','9g','9h','9i','6a','9j','9k','3c','4G','9l','5t','9m','9n','7n','9o','7k','5p','9p','9q','9r','9s',];l(4L.9t(L,7C)>0){Z L}13{Z''}},3V:q(i){Z E.6m(E.1n()*i)},3Q:q(){c.k.j('.2t').34(c.g.3f)},5f:q(){f h=c;l(c.g.3f!=1W&&c.g.3f!=''&&h.g.2z){2D(h.g.4i){J'4j':3a:h.k.j('.2t').9u(2u);K;J'r':J'2d':h.k.j('.2t').I({r:0},2u,'3d');K;J'7D':K}}},7w:q(){f h=c;2D(h.g.4i){J'4j':3a:c.k.j('.2t').4j(1L,q(){h.3Q()});K;J'r':J'2d':f 2w=(h.g.4i=='r')?-(h.k.j('.2t').C()):(h.k.j('.2t').C());h.k.j('.2t').I({r:2w},2u,'3d',q(){h.3Q()});K;J'7D':h.3Q();K}},6k:q(){f h=c;l(h.g.2Z){h.k.3s(q(){l(h.g.2Z)h.g.2X=S;l(!h.g.3l){h.4M()}h.42('3s');h.2F(S)},q(){l(h.g.2Z)h.g.2X=R;l(h.g.2b==0&&!h.g.19&&!h.g.2A){h.3P()}13 l(!h.g.2A){h.44()}h.42('7E');h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j('.1a').U({'W':h.g.1s});h.k.j('.1K a').U({'1O':h.g.1N})}})}13{h.k.3s(q(){h.42('3s')},q(){h.42('7E')})}},42:q(4q){f h=c;f 2q=h.g.2q;f 2a=h.g.2a;f 2r=h.g.2r;l(4q=='3s'){l(h.g.2p){l(h.g.48){h.k.j('.1B').T().w({V:0}).I({V:2q},2a)}l(h.g.49){h.k.j('.2c, .23').T().w({V:0}).I({V:2q},2a)}l(h.g.2M&&!h.g.2R){h.k.j('.29').1R().T().w({V:0}).I({V:2q},2a)}l(h.g.2Y){h.k.j('.2x').1R().T().w({V:0}).I({V:2q},2a)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j('.29').1R().I({V:1},2a)}l(h.g.2Y&&!h.g.2p){h.k.j('.2x').1R().I({V:1},2a)}}13{l(h.g.2p){l(h.g.48){h.k.j('.1B').3N(\"2k\",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.49){h.k.j('.2c, .23').3N(\"2k\",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.2M&&!h.g.2R){h.k.j('.29').1R().w({V:2q}).I({V:0},2r)}l(h.g.2Y){h.k.j('.2x').1R().w({V:2q}).I({V:0},2r)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j('.29').1R().I({V:0.3},2r)}l(h.g.2Y&&!h.g.2p){h.k.j('.2x').1R().I({V:0.3},2r)}}},2F:q(9v){f h=c;9w(h.31)},1Y:q(){l(c.g.1N!='#'&&c.g.1N!=''){c.k.j('.1K a').U({'1O':c.g.1N,'26':c.g.3g})}13{c.k.j('.1K a').9x('1O')}},2p:q(){c.k.j('.1B').1T(0,0);c.k.j('.2c').1T(0,0);c.k.j('.23').1T(0,0);c.k.j('.29').1T(0,0);c.k.j('.2x').1T(0,0)},6b:q(){f h=c;f 29=$('<a 1O=\"#\" 1u=\"29\">2M</a>');h.k.1F(29);f 2w=(h.g.B-29.C())/2;f 3C=0;l(h.g.2Y)2w-=25;l(h.g.51==h.g.4Z)3C=29.C()+5;f 2l={r:2w};2D(h.g.4Z){J'7F':2l={r:5+3C,s:30};K;J'7G':2l={2d:5+3C,s:30};K;J'7H':2l={r:5+3C,3b:5,s:'36'};K;J'7I':2l={2d:5+3C,3b:5,s:'36'};K}29.w(2l).I({V:0.3},h.g.2a);$(5u).9y(q(e){f 7J=(e.3D?e.3D:e.9z);l(7J==27)$('#4N').5v('2O')});f 5w=$('.k').3r().s;f 2w=$('.k').3r().r;h.k.j('.29').2O(q(){l(h.g.2R)Z R;h.g.2R=S;$(c).1R().I({V:0},h.g.2r);f 1p=$('<1p 4p=\"4N\"></1p>').H($(5u).H()).1q().1T(h.g.2a,0.98);f 7K=(($(32).H()-$('.k').H())/2)+$(5u).9A();f 7L=($(32).C()-$('.k').C())/2;h.k.7M('<1p 4p=\"4O\"></1p>');$('55').7N(1p);$('55').7N(h.k);h.k.w({'s':5w,'r':2w,'2B':'54','z-5S':9B}).I({'s':7K,'r':7L},9C,'3c');$('#4O').C($('.k').C()).H($('.k').H()).w({'4z':'4P'}).1T(2Q,0.3);Z R});$('#4N').9D('2O',q(){l($(c).9E('7O'))Z R;h.g.2R=R;$(c).3n('7O');l(!h.g.2p)h.k.j('.29').I({V:0.3},1L);h.k.1R().I({'s':5w,'r':2w},1L,'3c',q(){$('#4O').7M(h.k);$(c).w({'2B':'9F','s':0,'r':0});$('#4O').28()});$('#4N').1T(h.g.2r,0,q(){$(c).28()});Z R})},6c:q(){f h=c;f 2x=$('<a 1O=\"#\" 1u=\"2x\">7P</a>');h.k.1F(2x);f 2w=(h.g.B-2x.C())/2;l(h.g.2M)2w+=25;f 2l={r:2w};2D(h.g.51){J'7F':2l={r:5,s:30};K;J'7G':2l={2d:5,s:30};K;J'7H':2l={r:5,3b:5,s:'36'};K;J'7I':2l={2d:5,3b:5,s:'36'};K}2x.w(2l).I({V:0.3},h.g.2a);2x.2O(q(){l(!h.g.2A){$(c).34('9G');$(c).1T(1v,0.5).1T(1v,1);$(c).3n('7Q');h.4M();h.g.2A=S;h.2F(S)}13{l(!h.g.19&&!h.k.j('.1E').5V(':9H')){h.g.2b=0}13{h.44()}l(!h.g.1E)h.44();h.g.2A=R;$(c).34('7P');$(c).1T(1v,0.5).1T(1v,1);$(c).5c('7Q');l(!h.g.2Z){h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j('.1a').U({'W':h.g.1s});h.k.j('.1K a').U({'1O':h.g.1N})}}}Z R})},5x:q(3L){f 4l=0,5y;1h(5y 7R 3L){l(3L.9I(5y))4l++}Z 4l},6d:q(){f h=c;f 1E=$('<1p 1u=\"1E\"></1p>');h.k.1F(1E);l(h.5x(h.g.2s)==0){l(3t(1E.w('C'))>0){h.g.2s.C=3t(1E.w('C'))}13{h.g.2s={C:h.g.B,H:5}}}l(h.5x(h.g.2s)>0&&h.g.2s.C==1W){h.g.2s.C=h.g.B}1E.w(h.g.2s).1q()},7S:q(){f h=c;l(h.g.2X||h.g.2A||h.g.3k||!h.g.1E)Z R;h.k.j('.1E').1q().7T().C(h.g.2s.C).I({C:'T'},h.g.2L,'7U')},5h:q(){f h=c;l(!h.g.19){h.k.j('.1E').1R()}},7V:q(){f h=c;l(h.g.2X||h.g.2A||!h.g.1E)Z R;h.k.j('.1E').7T().I({C:h.g.2s.C},(h.g.2L-h.g.2b),'7U')},6W:q(){f h=c;l(!h.g.1E)Z R;h.k.j('.1E').1R().9J(2Q,q(){$(c).C(h.g.2s.C)})},3P:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.2b=0;h.g.4g=3E.5A();h.7S()},4M:q(){f h=c;l(h.g.3l)Z R;h.g.3l=S;f 3E=2K 5z();h.g.2b+=3E.5A()-h.g.4g;h.5h()},44:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.4g=3E.5A();h.7V()},6e:q(){f h=c;$(32).9K(q(e){l(e.3D==39||e.3D==40){h.k.j('.23').5v('2O')}13 l(e.3D==37||e.3D==38){h.k.j('.2c').5v('2O')}})},4J:q(D){f n=$('<1p 1u=\"n\"></1p>');n.w({'r':D.r,'s':D.s,'C':D.C,'H':D.H,'4z-1K':'5X('+D.1K+')','4z-2B':D.2B.r+'11 '+D.2B.s+'11'});Z n},7r:q(45){f h=c;f 4Q=2K 4n();f 4R;5B(45.1z>0){4R=h.7W(0,45.1z-1);4Q[4Q.1z]=45[4R];45.9L(4R,1)}Z 4Q},7W:q(5C,7X){f 4S;9M 4S=E.1n();5B(4S==1);Z(4S*(7X-5C+1)+5C)|0},6j:q(){f h=c;$(32).4u('9N',q(){h.g.3k=S;h.4M();h.2F(S)});$(32).4u('2M',q(){l(h.g.1m.1z>1){h.g.3k=R;l(h.g.2b==0){h.3P()}13{h.44()}l(h.g.2b<=h.g.2L){h.2F(S);h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j('.1a').U({'W':h.g.1s});h.k.j('.1K a').U({'1O':h.g.1N})}}})}});$.2o.3W=q(3F){f w={};f 5D=['9O','9P','o','9Q'];1h(f 2y 7R 3F){1h(f i=0;i<5D.1z;i++)w['-'+5D[i]+'-'+2y]=3F[2y];w[2y]=3F[2y]}c.w(w);Z c};f 46='9R';$.2o.2h=q(2V){f 2e=$(c).w('1J')||'4P';l(2m 2V=='1W'){l(2e){f m=2e.4T(/2h\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 0}f m=2V.7Y().4T(/^(-?\\d+(\\.\\d+)?)(.+)?$/);l(m){l(m[3])46=m[3];$(c).w('1J',2e.7Z(/4P|2h\\([^)]*\\)/,'')+'2h('+m[1]+46+')')}Z c};$.2o.2W=q(2V,4x,D){f 2e=$(c).w('1J');l(2m 2V=='1W'){l(2e){f m=2e.4T(/2W\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 1}$(c).w('1J',2e.7Z(/4P|2W\\([^)]*\\)/,'')+'2W('+2V+')');Z c};f 81=$.2k.53.82;$.2k.53.82=q(){l(c.2y=='2h'){Z 3m($(c.4U).2h())}13 l(c.2y=='2W'){Z 3m($(c.4U).2W())}Z 81.5E(c,5F)};$.2k.83.2h=q(2k){$(2k.4U).2h(2k.84+46)};$.2k.83.2W=q(2k){$(2k.4U).2W(2k.84)};f 85=$.2o.I;$.2o.I=q(2y){l(2m 2y['2h']!='1W'){f m=2y['2h'].7Y().4T(/^(([+-]=)?(-?\\d+(\\.\\d+)?))(.+)?$/);l(m&&m[5]){46=m[5]}2y['2h']=m[1]}Z 85.5E(c,5F)};q 86(87){f 88=['1J','9S','9T','9U','9V'];f p;5B(p=88.9W()){l(2m 87.2e[p]!='1W'){Z p}}Z'1J'};f 2J=1w;f 89=$.2o.w;$.2o.w=q(2n,2V){l(2J===1w){l(2m $.8a!='1W'){2J=$.8a}13 l(2m $.3F!='1W'){2J=$.3F}13{2J={}}}l(2m 2J['1J']=='1W'&&(2n=='1J'||(2m 2n=='8b'&&2m 2n['1J']!='1W'))){2J['1J']=86(c.8c(0))}l(2J['1J']!='1J'){l(2n=='1J'){2n=2J['1J'];l(2m 2V=='1W'&&4L.2e){Z 4L.2e(c.8c(0),2n)}}13 l(2m 2n=='8b'&&2m 2n['1J']!='1W'){2n[2J['1J']]=2n['1J'];9X 2n['1J']}}Z 89.5E(c,5F)}})(4L);", 62, 618, "||||||||||||this|||var|settings|self||find|box_skitter|if||box_clone|||function|left|top|total||width_box|css||||height_box|width_skitter|width|options|Math|time_animate|delay_time|height|animate|case|break|easing|ceil|easing_default|height_skitter|img|callback|false|true|show|attr|opacity|src|col_t|_btop|return||px||else|col|||_bleft|_vleft|is_animating|image_main|delay|_vtop|addBoxClone|init_top|velocity|init_left|for|image_old|division_h|finishAnimation|setActualLevel|images_links|random|_vleft_image|div|hide|_vtop_image|image_atual|division_w|class|100|null|getBoxClone|image_i|length|size_box|info_slide|_ileftc|radius|progressbar|append|_ftop|_ileft|_itop|transform|image|200|easeOutQuad|link_atual|href|extend|class_info|stop|500|fadeTo|getBoxCloneImgOld|img_clone|undefined|image_number|setLinkAtual|_itopc||box_clone1|box_clone2|next_button|animation_type||target||remove|focus_button|interval_in_elements|elapsedTime|prev_button|right|style|box_clone_next|_fleft|rotate|box_clone_next1|box_clone_next2|fx|cssPosition|typeof|arg|fn|hideTools|opacity_elements|interval_out_elements|progressbar_css|label_skitter|400|direction|_left|play_pause_button|prop|label|is_paused|position|ul|switch|loading|clearTimer|100px|easing_old|easing_new|_propsObj|new|interval|focus|info_slide_thumb|click|number_skitter|300|foucs_active|span|link|_fleftc|val|scale|is_hover_box_skitter|controls|stop_over||timer|window|image_number_select|html|new_x|auto||||default|bottom|easeOutExpo|easeInOutQuad|sk|label_atual|target_atual|animateNumberOut|xml|preview|is_blur|is_paused_time|parseFloat|addClass|rel|text|li|offset|hover|parseInt|_i_animation|_ftopc|_itopn|_ileftn|_ftopn|_fleftn|spread|pow|_space|keyCode|date|props|skitter|each|dots|width_label|auto_play|obj|w_info_slide_thumb|queue|fadeIn|startTime|setValueBoxText|setTimeout|animations_functions|animationDirection|700|getRandom|css3|line|box_clone_main|box_clone_container||completeMove|setHideTools||resumeTime|arrayOrigem|rotateUnits|animation|numbers|navigation|random_ia|thumbs|animateNumberOver|animateNumberActive|fullscreen|center|timeStart|with_animations|labelAnimation|slideUp|container_skitter|size|initial_select_class|Array|dimension_thumb|id|type|width_info_slide|width_value|jumpToImage|bind|imageNumber|preview_slide|duration|image_loading|background|img_link|resizeImage|nextImage|easeInQuad|delay_type|sequence|easeInOutExpo|order|mod|getBoxCloneBackground|border|jQuery|pauseTime|overlay_skitter|mark_position|none|arrayDestino|indice|numRandom|match|elem|_self|onLoad|imageSwitched|numbers_align|focus_position||controls_position|theme|prototype|absolute|body|addImageLink|image_n_|_|width_image|x_value|info_slide_dots|removeClass|mouseover|init_pause|showBoxText|mouseOverInit|pauseProgressBar|animationCube|animationCubeStop|animationShowBars|animationTube|animationBlindDimension|animationDirectionBars|animationSwapBars|easeOutBack|150|vleft|sqrt|easeOutCirc|document|trigger|_top|objectSize|key|Date|getTime|while|valorIni|prefixes|apply|arguments|skitters|data|skitter_number|push|defaults|show_randomly|enable_navigation_keys|mouseOverButton|mouseOutButton|structure|number|setup|index|1000|or|is|getEasing|url|container_thumbs|copy_info_slide|y_value|novo_width|15px|sort|mouseleave|width_preview_ul|_left_info|_left_image|_left_preview|_left_ul|easeOutSine|focusSkitter|setControls|addProgressBar|enableNavigationKeys|loadImages|self_il|start|images|windowFocusOut|stopOnMouseOver|isFunction|floor|cube|cubeRandom|block|cubeStop|cubeStopRandom|cubeHide|cubeSize|horizontal|showBars|showBarsRandom|tube|fade|fadeFour|paralell|blind|blindHeight|blindWidth|directionTop|directionBottom|directionRight|directionLeft|cubeSpread|glassCube|glassBlock|circles|circlesInside|circlesRotate|cubeShow|upBars|downBars|hideBars|swapBars|swapBarsBack|swapBlocks|cut|hideProgressBar|random_id|total_with_animations|animationBlock||animationCubeHide|animationCubeSize|animationHorizontal|animationFade||animationFadeFour|animationParalell|animationBlind|animationCubeSpread|animationCubeJelly|animationGlassCube|animationGlassBlock|animationCircles|animationCirclesInside|animationCirclesRotate|animationCubeShow|animationHideBars|animationSwapBlocks|animationCut|easeInBack|20px|600|easeOutElastic|800|1400|zebra|shuffleArray|_rotate|20deg|setImageLink|addClassNumber|hideBoxText|increasingImage|name_image|link_image|label_image|target_link|easing_accepts|fixed|out|leftTop|rightTop|leftBottom|rightBottom|code|_topFinal|_leftFinal|before|prepend|finish_overlay_skitter|pause|play_button|in|startProgressBar|dequeue|linear|resumeProgressBar|randomUnique|valorFim|toString|replace||curProxied|cur|step|now|animateProxied|getTransformProperty|element|properties|proxied|cssProps|object|get|2500|time_interval|max_number_height|prev|next|overflown|hidden|console|warn|Width|Skitter|Slideshow|ajax|GET|async|dataType|success|slide|json|label_text|clone|outerWidth|mousemove|pageX|pageY|scroll_thumbs|box_scroll_thumbs|5px|0px|eq|mouseenter|image_current_preview|preview_slide_current|Loading|9999em|Image|load|error|color|white|black|Error|One|more|were|not|found|1500|randomSmart||cubeJelly|1200|120|browser|mozilla|last|900||easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeInOutSine|easeInExpo|easeInCirc|easeInOutCirc|easeInElastic|easeInOutElastic|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce|inArray|slideDown|force|clearInterval|removeAttr|keypress|which|scrollTop|9999|2000|live|hasClass|relative|play|visible|hasOwnProperty|fadeOut|keydown|splice|do|blur|moz|ms|webkit|deg|WebkitTransform|msTransform|MozTransform|OTransform|shift|delete".split("|"), 0, {})),
    function() {
        var t, e, i, s, n, o = {}.hasOwnProperty,
            r = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var s in e) o.call(e, s) && (t[s] = e[s]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            };
        s = function() {
            function t() {
                this.options_index = 0, this.parsed = []
            }
            return t.prototype.add_node = function(t) {
                return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
            }, t.prototype.add_group = function(t) {
                var e, i, s, n, o, r;
                for (e = this.parsed.length, this.parsed.push({
                        array_index: e,
                        group: !0,
                        label: this.escapeExpression(t.label),
                        children: 0,
                        disabled: t.disabled
                    }), o = t.childNodes, r = [], s = 0, n = o.length; n > s; s++) i = o[s], r.push(this.add_option(i, e, t.disabled));
                return r
            }, t.prototype.add_option = function(t, e, i) {
                return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    selected: t.selected,
                    disabled: i === !0 ? i : t.disabled,
                    group_array_index: e,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, t.prototype.escapeExpression = function(t) {
                var e, i;
                return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function(t) {
                    return e[t] || "&amp;"
                })) : t
            }, t
        }(), s.select_to_array = function(t) {
            var e, i, n, o, r;
            for (i = new s, r = t.childNodes, n = 0, o = r.length; o > n; n++) e = r[n], i.add_node(e);
            return i.parsed
        }, e = function() {
            function t(e, i) {
                this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
            }
            return t.prototype.set_default_values = function() {
                var t = this;
                return this.click_test_action = function(e) {
                    return t.test_active_click(e)
                }, this.activate_action = function(e) {
                    return t.activate_field(e)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
            }, t.prototype.set_default_text = function() {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
            }, t.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function(t) {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function() {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function(t) {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                    return e.blur_test()
                }, 100))
            }, t.prototype.results_option_build = function(t) {
                var e, i, s, n, o;
                for (e = "", o = this.results_data, s = 0, n = o.length; n > s; s++) i = o[s], e += i.group ? this.result_add_group(i) : this.result_add_option(i), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(i.text));
                return e
            }, t.prototype.result_add_option = function(t) {
                var e, i;
                return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, this.outerHTML(i)) : ""
            }, t.prototype.result_add_group = function(t) {
                var e;
                return (t.search_match || t.group_match) && t.active_options > 0 ? (e = document.createElement("li"), e.className = "group-result", e.innerHTML = t.search_text, this.outerHTML(e)) : ""
            }, t.prototype.results_update_field = function() {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, t.prototype.reset_single_select_options = function() {
                var t, e, i, s, n;
                for (s = this.results_data, n = [], e = 0, i = s.length; i > e; e++) t = s[e], t.selected ? n.push(t.selected = !1) : n.push(void 0);
                return n
            }, t.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function(t) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, t.prototype.winnow_results = function() {
                var t, e, i, s, n, o, r, a, l, h, c, u, d;
                for (this.no_results_clear(), n = 0, r = this.get_search_text(), t = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), s = this.search_contains ? "" : "^", i = new RegExp(s + t, "i"), h = new RegExp(t, "i"), d = this.results_data, c = 0, u = d.length; u > c; c++) e = d[c], e.search_match = !1, o = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (o = this.results_data[e.group_array_index], 0 === o.active_options && o.search_match && (n += 1), o.active_options += 1), (!e.group || this.group_search) && (e.search_text = e.group ? e.label : e.html, e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (n += 1), e.search_match ? (r.length && (a = e.search_text.search(h), l = e.search_text.substr(0, a + r.length) + "</em>" + e.search_text.substr(a + r.length), e.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != o && (o.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
                return this.result_clear_highlight(), 1 > n && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, t.prototype.search_string_match = function(t, e) {
                var i, s, n, o;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (s = t.replace(/\[|\]/g, "").split(" "), s.length))
                    for (n = 0, o = s.length; o > n; n++)
                        if (i = s[n], e.test(i)) return !0
            }, t.prototype.choices_count = function() {
                var t, e, i, s;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, s = this.form_field.options, e = 0, i = s.length; i > e; e++) t = s[e], t.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, t.prototype.choices_click = function(t) {
                return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, t.prototype.keyup_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (t.preventDefault(), this.results_showing) return this.result_select(t);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                        break;
                    default:
                        return this.results_search()
                }
            }, t.prototype.clipboard_event_checker = function(t) {
                var e = this;
                return setTimeout(function() {
                    return e.results_search()
                }, 50)
            }, t.prototype.container_width = function() {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, t.prototype.include_option_in_results = function(t) {
                return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : t.empty ? !1 : !0
            }, t.prototype.search_results_touchstart = function(t) {
                return this.touch_started = !0, this.search_results_mouseover(t)
            }, t.prototype.search_results_touchmove = function(t) {
                return this.touch_started = !1, this.search_results_mouseout(t)
            }, t.prototype.search_results_touchend = function(t) {
                return this.touch_started ? this.search_results_mouseup(t) : void 0
            }, t.prototype.outerHTML = function(t) {
                var e;
                return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
            }, t.browser_is_supported = function() {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
        }(), t = jQuery, t.fn.extend({
            chosen: function(s) {
                return e.browser_is_supported() ? this.each(function(e) {
                    var n, o;
                    n = t(this), o = n.data("chosen"), "destroy" === s && o ? o.destroy() : o || n.data("chosen", new i(this, s))
                }) : this
            }
        }), i = function(e) {
            function i() {
                return n = i.__super__.constructor.apply(this, arguments)
            }
            return r(i, e), i.prototype.setup = function() {
                return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, i.prototype.set_up_html = function() {
                var e, i;
                return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
                    "class": e.join(" "),
                    style: "width: 100%;",
                    title: this.form_field.title
                }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, i.prototype.register_observers = function() {
                var t = this;
                return this.container.bind("mousedown.chosen", function(e) {
                    t.container_mousedown(e)
                }), this.container.bind("mouseup.chosen", function(e) {
                    t.container_mouseup(e)
                }), this.container.bind("mouseenter.chosen", function(e) {
                    t.mouse_enter(e)
                }), this.container.bind("mouseleave.chosen", function(e) {
                    t.mouse_leave(e)
                }), this.search_results.bind("mouseup.chosen", function(e) {
                    t.search_results_mouseup(e)
                }), this.search_results.bind("mouseover.chosen", function(e) {
                    t.search_results_mouseover(e)
                }), this.search_results.bind("mouseout.chosen", function(e) {
                    t.search_results_mouseout(e)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                    t.search_results_mousewheel(e)
                }), this.search_results.bind("touchstart.chosen", function(e) {
                    t.search_results_touchstart(e)
                }), this.search_results.bind("touchmove.chosen", function(e) {
                    t.search_results_touchmove(e)
                }), this.search_results.bind("touchend.chosen", function(e) {
                    t.search_results_touchend(e)
                }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                    t.results_update_field(e)
                }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                    t.activate_field(e)
                }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                    t.container_mousedown(e)
                }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                    t.input_blur(e)
                }), this.search_field.bind("blur.chosen", function(e) {
                    t.input_blur(e)
                }), this.search_field.bind("keyup.chosen", function(e) {
                    t.keyup_checker(e)
                }), this.search_field.bind("keydown.chosen", function(e) {
                    t.keydown_checker(e)
                }), this.search_field.bind("focus.chosen", function(e) {
                    t.input_focus(e)
                }), this.search_field.bind("cut.chosen", function(e) {
                    t.clipboard_event_checker(e)
                }), this.search_field.bind("paste.chosen", function(e) {
                    t.clipboard_event_checker(e)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                    t.choices_click(e)
                }) : this.container.bind("click.chosen", function(t) {
                    t.preventDefault()
                })
            }, i.prototype.destroy = function() {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, i.prototype.search_field_disabled = function() {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, i.prototype.container_mousedown = function(e) {
                return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, i.prototype.container_mouseup = function(t) {
                return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
            }, i.prototype.search_results_mousewheel = function(t) {
                var e;
                return t.originalEvent && (e = -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
            }, i.prototype.blur_test = function(t) {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, i.prototype.close_field = function() {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, i.prototype.activate_field = function() {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, i.prototype.test_active_click = function(e) {
                var i;
                return i = t(e.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
            }, i.prototype.results_build = function() {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, i.prototype.result_do_highlight = function(t) {
                var e, i, s, n, o;
                if (t.length) {
                    if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), n = s + o + 100, i = this.result_highlight.position().top + this.search_results.scrollTop(), e = i + this.result_highlight.outerHeight(), e >= n) return this.search_results.scrollTop(e - s > 0 ? e - s : 0);
                    if (o > i) return this.search_results.scrollTop(i)
                }
            }, i.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, i.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, i.prototype.update_results_content = function(t) {
                return this.search_results.html(t)
            }, i.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, i.prototype.set_tab_index = function(t) {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, i.prototype.set_label_behavior = function() {
                var e = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(t) {
                    return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
                }) : void 0
            }, i.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function(e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i.length ? (this.result_highlight = i, this.result_select(e), this.search_field.focus()) : void 0
            }, i.prototype.search_results_mouseover = function(e) {
                var i;
                return i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i ? this.result_do_highlight(i) : void 0
            }, i.prototype.search_results_mouseout = function(e) {
                return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, i.prototype.choice_build = function(e) {
                var i, s, n = this;
                return i = t("<li />", {
                    "class": "search-choice"
                }).html("<span>" + e.html + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : (s = t("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": e.array_index
                }), s.bind("click.chosen", function(t) {
                    return n.choice_destroy_link_click(t)
                }), i.append(s)), this.search_container.before(i)
            }, i.prototype.choice_destroy_link_click = function(e) {
                return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
            }, i.prototype.choice_destroy = function(t) {
                return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, i.prototype.results_reset = function() {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, i.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, i.prototype.result_select = function(t) {
                var e, i;
                return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(i.text), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
            }, i.prototype.single_set_selected_text = function(t) {
                return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(t)
            }, i.prototype.result_deselect = function(t) {
                var e;
                return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[e.options_index].value
                }), this.search_field_scale(), !0)
            }, i.prototype.single_deselect_control_build = function() {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, i.prototype.get_search_text = function() {
                return this.search_field.val() === this.default_text ? "" : t("<div/>").text(t.trim(this.search_field.val())).html()
            }, i.prototype.winnow_results_set_highlight = function() {
                var t, e;
                return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
            }, i.prototype.no_results = function(e) {
                var i;
                return i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), i.find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, i.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function() {
                var t;
                return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
            }, i.prototype.keyup_arrow = function() {
                var t;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, i.prototype.keydown_backstroke = function() {
                var t;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, i.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.keydown_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                        break;
                    case 13:
                        t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        t.preventDefault(), this.keydown_arrow()
                }
            }, i.prototype.search_field_scale = function() {
                var e, i, s, n, o, r, a, l, h;
                if (this.is_multiple) {
                    for (s = 0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, h = r.length; h > l; l++) n = r[l], o += n + ":" + this.search_field.css(n) + ";";
                    return e = t("<div />", {
                        style: o
                    }), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), i = this.container.outerWidth(), a > i - 10 && (a = i - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, i
        }(e)
    }.call(this);