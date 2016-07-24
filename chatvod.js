if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
(function() {
    var h = void 0,
        k = !0,
        l = null,
        m = !1,
        s, t = this;

    function aa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function u(a) {
        return "array" == aa(a)
    }

    function v(a) {
        return "string" == typeof a
    }

    function w(a) {
        return a[ba] || (a[ba] = ++da)
    }
    var ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        da = 0;

    function ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ga(a, b, c) {
        ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
        return ga.apply(l, arguments)
    }

    function ha(a, b) {
        var c = a.split("."),
            d = t;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) !c.length && b !== h ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function x(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.R = b.prototype;
        a.prototype = new c
    };

    function ia(a) {
        var b = a.length - 1;
        return 0 <= b && a.indexOf("%", b) == b
    };

    function ja(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function ka(a) {
        var b = [];
        ma(new na, a, b);
        return b.join("")
    }

    function na() {
        this.z = h
    }

    function ma(a, b, c) {
        switch (typeof b) {
            case "string":
                oa(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == l) {
                    c.push("null");
                    break
                }
                if (u(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++) c.push(e), e = b[f], ma(a, a.z ? a.z.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), oa(f, c), c.push(":"),
                    ma(a, a.z ? a.z.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof b);
        }
    }
    var pa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        qa = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function oa(a, b) {
        b.push('"', a.replace(qa, function(a) {
            if (a in pa) return pa[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return pa[a] = e + b.toString(16)
        }), '"')
    };
    var ra, y, sa;

    function ta() {
        this.Q = "chatovodWidgets";
        try {
            this.D = "localStorage" in window && window.localStorage !== l
        } catch (a) {
            this.D = m
        }
        this.G = l;
        if (this.D) try {
            this.e = ja(window.localStorage.getItem(this.Q)) || {}
        } catch (b) {
            this.e = {}, console && console.log && console.log("Cannot load from localStorage, exception: " + b)
        } else this.e = {}
    }
    ta.prototype.set = function(a, b) {
        this.e.hasOwnProperty(a) && this.e[a] === b || (this.e[a] = b, ua(this))
    };
    ta.prototype.get = function(a, b) {
        return this.e[a] || b
    };

    function z(a) {
        var b = A;
        b.e.hasOwnProperty(a) && (delete b.e[a], ua(b))
    }

    function ua(a) {
        a.G == l && (a.G = setTimeout(ga(a.aa, a), 100))
    }
    ta.prototype.aa = function() {
        if (this.D) try {
            window.localStorage.setItem(this.Q, ka(this.e))
        } catch (a) {
            console && console.log && console.log("Cannot save in localStorage, exception: " + a)
        }
        this.G = l
    };

    function va(a, b, c) {
        this.r = a;
        this.Y = b;
        this.m = c;
        this.C = this.c = l;
        this.H = [];
        this.K = [];
        this.L = m
    }
    s = va.prototype;
    s.close = function() {
        this.r.close(this)
    };
    s.show = function(a) {
        this.r.show(this, a)
    };
    s.F = function() {
        this.r.F(this)
    };
    s.A = function(a, b, c) {
        this.r.o(this);
        this.r.A(this, a, b, c)
    };
    s.o = function() {
        this.r.o(this)
    };
    s.getName = function() {
        return this.Y
    };
    var wa = Array.prototype;

    function xa(a, b) {
        if (v(a)) return !v(b) || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function ya(a, b) {
        var c = xa(a, b),
            d;
        (d = 0 <= c) && wa.splice.call(a, c, 1);
        return d
    };
    var B, za, Aa, Ba;

    function Ca() {
        return t.navigator ? t.navigator.userAgent : l
    }
    Ba = Aa = za = B = m;
    var Da;
    if (Da = Ca()) {
        var Ea = t.navigator;
        B = 0 == Da.indexOf("Opera");
        za = !B && -1 != Da.indexOf("MSIE");
        Aa = !B && -1 != Da.indexOf("WebKit");
        Ba = !B && !Aa && "Gecko" == Ea.product
    }
    var Fa = B,
        C = za,
        D = Ba,
        E = Aa,
        Ga = t.navigator,
        Ha = -1 != (Ga && Ga.platform || "").indexOf("Mac");

    function Ia() {
        var a = t.document;
        return a ? a.documentMode : h
    }
    var Ja;
    a: {
        var Ka = "",
            F;
        if (Fa && t.opera) var La = t.opera.version,
            Ka = "function" == typeof La ? La() : La;
        else if (D ? F = /rv\:([^\);]+)(\)|;)/ : C ? F = /MSIE\s+([^\);]+)(\)|;)/ : E && (F = /WebKit\/(\S+)/), F) var Ma = F.exec(Ca()),
            Ka = Ma ? Ma[1] : "";
        if (C) {
            var Na = Ia();
            if (Na > parseFloat(Ka)) {
                Ja = String(Na);
                break a
            }
        }
        Ja = Ka
    }
    var Oa = {};

    function G(a) {
        var b;
        if (!(b = Oa[a])) {
            b = 0;
            for (var c = String(Ja).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    i = d[f] || "",
                    j = RegExp("(\\d*)(\\D*)", "g"),
                    n = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var p = j.exec(g) || ["", "", ""],
                        q = n.exec(i) || ["", "", ""];
                    if (0 == p[0].length && 0 == q[0].length) break;
                    b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1],
                        10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0)
                } while (0 == b)
            }
            b = Oa[a] = 0 <= b
        }
        return b
    }
    var Pa = t.document,
        Qa = !Pa || !C ? h : Ia() || ("CSS1Compat" == Pa.compatMode ? parseInt(Ja, 10) : 5);
    !D && !C || C && C && 9 <= Qa || D && G("1.9.1");
    C && G("9");

    function Ra(a, b) {
        this.width = a;
        this.height = b
    }
    Ra.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ta(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function H(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Ra(a.clientWidth, a.clientHeight)
    }

    function I(a) {
        return document.createElement(a)
    }

    function Ua(a) {
        return Va(a, function(a) {
            a = a.className;
            a = v(a) && a.match(/\S+/g) || [];
            return 0 <= xa(a, "chatovodWindow")
        })
    }

    function Va(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return l
    };

    function Wa() {
        0 != Xa && (this.da = Error().stack, w(this))
    }
    var Xa = 0;
    var Ya = !C || C && 9 <= Qa,
        Za = C && !G("9");
    !E || G("528");
    D && G("1.9b") || C && G("8") || Fa && G("9.5") || E && G("528");
    D && !G("8") || C && G("9");

    function J(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    s = J.prototype;
    s.l = m;
    s.defaultPrevented = m;
    s.P = k;
    s.stopPropagation = function() {
        this.l = k
    };
    s.preventDefault = function() {
        this.defaultPrevented = k;
        this.P = m
    };

    function $a(a) {
        $a[" "](a);
        return a
    }
    $a[" "] = function() {};

    function K(a, b) {
        a && ab(this, a, b)
    }
    x(K, J);
    s = K.prototype;
    s.target = l;
    s.relatedTarget = l;
    s.offsetX = 0;
    s.offsetY = 0;
    s.clientX = 0;
    s.clientY = 0;
    s.screenX = 0;
    s.screenY = 0;
    s.button = 0;
    s.keyCode = 0;
    s.charCode = 0;
    s.ctrlKey = m;
    s.altKey = m;
    s.shiftKey = m;
    s.metaKey = m;
    s.Z = m;
    s.s = l;

    function ab(a, b, c) {
        var d = a.type = b.type;
        J.call(a, d);
        a.target = b.target || b.srcElement;
        a.currentTarget = c;
        if (c = b.relatedTarget) {
            if (D) {
                var e;
                a: {
                    try {
                        $a(c.nodeName);
                        e = k;
                        break a
                    } catch (f) {}
                    e = m
                }
                e || (c = l)
            }
        } else "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement);
        a.relatedTarget = c;
        a.offsetX = E || b.offsetX !== h ? b.offsetX : b.layerX;
        a.offsetY = E || b.offsetY !== h ? b.offsetY : b.layerY;
        a.clientX = b.clientX !== h ? b.clientX : b.pageX;
        a.clientY = b.clientY !== h ? b.clientY : b.pageY;
        a.screenX = b.screenX || 0;
        a.screenY = b.screenY || 0;
        a.button =
            b.button;
        a.keyCode = b.keyCode || 0;
        a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
        a.ctrlKey = b.ctrlKey;
        a.altKey = b.altKey;
        a.shiftKey = b.shiftKey;
        a.metaKey = b.metaKey;
        a.Z = Ha ? b.metaKey : b.ctrlKey;
        a.state = b.state;
        a.s = b;
        b.defaultPrevented && a.preventDefault();
        delete a.l
    }
    s.stopPropagation = function() {
        K.R.stopPropagation.call(this);
        this.s.stopPropagation ? this.s.stopPropagation() : this.s.cancelBubble = k
    };
    s.preventDefault = function() {
        K.R.preventDefault.call(this);
        var a = this.s;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = m, Za) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var L = "closure_listenable_" + (1E6 * Math.random() | 0),
        bb = 0;

    function cb(a, b, c, d, e, f) {
        this.k = a;
        this.O = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.t = f;
        this.key = ++bb;
        this.d = this.p = m
    }
    cb.prototype.handleEvent = function(a) {
        return this.k.call(this.t || this.src, a)
    };
    var db = {},
        M = {},
        N = {},
        O = {};

    function eb(a, b, c, d, e) {
        if (u(b)) {
            for (var f = 0; f < b.length; f++) eb(a, b[f], c, d, e);
            return l
        }
        c = fb(c);
        if (a && a[L]) a = a.h(b, c, d, e);
        else a: {
            if (!b) throw Error("Invalid event type");
            d = !!d;
            var g = M;
            b in g || (g[b] = {
                f: 0,
                i: 0
            });
            g = g[b];
            d in g || (g[d] = {
                f: 0,
                i: 0
            }, g.f++);
            var g = g[d],
                f = w(a),
                i;
            g.i++;
            if (g[f]) {
                i = g[f];
                for (var j = 0; j < i.length; j++)
                    if (g = i[j], g.k == c && g.t == e) {
                        if (g.d) break;
                        i[j].p = m;
                        a = i[j];
                        break a
                    }
            } else i = g[f] = [], g.f++;
            j = gb();
            g = new cb(c, j, a, b, d, e);
            g.p = m;
            j.src = a;
            j.k = g;
            i.push(g);
            N[f] || (N[f] = []);
            N[f].push(g);
            a.addEventListener ?
                a.addEventListener(b, j, d) : a.attachEvent(b in O ? O[b] : O[b] = "on" + b, j);
            a = db[g.key] = g
        }
        return a
    }

    function gb() {
        var a = hb,
            b = Ya ? function(c) {
                return a.call(b.src, b.k, c)
            } : function(c) {
                c = a.call(b.src, b.k, c);
                if (!c) return c
            };
        return b
    }

    function ib(a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++) ib(a, b[f], c, d, e);
        else if (c = fb(c), a && a[L]) a.n(b, c, d, e);
        else if (d = !!d, a = jb(a, b, d))
            for (f = 0; f < a.length; f++)
                if (a[f].k == c && a[f].capture == d && a[f].t == e) {
                    kb(a[f]);
                    break
                }
    }

    function kb(a) {
        if ("number" != typeof a && a && !a.d) {
            var b = a.src;
            if (b && b[L]) lb(b, a);
            else {
                var c = a.type,
                    d = a.O,
                    e = a.capture;
                b.removeEventListener ? b.removeEventListener(c, d, e) : b.detachEvent && b.detachEvent(c in O ? O[c] : O[c] = "on" + c, d);
                b = w(b);
                N[b] && (d = N[b], ya(d, a), 0 == d.length && delete N[b]);
                a.d = k;
                if (d = M[c][e][b]) d.M = k, mb(c, e, b, d);
                delete db[a.key]
            }
        }
    }

    function mb(a, b, c, d) {
        if (!d.w && d.M) {
            for (var e = 0, f = 0; e < d.length; e++) d[e].d ? d[e].O.src = l : (e != f && (d[f] = d[e]), f++);
            d.length = f;
            d.M = m;
            0 == f && (delete M[a][b][c], M[a][b].f--, 0 == M[a][b].f && (delete M[a][b], M[a].f--), 0 == M[a].f && delete M[a])
        }
    }

    function jb(a, b, c) {
        var d = M;
        return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : l
    }

    function nb(a, b, c, d, e) {
        var f = 1;
        b = w(b);
        if (a[b]) {
            var g = --a.i,
                i = a[b];
            i.w ? i.w++ : i.w = 1;
            try {
                for (var j = i.length, n = 0; n < j; n++) {
                    var p = i[n];
                    p && !p.d && (f &= ob(p, e) !== m)
                }
            } finally {
                a.i = Math.max(g, a.i), i.w--, mb(c, d, b, i)
            }
        }
        return Boolean(f)
    }

    function ob(a, b) {
        a.p && kb(a);
        return a.handleEvent(b)
    }

    function hb(a, b) {
        if (a.d) return k;
        var c = a.type,
            d = M;
        if (!(c in d)) return k;
        var d = d[c],
            e, f;
        if (!Ya) {
            var g;
            if (!(g = b)) a: {
                g = ["window", "event"];
                for (var i = t; e = g.shift();)
                    if (i[e] != l) i = i[e];
                    else {
                        g = l;
                        break a
                    }
                g = i
            }
            e = g;
            g = k in d;
            i = m in d;
            if (g) {
                if (0 > e.keyCode || e.returnValue != h) return k;
                a: {
                    var j = m;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (n) {
                        j = k
                    }
                    if (j || e.returnValue == h) e.returnValue = k
                }
            }
            j = new K;
            ab(j, e, this);
            e = k;
            try {
                if (g) {
                    for (var p = [], q = j.currentTarget; q; q = q.parentNode) p.push(q);
                    f = d[k];
                    f.i = f.f;
                    for (var r = p.length -
                            1; !j.l && 0 <= r && f.i; r--) j.currentTarget = p[r], e &= nb(f, p[r], c, k, j);
                    if (i) {
                        f = d[m];
                        f.i = f.f;
                        for (r = 0; !j.l && r < p.length && f.i; r++) j.currentTarget = p[r], e &= nb(f, p[r], c, m, j)
                    }
                } else e = ob(a, j)
            } finally {
                p && (p.length = 0)
            }
            return e
        }
        c = new K(b, this);
        return e = ob(a, c)
    }
    var pb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function fb(a) {
        return "function" == aa(a) ? a : a[pb] || (a[pb] = function(b) {
            return a.handleEvent(b)
        })
    };

    function P(a) {
        Wa.call(this);
        this.I = a;
        this.J = {}
    }
    x(P, Wa);
    var qb = [];
    P.prototype.h = function(a, b, c, d, e) {
        u(b) || (qb[0] = b, b = qb);
        for (var f = 0; f < b.length; f++) {
            var g = eb(a, b[f], c || this, d || m, e || this.I || this);
            this.J[g.key] = g
        }
        return this
    };
    P.prototype.n = function(a, b, c, d, e) {
        if (u(b))
            for (var f = 0; f < b.length; f++) this.n(a, b[f], c, d, e);
        else {
            a: if (e = e || this.I || this, d = !!d, c = fb(c || this), a && a[L]) a = a.g[b], b = -1, a && (b = rb(a, c, d, e)), e = -1 < b ? a[b] : l;
                else {
                    if (a = jb(a, b, d))
                        for (b = 0; b < a.length; b++)
                            if (!a[b].d && a[b].k == c && a[b].capture == d && a[b].t == e) {
                                e = a[b];
                                break a
                            }
                    e = l
                }e && (kb(e), delete this.J[e.key])
        }
        return this
    };
    P.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function Q() {
        Wa.call(this);
        this.g = {};
        this.S = this
    }
    x(Q, Wa);
    Q.prototype[L] = k;
    s = Q.prototype;
    s.N = l;
    s.addEventListener = function(a, b, c, d) {
        eb(this, a, b, c, d)
    };
    s.removeEventListener = function(a, b, c, d) {
        ib(this, a, b, c, d)
    };
    s.dispatchEvent = function(a) {
        var b, c = this.N;
        if (c)
            for (b = []; c; c = c.N) b.push(c);
        var c = this.S,
            d = a.type || a;
        if (v(a)) a = new J(a, c);
        else if (a instanceof J) a.target = a.target || c;
        else {
            var e = a;
            a = new J(d, c);
            Ta(a, e)
        }
        var e = k,
            f;
        if (b)
            for (var g = b.length - 1; !a.l && 0 <= g; g--) f = a.currentTarget = b[g], e = sb(f, d, k, a) && e;
        a.l || (f = a.currentTarget = c, e = sb(f, d, k, a) && e, a.l || (e = sb(f, d, m, a) && e));
        if (b)
            for (g = 0; !a.l && g < b.length; g++) f = a.currentTarget = b[g], e = sb(f, d, m, a) && e;
        return e
    };
    s.h = function(a, b, c, d) {
        var e = this.g[a] || (this.g[a] = []),
            f = rb(e, b, c, d); - 1 < f ? (a = e[f], a.p = m) : (a = new cb(b, l, this, a, !!c, d), a.p = m, e.push(a));
        return a
    };
    s.n = function(a, b, c, d) {
        if (!(a in this.g)) return m;
        a = this.g[a];
        b = rb(a, b, c, d);
        return -1 < b ? (c = a[b], delete db[c.key], c.d = k, 1 == wa.splice.call(a, b, 1).length) : m
    };

    function lb(a, b) {
        var c = b.type;
        c in a.g && ya(a.g[c], b) && (delete db[b.key], b.d = k)
    }

    function sb(a, b, c, d) {
        if (!(b in a.g)) return k;
        var e = k;
        b = a.g[b];
        var f = b.length;
        if (0 < f) {
            for (var g = Array(f), i = 0; i < f; i++) g[i] = b[i];
            b = g
        } else b = [];
        for (f = 0; f < b.length; ++f)
            if ((g = b[f]) && !g.d && g.capture == c) g.p && lb(a, g), e = g.handleEvent(d) !== m && e;
        return e && d.P != m
    }

    function rb(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f.k == b && f.capture == !!c && f.t == d) return e
        }
        return -1
    };

    function R(a) {
        Q.call(this);
        this.B = a || window;
        this.W = eb(this.B, "resize", this.V, m, this);
        this.j = H(this.B || window)
    }
    x(R, Q);

    function tb() {
        var a = window,
            b = w(a);
        return ub[b] = ub[b] || new R(a)
    }
    var ub = {};
    R.prototype.W = l;
    R.prototype.B = l;
    R.prototype.j = l;
    R.prototype.V = function() {
        var a = H(this.B || window);
        if (!(a == this.j || (!a || !this.j ? 0 : a.width == this.j.width && a.height == this.j.height))) this.j = a, this.dispatchEvent("resize")
    };

    function vb(a, b) {
        P.call(this);
        this.v = a;
        this.b = b;
        this.a = {};
        wb(this);
        this.q = 5050
    }
    x(vb, P);

    function xb(a) {
        var b = y,
            c = "w" + Math.random();
        a = new va(b, c, a);
        return b.a[c] = a
    }

    function yb(a, b, c) {
        var d = y,
            e = d.a[a];
        e || (e = new va(d, a, b), d.a[a] = e, c && c(e));
        return e
    }
    s = vb.prototype;
    s.close = function(a) {
        for (var b = a.H, c = b.length, d = 0; d < c; d++) b[d](a);
        (b = a.c) && b.parentNode && b.parentNode.removeChild(b);
        delete this.a[a.getName()]
    };
    s.F = function(a) {
        for (var b = a.K, c = b.length, d = 0; d < c; d++) b[d](a);
        a.c.style.visibility = "hidden"
    };
    s.show = function(a, b) {
        if (a.c == l) {
            var c = H(window);
            if (!this.u) {
                var d = I("div");
                d.className = "chatovodSurface";
                this.v.appendChild(d);
                this.u = d
            }
            var d = a.m,
                e = I("div");
            e.className = "chatovodWindow" + (d.ba ? " chatovodWindowWithBorder" : "");
            var f = "chatovod_" + a.getName() + "_",
                g, i;
            d.save ? (g = this.b.get(f + "width", d.width), i = this.b.get(f + "height", d.height)) : (g = d.width, i = d.height);
            var j = 0,
                n = 0;
            "bottomRight" == d.align ? (j = c.width - g - d.marginX, n = c.height - i - d.marginY) : "bottomLeft" == d.align ? (j = d.marginX, n = c.height - i - d.marginY) :
                "topRight" == d.align ? (j = c.width - g - d.marginX, n = d.marginY) : "topLeft" == d.align ? (j = d.marginX, n = d.marginY) : "center" == d.align && (j = Math.round(c.width / 2 - g / 2), n = Math.round(c.height / 2 - parseInt(i) / 2));
            d.save ? (j = this.b.get(f + "left", j), f = this.b.get(f + "top", n)) : f = n;
            for (var p in this.a)
                if (this.a.hasOwnProperty(p)) {
                    var n = this.a[p],
                        q = n.c;
                    if (!n.L && q && this.q == q.style.zIndex) {
                        j = parseInt(q.style.left) + 15;
                        f = parseInt(q.style.top) + 15;
                        break
                    }
                }
            e.style.width = g + "px";
            e.style.height = i + "px";
            e.style.left = j + "px";
            e.style.top = f + "px";
            this.q++;
            e.style.zIndex = this.q;
            e.setAttribute("data-name", a.getName());
            zb(this, c, a.getName(), d, e);
            this.v.appendChild(e);
            c = I("div");
            c.className = "chatovodChatResize";
            e.appendChild(c);
            c = I("iframe");
            c.setAttribute("frameBorder", "0");
            c.setAttribute("marginHeight", "0");
            c.setAttribute("marginWidth", "0");
            c.setAttribute("width", "100%");
            c.setAttribute("height", "100%");
            c.setAttribute("name", "chatovod" + (a.m.U ? "l" : "r") + a.getName());
            c.setAttribute("id", "chatovod" + a.getName());
            c.setAttribute("src", d.url);
            e.appendChild(c);
            a.C = c;
            a.c = e
        }
        b || (a.c.style.visibility = "visible", this.o(a))
    };

    function zb(a, b, c, d, e) {
        var f = parseInt(e.style.left),
            g = parseInt(e.style.top),
            i = parseInt(e.style.width),
            j = parseInt(e.style.height);
        c = "chatovod_" + c + "_";
        0 > f && (f = 0, e.style.left = f + "px", d.save && a.b.set(c + "left", f));
        f + i > b.width && (f = b.width - i, 0 > f && (f = 0), e.style.left = f + "px", d.save && a.b.set(c + "left", f), f + i > b.width && (i = b.width - f, i < d.minWidth && (i = d.minWidth), e.style.width = i + "px", d.save && a.b.set(c + "width", i)));
        0 > g && (g = 0, e.style.top = g + "px", d.save && a.b.set(c + "top", g));
        g + j > b.height && (g = b.height - j, 0 > g && (g = 0), e.style.top =
            g + "px", d.save && a.b.set(c + "top", g), g + j > b.height && (j = b.height - g, j < d.minHeight && (j = d.minHeight), e.style.height = j + "px", d.save && a.b.set(c + "height", j)))
    }

    function Ab(a, b) {
        var c;
        if (c = Ua(b)) return c = c.getAttribute("data-name"), a.a[c]
    }
    s.o = function(a) {
        a = a.c;
        a.style.zIndex != this.q && (this.q++, a.style.zIndex = this.q)
    };
    s.X = function(a) {
        var b = a.target,
            c = Ab(this, b);
        c && this.o(c);
        "chatovodChatResize" == b.className ? Bb(this, a) : (a.preventDefault(), a.stopPropagation())
    };

    function Bb(a, b) {
        function c() {
            this.n(document, "mouseup", c, k);
            this.n(document, "mousemove", d, k);
            this.u.style.display = "none"
        }

        function d(a) {
            var b = a.clientX - la;
            a = a.clientY - Yb;
            0 != b && (b = n + b, b < g.minWidth ? b = g.minWidth : i + b > q.width && (b = q.width - i), f.style.width = b + "px", g.save && this.b.set(r + "width", b));
            0 != a && (b = p + a, b < g.minHeight ? b = g.minHeight : j + b > q.height && (b = q.height - j), f.style.height = b + "px", g.save && this.b.set(r + "height", b))
        }
        var e = Ab(a, b.target),
            f = e.c,
            g = e.m,
            e = f.getAttribute("data-name"),
            i = parseInt(f.style.left),
            j = parseInt(f.style.top),
            n = parseInt(f.style.width),
            p = parseInt(f.style.height),
            q = H(window),
            r = "chatovod_" + e + "_",
            la = b.clientX,
            Yb = b.clientY;
        a.h(document, "mouseup", c, k);
        a.h(document, "mousemove", d, k);
        a.u.style.display = "block";
        b.stopPropagation();
        b.preventDefault()
    }
    s.A = function(a, b, c, d) {
        function e() {
            this.n(document, "mouseup", e, k);
            this.n(document, "mousemove", f, k);
            this.u.style.display = "none"
        }

        function f(d) {
            d.stopPropagation();
            d.preventDefault();
            a.L = k;
            var e = d.screenX - b;
            d = d.screenY - c;
            0 != e && (e = j + e, 0 > e ? e = 0 : e + p > r.width && (e = r.width - p), g.style.left = e + "px", i.save && this.b.set(la + "left", e));
            0 != d && (e = n + d, 0 > e ? e = 0 : e + q > r.height && (e = r.height - q), g.style.top = e + "px", i.save && this.b.set(la + "top", e))
        }
        var g = a.c,
            i = a.m,
            j = parseInt(g.style.left),
            n = parseInt(g.style.top),
            p = parseInt(g.style.width),
            q = parseInt(g.style.height),
            r = H(window),
            la = "chatovod_" + g.getAttribute("data-name") + "_";
        this.h(document, "mouseup", e, k);
        this.h(document, "mousemove", f, k);
        d || (this.u.style.display = "block")
    };

    function wb(a) {
        a.h(a.v, "mousedown", a.X);
        a.h(a.v, "mousewheel", function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        var b = tb();
        a.h(b, "resize", function() {
            var a = b.j ? new Ra(b.j.width, b.j.height) : l,
                d;
            for (d in this.a)
                if (this.a.hasOwnProperty(d)) {
                    var e = this.a[d];
                    e.c && zb(this, a, e.getName(), e.m, e.c)
                }
        })
    };
    if (!window.chatovodApiInited) {
        window.chatovodApiInited = k;
        var A = new ta,
            Cb = m,
            Db = l,
            S = k,
            T = l,
            U = l,
            V = [],
            Eb = document.title,
            Fb = window.postMessage !== h,
            Gb = {
                en: {
                    enterChat: "Enter chat",
                    showChat: "Open chat",
                    hideChat: "Hide chat",
                    newMessage: "New message"
                },
                az: {
                    enterChat: "Chat daxil edin",
                    showChat: "Open chat",
                    hideChat: "Hide chat",
                    newMessage: "New mesajlar"
                },
                ru: {
                    enterChat: "Войти в чат",
                    showChat: "Открыть чат",
                    hideChat: "Скрыть чат",
                    newMessage: "Новое сообщение"
                }
            },
            Hb = {
                host: "demo.chatovod.com",
                stretchToWidth: k,
                stretchToHeight: k,
                width: 700,
                height: 400,
                minWidth: 170,
                minHeight: 250,
                align: "bottomRight",
                buttonMarginX: 30,
                buttonMarginY: 0,
                marginX: 40,
                marginY: 30,
                forceHttps: m,
                forceNewWindow: m,
                forceNewWindowForMobiles: k,
                hideButtonIfChatOpened: k,
                changeStateHandler: l,
                buttonClass: l,
                buttonClassOpened: "chatovodButtonOpened",
                buttonClassHidden: "chatovodButtonHidden",
                defaultState: "closed",
                forceState: l,
                defaultLanguage: "en",
                forceLanguage: l,
                language: l
            },
            Ib = {},
            Jb = {},
            W = {},
            Kb = m,
            Nb = function(a, b) {
                Lb(b);
                b.save = k;
                b.disableFocus = !A.get("chatovod_force_focus_" +
                    a, m);
                var c = "";
                b.disableFocus && (c = Mb(c, "disableFocus"));
                b.debug && (c = Mb(c, "debug"));
                var d = b.forceHttps ? "https:" : "";
                0 == d.length && ("http:" != window.location.protocol && "https:" != window.location.protocol) && (d = "http:");
                b.url = d + "//" + b.host + (b.language != b.defaultLanguage ? "/" + b.language : "") + "/" + c
            },
            Ob = function(a) {
                a && 2 < a.length && (a = a.substring(0, 2));
                return a
            },
            Lb = function(a) {
                var b = a.forceLanguage || Ob(window.navigator.fa) || Ob(window.navigator.language);
                Gb.hasOwnProperty(b) || (b = a.defaultLanguage);
                a.language = b;
                a.strings =
                    a.strings ? X(Gb[b], a.strings) : Gb[b]
            },
            Qb = function() {
                try {
                    var a = function() {};
                    Y(window, "storage", a);
                    Pb(a)
                } catch (b) {}
            },
            $ = function(a, b) {
                var c = b.state;
                if (b.changeStateHandler == l || b.changeStateHandler.call(a, b, c)) "opened" == c ? (Z(a, "chatovodButtonHidden"), Rb(a, b.buttonClassOpened), b.hideButtonIfChatOpened ? Rb(a, "chatovodButtonInvisible") : Z(a, "chatovodButtonInvisible"), Sb(a, b.strings.hideChat)) : ("hidden" == c ? (Z(a, b.buttonClassOpened), Rb(a, "chatovodButtonHidden"), Sb(a, b.strings.showChat)) : (Z(a, b.buttonClassHidden),
                    Z(a, b.buttonClassOpened), Sb(a, b.strings.enterChat)), Z(a, "chatovodButtonInvisible"))
            },
            Sb = function(a, b) {
                2 == a.childNodes.length ? a.childNodes[1].innerHTML = b : a.innerHTML = b
            },
            Tb = function() {},
            Wb = function(a) {
                a = a || window.event;
                if ((a = a.data) && v(a))
                    if (a = a.split(":"), !(3 > a.length || "chatovod" != a[0])) {
                        var b = a[2];
                        if ("newMessage" == b) {
                            var c = Ib["key" + a[1]];
                            "opened" != c.state && (a = W["key" + a[1]], a !== h && (0 <= xa(V, a) || (V.push(a), Ub()), Vb()));
                            !S && T == l && (T = setInterval(function() {
                                document.title = document.title == Eb ? c.strings.newMessage :
                                    Eb
                            }, 1E3))
                        } else if ("focus" == b) A.set("chatovod_force_focus_" + a[1], k);
                        else if ("blur" == b) z("chatovod_force_focus_" + a[1]);
                        else if ("ping" == b)(b = y.a[a[1]]) ? b.C.contentWindow.postMessage("pong", "*") : Jb["frame" + a[1]].contentWindow.postMessage("pong", "*");
                        else if ("openWindow" == b) b = 6 < a.length ? a[6] : "", c = {
                            url: decodeURIComponent(a[3]),
                            width: a[4],
                            height: a[5],
                            align: "center",
                            minimizeDisable: k,
                            ba: k
                        }, c = X(Hb, c), Lb(c), b = 0 == b.length || "_blank" == b ? xb(c) : yb(b, c, Tb), b.show();
                        else if ("closeWindow" == b)(b = y.a[a[1]]) && b.close();
                        else if ("click" == b)(b = y.a[a[1]]) && b.o();
                        else if ("click-close" == b)(b = y.a[a[1]]) && b.close();
                        else if ("click-minimize" == b)(b = y.a[a[1]]) && b.F();
                        else if ("startmove" == b)(b = y.a[a[1]]) && b.A(a[3], a[4]);
                        else if ("startmove2" == b)(b = y.a[a[1]]) && b.A(a[3], a[4], k);
                        else if ("mousemove" == b) {
                            if (b = y.a[a[1]]) b = document.createEvent("MouseEvents"), b.initMouseEvent("mousemove", k, k, window, 0, a[3], a[4], 0, 0, m, m, m, m, 0, l), document.dispatchEvent(b)
                        } else if ("mouseup" == b && (b = y.a[a[1]])) b = document.createEvent("MouseEvents"), b.initMouseEvent("mouseup",
                            k, k, window, 0, a[3], a[4], 0, 0, m, m, m, m, 0, l), document.dispatchEvent(b)
                    }
            },
            Vb = function() {
                U == l && (U = setInterval(function() {
                    for (var a = 0; a < V.length; a++) {
                        var b = V[a],
                            c = /(\s|^)chatovodButtonBlink(\s|$)/;
                        b.className.match(c) ? b.className = b.className.replace(c, " ").replace(/^\s+|\s+$/g, "") : (c = b.className, 0 != c.length && (c += " "), b.className = c + "chatovodButtonBlink")
                    }
                }, 1E3))
            },
            Ub = function() {
                for (var a = [], b = 0; b < V.length; b++) a.push(V[b].getAttribute("data-chatovod-key"));
                A.set("chatovodBlinkedButtons", a)
            },
            Xb = function() {
                for (var a =
                        A.get("chatovodBlinkedButtons", []), b = 0; b < a.length; b++) {
                    var c = W["key" + a[b]];
                    c && V.push(c)
                }
                0 != V.length && Vb()
            },
            Rb = function(a, b) {
                if (!a.className.match(RegExp("(\\s|^)" + b + "(\\s|$)"))) {
                    var c = a.className;
                    0 != c.length && (c += " ");
                    a.className = c + b
                }
            },
            Z = function(a, b) {
                a.className.match(RegExp("(\\s|^)" + b + "(\\s|$)")) && (a.className = a.className.replace(RegExp("(\\s|^)" + b + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
            },
            X = function(a, b) {
                var c = {},
                    d;
                for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                for (d in a) a.hasOwnProperty(d) && !c.hasOwnProperty(d) &&
                    (c[d] = a[d]);
                return c
            },
            Zb = function(a) {
                var b = 0,
                    c, d;
                if (0 == a.length) return b + "";
                for (c = 0; c < a.length; c++) d = a.charCodeAt(c), b = (b << 5) - b + d, b &= b;
                return b + ""
            },
            Mb = function(a, b) {
                a = 0 == a.length ? a + "?" : a + "\x26";
                return a += b + "\x3d" + encodeURIComponent("1")
            },
            $b = function(a) {
                Cb = k;
                var b = document.getElementsByTagName("head")[0];
                a.debug ? (a = I("link"), a.rel = "stylesheet", a.type = "text/css", a.href = "//st1.chatovod.com/api/css/widget.css", a.media = "all") : (a = I("style"), a.type = "text/css", a.styleSheet ? a.styleSheet.cssText = '.chatovodButton{position:fixed;cursor:pointer;margin:0;padding:2px 6px;background-color:#000;color:#fff;text-align:center;z-index:5001;border:1px solid #fff}.chatovodButton:hover{background-color:#555}.chatovodButton i{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#ccc;vertical-align:baseline;margin:0 4px 0 0;padding:0}.chatovodButtonInvisible{display:none}.chatovodButtonHidden i{background-color:#0a0}.chatovodButtonOpened i{background-color:#0a0}.chatovodButton.chatovodButtonBlink{background-color:#f0a}.chatovodWindow{overflow:visible;position:fixed;visibility:hidden;background-color:#fff;box-shadow:0 4px 18px #888;-moz-box-shadow:0 4px 18px #888;-webkit-box-shadow:0 4px 18px #888}.chatovodWindow.chatovodWindowWithBorder{border:1px solid #bcbcbc}.chatovodHidden{visibility:hidden}.chatovodSurface{position:fixed;left:0;top:0;bottom:0;right:0;display:none;z-index:500000;background:transparent 0 0 repeat scroll url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}.chatovodWindow .chatovodChatResize{position:absolute;bottom:0;right:0;height:8px;width:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADdJREFUeNpi/P//PwM62Lt3rySQesaESwKIpZhwSaDoRJeA68QmAdaJS8LZ2ZmRCZcEyESAAAMALnIg/X4YB3gAAAAASUVORK5CYII\x3d);background-repeat:no-repeat;cursor:se-resize}' :
                    a.appendChild(document.createTextNode('.chatovodButton{position:fixed;cursor:pointer;margin:0;padding:2px 6px;background-color:#000;color:#fff;text-align:center;z-index:5001;border:1px solid #fff}.chatovodButton:hover{background-color:#555}.chatovodButton i{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#ccc;vertical-align:baseline;margin:0 4px 0 0;padding:0}.chatovodButtonInvisible{display:none}.chatovodButtonHidden i{background-color:#0a0}.chatovodButtonOpened i{background-color:#0a0}.chatovodButton.chatovodButtonBlink{background-color:#f0a}.chatovodWindow{overflow:visible;position:fixed;visibility:hidden;background-color:#fff;box-shadow:0 4px 18px #888;-moz-box-shadow:0 4px 18px #888;-webkit-box-shadow:0 4px 18px #888}.chatovodWindow.chatovodWindowWithBorder{border:1px solid #bcbcbc}.chatovodHidden{visibility:hidden}.chatovodSurface{position:fixed;left:0;top:0;bottom:0;right:0;display:none;z-index:500000;background:transparent 0 0 repeat scroll url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}.chatovodWindow .chatovodChatResize{position:absolute;bottom:0;right:0;height:8px;width:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADdJREFUeNpi/P//PwM62Lt3rySQesaESwKIpZhwSaDoRJeA68QmAdaJS8LZ2ZmRCZcEyESAAAMALnIg/X4YB3gAAAAASUVORK5CYII\x3d);background-repeat:no-repeat;cursor:se-resize}')));
                b.appendChild(a)
            },
            ac = function() {
                var a = I("div");
                a.className = "chatovodContainer";
                ra.appendChild(a);
                return a
            },
            bc = function() {
                if (sa === h) {
                    var a = m,
                        b = navigator.userAgent || navigator.vendor || window.opera;
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
                            4))) a = k;
                    sa = a
                }
                return sa
            },
            cc = function(a) {
                var b = a.getName(),
                    c = W["key" + b];
                a = a.m;
                b = "chatovod_state_" + b;
                a.state = "hidden";
                $(c, a);
                a.save && A.set(b, a.state)
            },
            dc = function(a) {
                var b = a.getName(),
                    c = W["key" + b],
                    b = "chatovod_state_" + b;
                a = a.m;
                a.state = "closed";
                $(c, a);
                a.save && A.set(b, a.state);
                delete a.disableFocus
            },
            ec = function(a) {
                a.H.push(dc);
                a.K.push(cc)
            },
            fc = function(a, b, c) {
                var d = "chatovod_state_" + a;
                Y(c, "click", function() {
                    if (b.forceNewWindow || bc() && b.forceNewWindowForMobiles) {
                        var e = "";
                        b.debug && (e = Mb(e, "debug"));
                        var f =
                            b.forceHttps ? "https:" : "";
                        0 == f.length && ("http:" != window.location.protocol && "https:" != window.location.protocol) && (f = "http:");
                        e = X({
                            width: 550,
                            height: 670,
                            url: "about:blank",
                            name: "_blank",
                            location: k,
                            status: k,
                            $: k,
                            scrollbars: k,
                            toolbar: k,
                            menubar: m,
                            directories: m,
                            T: k
                        }, {
                            url: f + "//" + b.host + "/" + (b.language != b.defaultLanguage ? b.language + "/" : "") + e,
                            width: b.width || 800,
                            height: b.height || 600
                        });
                        f = "width\x3d" + e.width + ",height\x3d" + e.height + ",location\x3d" + (e.location ? "yes" : "no") + ",status\x3d" + (e.status ? "yes" : "no") + ",resizable\x3d" +
                            (e.$ ? "yes" : "no") + ",scrollbars\x3d" + (e.scrollbars ? "yes" : "no") + ",toolbar\x3d" + (e.toolbar ? "yes" : "no") + ",menubar\x3d" + (e.menubar ? "yes" : "no") + ",directories\x3d" + (e.directories ? "yes" : "no");
                        if (e.T) {
                            var g = 0,
                                i = 0,
                                j, n;
                            "undefined" !== typeof window.screenX ? (g = window.screenX, i = window.screenY) : "undefined" !== typeof window.screenLeft && (g = window.screenLeft, i = window.screenTop);
                            window.outerWidth ? (j = window.outerWidth, n = window.outerHeight) : document.documentElement.clientWidth && (j = document.documentElement.clientWidth, n =
                                document.documentElement.clientHeight);
                            var p = screen.availHeight,
                                q = screen.availWidth;
                            e.width > q && (e.width = q);
                            e.height > p && (e.height = p);
                            j = Math.round(g + (j - e.width) / 2);
                            n = Math.round(i + (n - 1.25 * e.height) / 2);
                            0 > j && (j = 0);
                            0 > n && (n = 0);
                            f += ",left\x3d" + j + ",top\x3d" + n
                        }
                        window.open(e.url, e.name, f) == l && alert("Could not open the window because your internet browser has blocked it. \nAllow pop-ups for normal chat.")
                    } else {
                        n = b.state;
                        e = yb(a, b, ec);
                        if ("hidden" == n || "opened" == n) {
                            if ("opened" == n && !b.hideButtonIfChatOpened) {
                                b.state =
                                    "hidden";
                                $(c, b);
                                e.ea();
                                A.set(d, b.state);
                                return
                            }
                        } else A.set("chatovod_force_focus_" + a, k);
                        e.show();
                        b.state = "opened";
                        $(c, b);
                        A.set(d, b.state);
                        Fb && "hidden" == n && e.C.contentWindow.postMessage("focus", "*");
                        for (n = 0; n < V.length; n++)
                            if (c === V[n]) {
                                V.splice(n, 1);
                                Z(c, "chatovodButtonBlink");
                                Ub();
                                break
                            }
                        0 == V.length && U != l && (clearInterval(U), U = l)
                    }
                })
            },
            Y = function(a, b, c) {
                a.addEventListener ? a.addEventListener(b, c, m) : a.attachEvent("on" + b, c)
            },
            Pb = function(a) {
                var b = window;
                b.removeEventListener ? b.removeEventListener("storage",
                    a, m) : b.detachEvent("onstorage", a)
            };
        ha("chatovod.resetSettings", function(a) {
            a = Zb(a);
            var b = "chatovod_" + a + "_";
            z(b + "width");
            z(b + "height");
            z(b + "left");
            z(b + "top");
            z("chatovod_state_" + a);
            z("chatovod_force_focus_" + a);
            z("chatovodBlinkedButtons")
        });
        ha("chatovod.addChatToDivId", function(a, b) {
            Kb || (Qb(), Kb = k);
            b.width !== h && "100%" !== b.width && (b.stretchToWidth = m);
            b.height !== h && "100%" !== b.height && (b.stretchToHeight = m);
            b = X(Hb, b);
            b.state = "opened";
            b.host = b.host.toLowerCase();
            var c = Zb(b.host);
            Nb(c, b);
            Cb || $b(b);
            var d =
                document.getElementById(a);
            if (d) {
                var e = Ib["key" + c] = b,
                    f = I("iframe");
                f.setAttribute("frameBorder", "0");
                f.setAttribute("marginHeight", "0");
                f.setAttribute("marginWidth", "0");
                var g = e.stretchToWidth ? "100%" : e.width + "",
                    i = e.stretchToHeight ? "100%" : e.height + "";
                f.setAttribute("width", g);
                f.setAttribute("height", i);
                f.setAttribute("style", "border:none;width:" + (ia(g) ? g : g + "px") + ";height:" + (ia(i) ? i : i + "px") + ";");
                f.setAttribute("name", "chatovod" + c);
                f.setAttribute("id", "chatovod" + c);
                f.setAttribute("src", e.url);
                Jb["frame" +
                    c] = f;
                d.appendChild(f)
            }
        });
        ha("chatovod.removeChatFromDivId", function(a, b) {
            var c = document.getElementById(a);
            if (c) {
                b.host = b.host.toLowerCase();
                var d = Zb(b.host),
                    c = Jb["frame" + d];
                delete Jb["frame" + d];
                delete b.disableFocus;
                z("chatovod_force_focus_" + d);
                d = document.getElementById("chatovodGarbageBin");
                d || (d = I("DIV"), d.id = "chatovodGarbageBin", d.style.display = "none", ra.appendChild(d));
                c.innerHTML = "";
                d.appendChild(c);
                d.innerHTML = ""
            }
        });
        ha("chatovod.addChatButton", function(a) {
            Kb || (Qb(), Kb = k);
            var b;
            if (a.attachButtonToElementId &&
                (b = document.getElementById(a.attachButtonToElementId), b == l)) return;
            a = X(Hb, a);
            a.U = k;
            a.host = a.host.toLowerCase();
            var c = Zb(a.host);
            Nb(c, a);
            Cb || $b(a);
            Ib["key" + c] = a;
            if (b == l) {
                b = a;
                var d = I("div");
                d.className = "chatovodButton" + (b.buttonClass ? " " + b.buttonClass : "") + " chatovodButtonHidden";
                d.id = "chatovod_button" + c;
                d.setAttribute("data-chatovod-key", c);
                "bottomRight" == b.align ? (d.style.bottom = b.buttonMarginY + "px", d.style.right = b.buttonMarginX + "px") : "bottomLeft" == b.align ? (d.style.bottom = b.buttonMarginY + "px", d.style.left =
                    b.buttonMarginX + "px") : "topLeft" == b.align ? (d.style.top = b.buttonMarginY + "px", d.style.left = b.buttonMarginX + "px") : "topRight" == b.align && (d.style.top = b.buttonMarginY + "px", d.style.right = b.buttonMarginX + "px");
                Db.appendChild(d);
                d.appendChild(I("i"));
                var e = I("span");
                d.appendChild(e);
                e.innerHTML = b.strings.enterChat;
                b = W["key" + c] = d
            } else d = b, d.setAttribute("data-chatovod-key", c), W["key" + c] = d;
            fc(c, a, b);
            a.forceNewWindow || bc() && a.forceNewWindowForMobiles ? (a.state = "closed", $(b, a)) : (d = a.forceState || A.get("chatovod_state_" +
                c, a.defaultState), "hidden" == d || "opened" == d ? (c = yb(c, a, ec), "opened" == d ? (a.state = "opened", $(b, a), c.show()) : (a.state = "hidden", $(b, a), c.show(k))) : (a.state = "closed", $(b, a)))
        });
        setTimeout(function() {
            function a() {
                S || (S = k, T != l && (clearInterval(T), T = l, setTimeout(function() {
                    document.title = Eb
                }, 1E3)))
            }

            function b(b) {
                b = b || window.event;
                "focus" == b.type || "focusin" == b.type ? a() : "blur" == b.type || "focusout" == b.type ? S && (S = m) : document[d] ? S && (S = m) : a()
            }
            ra = document.getElementsByTagName("body")[0];
            Db = ac();
            y = new vb(Db, A);
            if (u(window.chatovodOnLoad))
                for (var c =
                        0; c < window.chatovodOnLoad.length; c++) window.chatovodOnLoad[c].call(window.ca);
            Xb();
            var d = "hidden";
            d in document ? document.addEventListener("visibilitychange", b) : (d = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b) : (d = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", b) : (d = "msHidden") in document ? document.addEventListener("msvisibilitychange", b) : "onfocusin" in document ? (Y(document, "focusin", b), Y(document, "focusout", b)) : (Y(window, "focus", b), Y(window,
                "blur", b));
            Fb && Y(window, "message", Wb)
        }, 0)
    };
})();