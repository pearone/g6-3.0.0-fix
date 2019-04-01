!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.G6 = e() : t.G6 = e()
}(window, function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var r = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(r.exports, r, r.exports, n),
            r.l = !0,
            r.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (n.r(i),
            Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var r in t)
                    n.d(i, r, function(e) {
                        return t[e]
                    }
                    .bind(null, r));
            return i
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 141)
    }([function(t, e, n) {
        var i = n(39)
          , r = {};
        i.merge(r, i, {
            mixin: function(t, e) {
                var n = t.CFG ? "CFG" : "ATTRS";
                if (t && e) {
                    t._mixins = e,
                    t[n] = t[n] || {};
                    var i = {};
                    r.each(e, function(e) {
                        r.augment(t, e);
                        var a = e[n];
                        a && r.merge(i, a)
                    }),
                    t[n] = r.merge(i, t[n])
                }
            }
        }),
        t.exports = r
    }
    , function(t, e, n) {
        var i = {}
          , r = n(45)
          , a = n(98)
          , o = n(21)
          , s = n(97);
        o.deepMix(i, o, s, a, r),
        t.exports = i
    }
    , function(t, e) {
        var n = {}.toString;
        t.exports = function(t, e) {
            return n.call(t) === "[object " + e + "]"
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(118)
          , a = n(62)
          , o = n(34)
          , s = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        s.ATTRS = {},
        i.extend(s, a);
        var u = {
            matrix: "matrix",
            path: "path",
            points: "points",
            lineDash: "lineDash"
        };
        i.augment(s, r, {
            isShape: !0,
            drawInner: function(t) {
                var e = this._attrs;
                this.createPath(t);
                var n = t.globalAlpha;
                if (this.hasFill()) {
                    var r = e.fillOpacity;
                    i.isNil(r) || 1 === r ? t.fill() : (t.globalAlpha = r,
                    t.fill(),
                    t.globalAlpha = n)
                }
                if (this.hasStroke() && this._attrs.lineWidth > 0) {
                    var a = e.strokeOpacity;
                    i.isNil(a) || 1 === a || (t.globalAlpha = a),
                    t.stroke()
                }
                this.afterPath(t)
            },
            afterPath: function() {},
            isHitBox: function() {
                return !0
            },
            isHit: function(t, e) {
                var n = [t, e, 1];
                if (this.invert(n),
                this.isHitBox()) {
                    var i = this.getBBox();
                    if (i && !o.box(i.minX, i.maxX, i.minY, i.maxY, n[0], n[1]))
                        return !1
                }
                var r = this._attrs.clip;
                return r ? (r.invert(n, this.get("canvas")),
                !!r.isPointInPath(n[0], n[1]) && this.isPointInPath(n[0], n[1])) : this.isPointInPath(n[0], n[1])
            },
            calculateBox: function() {
                return null
            },
            getHitLineWidth: function() {
                var t = this._attrs
                  , e = t.lineAppendWidth || 0;
                return (t.lineWidth || 0) + e
            },
            clearTotalMatrix: function() {
                this._cfg.totalMatrix = null,
                this._cfg.region = null
            },
            clearBBox: function() {
                this._cfg.box = null,
                this._cfg.region = null
            },
            getBBox: function() {
                var t = this._cfg.box;
                return t || ((t = this.calculateBox()) && (t.x = t.minX,
                t.y = t.minY,
                t.width = t.maxX - t.minX,
                t.height = t.maxY - t.minY),
                this._cfg.box = t),
                t
            },
            clone: function() {
                var t = null
                  , e = this._attrs
                  , n = {};
                return i.each(e, function(t, r) {
                    u[r] && i.isArray(e[r]) ? n[r] = function(t) {
                        for (var e = [], n = 0; n < t.length; n++)
                            i.isArray(t[n]) ? e.push([].concat(t[n])) : e.push(t[n]);
                        return e
                    }(e[r]) : n[r] = e[r]
                }),
                t = new this.constructor({
                    attrs: n
                }),
                t._cfg.zIndex = this._cfg.zIndex,
                t
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(2)
          , r = Array.isArray ? Array.isArray : function(t) {
            return i(t, "Array")
        }
        ;
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(9)
          , r = n(4);
        t.exports = function(t, e) {
            if (t)
                if (r(t))
                    for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++)
                        ;
                else if (i(t))
                    for (var o in t)
                        if (t.hasOwnProperty(o) && !1 === e(t[o], o))
                            break
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return null === t || void 0 === t
        }
    }
    , function(t, e, n) {
        var i = n(13)
          , r = n(4)
          , a = 5;
        function o(t, e, n, s) {
            for (var u in n = n || 0,
            s = s || a,
            e)
                if (e.hasOwnProperty(u)) {
                    var h = e[u];
                    null !== h && i(h) ? (i(t[u]) || (t[u] = {}),
                    n < s ? o(t[u], h, n + 1, s) : t[u] = e[u]) : r(h) ? (t[u] = [],
                    t[u] = t[u].concat(h)) : void 0 !== h && (t[u] = h)
                }
        }
        t.exports = function() {
            for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++)
                t[n] = arguments[n];
            for (var i = t[0], r = 1; r < e; r++)
                o(i, t[r]);
            return i
        }
    }
    , function(t, e, n) {
        var i = n(2);
        t.exports = function(t) {
            return i(t, "String")
        }
    }
    , function(t, e) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        t.exports = function(t) {
            var e = void 0 === t ? "undefined" : n(t);
            return null !== t && "object" === e || "function" === e
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (t)
                for (var n in e)
                    e.hasOwnProperty(n) && (t.style[n] = e[n]);
            return t
        }
    }
    , function(t, e) {
        var n = document.createElement("table")
          , i = document.createElement("tr")
          , r = /^\s*<(\w+|!)[^>]*>/
          , a = {
            tr: document.createElement("tbody"),
            tbody: n,
            thead: n,
            tfoot: n,
            td: i,
            th: i,
            "*": document.createElement("div")
        };
        t.exports = function(t) {
            var e = r.test(t) && RegExp.$1;
            e in a || (e = "*");
            var n = a[e];
            t = t.replace(/(^\s*)|(\s*$)/g, ""),
            n.innerHTML = "" + t;
            var i = n.childNodes[0];
            return n.removeChild(i),
            i
        }
    }
    , function(t, e) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ;
        t.exports = function(t) {
            return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t
        }
    }
    , function(t, e, n) {
        var i = n(12)
          , r = n(2);
        t.exports = function(t) {
            if (!i(t) || !r(t, "Object"))
                return !1;
            if (null === Object.getPrototypeOf(t))
                return !0;
            for (var e = t; null !== Object.getPrototypeOf(e); )
                e = Object.getPrototypeOf(e);
            return Object.getPrototypeOf(t) === e
        }
    }
    , function(t, e) {
        t.exports = {
            version: "3.0.0",
            rootContainerClassName: "root-container",
            nodeContainerClassName: "node-container",
            edgeContainerClassName: "edge-container",
            defaultNode: {
                shape: "circle",
                style: {
                    fill: "#fff"
                },
                size: 40,
                color: "#333"
            },
            defaultEdge: {
                shape: "line",
                style: {},
                size: 1,
                color: "#333"
            },
            nodeLabel: {
                style: {
                    fill: "#595959",
                    textAlign: "center",
                    textBaseline: "middle"
                },
                offset: 5
            },
            edgeLabel: {
                style: {
                    fill: "#595959",
                    textAlign: "center",
                    textBaseline: "middle"
                }
            },
            nodeStateStyle: {
                active: {
                    fillOpacity: .8
                },
                selected: {
                    lineWidth: 2
                }
            },
            edgeStateStyle: {
                active: {
                    strokeOpacity: .8
                },
                selected: {
                    lineWidth: 2
                }
            },
            loopPosition: "top",
            delegateStyle: {
                fill: "#F3F9FF",
                fillOpacity: .5,
                stroke: "#1890FF",
                strokeOpacity: .9,
                lineDash: [5, 5]
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            if (t["_wrap_" + e])
                return t["_wrap_" + e];
            var n = function(n) {
                t[e](n)
            };
            return t["_wrap_" + e] = n,
            n
        }
    }
    , , , , function(t, e, n) {
        var i = n(0)
          , r = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi
          , a = /[^\s\,]+/gi;
        t.exports = {
            parseRadius: function(t) {
                var e = 0
                  , n = 0
                  , r = 0
                  , a = 0;
                return i.isArray(t) ? 1 === t.length ? e = n = r = a = t[0] : 2 === t.length ? (e = r = t[0],
                n = a = t[1]) : 3 === t.length ? (e = t[0],
                n = a = t[1],
                r = t[2]) : (e = t[0],
                n = t[1],
                r = t[2],
                a = t[3]) : e = n = r = a = t,
                {
                    r1: e,
                    r2: n,
                    r3: r,
                    r4: a
                }
            },
            parsePath: function(t) {
                return t = t || [],
                i.isArray(t) ? t : i.isString(t) ? (t = t.match(r),
                i.each(t, function(e, n) {
                    if ((e = e.match(a))[0].length > 1) {
                        var r = e[0].charAt(0);
                        e.splice(1, 0, e[0].substr(1)),
                        e[0] = r
                    }
                    i.each(e, function(t, n) {
                        isNaN(t) || (e[n] = +t)
                    }),
                    t[n] = e
                }),
                t) : void 0
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return null !== t && "function" != typeof t && isFinite(t.length)
        }
    }
    , function(t, e, n) {
        var i = n(26)
          , r = {
            deepMix: n(7),
            mix: n(27),
            debounce: n(103),
            each: n(5),
            throttle: n(102),
            mat3: n(36),
            vec2: n(66),
            vec3: n(65),
            transform: n(64),
            clone: n(37),
            upperFirst: n(71),
            isNil: n(6),
            isArray: n(4),
            createDom: n(11),
            modifyCSS: n(10),
            isObject: n(9),
            isPlainObject: n(13),
            isNumber: n(73),
            isString: n(8),
            uniqueId: n(72),
            addEventListener: n(101),
            wrapBehavior: n(15),
            extend: n(69),
            augment: n(68),
            remove: n(100),
            formatPadding: function(t) {
                var e = 0
                  , n = 0
                  , i = 0
                  , a = 0;
                return r.isNumber(t) || r.isString(t) ? e = n = i = a = t : r.isArray(t) && (e = t[0],
                i = r.isNil(t[1]) ? t[0] : t[1],
                a = r.isNil(t[2]) ? t[0] : t[2],
                n = r.isNil(t[3]) ? i : t[3]),
                [e, i, a, n]
            },
            cloneEvent: function(t) {
                var e = new i(t.type,t,!0,!0);
                return e.clientX = t.clientX,
                e.clientY = t.clientY,
                e.x = t.x,
                e.y = t.y,
                e.target = t.target,
                e.currentTarget = t.currentTarget,
                e.item = t.item,
                e
            }
        };
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(34)
          , a = n(33)
          , o = n(60)
          , s = n(59)
          , u = i.vec3
          , h = i.mat3
          , c = ["m", "l", "c", "a", "q", "h", "v", "t", "s", "z"];
        function l(t, e, n) {
            return {
                x: n.x + t,
                y: n.y + e
            }
        }
        function f(t, e) {
            return {
                x: e.x + (e.x - t.x),
                y: e.y + (e.y - t.y)
            }
        }
        function d(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }
        function g(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (d(t) * d(e))
        }
        function p(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(g(t, e))
        }
        var v = function(t, e, n) {
            this.preSegment = e,
            this.isLast = n,
            this.init(t, e)
        };
        i.augment(v, {
            init: function(t, e) {
                var n = t[0];
                e = e || {
                    endPoint: {
                        x: 0,
                        y: 0
                    }
                };
                var r, a, o, s, u = c.indexOf(n) >= 0, h = u ? n.toUpperCase() : n, d = t, v = e.endPoint, m = d[1], y = d[2];
                switch (h) {
                default:
                    break;
                case "M":
                    s = u ? l(m, y, v) : {
                        x: m,
                        y: y
                    },
                    this.command = "M",
                    this.params = [v, s],
                    this.subStart = s,
                    this.endPoint = s;
                    break;
                case "L":
                    s = u ? l(m, y, v) : {
                        x: m,
                        y: y
                    },
                    this.command = "L",
                    this.params = [v, s],
                    this.subStart = e.subStart,
                    this.endPoint = s,
                    this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y]
                    }
                    ;
                    break;
                case "H":
                    s = u ? l(m, 0, v) : {
                        x: m,
                        y: v.y
                    },
                    this.command = "L",
                    this.params = [v, s],
                    this.subStart = e.subStart,
                    this.endPoint = s,
                    this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y]
                    }
                    ;
                    break;
                case "V":
                    s = u ? l(0, m, v) : {
                        x: v.x,
                        y: m
                    },
                    this.command = "L",
                    this.params = [v, s],
                    this.subStart = e.subStart,
                    this.endPoint = s,
                    this.endTangent = function() {
                        return [s.x - v.x, s.y - v.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - s.x, v.y - s.y]
                    }
                    ;
                    break;
                case "Q":
                    u ? (r = l(m, y, v),
                    a = l(d[3], d[4], v)) : (r = {
                        x: m,
                        y: y
                    },
                    a = {
                        x: d[3],
                        y: d[4]
                    }),
                    this.command = "Q",
                    this.params = [v, r, a],
                    this.subStart = e.subStart,
                    this.endPoint = a,
                    this.endTangent = function() {
                        return [a.x - r.x, a.y - r.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - r.x, v.y - r.y]
                    }
                    ;
                    break;
                case "T":
                    a = u ? l(m, y, v) : {
                        x: m,
                        y: y
                    },
                    "Q" === e.command ? (r = f(e.params[1], v),
                    this.command = "Q",
                    this.params = [v, r, a],
                    this.subStart = e.subStart,
                    this.endPoint = a,
                    this.endTangent = function() {
                        return [a.x - r.x, a.y - r.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - r.x, v.y - r.y]
                    }
                    ) : (this.command = "TL",
                    this.params = [v, a],
                    this.subStart = e.subStart,
                    this.endPoint = a,
                    this.endTangent = function() {
                        return [a.x - v.x, a.y - v.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - a.x, v.y - a.y]
                    }
                    );
                    break;
                case "C":
                    u ? (r = l(m, y, v),
                    a = l(d[3], d[4], v),
                    o = l(d[5], d[6], v)) : (r = {
                        x: m,
                        y: y
                    },
                    a = {
                        x: d[3],
                        y: d[4]
                    },
                    o = {
                        x: d[5],
                        y: d[6]
                    }),
                    this.command = "C",
                    this.params = [v, r, a, o],
                    this.subStart = e.subStart,
                    this.endPoint = o,
                    this.endTangent = function() {
                        return [o.x - a.x, o.y - a.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - r.x, v.y - r.y]
                    }
                    ;
                    break;
                case "S":
                    u ? (a = l(m, y, v),
                    o = l(d[3], d[4], v)) : (a = {
                        x: m,
                        y: y
                    },
                    o = {
                        x: d[3],
                        y: d[4]
                    }),
                    "C" === e.command ? (r = f(e.params[2], v),
                    this.command = "C",
                    this.params = [v, r, a, o],
                    this.subStart = e.subStart,
                    this.endPoint = o,
                    this.endTangent = function() {
                        return [o.x - a.x, o.y - a.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - r.x, v.y - r.y]
                    }
                    ) : (this.command = "SQ",
                    this.params = [v, a, o],
                    this.subStart = e.subStart,
                    this.endPoint = o,
                    this.endTangent = function() {
                        return [o.x - a.x, o.y - a.y]
                    }
                    ,
                    this.startTangent = function() {
                        return [v.x - a.x, v.y - a.y]
                    }
                    );
                    break;
                case "A":
                    var x = m
                      , b = y
                      , M = d[3]
                      , w = d[4]
                      , _ = d[5];
                    s = u ? l(d[6], d[7], v) : {
                        x: d[6],
                        y: d[7]
                    },
                    this.command = "A";
                    var P = function(t, e, n, r, a, o, s) {
                        var u = i.mod(i.toRadian(s), 2 * Math.PI)
                          , h = t.x
                          , c = t.y
                          , l = e.x
                          , f = e.y
                          , d = Math.cos(u) * (h - l) / 2 + Math.sin(u) * (c - f) / 2
                          , v = -1 * Math.sin(u) * (h - l) / 2 + Math.cos(u) * (c - f) / 2
                          , m = d * d / (a * a) + v * v / (o * o);
                        m > 1 && (a *= Math.sqrt(m),
                        o *= Math.sqrt(m));
                        var y = a * a * (v * v) + o * o * (d * d)
                          , x = Math.sqrt((a * a * (o * o) - y) / y);
                        n === r && (x *= -1),
                        isNaN(x) && (x = 0);
                        var b = x * a * v / o
                          , M = x * -o * d / a
                          , w = (h + l) / 2 + Math.cos(u) * b - Math.sin(u) * M
                          , _ = (c + f) / 2 + Math.sin(u) * b + Math.cos(u) * M
                          , P = p([1, 0], [(d - b) / a, (v - M) / o])
                          , S = [(d - b) / a, (v - M) / o]
                          , A = [(-1 * d - b) / a, (-1 * v - M) / o]
                          , C = p(S, A);
                        return g(S, A) <= -1 && (C = Math.PI),
                        g(S, A) >= 1 && (C = 0),
                        0 === r && C > 0 && (C -= 2 * Math.PI),
                        1 === r && C < 0 && (C += 2 * Math.PI),
                        [t, w, _, a, o, P, C, u, r]
                    }(v, s, w, _, x, b, M);
                    this.params = P;
                    var S = e.subStart;
                    this.subStart = S,
                    this.endPoint = s;
                    var A = P[5] % (2 * Math.PI);
                    i.isNumberEqual(A, 2 * Math.PI) && (A = 0);
                    var C = P[6] % (2 * Math.PI);
                    i.isNumberEqual(C, 2 * Math.PI) && (C = 0);
                    var I = .001;
                    this.startTangent = function() {
                        0 === _ && (I *= -1);
                        var t = P[3] * Math.cos(A - I) + P[1]
                          , e = P[4] * Math.sin(A - I) + P[2];
                        return [t - S.x, e - S.y]
                    }
                    ,
                    this.endTangent = function() {
                        var t = P[6];
                        t - 2 * Math.PI < 1e-4 && (t = 0);
                        var e = P[3] * Math.cos(A + t + I) + P[1]
                          , n = P[4] * Math.sin(A + t - I) + P[2];
                        return [v.x - e, v.y - n]
                    }
                    ;
                    break;
                case "Z":
                    this.command = "Z",
                    this.params = [v, e.subStart],
                    this.subStart = e.subStart,
                    this.endPoint = e.subStart
                }
            },
            isInside: function(t, e, n) {
                var i = this.command
                  , a = this.params
                  , o = this.box;
                if (o && !r.box(o.minX, o.maxX, o.minY, o.maxY, t, e))
                    return !1;
                switch (i) {
                default:
                    break;
                case "M":
                    return !1;
                case "TL":
                case "L":
                case "Z":
                    return r.line(a[0].x, a[0].y, a[1].x, a[1].y, n, t, e);
                case "SQ":
                case "Q":
                    return r.quadraticline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, n, t, e);
                case "C":
                    return r.cubicline(a[0].x, a[0].y, a[1].x, a[1].y, a[2].x, a[2].y, a[3].x, a[3].y, n, t, e);
                case "A":
                    var s = a
                      , c = s[1]
                      , l = s[2]
                      , f = s[3]
                      , d = s[4]
                      , g = s[5]
                      , p = s[6]
                      , v = s[7]
                      , m = s[8]
                      , y = f > d ? f : d
                      , x = f > d ? 1 : f / d
                      , b = f > d ? d / f : 1;
                    s = [t, e, 1];
                    var M = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    return h.translate(M, M, [-c, -l]),
                    h.rotate(M, M, -v),
                    h.scale(M, M, [1 / x, 1 / b]),
                    u.transformMat3(s, s, M),
                    r.arcline(0, 0, y, g, g + p, 1 - m, n, s[0], s[1])
                }
                return !1
            },
            draw: function(t) {
                var e, n, i, r = this.command, a = this.params;
                switch (r) {
                default:
                    break;
                case "M":
                    t.moveTo(a[1].x, a[1].y);
                    break;
                case "TL":
                case "L":
                    t.lineTo(a[1].x, a[1].y);
                    break;
                case "SQ":
                case "Q":
                    e = a[1],
                    n = a[2],
                    t.quadraticCurveTo(e.x, e.y, n.x, n.y);
                    break;
                case "C":
                    e = a[1],
                    n = a[2],
                    i = a[3],
                    t.bezierCurveTo(e.x, e.y, n.x, n.y, i.x, i.y);
                    break;
                case "A":
                    var o = a
                      , s = o[1]
                      , u = o[2]
                      , h = o[3]
                      , c = o[4]
                      , l = o[5]
                      , f = o[6]
                      , d = o[7]
                      , g = o[8]
                      , p = h > c ? h : c
                      , v = h > c ? 1 : h / c
                      , m = h > c ? c / h : 1;
                    t.translate(s, u),
                    t.rotate(d),
                    t.scale(v, m),
                    t.arc(0, 0, p, l, l + f, 1 - g),
                    t.scale(1 / v, 1 / m),
                    t.rotate(-d),
                    t.translate(-s, -u);
                    break;
                case "Z":
                    t.closePath()
                }
            },
            getBBox: function(t) {
                var e, n, i, r, u = t / 2, h = this.params;
                switch (this.command) {
                default:
                case "M":
                case "Z":
                    break;
                case "TL":
                case "L":
                    this.box = {
                        minX: Math.min(h[0].x, h[1].x) - u,
                        maxX: Math.max(h[0].x, h[1].x) + u,
                        minY: Math.min(h[0].y, h[1].y) - u,
                        maxY: Math.max(h[0].y, h[1].y) + u
                    };
                    break;
                case "SQ":
                case "Q":
                    for (i = 0,
                    r = (n = o.extrema(h[0].x, h[1].x, h[2].x)).length; i < r; i++)
                        n[i] = o.at(h[0].x, h[1].x, h[2].x, n[i]);
                    for (n.push(h[0].x, h[2].x),
                    i = 0,
                    r = (e = o.extrema(h[0].y, h[1].y, h[2].y)).length; i < r; i++)
                        e[i] = o.at(h[0].y, h[1].y, h[2].y, e);
                    e.push(h[0].y, h[2].y),
                    this.box = {
                        minX: Math.min.apply(Math, n) - u,
                        maxX: Math.max.apply(Math, n) + u,
                        minY: Math.min.apply(Math, e) - u,
                        maxY: Math.max.apply(Math, e) + u
                    };
                    break;
                case "C":
                    for (i = 0,
                    r = (n = a.extrema(h[0].x, h[1].x, h[2].x, h[3].x)).length; i < r; i++)
                        n[i] = a.at(h[0].x, h[1].x, h[2].x, h[3].x, n[i]);
                    for (i = 0,
                    r = (e = a.extrema(h[0].y, h[1].y, h[2].y, h[3].y)).length; i < r; i++)
                        e[i] = a.at(h[0].y, h[1].y, h[2].y, h[3].y, e[i]);
                    n.push(h[0].x, h[3].x),
                    e.push(h[0].y, h[3].y),
                    this.box = {
                        minX: Math.min.apply(Math, n) - u,
                        maxX: Math.max.apply(Math, n) + u,
                        minY: Math.min.apply(Math, e) - u,
                        maxY: Math.max.apply(Math, e) + u
                    };
                    break;
                case "A":
                    var c = h
                      , l = c[1]
                      , f = c[2]
                      , d = c[3]
                      , g = c[4]
                      , p = c[5]
                      , v = c[6]
                      , m = c[7]
                      , y = c[8]
                      , x = p
                      , b = p + v
                      , M = s.xExtrema(m, d, g)
                      , w = 1 / 0
                      , _ = -1 / 0
                      , P = [x, b];
                    for (i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                        var S = M + i;
                        1 === y ? x < S && S < b && P.push(S) : b < S && S < x && P.push(S)
                    }
                    for (i = 0,
                    r = P.length; i < r; i++) {
                        var A = s.xAt(m, d, g, l, P[i]);
                        A < w && (w = A),
                        A > _ && (_ = A)
                    }
                    var C = s.yExtrema(m, d, g)
                      , I = 1 / 0
                      , k = -1 / 0
                      , T = [x, b];
                    for (i = 2 * -Math.PI; i <= 2 * Math.PI; i += Math.PI) {
                        var E = C + i;
                        1 === y ? x < E && E < b && T.push(E) : b < E && E < x && T.push(E)
                    }
                    for (i = 0,
                    r = T.length; i < r; i++) {
                        var B = s.yAt(m, d, g, f, T[i]);
                        B < I && (I = B),
                        B > k && (k = B)
                    }
                    this.box = {
                        minX: w - u,
                        maxX: _ + u,
                        minY: I - u,
                        maxY: k + u
                    }
                }
            }
        }),
        t.exports = v
    }
    , function(t, e, n) {
        var i = n(19)
          , r = n(22)
          , a = Math.PI
          , o = Math.sin
          , s = Math.cos
          , u = Math.atan2
          , h = 10
          , c = a / 3;
        function l(t, e, n, i, r, l, f) {
            var d, g, p, v, m, y, x;
            if (!e.fill) {
                var b = e.arrowLength || h
                  , M = e.arrowAngle ? e.arrowAngle * a / 180 : c;
                x = u(i - l, n - r),
                m = Math.abs(e.lineWidth * s(x)) / 2,
                y = Math.abs(e.lineWidth * o(x)) / 2,
                f && (m = -m,
                y = -y),
                d = r + b * s(x + M / 2),
                g = l + b * o(x + M / 2),
                p = r + b * s(x - M / 2),
                v = l + b * o(x - M / 2),
                t.beginPath(),
                t.moveTo(d - m, g - y),
                t.lineTo(r - m, l - y),
                t.lineTo(p - m, v - y),
                t.moveTo(r - m, l - y),
                t.lineTo(r + m, l + y),
                t.moveTo(r, l),
                t.stroke()
            }
        }
        function f(t, e, n, a, o, s, u) {
            var h = u ? e.startArrow : e.endArrow
              , c = h.d
              , l = 0
              , f = o - n
              , d = s - a
              , g = Math.atan(f / d);
            0 === d && f < 0 ? l = Math.PI : f > 0 && d > 0 ? l = Math.PI / 2 - g : f < 0 && d < 0 ? l = -Math.PI / 2 - g : f >= 0 && d < 0 ? l = -g - Math.PI / 2 : f <= 0 && d > 0 && (l = Math.PI / 2 - g);
            var p = function(t) {
                var e, n = [], a = i.parsePath(t.path);
                if (!Array.isArray(a) || 0 === a.length || "M" !== a[0][0] && "m" !== a[0][0])
                    return !1;
                for (var o = a.length, s = 0; s < a.length; s++) {
                    var u = a[s];
                    e = new r(u,e,s === o - 1),
                    n.push(e)
                }
                return n
            }(h);
            if (p) {
                c && (u ? (o += Math.sin(Math.abs(g)) * c,
                s = s + Math.cos(Math.abs(g)) * c - .5 * t.lineWidth) : (o -= Math.sin(Math.abs(g)) * c,
                s = s - Math.cos(Math.abs(g)) * c + .5 * t.lineWidth)),
                t.save(),
                t.beginPath(),
                t.translate(o, s),
                t.rotate(l);
                for (var v = 0; v < p.length; v++)
                    p[v].draw(t);
                t.setTransform(1, 0, 0, 1, 0, 0),
                t.fillStyle = t.strokeStyle,
                t.fill(),
                t.restore()
            }
        }
        t.exports = {
            addStartArrow: function(t, e, n, i, r, a) {
                "object" == typeof e.startArrow ? f(t, e, n, i, r, a, !0) : e.startArrow && l(t, e, n, i, r, a, !0)
            },
            addEndArrow: function(t, e, n, i, r, a) {
                "object" == typeof e.endArrow ? f(t, e, n, i, r, a, !1) : e.endArrow && l(t, e, n, i, r, a, !1)
            }
        }
    }
    , function(t, e, n) {
        var i = n(0);
        function r(t, e, n, i) {
            return {
                x: Math.cos(i) * n + t,
                y: Math.sin(i) * n + e
            }
        }
        function a(t, e, n, i) {
            var r, a;
            return i ? t < e ? (r = e - t,
            a = 2 * Math.PI - n + t) : t > n && (r = 2 * Math.PI - t + e,
            a = t - n) : (r = t - e,
            a = n - t),
            r > a ? n : e
        }
        function o(t, e, n, r) {
            var o = 0;
            return n - e >= 2 * Math.PI && (o = 2 * Math.PI),
            e = i.mod(e, 2 * Math.PI),
            n = i.mod(n, 2 * Math.PI) + o,
            t = i.mod(t, 2 * Math.PI),
            r ? e >= n ? t > n && t < e ? t : a(t, n, e, !0) : t < e || t > n ? t : a(t, e, n) : e <= n ? e < t && t < n ? t : a(t, e, n, !0) : t > e || t < n ? t : a(t, n, e)
        }
        function s(t, e, n, r, a, s, u, h, c) {
            var l = [u, h]
              , f = [t, e]
              , d = i.vec2.subtract([], l, f)
              , g = i.vec2.angleTo([1, 0], d);
            g = o(g, r, a, s);
            var p = [n * Math.cos(g) + t, n * Math.sin(g) + e];
            return c && (c.x = p[0],
            c.y = p[1]),
            i.vec2.distance(p, l)
        }
        t.exports = {
            nearAngle: o,
            projectPoint: function(t, e, n, i, r, a, o, u) {
                var h = {};
                return s(t, e, n, i, r, a, o, u, h),
                h
            },
            pointDistance: s,
            box: function(t, e, n, a, s, u) {
                var h = Math.PI / 2
                  , c = Math.PI
                  , l = 3 * Math.PI / 2
                  , f = []
                  , d = o(0, a, s, u);
                0 === d && f.push(r(t, e, n, 0)),
                (d = o(h, a, s, u)) === h && f.push(r(t, e, n, h)),
                (d = o(c, a, s, u)) === c && f.push(r(t, e, n, c)),
                (d = o(l, a, s, u)) === l && f.push(r(t, e, n, l)),
                f.push(r(t, e, n, a)),
                f.push(r(t, e, n, s));
                var g = 1 / 0
                  , p = -1 / 0
                  , v = 1 / 0
                  , m = -1 / 0;
                return i.each(f, function(t) {
                    g > t.x && (g = t.x),
                    p < t.x && (p = t.x),
                    v > t.y && (v = t.y),
                    m < t.y && (m = t.y)
                }),
                {
                    minX: g,
                    minY: v,
                    maxX: p,
                    maxY: m
                }
            }
        }
    }
    , function(t, e, n) {
        var i = n(0).vec2;
        t.exports = {
            at: function(t, e, n) {
                return (e - t) * n + t
            },
            pointDistance: function(t, e, n, r, a, o) {
                var s = [n - t, r - e];
                if (i.exactEquals(s, [0, 0]))
                    return NaN;
                var u = [-s[1], s[0]];
                i.normalize(u, u);
                var h = [a - t, o - e];
                return Math.abs(i.dot(h, u))
            },
            box: function(t, e, n, i, r) {
                var a = r / 2
                  , o = Math.min(t, n)
                  , s = Math.max(t, n);
                return {
                    minX: o - a,
                    minY: Math.min(e, i) - a,
                    maxX: s + a,
                    maxY: Math.max(e, i) + a
                }
            },
            len: function(t, e, n, i) {
                return Math.sqrt((n - t) * (n - t) + (i - e) * (i - e))
            }
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = function(t, e, n, i) {
            this.type = t,
            this.target = null,
            this.currentTarget = null,
            this.bubbles = n,
            this.cancelable = i,
            this.timeStamp = (new Date).getTime(),
            this.defaultPrevented = !1,
            this.propagationStopped = !1,
            this.removed = !1,
            this.event = e
        };
        i.augment(r, {
            preventDefault: function() {
                this.defaultPrevented = this.cancelable && !0
            },
            stopPropagation: function() {
                this.propagationStopped = !0
            },
            remove: function() {
                this.remove = !0
            },
            clone: function() {
                return i.clone(this)
            },
            toString: function() {
                return "[Event (type=" + this.type + ")]"
            }
        }),
        t.exports = r
    }
    , function(t, e) {
        function n(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n])
        }
        t.exports = function(t, e, i, r) {
            return e && n(t, e),
            i && n(t, i),
            r && n(t, r),
            t
        }
    }
    , function(t, e, n) {
        t.exports = {
            Canvas: n(140),
            Group: n(63),
            Shape: n(3),
            Arc: n(58),
            Circle: n(57),
            Dom: n(56),
            Ellipse: n(55),
            Fan: n(54),
            Image: n(53),
            Line: n(52),
            Marker: n(32),
            Path: n(51),
            Polygon: n(50),
            Polyline: n(49),
            Rect: n(48),
            Text: n(47),
            PathSegment: n(22),
            PathUtil: n(31),
            Event: n(26),
            EventEmitter: n(61),
            version: "3.4.1"
        }
    }
    , , function(t, e, n) {
        var i = n(1);
        n(96);
        var r = {}
          , a = {};
        function o(t) {
            return a[t] || i.upperFirst(t)
        }
        var s = {
            defaultShapeType: null,
            getShape: function(t) {
                return this[t] || this[this.defaultShapeType]
            },
            draw: function(t, e, n) {
                var i = this.getShape(t)
                  , r = i.draw(e, n);
                return i.afterDraw(e, n, r),
                r
            },
            update: function(t, e, n) {
                var i = this.getShape(t);
                i.update && (i.update(e, n),
                i.afterUpdate(e, n))
            },
            setState: function(t, e, n, i) {
                this.getShape(t).setState(e, n, i)
            },
            shouldUpdate: function(t) {
                return !!this.getShape(t).update
            },
            getControlPoints: function(t, e) {
                return this.getShape(t).getControlPoints(e)
            },
            getAnchorPoints: function(t, e) {
                return this.getShape(t).getAnchorPoints(e)
            }
        }
          , u = {
            draw: function() {},
            afterDraw: function() {},
            afterUpdate: function() {},
            setState: function() {},
            getControlPoints: function(t) {
                return t.controlPoints
            },
            getAnchorPoints: function(t) {
                return t.anchorPoints
            }
        };
        r.registerFactory = function(t, e) {
            var n = o(t)
              , a = i.mix({}, s, e);
            return r[n] = a,
            a.className = n,
            function(t) {
                var e = "register" + t.className;
                r[e] = function(e, n, r) {
                    var a = r ? t.getShape(r) : u
                      , o = i.mix({}, a, n);
                    return o.type = e,
                    t[e] = o,
                    o
                }
            }(a),
            a
        }
        ,
        r.getFactory = function(t) {
            return this[t = o(t)]
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(39)
          , r = "\t\n\v\f\r   ᠎             　\u2028\u2029"
          , a = new RegExp("([a-z])[" + r + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + r + "]*,?[" + r + "]*)+)","ig")
          , o = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + r + "]*,?[" + r + "]*","ig")
          , s = function(t) {
            if (!t)
                return null;
            if (typeof t == typeof [])
                return t;
            var e = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            }
              , n = [];
            return String(t).replace(a, function(t, i, r) {
                var a = []
                  , s = i.toLowerCase();
                if (r.replace(o, function(t, e) {
                    e && a.push(+e)
                }),
                "m" === s && a.length > 2 && (n.push([i].concat(a.splice(0, 2))),
                s = "l",
                i = "m" === i ? "l" : "L"),
                "o" === s && 1 === a.length && n.push([i, a[0]]),
                "r" === s)
                    n.push([i].concat(a));
                else
                    for (; a.length >= e[s] && (n.push([i].concat(a.splice(0, e[s]))),
                    e[s]); )
                        ;
            }),
            n
        }
          , u = function(t, e) {
            for (var n = [], i = 0, r = t.length; r - 2 * !e > i; i += 2) {
                var a = [{
                    x: +t[i - 2],
                    y: +t[i - 1]
                }, {
                    x: +t[i],
                    y: +t[i + 1]
                }, {
                    x: +t[i + 2],
                    y: +t[i + 3]
                }, {
                    x: +t[i + 4],
                    y: +t[i + 5]
                }];
                e ? i ? r - 4 === i ? a[3] = {
                    x: +t[0],
                    y: +t[1]
                } : r - 2 === i && (a[2] = {
                    x: +t[0],
                    y: +t[1]
                },
                a[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : a[0] = {
                    x: +t[r - 2],
                    y: +t[r - 1]
                } : r - 4 === i ? a[3] = a[2] : i || (a[0] = {
                    x: +t[i],
                    y: +t[i + 1]
                }),
                n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
            }
            return n
        }
          , h = function(t, e, n, i, r) {
            var a = [];
            if (null === r && null === i && (i = n),
            t = +t,
            e = +e,
            n = +n,
            i = +i,
            null !== r) {
                var o = Math.PI / 180
                  , s = t + n * Math.cos(-i * o)
                  , u = t + n * Math.cos(-r * o);
                a = [["M", s, e + n * Math.sin(-i * o)], ["A", n, n, 0, +(r - i > 180), 0, u, e + n * Math.sin(-r * o)]]
            } else
                a = [["M", t, e], ["m", 0, -i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, -2 * i], ["z"]];
            return a
        }
          , c = function(t) {
            if (!(t = s(t)) || !t.length)
                return [["M", 0, 0]];
            var e, n, i = [], r = 0, a = 0, o = 0, c = 0, l = 0;
            "M" === t[0][0] && (o = r = +t[0][1],
            c = a = +t[0][2],
            l++,
            i[0] = ["M", r, a]);
            for (var f, d, g = 3 === t.length && "M" === t[0][0] && "R" === t[1][0].toUpperCase() && "Z" === t[2][0].toUpperCase(), p = l, v = t.length; p < v; p++) {
                if (i.push(f = []),
                (e = (d = t[p])[0]) !== e.toUpperCase())
                    switch (f[0] = e.toUpperCase(),
                    f[0]) {
                    case "A":
                        f[1] = d[1],
                        f[2] = d[2],
                        f[3] = d[3],
                        f[4] = d[4],
                        f[5] = d[5],
                        f[6] = +d[6] + r,
                        f[7] = +d[7] + a;
                        break;
                    case "V":
                        f[1] = +d[1] + a;
                        break;
                    case "H":
                        f[1] = +d[1] + r;
                        break;
                    case "R":
                        for (var m = 2, y = (n = [r, a].concat(d.slice(1))).length; m < y; m++)
                            n[m] = +n[m] + r,
                            n[++m] = +n[m] + a;
                        i.pop(),
                        i = i.concat(u(n, g));
                        break;
                    case "O":
                        i.pop(),
                        (n = h(r, a, d[1], d[2])).push(n[0]),
                        i = i.concat(n);
                        break;
                    case "U":
                        i.pop(),
                        i = i.concat(h(r, a, d[1], d[2], d[3])),
                        f = ["U"].concat(i[i.length - 1].slice(-2));
                        break;
                    case "M":
                        o = +d[1] + r,
                        c = +d[2] + a;
                        break;
                    default:
                        for (var x = 1, b = d.length; x < b; x++)
                            f[x] = +d[x] + (x % 2 ? r : a)
                    }
                else if ("R" === e)
                    n = [r, a].concat(d.slice(1)),
                    i.pop(),
                    i = i.concat(u(n, g)),
                    f = ["R"].concat(d.slice(-2));
                else if ("O" === e)
                    i.pop(),
                    (n = h(r, a, d[1], d[2])).push(n[0]),
                    i = i.concat(n);
                else if ("U" === e)
                    i.pop(),
                    i = i.concat(h(r, a, d[1], d[2], d[3])),
                    f = ["U"].concat(i[i.length - 1].slice(-2));
                else
                    for (var M = 0, w = d.length; M < w; M++)
                        f[M] = d[M];
                if ("O" !== (e = e.toUpperCase()))
                    switch (f[0]) {
                    case "Z":
                        r = +o,
                        a = +c;
                        break;
                    case "H":
                        r = f[1];
                        break;
                    case "V":
                        a = f[1];
                        break;
                    case "M":
                        o = f[f.length - 2],
                        c = f[f.length - 1];
                        break;
                    default:
                        r = f[f.length - 2],
                        a = f[f.length - 1]
                    }
            }
            return i
        }
          , l = function(t, e, n, i) {
            return [t, e, n, i, n, i]
        }
          , f = function(t, e, n, i, r, a) {
            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * i, 1 / 3 * r + 2 / 3 * n, 1 / 3 * a + 2 / 3 * i, r, a]
        }
          , d = function(t, e) {
            var n, i = c(t), r = e && c(e), a = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, o = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, s = [], u = [], h = "", d = "", g = function(t, e, n) {
                var i, r;
                if (!t)
                    return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0]in {
                    T: 1,
                    Q: 1
                }) && (e.qx = e.qy = null),
                t[0]) {
                case "M":
                    e.X = t[1],
                    e.Y = t[2];
                    break;
                case "A":
                    t = ["C"].concat(function t(e, n, i, r, a, o, s, u, h, c) {
                        i === r && (i += 1);
                        var l, f, d, g, p, v = 120 * Math.PI / 180, m = Math.PI / 180 * (+a || 0), y = [], x = function(t, e, n) {
                            return {
                                x: t * Math.cos(n) - e * Math.sin(n),
                                y: t * Math.sin(n) + e * Math.cos(n)
                            }
                        };
                        if (c)
                            f = c[0],
                            d = c[1],
                            g = c[2],
                            p = c[3];
                        else {
                            e = (l = x(e, n, -m)).x,
                            n = l.y,
                            u = (l = x(u, h, -m)).x,
                            h = l.y,
                            e === u && n === h && (u += 1,
                            h += 1);
                            var b = (e - u) / 2
                              , M = (n - h) / 2
                              , w = b * b / (i * i) + M * M / (r * r);
                            w > 1 && (i *= w = Math.sqrt(w),
                            r *= w);
                            var _ = i * i
                              , P = r * r
                              , S = (o === s ? -1 : 1) * Math.sqrt(Math.abs((_ * P - _ * M * M - P * b * b) / (_ * M * M + P * b * b)));
                            g = S * i * M / r + (e + u) / 2,
                            p = S * -r * b / i + (n + h) / 2,
                            f = Math.asin(((n - p) / r).toFixed(9)),
                            d = Math.asin(((h - p) / r).toFixed(9)),
                            f = e < g ? Math.PI - f : f,
                            d = u < g ? Math.PI - d : d,
                            f < 0 && (f = 2 * Math.PI + f),
                            d < 0 && (d = 2 * Math.PI + d),
                            s && f > d && (f -= 2 * Math.PI),
                            !s && d > f && (d -= 2 * Math.PI)
                        }
                        var A = d - f;
                        if (Math.abs(A) > v) {
                            var C = d
                              , I = u
                              , k = h;
                            d = f + v * (s && d > f ? 1 : -1),
                            y = t(u = g + i * Math.cos(d), h = p + r * Math.sin(d), i, r, a, 0, s, I, k, [d, C, g, p])
                        }
                        A = d - f;
                        var T = Math.cos(f)
                          , E = Math.sin(f)
                          , B = Math.cos(d)
                          , N = Math.sin(d)
                          , L = Math.tan(A / 4)
                          , O = 4 / 3 * i * L
                          , D = 4 / 3 * r * L
                          , Y = [e, n]
                          , X = [e + O * E, n - D * T]
                          , R = [u + O * N, h - D * B]
                          , F = [u, h];
                        if (X[0] = 2 * Y[0] - X[0],
                        X[1] = 2 * Y[1] - X[1],
                        c)
                            return [X, R, F].concat(y);
                        for (var q = [], j = 0, z = (y = [X, R, F].concat(y).join().split(",")).length; j < z; j++)
                            q[j] = j % 2 ? x(y[j - 1], y[j], m).y : x(y[j], y[j + 1], m).x;
                        return q
                    }
                    .apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                case "S":
                    "C" === n || "S" === n ? (i = 2 * e.x - e.bx,
                    r = 2 * e.y - e.by) : (i = e.x,
                    r = e.y),
                    t = ["C", i, r].concat(t.slice(1));
                    break;
                case "T":
                    "Q" === n || "T" === n ? (e.qx = 2 * e.x - e.qx,
                    e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
                    e.qy = e.y),
                    t = ["C"].concat(f(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                case "Q":
                    e.qx = t[1],
                    e.qy = t[2],
                    t = ["C"].concat(f(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                case "L":
                    t = ["C"].concat(l(e.x, e.y, t[1], t[2]));
                    break;
                case "H":
                    t = ["C"].concat(l(e.x, e.y, t[1], e.y));
                    break;
                case "V":
                    t = ["C"].concat(l(e.x, e.y, e.x, t[1]));
                    break;
                case "Z":
                    t = ["C"].concat(l(e.x, e.y, e.X, e.Y))
                }
                return t
            }, p = function(t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var a = t[e]; a.length; )
                        s[e] = "A",
                        r && (u[e] = "A"),
                        t.splice(e++, 0, ["C"].concat(a.splice(0, 6)));
                    t.splice(e, 1),
                    n = Math.max(i.length, r && r.length || 0)
                }
            }, v = function(t, e, a, o, s) {
                t && e && "M" === t[s][0] && "M" !== e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]),
                a.bx = 0,
                a.by = 0,
                a.x = t[s][1],
                a.y = t[s][2],
                n = Math.max(i.length, r && r.length || 0))
            };
            n = Math.max(i.length, r && r.length || 0);
            for (var m = 0; m < n; m++) {
                i[m] && (h = i[m][0]),
                "C" !== h && (s[m] = h,
                m && (d = s[m - 1])),
                i[m] = g(i[m], a, d),
                "A" !== s[m] && "C" === h && (s[m] = "C"),
                p(i, m),
                r && (r[m] && (h = r[m][0]),
                "C" !== h && (u[m] = h,
                m && (d = u[m - 1])),
                r[m] = g(r[m], o, d),
                "A" !== u[m] && "C" === h && (u[m] = "C"),
                p(r, m)),
                v(i, r, a, o, m),
                v(r, i, o, a, m);
                var y = i[m]
                  , x = r && r[m]
                  , b = y.length
                  , M = r && x.length;
                a.x = y[b - 2],
                a.y = y[b - 1],
                a.bx = parseFloat(y[b - 4]) || a.x,
                a.by = parseFloat(y[b - 3]) || a.y,
                o.bx = r && (parseFloat(x[M - 4]) || o.x),
                o.by = r && (parseFloat(x[M - 3]) || o.y),
                o.x = r && x[M - 2],
                o.y = r && x[M - 1]
            }
            return r ? [i, r] : i
        }
          , g = /,?([a-z]),?/gi
          , p = function(t) {
            return t.join(",").replace(g, "$1")
        }
          , v = function(t, e, n, i, r) {
            return t * (t * (-3 * e + 9 * n - 9 * i + 3 * r) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n
        }
          , m = function(t, e, n, i, r, a, o, s, u) {
            null === u && (u = 1);
            for (var h = (u = u > 1 ? 1 : u < 0 ? 0 : u) / 2, c = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], l = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, d = 0; d < 12; d++) {
                var g = h * c[d] + h
                  , p = v(g, t, n, r, o)
                  , m = v(g, e, i, a, s)
                  , y = p * p + m * m;
                f += l[d] * Math.sqrt(y)
            }
            return h * f
        }
          , y = function(t, e, n, i, r, a, o, s) {
            if (!(Math.max(t, n) < Math.min(r, o) || Math.min(t, n) > Math.max(r, o) || Math.max(e, i) < Math.min(a, s) || Math.min(e, i) > Math.max(a, s))) {
                var u = (t - n) * (a - s) - (e - i) * (r - o);
                if (u) {
                    var h = ((t * i - e * n) * (r - o) - (t - n) * (r * s - a * o)) / u
                      , c = ((t * i - e * n) * (a - s) - (e - i) * (r * s - a * o)) / u
                      , l = +h.toFixed(2)
                      , f = +c.toFixed(2);
                    if (!(l < +Math.min(t, n).toFixed(2) || l > +Math.max(t, n).toFixed(2) || l < +Math.min(r, o).toFixed(2) || l > +Math.max(r, o).toFixed(2) || f < +Math.min(e, i).toFixed(2) || f > +Math.max(e, i).toFixed(2) || f < +Math.min(a, s).toFixed(2) || f > +Math.max(a, s).toFixed(2)))
                        return {
                            x: h,
                            y: c
                        }
                }
            }
        }
          , x = function(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }
          , b = function(t, e, n, i, r) {
            if (r)
                return [["M", +t + +r, e], ["l", n - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, i - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - n, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - i], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
            var a = [["M", t, e], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
            return a.parsePathArray = p,
            a
        }
          , M = function(t, e, n, i) {
            return null === t && (t = e = n = i = 0),
            null === e && (e = t.y,
            n = t.width,
            i = t.height,
            t = t.x),
            {
                x: t,
                y: e,
                width: n,
                w: n,
                height: i,
                h: i,
                x2: t + n,
                y2: e + i,
                cx: t + n / 2,
                cy: e + i / 2,
                r1: Math.min(n, i) / 2,
                r2: Math.max(n, i) / 2,
                r0: Math.sqrt(n * n + i * i) / 2,
                path: b(t, e, n, i),
                vb: [t, e, n, i].join(" ")
            }
        }
          , w = function(t, e, n, r, a, o, s, u) {
            i.isArray(t) || (t = [t, e, n, r, a, o, s, u]);
            var h = function(t, e, n, i, r, a, o, s) {
                for (var u, h, c, l, f = [], d = [[], []], g = 0; g < 2; ++g)
                    if (0 === g ? (h = 6 * t - 12 * n + 6 * r,
                    u = -3 * t + 9 * n - 9 * r + 3 * o,
                    c = 3 * n - 3 * t) : (h = 6 * e - 12 * i + 6 * a,
                    u = -3 * e + 9 * i - 9 * a + 3 * s,
                    c = 3 * i - 3 * e),
                    Math.abs(u) < 1e-12) {
                        if (Math.abs(h) < 1e-12)
                            continue;
                        (l = -c / h) > 0 && l < 1 && f.push(l)
                    } else {
                        var p = h * h - 4 * c * u
                          , v = Math.sqrt(p);
                        if (!(p < 0)) {
                            var m = (-h + v) / (2 * u);
                            m > 0 && m < 1 && f.push(m);
                            var y = (-h - v) / (2 * u);
                            y > 0 && y < 1 && f.push(y)
                        }
                    }
                for (var x, b = f.length, M = b; b--; )
                    x = 1 - (l = f[b]),
                    d[0][b] = x * x * x * t + 3 * x * x * l * n + 3 * x * l * l * r + l * l * l * o,
                    d[1][b] = x * x * x * e + 3 * x * x * l * i + 3 * x * l * l * a + l * l * l * s;
                return d[0][M] = t,
                d[1][M] = e,
                d[0][M + 1] = o,
                d[1][M + 1] = s,
                d[0].length = d[1].length = M + 2,
                {
                    min: {
                        x: Math.min.apply(0, d[0]),
                        y: Math.min.apply(0, d[1])
                    },
                    max: {
                        x: Math.max.apply(0, d[0]),
                        y: Math.max.apply(0, d[1])
                    }
                }
            }
            .apply(null, t);
            return M(h.min.x, h.min.y, h.max.x - h.min.x, h.max.y - h.min.y)
        }
          , _ = function(t, e, n, i, r, a, o, s, u) {
            var h = 1 - u
              , c = Math.pow(h, 3)
              , l = Math.pow(h, 2)
              , f = u * u
              , d = f * u
              , g = t + 2 * u * (n - t) + f * (r - 2 * n + t)
              , p = e + 2 * u * (i - e) + f * (a - 2 * i + e)
              , v = n + 2 * u * (r - n) + f * (o - 2 * r + n)
              , m = i + 2 * u * (a - i) + f * (s - 2 * a + i);
            return {
                x: c * t + 3 * l * u * n + 3 * h * u * u * r + d * o,
                y: c * e + 3 * l * u * i + 3 * h * u * u * a + d * s,
                m: {
                    x: g,
                    y: p
                },
                n: {
                    x: v,
                    y: m
                },
                start: {
                    x: h * t + u * n,
                    y: h * e + u * i
                },
                end: {
                    x: h * r + u * o,
                    y: h * a + u * s
                },
                alpha: 90 - 180 * Math.atan2(g - v, p - m) / Math.PI
            }
        }
          , P = function(t, e, n) {
            if (!function(t, e) {
                return t = M(t),
                e = M(e),
                x(e, t.x, t.y) || x(e, t.x2, t.y) || x(e, t.x, t.y2) || x(e, t.x2, t.y2) || x(t, e.x, e.y) || x(t, e.x2, e.y) || x(t, e.x, e.y2) || x(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
            }(w(t), w(e)))
                return n ? 0 : [];
            for (var i = ~~(m.apply(0, t) / 8), r = ~~(m.apply(0, e) / 8), a = [], o = [], s = {}, u = n ? 0 : [], h = 0; h < i + 1; h++) {
                var c = _.apply(0, t.concat(h / i));
                a.push({
                    x: c.x,
                    y: c.y,
                    t: h / i
                })
            }
            for (var l = 0; l < r + 1; l++) {
                var f = _.apply(0, e.concat(l / r));
                o.push({
                    x: f.x,
                    y: f.y,
                    t: l / r
                })
            }
            for (var d = 0; d < i; d++)
                for (var g = 0; g < r; g++) {
                    var p = a[d]
                      , v = a[d + 1]
                      , b = o[g]
                      , P = o[g + 1]
                      , S = Math.abs(v.x - p.x) < .001 ? "y" : "x"
                      , A = Math.abs(P.x - b.x) < .001 ? "y" : "x"
                      , C = y(p.x, p.y, v.x, v.y, b.x, b.y, P.x, P.y);
                    if (C) {
                        if (s[C.x.toFixed(4)] === C.y.toFixed(4))
                            continue;
                        s[C.x.toFixed(4)] = C.y.toFixed(4);
                        var I = p.t + Math.abs((C[S] - p[S]) / (v[S] - p[S])) * (v.t - p.t)
                          , k = b.t + Math.abs((C[A] - b[A]) / (P[A] - b[A])) * (P.t - b.t);
                        I >= 0 && I <= 1 && k >= 0 && k <= 1 && (n ? u++ : u.push({
                            x: C.x,
                            y: C.y,
                            t1: I,
                            t2: k
                        }))
                    }
                }
            return u
        };
        function S(t, e) {
            var n = []
              , i = [];
            return t.length && function t(e, r) {
                if (1 === e.length)
                    n.push(e[0]),
                    i.push(e[0]);
                else {
                    for (var a = [], o = 0; o < e.length - 1; o++)
                        0 === o && n.push(e[0]),
                        o === e.length - 2 && i.push(e[o + 1]),
                        a[o] = [(1 - r) * e[o][0] + r * e[o + 1][0], (1 - r) * e[o][1] + r * e[o + 1][1]];
                    t(a, r)
                }
            }(t, e),
            {
                left: n,
                right: i.reverse()
            }
        }
        var A = function(t, e, n) {
            if (1 === n)
                return [[].concat(t)];
            var i = [];
            if ("L" === e[0] || "C" === e[0] || "Q" === e[0])
                i = i.concat(function(t, e, n) {
                    var i = [[t[1], t[2]]];
                    n = n || 2;
                    var r = [];
                    "A" === e[0] ? (i.push(e[6]),
                    i.push(e[7])) : "C" === e[0] ? (i.push([e[1], e[2]]),
                    i.push([e[3], e[4]]),
                    i.push([e[5], e[6]])) : "S" === e[0] || "Q" === e[0] ? (i.push([e[1], e[2]]),
                    i.push([e[3], e[4]])) : i.push([e[1], e[2]]);
                    for (var a = i, o = 1 / n, s = 0; s < n - 1; s++) {
                        var u = S(a, o / (1 - o * s));
                        r.push(u.left),
                        a = u.right
                    }
                    return r.push(a),
                    r.map(function(t) {
                        var e = [];
                        return 4 === t.length && (e.push("C"),
                        e = e.concat(t[2])),
                        t.length >= 3 && (3 === t.length && e.push("Q"),
                        e = e.concat(t[1])),
                        2 === t.length && e.push("L"),
                        e = e.concat(t[t.length - 1])
                    })
                }(t, e, n));
            else {
                var r = [].concat(t);
                "M" === r[0] && (r[0] = "L");
                for (var a = 0; a <= n - 1; a++)
                    i.push(r)
            }
            return i
        }
          , C = function(t, e) {
            if (t.length !== e.length)
                return !1;
            var n = !0;
            return i.each(t, function(t, i) {
                if (t !== e[i])
                    return n = !1,
                    !1
            }),
            n
        };
        function I(t, e, n) {
            var i = null
              , r = n;
            return e < r && (r = e,
            i = "add"),
            t < r && (r = t,
            i = "del"),
            {
                type: i,
                min: r
            }
        }
        function k(t, e, n) {
            for (var i, r = [].concat(t), a = 1 / (n + 1), o = T(e)[0], s = 1; s <= n; s++)
                a *= s,
                0 === (i = Math.floor(t.length * a)) ? r.unshift([o[0] * a + t[i][0] * (1 - a), o[1] * a + t[i][1] * (1 - a)]) : r.splice(i, 0, [o[0] * a + t[i][0] * (1 - a), o[1] * a + t[i][1] * (1 - a)]);
            return r
        }
        function T(t) {
            var e = [];
            switch (t[0]) {
            case "M":
            case "L":
                e.push([t[1], t[2]]);
                break;
            case "A":
                e.push([t[6], t[7]]);
                break;
            case "Q":
                e.push([t[3], t[4]]),
                e.push([t[1], t[2]]);
                break;
            case "T":
                e.push([t[1], t[2]]);
                break;
            case "C":
                e.push([t[5], t[6]]),
                e.push([t[1], t[2]]),
                e.push([t[3], t[4]]);
                break;
            case "S":
                e.push([t[3], t[4]]),
                e.push([t[1], t[2]]);
                break;
            case "H":
            case "V":
                e.push([t[1], t[1]])
            }
            return e
        }
        t.exports = {
            parsePathString: s,
            parsePathArray: p,
            pathTocurve: d,
            pathToAbsolute: c,
            catmullRomToBezier: u,
            rectPath: b,
            fillPath: function(t, e) {
                if (1 === t.length)
                    return t;
                var n = t.length - 1
                  , i = e.length - 1
                  , r = n / i
                  , a = [];
                if (1 === t.length && "M" === t[0][0]) {
                    for (var o = 0; o < i - n; o++)
                        t.push(t[0]);
                    return t
                }
                for (var s = 0; s < i; s++) {
                    var u = Math.floor(r * s);
                    a[u] = (a[u] || 0) + 1
                }
                var h = a.reduce(function(e, i, r) {
                    return r === n ? e.concat(t[n]) : e.concat(A(t[r], t[r + 1], i))
                }, []);
                return h.unshift(t[0]),
                "Z" !== e[i] && "z" !== e[i] || h.push("Z"),
                h
            },
            fillPathByDiff: function(t, e) {
                var n = function(t, e) {
                    var n, i, r = t.length, a = e.length, o = 0;
                    if (0 === r || 0 === a)
                        return null;
                    for (var s = [], u = 0; u <= r; u++)
                        s[u] = [],
                        s[u][0] = {
                            min: u
                        };
                    for (var h = 0; h <= a; h++)
                        s[0][h] = {
                            min: h
                        };
                    for (var c = 1; c <= r; c++) {
                        n = t[c - 1];
                        for (var l = 1; l <= a; l++) {
                            i = e[l - 1],
                            o = C(n, i) ? 0 : 1;
                            var f = s[c - 1][l].min + 1
                              , d = s[c][l - 1].min + 1
                              , g = s[c - 1][l - 1].min + o;
                            s[c][l] = I(f, d, g)
                        }
                    }
                    return s
                }(t, e)
                  , i = t.length
                  , r = e.length
                  , a = []
                  , o = 1
                  , s = 1;
                if (n[i][r] !== i) {
                    for (var u = 1; u <= i; u++) {
                        var h = n[u][u].min;
                        s = u;
                        for (var c = o; c <= r; c++)
                            n[u][c].min < h && (h = n[u][c].min,
                            s = c);
                        o = s,
                        n[u][o].type && a.push({
                            index: u - 1,
                            type: n[u][o].type
                        })
                    }
                    for (var l = a.length - 1; l >= 0; l--)
                        o = a[l].index,
                        "add" === a[l].type ? t.splice(o, 0, [].concat(t[o])) : t.splice(o, 1)
                }
                var f = r - (i = t.length);
                if (i < r)
                    for (var d = 0; d < f; d++)
                        "z" === t[i - 1][0] || "Z" === t[i - 1][0] ? t.splice(i - 2, 0, t[i - 2]) : t.push(t[i - 1]),
                        i += 1;
                return t
            },
            formatPath: function(t, e) {
                if (t.length <= 1)
                    return t;
                for (var n, i = 0; i < e.length; i++)
                    if (t[i][0] !== e[i][0])
                        switch (n = T(t[i]),
                        e[i][0]) {
                        case "M":
                            t[i] = ["M"].concat(n[0]);
                            break;
                        case "L":
                            t[i] = ["L"].concat(n[0]);
                            break;
                        case "A":
                            t[i] = [].concat(e[i]),
                            t[i][6] = n[0][0],
                            t[i][7] = n[0][1];
                            break;
                        case "Q":
                            if (n.length < 2) {
                                if (!(i > 0)) {
                                    t[i] = e[i];
                                    break
                                }
                                n = k(n, t[i - 1], 1)
                            }
                            t[i] = ["Q"].concat(n.reduce(function(t, e) {
                                return t.concat(e)
                            }, []));
                            break;
                        case "T":
                            t[i] = ["T"].concat(n[0]);
                            break;
                        case "C":
                            if (n.length < 3) {
                                if (!(i > 0)) {
                                    t[i] = e[i];
                                    break
                                }
                                n = k(n, t[i - 1], 2)
                            }
                            t[i] = ["C"].concat(n.reduce(function(t, e) {
                                return t.concat(e)
                            }, []));
                            break;
                        case "S":
                            if (n.length < 2) {
                                if (!(i > 0)) {
                                    t[i] = e[i];
                                    break
                                }
                                n = k(n, t[i - 1], 1)
                            }
                            t[i] = ["S"].concat(n.reduce(function(t, e) {
                                return t.concat(e)
                            }, []));
                            break;
                        default:
                            t[i] = e[i]
                        }
                return t
            },
            intersection: function(t, e) {
                return function(t, e, n) {
                    var i, r, a, o, s, u, h, c, l, f;
                    t = d(t),
                    e = d(e);
                    for (var g = n ? 0 : [], p = 0, v = t.length; p < v; p++) {
                        var m = t[p];
                        if ("M" === m[0])
                            i = s = m[1],
                            r = u = m[2];
                        else {
                            "C" === m[0] ? (i = (l = [i, r].concat(m.slice(1)))[6],
                            r = l[7]) : (l = [i, r, i, r, s, u, s, u],
                            i = s,
                            r = u);
                            for (var y = 0, x = e.length; y < x; y++) {
                                var b = e[y];
                                if ("M" === b[0])
                                    a = h = b[1],
                                    o = c = b[2];
                                else {
                                    "C" === b[0] ? (a = (f = [a, o].concat(b.slice(1)))[6],
                                    o = f[7]) : (f = [a, o, a, o, h, c, h, c],
                                    a = h,
                                    o = c);
                                    var M = P(l, f, n);
                                    if (n)
                                        g += M;
                                    else {
                                        for (var w = 0, _ = M.length; w < _; w++)
                                            M[w].segment1 = p,
                                            M[w].segment2 = y,
                                            M[w].bez1 = l,
                                            M[w].bez2 = f;
                                        g = g.concat(M)
                                    }
                                }
                            }
                        }
                    }
                    return g
                }(t, e)
            }
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(19)
          , o = n(22)
          , s = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        s.Symbols = {
            circle: function(t, e, n) {
                return [["M", t, e], ["m", -n, 0], ["a", n, n, 0, 1, 0, 2 * n, 0], ["a", n, n, 0, 1, 0, 2 * -n, 0]]
            },
            square: function(t, e, n) {
                return [["M", t - n, e - n], ["L", t + n, e - n], ["L", t + n, e + n], ["L", t - n, e + n], ["Z"]]
            },
            diamond: function(t, e, n) {
                return [["M", t - n, e], ["L", t, e - n], ["L", t + n, e], ["L", t, e + n], ["Z"]]
            },
            triangle: function(t, e, n) {
                var i = n * Math.sin(1 / 3 * Math.PI);
                return [["M", t - n, e + i], ["L", t, e - i], ["L", t + n, e + i], ["z"]]
            },
            "triangle-down": function(t, e, n) {
                var i = n * Math.sin(1 / 3 * Math.PI);
                return [["M", t - n, e - i], ["L", t + n, e - i], ["L", t, e + i], ["Z"]]
            }
        },
        s.ATTRS = {
            path: null,
            lineWidth: 1
        },
        i.extend(s, r),
        i.augment(s, {
            type: "marker",
            canFill: !0,
            canStroke: !0,
            getDefaultAttrs: function() {
                return {
                    x: 0,
                    y: 0,
                    lineWidth: 1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.radius
                  , r = this.getHitLineWidth() / 2 + i;
                return {
                    minX: e - r,
                    minY: n - r,
                    maxX: e + r,
                    maxY: n + r
                }
            },
            _getPath: function() {
                var t, e = this._attrs, n = e.x, r = e.y, a = e.radius || e.r, o = e.symbol || "circle";
                return (t = i.isFunction(o) ? o : s.Symbols[o]) ? t(n, r, a) : (console.warn(o + " marker is not supported."),
                null)
            },
            createPath: function(t) {
                var e = this._cfg.segments;
                if (!e || this._cfg.hasUpdate) {
                    var n, i = a.parsePath(this._getPath());
                    t.beginPath(),
                    e = [];
                    for (var r = 0; r < i.length; r++) {
                        var s = i[r];
                        n = new o(s,n,r === i.length - 1),
                        e.push(n),
                        n.draw(t)
                    }
                    this._cfg.segments = e,
                    this._cfg.hasUpdate = !1
                } else {
                    t.beginPath();
                    for (var u = 0; u < e.length; u++)
                        e[u].draw(t)
                }
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(0)
          , r = i.vec2;
        function a(t, e, n, i, r) {
            var a = 1 - r;
            return a * a * (a * i + 3 * r * n) + r * r * (r * t + 3 * a * e)
        }
        function o(t, e, n, i, o, s, u, h, c, l, f) {
            var d, g, p, v, m, y, x, b, M = .005, w = 1 / 0, _ = [c, l];
            for (g = 0; g < 1; g += .05)
                p = [a(t, n, o, u, g), a(e, i, s, h, g)],
                (v = r.squaredDistance(_, p)) < w && (d = g,
                w = v);
            w = 1 / 0;
            for (var P = 0; P < 32 && !(M < 1e-4); P++)
                b = d + M,
                p = [a(t, n, o, u, x = d - M), a(e, i, s, h, x)],
                v = r.squaredDistance(_, p),
                x >= 0 && v < w ? (d = x,
                w = v) : (y = [a(t, n, o, u, b), a(e, i, s, h, b)],
                m = r.squaredDistance(_, y),
                b <= 1 && m < w ? (d = b,
                w = m) : M *= .5);
            return f && (f.x = a(t, n, o, u, d),
            f.y = a(e, i, s, h, d)),
            Math.sqrt(w)
        }
        function s(t, e, n, i, r) {
            return t * (t * (-3 * e + 9 * n - 9 * i + 3 * r) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n
        }
        t.exports = {
            at: a,
            derivativeAt: function(t, e, n, i, r) {
                var a = 1 - r;
                return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
            },
            projectPoint: function(t, e, n, i, r, a, s, u, h, c) {
                var l = {};
                return o(t, e, n, i, r, a, s, u, h, c, l),
                l
            },
            pointDistance: o,
            extrema: function(t, e, n, r) {
                var a, o, s, u = 3 * t - 9 * e + 9 * n - 3 * r, h = 6 * e - 12 * n + 6 * r, c = 3 * n - 3 * r, l = [];
                if (i.isNumberEqual(u, 0))
                    i.isNumberEqual(h, 0) || (a = -c / h) >= 0 && a <= 1 && l.push(a);
                else {
                    var f = h * h - 4 * u * c;
                    i.isNumberEqual(f, 0) ? l.push(-h / (2 * u)) : f > 0 && (o = (-h - (s = Math.sqrt(f))) / (2 * u),
                    (a = (-h + s) / (2 * u)) >= 0 && a <= 1 && l.push(a),
                    o >= 0 && o <= 1 && l.push(o))
                }
                return l
            },
            len: function(t, e, n, r, a, o, u, h, c) {
                i.isNil(c) && (c = 1);
                for (var l = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], g = 0, p = 0; p < 12; p++) {
                    var v = l * f[p] + l
                      , m = s(v, t, n, a, u)
                      , y = s(v, e, r, o, h)
                      , x = m * m + y * y;
                    g += d[p] * Math.sqrt(x)
                }
                return l * g
            }
        }
    }
    , function(t, e, n) {
        var i = n(25)
          , r = n(60)
          , a = n(33)
          , o = n(24);
        t.exports = {
            line: function(t, e, n, r, a, o, s) {
                var u = i.box(t, e, n, r, a);
                if (!this.box(u.minX, u.maxX, u.minY, u.maxY, o, s))
                    return !1;
                var h = i.pointDistance(t, e, n, r, o, s);
                return !isNaN(h) && h <= a / 2
            },
            polyline: function(t, e, n, i) {
                var r = t.length - 1;
                if (r < 1)
                    return !1;
                for (var a = 0; a < r; a++) {
                    var o = t[a][0]
                      , s = t[a][1]
                      , u = t[a + 1][0]
                      , h = t[a + 1][1];
                    if (this.line(o, s, u, h, e, n, i))
                        return !0
                }
                return !1
            },
            cubicline: function(t, e, n, i, r, o, s, u, h, c, l) {
                return a.pointDistance(t, e, n, i, r, o, s, u, c, l) <= h / 2
            },
            quadraticline: function(t, e, n, i, a, o, s, u, h) {
                return r.pointDistance(t, e, n, i, a, o, u, h) <= s / 2
            },
            arcline: function(t, e, n, i, r, a, s, u, h) {
                return o.pointDistance(t, e, n, i, r, a, u, h) <= s / 2
            },
            rect: function(t, e, n, i, r, a) {
                return t <= r && r <= t + n && e <= a && a <= e + i
            },
            circle: function(t, e, n, i, r) {
                return Math.pow(i - t, 2) + Math.pow(r - e, 2) <= Math.pow(n, 2)
            },
            box: function(t, e, n, i, r, a) {
                return t <= r && r <= e && n <= a && a <= i
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.setMatrixArrayType = function(t) {
            e.ARRAY_TYPE = t
        }
        ,
        e.toRadian = function(t) {
            return t * r
        }
        ,
        e.equals = function(t, e) {
            return Math.abs(t - e) <= i * Math.max(1, Math.abs(t), Math.abs(e))
        }
        ;
        var i = e.EPSILON = 1e-6;
        e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
        e.RANDOM = Math.random;
        var r = Math.PI / 180
    }
    , function(t, e, n) {
        var i = n(127);
        i.translate = function(t, e, n) {
            var r = new Array(9);
            return i.fromTranslation(r, n),
            i.multiply(t, r, e)
        }
        ,
        i.rotate = function(t, e, n) {
            var r = new Array(9);
            return i.fromRotation(r, n),
            i.multiply(t, r, e)
        }
        ,
        i.scale = function(t, e, n) {
            var r = new Array(9);
            return i.fromScaling(r, n),
            i.multiply(t, r, e)
        }
        ,
        t.exports = i
    }
    , function(t, e, n) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , r = n(4);
        t.exports = function t(e) {
            if ("object" !== (void 0 === e ? "undefined" : i(e)) || null === e)
                return e;
            var n = void 0;
            if (r(e)) {
                n = [];
                for (var a = 0, o = e.length; a < o; a++)
                    "object" === i(e[a]) && null != e[a] ? n[a] = t(e[a]) : n[a] = e[a]
            } else
                for (var s in n = {},
                e)
                    "object" === i(e[s]) && null != e[s] ? n[s] = t(e[s]) : n[s] = e[s];
            return n
        }
    }
    , function(t, e, n) {
        var i = n(2);
        t.exports = function(t) {
            return i(t, "Function")
        }
    }
    , function(t, e, n) {
        t.exports = {
            isFunction: n(38),
            isObject: n(9),
            isBoolean: n(139),
            isNil: n(6),
            isString: n(8),
            isArray: n(4),
            isNumber: n(73),
            isEmpty: n(138),
            uniqueId: n(72),
            clone: n(37),
            deepMix: n(7),
            assign: n(27),
            merge: n(7),
            upperFirst: n(71),
            each: n(5),
            isEqual: n(134),
            toArray: n(70),
            extend: n(69),
            augment: n(68),
            remove: n(133),
            isNumberEqual: n(132),
            toRadian: n(131),
            toDegree: n(130),
            mod: n(129),
            clamp: n(67),
            createDom: n(11),
            modifyCSS: n(10),
            requestAnimationFrame: n(128),
            getRatio: function() {
                return window.devicePixelRatio ? window.devicePixelRatio : 2
            },
            mat3: n(36),
            vec2: n(66),
            vec3: n(65),
            transform: n(64)
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(46)
          , a = n(14)
          , o = ["fillStyle", "strokeStyle", "path", "points", "img", "symbol"]
          , s = function() {
            function t(t) {
                this._cfg = i.mix({
                    id: null,
                    type: "item",
                    model: {},
                    group: null,
                    animate: !1,
                    visible: !0,
                    event: !0,
                    keyShape: null,
                    states: []
                }, this.getDefaultCfg(), t);
                var e = t.group;
                e.set("item", this);
                var n = this.get("model").id;
                n && "" !== n || (n = i.uniqueId(this.get("type"))),
                this.set("id", n),
                e.set("id", n),
                this.init(),
                this.draw()
            }
            var e = t.prototype;
            return e.isItem = function() {
                return !0
            }
            ,
            e.get = function(t) {
                return this._cfg[t]
            }
            ,
            e.set = function(t, e) {
                i.isPlainObject(t) ? this._cfg = i.mix({}, this._cfg, t) : this._cfg[t] = e
            }
            ,
            e.getDefaultCfg = function() {
                return {}
            }
            ,
            e.init = function() {
                var t = r.getFactory(this.get("type"));
                this.set("shapeFactory", t)
            }
            ,
            e._calculateBBox = function() {
                var t = this.get("keyShape")
                  , e = this.get("group")
                  , n = i.getBBox(t, e);
                return n.x = n.minX,
                n.y = n.minY,
                n.width = n.maxX - n.minX,
                n.height = n.maxY - n.minY,
                n.centerX = (n.minX + n.maxX) / 2,
                n.centerY = (n.minY + n.maxY) / 2,
                n
            }
            ,
            e.updatePosition = function(t) {
                var e = this.get("model")
                  , n = i.isNil(t.x) ? e.x : t.x
                  , r = i.isNil(t.y) ? e.y : t.y
                  , a = this.get("group");
                i.isNil(n) || i.isNil(r) || (a.resetMatrix(),
                a.translate(n, r),
                e.x = n,
                e.y = r,
                this.set("bboxCache", null))
            }
            ,
            e._drawInner = function() {
                var t = this.get("shapeFactory")
                  , e = this.get("group")
                  , n = this.get("model");
                if (e.clear(),
                t) {
                    this.updatePosition(n);
                    var i = this.getShapeCfg(n)
                      , r = i.shape
                      , a = t.draw(r, i, e);
                    a && (a.isKeyShape = !0,
                    this.set("keyShape", a),
                    this.set("originStyle", this.getKeyShapeStyle())),
                    this.set("currentShape", r),
                    this._resetStates(t, r)
                }
            }
            ,
            e.getKeyShapeStyle = function() {
                var t = this.getKeyShape();
                if (t) {
                    var e = {};
                    return i.each(t.attr(), function(t, n) {
                        o.indexOf(n) < 0 && (e[n] = t)
                    }),
                    e
                }
            }
            ,
            e._resetStates = function(t, e) {
                var n = this
                  , r = n.get("states");
                i.each(r, function(i) {
                    t.setState(e, i, !0, n)
                })
            }
            ,
            e.getStates = function() {
                return this.get("states")
            }
            ,
            e.hasState = function(t) {
                return this.get("states").indexOf(t) >= 0
            }
            ,
            e.getStateStyle = function(t) {
                var e = a[this.getType() + "StateStyle"][t]
                  , n = this.get("styles")
                  , r = n && n[t]
                  , o = t + "Style";
                return i.mix({}, e, r, this.get(o))
            }
            ,
            e.getOriginStyle = function() {
                return this.get("originStyle")
            }
            ,
            e.getCurrentStatesStyle = function() {
                var t = this
                  , e = i.mix({}, t.getOriginStyle());
                return i.each(t.getStates(), function(n) {
                    i.mix(e, t.getStateStyle(n))
                }),
                e
            }
            ,
            e.setState = function(t, e) {
                var n = this.get("states")
                  , i = this.get("shapeFactory")
                  , r = n.indexOf(t);
                if (e) {
                    if (r > -1)
                        return;
                    n.push(t)
                } else
                    r > -1 && n.splice(r, 1);
                if (i) {
                    var a = this.get("model");
                    i.setState(a.shape, t, e, this)
                }
            }
            ,
            e.clearStates = function(t) {
                var e = this
                  , n = e.getStates()
                  , r = e.get("shapeFactory")
                  , a = e.get("model").shape;
                if (!t)
                    return e.set("states", []),
                    void r.setState(a, n[0], !1, e);
                i.isString(t) && (t = [t]);
                var o = n.filter(function(n) {
                    return r.setState(a, n, !1, e),
                    !(t.indexOf(n) >= 0)
                });
                e.set("states", o)
            }
            ,
            e.getContainer = function() {
                return this.get("group")
            }
            ,
            e.getKeyShape = function() {
                return this.get("keyShape")
            }
            ,
            e.getModel = function() {
                return this.get("model")
            }
            ,
            e.getType = function() {
                return this.get("type")
            }
            ,
            e.beforeDraw = function() {}
            ,
            e.afterDraw = function() {}
            ,
            e.getShapeCfg = function(t) {
                var e = this.get("styles");
                if (e && e.default) {
                    var n = i.mix({}, t);
                    return n.style = i.mix({}, e.default, t.style),
                    n
                }
                return t
            }
            ,
            e.refresh = function() {
                this.update()
            }
            ,
            e.update = function(t) {
                var e = this.get("model")
                  , n = this.get("shapeFactory")
                  , r = e.shape
                  , a = i.mix({}, e, t);
                if (this._isOnlyMove(t))
                    this.updatePosition(a);
                else if (n.shouldUpdate(r) && a.shape === this.get("currentShape")) {
                    var o = this.getShapeCfg(a);
                    a.x === e.x && a.y === e.y || this.updatePosition(a),
                    n.update(r, o, this),
                    this.set("model", a),
                    this._resetStates(n, r)
                } else
                    this.set("model", a),
                    this.draw();
                this.set("originStyle", this.getKeyShapeStyle()),
                this.set("bboxCache", null),
                this.afterUpdate()
            }
            ,
            e.afterUpdate = function() {}
            ,
            e._isOnlyMove = function(t) {
                if (!t)
                    return !1;
                var e = !i.isNil(t.x)
                  , n = !i.isNil(t.y)
                  , r = Object.keys(t);
                return 1 === r.length && (e || n) || 2 === r.length && e && n
            }
            ,
            e.draw = function() {
                this.beforeDraw(),
                this._drawInner(),
                this.afterDraw()
            }
            ,
            e.getBBox = function() {
                var t = this.get("bboxCache");
                return t || (t = this._calculateBBox(),
                this.set("bboxCache", t)),
                t
            }
            ,
            e.toFront = function() {
                this.get("group").toFront()
            }
            ,
            e.toBack = function() {
                this.get("group").toBack()
            }
            ,
            e.show = function() {
                this.changeVisibility(!0)
            }
            ,
            e.hide = function() {
                this.changeVisibility(!1)
            }
            ,
            e.changeVisibility = function(t) {
                var e = this.get("group");
                t ? e.show() : e.hide(),
                this.set("visible", t)
            }
            ,
            e.enableCapture = function(t) {
                var e = this.get("group");
                e && e.attr("capture", t)
            }
            ,
            e.isVisible = function() {
                return this.get("visible")
            }
            ,
            e.destroy = function() {
                if (!this.destroyed) {
                    var t = this.get("animate")
                      , e = this.get("group");
                    t && e.stopAnimate(),
                    e.remove(),
                    this._cfg = null,
                    this.destroyed = !0
                }
            }
            ,
            t
        }();
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(28)
          , r = i.EventEmitter
          , a = n(1)
          , o = n(14)
          , s = n(85)
          , u = function(t) {
            !function(t, e) {
                t.prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e
            }(n, t);
            var e = n.prototype;
            function n(e) {
                var n;
                return (n = t.call(this) || this)._cfg = a.deepMix(n.getDefaultCfg(), e),
                n._init(),
                n
            }
            return e.getDefaultCfg = function() {
                return {
                    container: void 0,
                    width: void 0,
                    height: void 0,
                    renderer: "canvas",
                    mode: [],
                    plugins: [],
                    data: null,
                    fitViewPadding: 10,
                    minZoom: .2,
                    maxZoom: 10,
                    event: !0,
                    groupByTypes: !0,
                    directed: !1,
                    autoPaint: !0,
                    nodes: [],
                    edges: [],
                    itemMap: {},
                    linkCenter: !1,
                    defaultNode: {},
                    defaultEdge: {},
                    nodeStyle: {},
                    edgeStyle: {},
                    animate: !1,
                    animateCfg: {
                        onFrame: null,
                        duration: 500,
                        easing: "easeLinear"
                    },
                    callback: null
                }
            }
            ,
            e._init = function() {
                this._initCanvas();
                var t = new s.Event(this)
                  , e = new s.View(this)
                  , n = new s.Mode(this)
                  , i = new s.Item(this);
                this.set({
                    eventController: t,
                    viewController: e,
                    modeController: n,
                    itemController: i
                }),
                this._initPlugins()
            }
            ,
            e._initCanvas = function() {
                var t = this.get("container");
                if (a.isString(t) && (t = document.getElementById(t),
                this.set("container", t)),
                !t)
                    throw Error("invalid container");
                var e = new i.Canvas({
                    containerDOM: t,
                    width: this.get("width"),
                    height: this.get("height"),
                    renderer: this.get("renderer"),
                    pixelRatio: this.get("pixelRatio")
                });
                this.set("canvas", e),
                this._initGroups()
            }
            ,
            e._initGroups = function() {
                var t = this.get("canvas")
                  , e = this.get("canvas").get("el").id
                  , n = t.addGroup({
                    id: e + "-root",
                    className: o.rootContainerClassName
                });
                if (this.get("groupByTypes")) {
                    var i = n.addGroup({
                        id: e + "-edge",
                        className: o.edgeContainerClassName
                    })
                      , r = n.addGroup({
                        id: e + "-node",
                        className: o.nodeContainerClassName
                    });
                    this.set({
                        nodeGroup: r,
                        edgeGroup: i
                    })
                }
                this.set("group", n)
            }
            ,
            e._initPlugins = function() {
                var t = this;
                a.each(t.get("plugins"), function(e) {
                    !e.destroyed && e.init && e.init(t)
                })
            }
            ,
            e.get = function(t) {
                return this._cfg[t]
            }
            ,
            e.set = function(t, e) {
                return a.isPlainObject(t) ? this._cfg = a.mix({}, this._cfg, t) : this._cfg[t] = e,
                this
            }
            ,
            e.update = function(t, e) {
                this.updateItem(t, e)
            }
            ,
            e.updateItem = function(t, e) {
                this.get("itemController").updateItem(t, e)
            }
            ,
            e.setItemState = function(t, e, n) {
                this.get("itemController").setItemState(t, e, n)
            }
            ,
            e.clearItemStates = function(t, e) {
                this.get("itemController").clearItemStates(t, e)
            }
            ,
            e.add = function(t, e) {
                return this.addItem(t, e)
            }
            ,
            e.addItem = function(t, e) {
                return this.get("itemController").addItem(t, e)
            }
            ,
            e.remove = function(t) {
                this.removeItem(t)
            }
            ,
            e.removeItem = function(t) {
                this.get("itemController").removeItem(t)
            }
            ,
            e.data = function(t) {
                this.set("data", t)
            }
            ,
            e.refreshItem = function(t) {
                this.get("itemController").refreshItem(t)
            }
            ,
            e.refresh = function() {
                var t = this.get("autoPaint");
                if (this.setAutoPaint(!1),
                this.emit("beforegraphrefresh"),
                this.get("animate"))
                    this.positionsAnimate();
                else {
                    var e = this.get("nodes")
                      , n = this.get("edges");
                    a.each(e, function(t) {
                        t.refresh()
                    }),
                    a.each(n, function(t) {
                        t.refresh()
                    })
                }
                this.setAutoPaint(t),
                this.emit("aftergraphrefresh"),
                this.autoPaint()
            }
            ,
            e.refreshPositions = function() {
                this.emit("beforegraphrefreshposition");
                var t = this.get("nodes")
                  , e = this.get("edges");
                a.each(t, function(t) {
                    t.updatePosition({})
                }),
                a.each(e, function(t) {
                    t.refresh()
                }),
                this.emit("aftergraphrefreshposition"),
                this.autoPaint()
            }
            ,
            e.render = function() {
                var t = this
                  , e = this.get("data");
                if (!e)
                    throw new Error("data must be defined first");
                this.clear(),
                this.emit("beforerender");
                var n = this.get("autoPaint");
                this.setAutoPaint(!1),
                a.each(e.nodes, function(e) {
                    t.add("node", e)
                }),
                a.each(e.edges, function(e) {
                    t.add("edge", e)
                }),
                t.get("fitView") && t.get("viewController")._fitView(),
                t.paint(),
                t.setAutoPaint(n),
                t.emit("afterrender")
            }
            ,
            e.read = function(t) {
                this.data(t),
                this.render()
            }
            ,
            e.changeData = function(t) {
                var e = this;
                if (!t)
                    return this;
                e.get("data") || (e.data(t),
                e.render());
                var n = this.get("autoPaint")
                  , i = this.get("itemMap")
                  , r = {
                    nodes: [],
                    edges: []
                };
                return this.setAutoPaint(!1),
                this._diffItems("node", r, t.nodes),
                this._diffItems("edge", r, t.edges),
                a.each(i, function(t, n) {
                    r.nodes.indexOf(t) < 0 && r.edges.indexOf(t) < 0 && (delete i[n],
                    e.remove(t))
                }),
                this.set({
                    nodes: r.nodes,
                    edges: r.edges
                }),
                e.get("animate") ? e.positionsAnimate() : this.paint(),
                this.setAutoPaint(n),
                this
            }
            ,
            e._diffItems = function(t, e, n) {
                var i, r = this, o = this.get("itemMap");
                a.each(n, function(n) {
                    if (i = o[n.id]) {
                        if (r.get("animate") && "node" === t) {
                            var a = i.getContainer().getMatrix();
                            i.set("originAttrs", {
                                x: a[6],
                                y: a[7]
                            })
                        }
                        r.updateItem(i, n)
                    } else
                        i = r.addItem(t, n);
                    e[t + "s"].push(i)
                })
            }
            ,
            e.paint = function() {
                this.emit("beforepaint"),
                this.get("canvas").draw(),
                this.emit("afterpaint")
            }
            ,
            e.autoPaint = function() {
                this.get("autoPaint") && this.paint()
            }
            ,
            e.save = function() {
                var t = []
                  , e = [];
                return a.each(this.get("nodes"), function(e) {
                    t.push(e.get("model"))
                }),
                a.each(this.get("edges"), function(t) {
                    e.push(t.get("model"))
                }),
                {
                    nodes: t,
                    edges: e
                }
            }
            ,
            e.changeSize = function(t, e) {
                return this.get("viewController").changeSize(t, e),
                this.autoPaint(),
                this
            }
            ,
            e._updateMatrix = function(t) {
                var e = this.get("group")
                  , n = this.get("minZoom")
                  , i = this.get("maxZoom");
                n && t[0] < n || i && t[0] > i || e.setMatrix(t)
            }
            ,
            e.translate = function(t, e) {
                this.get("group").translate(t, e),
                this.autoPaint()
            }
            ,
            e.moveTo = function(t, e) {
                this.get("group").move(t, e)
            }
            ,
            e.fitView = function(t) {
                t && this.set("fitViewPadding", t),
                this.get("viewController")._fitView(),
                this.paint()
            }
            ,
            e.addBehaviors = function(t, e) {
                return this.get("modeController").manipulateBehaviors(t, e, !0),
                this
            }
            ,
            e.removeBehaviors = function(t, e) {
                return this.get("modeController").manipulateBehaviors(t, e, !1),
                this
            }
            ,
            e.setMode = function(t) {
                return this.set("mode", t),
                this.get("modeController").setMode(t),
                this
            }
            ,
            e.getCurrentMode = function() {
                return this.get("mode")
            }
            ,
            e.getZoom = function() {
                return this.get("group").getMatrix()[0]
            }
            ,
            e.getNodes = function() {
                return this.get("nodes")
            }
            ,
            e.getEdges = function() {
                return this.get("edges")
            }
            ,
            e.zoom = function(t, e) {
                var n = a.clone(this.get("group").getMatrix());
                e ? (a.mat3.translate(n, n, [-e.x, -e.y]),
                a.mat3.scale(n, n, [t, t]),
                a.mat3.translate(n, n, [e.x, e.y])) : a.mat3.scale(n, n, [t, t]),
                this._updateMatrix(n),
                this.autoPaint()
            }
            ,
            e.positionsAnimate = function() {
                var t = this;
                t.emit("beforepositionanimate");
                var e = t.get("animateCfg")
                  , n = e.onFrame
                  , i = t.getNodes()
                  , r = i.map(function(t) {
                    var e = t.getModel();
                    return {
                        id: e.id,
                        x: e.x,
                        y: e.y
                    }
                });
                t.isAnimating() && t.stopAnimate(),
                t.get("canvas").animate({
                    onFrame: function(e) {
                        a.each(r, function(i) {
                            var r = t.findById(i.id);
                            if (r && !r.destroyed) {
                                var o = r.get("originAttrs")
                                  , s = r.get("model");
                                if (!o) {
                                    var u = r.getContainer().getMatrix();
                                    o = {
                                        x: u[6],
                                        y: u[7]
                                    },
                                    r.set("originAttrs", o)
                                }
                                if (n) {
                                    var h = n(r, e, i, o);
                                    r.set("model", a.mix(s, h))
                                } else
                                    s.x = o.x + (i.x - o.x) * e,
                                    s.y = o.y + (i.y - o.y) * e
                            }
                        }),
                        t.refreshPositions()
                    }
                }, e.duration, e.easing, function() {
                    a.each(i, function(t) {
                        t.set("originAttrs", null)
                    }),
                    t.emit("afterpositionanimate"),
                    e.callback && e.callback(),
                    t.animating = !1
                })
            }
            ,
            e.stopAnimate = function() {
                this.get("canvas").stopAnimate()
            }
            ,
            e.isAnimating = function() {
                return this.animating
            }
            ,
            e.focusItem = function(t) {
                this.get("viewController").focus(t),
                this.autoPaint()
            }
            ,
            e.getPointByClient = function(t, e) {
                return this.get("viewController").getPointByClient(t, e)
            }
            ,
            e.getClientByPoint = function(t, e) {
                return this.get("viewController").getClientByPoint(t, e)
            }
            ,
            e.getPointByCanvas = function(t, e) {
                return this.get("viewController").getPointByCanvas(t, e)
            }
            ,
            e.getCanvasByPoint = function(t, e) {
                return this.get("viewController").getCanvasByPoint(t, e)
            }
            ,
            e.showItem = function(t) {
                this.get("itemController").changeItemVisibility(t, !0)
            }
            ,
            e.hideItem = function(t) {
                this.get("itemController").changeItemVisibility(t, !1)
            }
            ,
            e.findById = function(t) {
                return this.get("itemMap")[t]
            }
            ,
            e.find = function(t, e) {
                var n, i = this.get(t + "s");
                return a.each(i, function(t, i) {
                    if (e(t, i))
                        return n = t,
                        !1
                }),
                n
            }
            ,
            e.findAll = function(t, e) {
                var n = [];
                return a.each(this.get(t + "s"), function(t, i) {
                    e(t, i) && n.push(t)
                }),
                n
            }
            ,
            e.findAllByState = function(t, e) {
                return this.findAll(t, function(t) {
                    return t.hasState(e)
                })
            }
            ,
            e.setAutoPaint = function(t) {
                this.set("autoPaint", t)
            }
            ,
            e.toDataURL = function() {
                var t = this.get("canvas")
                  , e = t.getRenderer()
                  , n = t.get("el")
                  , i = "";
                if ("svg" === e) {
                    var r = n.cloneNode(!0)
                      , a = document.implementation.createDocumentType("svg", "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd")
                      , o = document.implementation.createDocument("http://www.w3.org/2000/svg", "svg", a);
                    o.replaceChild(r, o.documentElement);
                    var s = (new XMLSerializer).serializeToString(o);
                    i = "data:image/svg+xml;charset=utf8," + encodeURIComponent(s)
                } else
                    "canvas" === e && (i = n.toDataURL("image/png"));
                return i
            }
            ,
            e.downloadImage = function(t) {
                var e = this;
                e.isAnimating() && e.stopAnimate();
                var n = e.get("canvas").getRenderer()
                  , i = (t || "graph") + ("svg" === n ? ".svg" : ".png")
                  , r = document.createElement("a");
                setTimeout(function() {
                    var t = e.toDataURL();
                    if (window.Blob && window.URL && "svg" !== n) {
                        for (var a = t.split(","), o = a[0].match(/:(.*?);/)[1], s = atob(a[1]), u = s.length, h = new Uint8Array(u); u--; )
                            h[u] = s.charCodeAt(u);
                        var c = new Blob([h],{
                            type: o
                        });
                        window.navigator.msSaveBlob ? window.navigator.msSaveBlob(c, i) : r.addEventListener("click", function() {
                            r.download = i,
                            r.href = window.URL.createObjectURL(c)
                        })
                    } else
                        r.addEventListener("click", function() {
                            r.download = i,
                            r.href = t
                        });
                    var l = document.createEvent("MouseEvents");
                    l.initEvent("click", !1, !1),
                    r.dispatchEvent(l)
                }, 16)
            }
            ,
            e.clear = function() {
                return this.get("canvas").clear(),
                this._initGroups(),
                this.set({
                    itemMap: {},
                    nodes: [],
                    edges: []
                }),
                this
            }
            ,
            e.destroy = function() {
                this.clear(),
                a.each(this.get("plugins"), function(t) {
                    t.destroy()
                }),
                this.get("eventController").destroy(),
                this.get("itemController").destroy(),
                this.get("modeController").destroy(),
                this.get("viewController").destroy(),
                this.get("canvas").destroy(),
                this._cfg = null,
                this.destroyed = !0
            }
            ,
            n
        }(r);
        t.exports = u
    }
    , function(t, e, n) {
        var i = n(1);
        t.exports = {
            onMouseEnter: function(t) {
                if (this.shouldBegin(t)) {
                    var e = t.item;
                    this.currentTarget = e,
                    this.shouldUpdate(t) && (this.showTooltip(t, "show"),
                    this.graph.emit("tooltipchange", {
                        item: t.item,
                        action: "show"
                    }))
                }
            },
            onMouseMove: function(t) {
                this.shouldUpdate(t) && this.currentTarget && t.item === this.currentTarget && this.updatePosition(t)
            },
            onMouseLeave: function(t) {
                this.shouldEnd(t) && (this.hideTooltip(),
                this.graph.emit("tooltipchange", {
                    item: this.currentTarget,
                    action: "hide"
                }),
                this.currentTarget = null)
            },
            showTooltip: function(t) {
                if (t.item) {
                    var e = this.container;
                    e || (e = this._createTooltip(this.graph.get("canvas")),
                    this.container = e);
                    var n = this.formatText(t.item.get("model"), t);
                    e.innerHTML = n,
                    this.updatePosition(t),
                    i.modifyCSS(this.container, {
                        visibility: "visible"
                    })
                }
            },
            hideTooltip: function() {
                i.modifyCSS(this.container, {
                    visibility: "hidden"
                })
            },
            updatePosition: function(t) {
                var e = this.width
                  , n = this.height
                  , r = this.container
                  , a = t.canvasX
                  , o = t.canvasY
                  , s = r.getBoundingClientRect();
                a > e / 2 ? a -= s.width : a += 12,
                o > n / 2 ? o -= s.height : o += 12;
                var u = a + "px"
                  , h = o + "px";
                i.modifyCSS(this.container, {
                    left: u,
                    top: h
                })
            },
            _createTooltip: function(t) {
                var e = t.get("el");
                e.style.position = "relative";
                var n = i.createDom('<div class="g6-tooltip g6-' + this.item + '-tooltip"></div>');
                return e.parentNode.appendChild(n),
                i.modifyCSS(n, {
                    position: "absolute",
                    visibility: "visible"
                }),
                this.width = t.get("width"),
                this.height = t.get("height"),
                this.container = n,
                n
            }
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(93)
          , a = {
            "drag-canvas": n(92),
            "zoom-canvas": n(91),
            "drag-node": n(90),
            "click-select": n(89),
            tooltip: n(88),
            "edge-tooltip": n(87),
            "collapse-expand": n(86)
        };
        i.each(a, function(t, e) {
            r.registerBehavior(e, t)
        }),
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(14)
          , r = n(1)
          , a = {
            itemType: "",
            draw: function(t, e) {
                var n = this.drawShape(t, e);
                (n.set("className", this.itemType + "-shape"),
                t.label) && this.drawLabel(t, e).set("className", this.itemType + "-label");
                return n
            },
            drawShape: function() {},
            drawLabel: function(t, e) {
                var n = t.labelCfg || {}
                  , i = this.getLabelStyle(t, n, e);
                return e.addShape("text", {
                    attrs: i
                })
            },
            getLabelStyleByPosition: function() {},
            getLabelStyle: function(t, e, n) {
                var a = this.getLabelStyleByPosition(t, e, n);
                a.text = t.label;
                var o = this.itemType + "Label"
                  , s = i[o] ? i[o].style : null;
                return r.mix({}, s, a, e.style)
            },
            getShapeStyle: function(t) {
                return t.style
            },
            update: function(t, e) {
                var n = e.getContainer()
                  , i = this.itemType + "-shape"
                  , r = n.findByClassName(i)
                  , a = this.getShapeStyle(t);
                r.attr(a);
                var o = this.itemType + "-label"
                  , s = n.findByClassName(o);
                if (t.label)
                    if (s) {
                        var u = t.labelCfg || {}
                          , h = this.getLabelStyle(t, u, n);
                        s.resetMatrix(),
                        s.attr(h)
                    } else {
                        this.drawLabel(t, n).set("className", o)
                    }
                else
                    s && s.remove()
            },
            setState: function(t, e, n) {
                var i = n.get("keyShape");
                if (i) {
                    var a = n.getStateStyle(t);
                    if (e)
                        n.getStateStyle(a),
                        i.attr(a);
                    else {
                        var o = n.getCurrentStatesStyle();
                        r.each(a, function(t, e) {
                            o[e] || (o[e] = null)
                        }),
                        i.attr(o)
                    }
                }
            }
        };
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(21)
          , r = {
            isBetween: function(t, e, n) {
                return t >= e && t <= n
            },
            getLineIntersect: function(t, e, n, i) {
                var a = n.x - t.x
                  , o = n.y - t.y
                  , s = e.x - t.x
                  , u = e.y - t.y
                  , h = i.x - n.x
                  , c = i.y - n.y
                  , l = s * c - u * h
                  , f = null;
                if (l * l > .001 * (s * s + u * u) * (h * h + c * c)) {
                    var d = (a * c - o * h) / l
                      , g = (a * u - o * s) / l;
                    r.isBetween(d, 0, 1) && r.isBetween(g, 0, 1) && (f = {
                        x: t.x + d * s,
                        y: t.y + d * u
                    })
                }
                return f
            },
            getRectIntersectByPoint: function(t, e) {
                var n = t.x
                  , i = t.y
                  , a = t.width
                  , o = t.height
                  , s = []
                  , u = {
                    x: n + a / 2,
                    y: i + o / 2
                };
                s.push({
                    x: n,
                    y: i
                }),
                s.push({
                    x: n + a,
                    y: i
                }),
                s.push({
                    x: n + a,
                    y: i + o
                }),
                s.push({
                    x: n,
                    y: i + o
                }),
                s.push({
                    x: n,
                    y: i
                });
                for (var h = null, c = 1; c < s.length && !(h = r.getLineIntersect(s[c - 1], s[c], u, e)); c++)
                    ;
                return h
            },
            getCircleIntersectByPoint: function(t, e) {
                var n = t.x
                  , i = t.y
                  , r = t.r
                  , a = e.x
                  , o = e.y;
                if (Math.sqrt(Math.pow(a - n, 2) + Math.pow(o - i, 2)) < r)
                    return null;
                var s = a - n
                  , u = o - i
                  , h = Math.sign(s)
                  , c = Math.sign(u)
                  , l = Math.atan(u / s);
                return {
                    x: n + Math.abs(r * Math.cos(l)) * h,
                    y: i + Math.abs(r * Math.sin(l)) * c
                }
            },
            getEllispeIntersectByPoint: function(t, e) {
                var n = t.rx
                  , i = t.ry
                  , r = t.x
                  , a = t.y
                  , o = e.x - r
                  , s = e.y - a
                  , u = Math.atan2(s / i, o / n);
                return u < 0 && (u += 2 * Math.PI),
                {
                    x: r + n * Math.cos(u),
                    y: a + i * Math.sin(u)
                }
            },
            applyMatrix: function(t, e, n) {
                void 0 === n && (n = 1);
                var r = [t.x, t.y, n];
                return i.vec3.transformMat3(r, r, e),
                {
                    x: r[0],
                    y: r[1]
                }
            },
            invertMatrix: function(t, e, n) {
                void 0 === n && (n = 1);
                var r = i.mat3.invert([], e)
                  , a = [t.x, t.y, n];
                return i.vec3.transformMat3(a, a, r),
                {
                    x: a[0],
                    y: a[1]
                }
            }
        };
        t.exports = i.mix({}, i, r)
    }
    , function(t, e, n) {
        var i = n(30);
        n(95),
        n(94),
        t.exports = i
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        a.ATTRS = {
            x: 0,
            y: 0,
            text: null,
            fontSize: 12,
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            fontVariant: "normal",
            textAlign: "start",
            textBaseline: "bottom",
            lineHeight: null,
            textArr: null
        },
        i.extend(a, r),
        i.augment(a, {
            canFill: !0,
            canStroke: !0,
            type: "text",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textAlign: "start",
                    textBaseline: "bottom"
                }
            },
            initTransform: function() {
                var t = this._attrs.fontSize;
                t && +t < 12 && this.transform([["t", -1 * this._attrs.x, -1 * this._attrs.y], ["s", +t / 12, +t / 12], ["t", this._attrs.x, this._attrs.y]])
            },
            _assembleFont: function() {
                var t = this._attrs
                  , e = t.fontSize
                  , n = t.fontFamily
                  , i = t.fontWeight
                  , r = t.fontStyle
                  , a = t.fontVariant;
                t.font = [r, a, i, e + "px", n].join(" ")
            },
            _setAttrText: function() {
                var t = this._attrs
                  , e = t.text
                  , n = null;
                if (i.isString(e) && -1 !== e.indexOf("\n")) {
                    var r = (n = e.split("\n")).length;
                    t.lineCount = r
                }
                t.textArr = n
            },
            _getTextHeight: function() {
                var t = this._attrs
                  , e = t.lineCount
                  , n = 1 * t.fontSize;
                return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n
            },
            isHitBox: function() {
                return !1
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = this._cfg;
                e.attrs && !e.hasUpdate || (this._assembleFont(),
                this._setAttrText()),
                t.textArr || this._setAttrText();
                var n = t.x
                  , i = t.y
                  , r = this.measureText();
                if (!r)
                    return {
                        minX: n,
                        minY: i,
                        maxX: n,
                        maxY: i
                    };
                var a = this._getTextHeight()
                  , o = t.textAlign
                  , s = t.textBaseline
                  , u = this.getHitLineWidth()
                  , h = {
                    x: n,
                    y: i - a
                };
                o && ("end" === o || "right" === o ? h.x -= r : "center" === o && (h.x -= r / 2)),
                s && ("top" === s ? h.y += a : "middle" === s && (h.y += a / 2)),
                this.set("startPoint", h);
                var c = u / 2;
                return {
                    minX: h.x - c,
                    minY: h.y - c,
                    maxX: h.x + r + c,
                    maxY: h.y + a + c
                }
            },
            _getSpaceingY: function() {
                var t = this._attrs
                  , e = t.lineHeight
                  , n = 1 * t.fontSize;
                return e ? e - n : .14 * n
            },
            drawInner: function(t) {
                var e = this._attrs
                  , n = this._cfg;
                n.attrs && !n.hasUpdate || (this._assembleFont(),
                this._setAttrText()),
                t.font = e.font;
                var r = e.text;
                if (r) {
                    var a = e.textArr
                      , o = e.x
                      , s = e.y;
                    if (t.beginPath(),
                    this.hasStroke()) {
                        var u = e.strokeOpacity;
                        i.isNil(u) || 1 === u || (t.globalAlpha = u),
                        a ? this._drawTextArr(t, !1) : t.strokeText(r, o, s),
                        t.globalAlpha = 1
                    }
                    if (this.hasFill()) {
                        var h = e.fillOpacity;
                        i.isNil(h) || 1 === h || (t.globalAlpha = h),
                        a ? this._drawTextArr(t, !0) : t.fillText(r, o, s)
                    }
                    n.hasUpdate = !1
                }
            },
            _drawTextArr: function(t, e) {
                var n, r = this._attrs.textArr, a = this._attrs.textBaseline, o = 1 * this._attrs.fontSize, s = this._getSpaceingY(), u = this._attrs.x, h = this._attrs.y, c = this.getBBox(), l = c.maxY - c.minY;
                i.each(r, function(i, r) {
                    n = h + r * (s + o) - l + o,
                    "middle" === a && (n += l - o - (l - o) / 2),
                    "top" === a && (n += l - o),
                    e ? t.fillText(i, u, n) : t.strokeText(i, u, n)
                })
            },
            measureText: function() {
                var t, e = this._attrs, n = e.text, r = e.font, a = e.textArr, o = 0;
                if (!i.isNil(n)) {
                    var s = document.createElement("canvas").getContext("2d");
                    return s.save(),
                    s.font = r,
                    a ? i.each(a, function(e) {
                        t = s.measureText(e).width,
                        o < t && (o = t),
                        s.restore()
                    }) : (o = s.measureText(n).width,
                    s.restore()),
                    o
                }
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(19).parseRadius
          , a = n(3)
          , o = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        o.ATTRS = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            lineWidth: 1
        },
        i.extend(o, a),
        i.augment(o, {
            canFill: !0,
            canStroke: !0,
            type: "rect",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1,
                    radius: 0
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.width
                  , r = t.height
                  , a = this.getHitLineWidth() / 2;
                return {
                    minX: e - a,
                    minY: n - a,
                    maxX: e + i + a,
                    maxY: n + r + a
                }
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x
                  , i = e.y
                  , a = e.width
                  , o = e.height
                  , s = e.radius;
                if ((t = t || this.get("context")).beginPath(),
                0 === s)
                    t.rect(n, i, a, o);
                else {
                    var u = r(s);
                    t.moveTo(n + u.r1, i),
                    t.lineTo(n + a - u.r2, i),
                    0 !== u.r2 && t.arc(n + a - u.r2, i + u.r2, u.r2, -Math.PI / 2, 0),
                    t.lineTo(n + a, i + o - u.r3),
                    0 !== u.r3 && t.arc(n + a - u.r3, i + o - u.r3, u.r3, 0, Math.PI / 2),
                    t.lineTo(n + u.r4, i + o),
                    0 !== u.r4 && t.arc(n + u.r4, i + o - u.r4, u.r4, Math.PI / 2, Math.PI),
                    t.lineTo(n, i + u.r1),
                    0 !== u.r1 && t.arc(n + u.r1, i + u.r1, u.r1, Math.PI, 1.5 * Math.PI),
                    t.closePath()
                }
            }
        }),
        t.exports = o
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(23)
          , o = n(25)
          , s = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        s.ATTRS = {
            points: null,
            lineWidth: 1,
            startArrow: !1,
            endArrow: !1,
            tCache: null
        },
        i.extend(s, r),
        i.augment(s, {
            canStroke: !0,
            type: "polyline",
            tCache: null,
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = this.getHitLineWidth()
                  , n = t.points;
                if (!n || 0 === n.length)
                    return null;
                var r = 1 / 0
                  , a = 1 / 0
                  , o = -1 / 0
                  , s = -1 / 0;
                i.each(n, function(t) {
                    var e = t[0]
                      , n = t[1];
                    e < r && (r = e),
                    e > o && (o = e),
                    n < a && (a = n),
                    n > s && (s = n)
                });
                var u = e / 2;
                return {
                    minX: r - u,
                    minY: a - u,
                    maxX: o + u,
                    maxY: s + u
                }
            },
            _setTcache: function() {
                var t, e, n = this._attrs.points, r = 0, a = 0, s = [];
                n && 0 !== n.length && (i.each(n, function(t, e) {
                    n[e + 1] && (r += o.len(t[0], t[1], n[e + 1][0], n[e + 1][1]))
                }),
                r <= 0 || (i.each(n, function(i, u) {
                    n[u + 1] && ((t = [])[0] = a / r,
                    e = o.len(i[0], i[1], n[u + 1][0], n[u + 1][1]),
                    a += e,
                    t[1] = a / r,
                    s.push(t))
                }),
                this.tCache = s))
            },
            createPath: function(t) {
                var e, n, i = this._attrs.points;
                if (!(i.length < 2)) {
                    for ((t = t || this.get("context")).beginPath(),
                    t.moveTo(i[0][0], i[0][1]),
                    n = 1,
                    e = i.length - 1; n < e; n++)
                        t.lineTo(i[n][0], i[n][1]);
                    t.lineTo(i[e][0], i[e][1])
                }
            },
            getStartTangent: function() {
                var t = this.__attrs.points
                  , e = [];
                return e.push([t[1][0], t[1][1]]),
                e.push([t[0][0], t[0][1]]),
                e
            },
            getEndTangent: function() {
                var t = this.__attrs.points
                  , e = t.length - 1
                  , n = [];
                return n.push([t[e - 1][0], t[e - 1][1]]),
                n.push([t[e][0], t[e][1]]),
                n
            },
            afterPath: function(t) {
                var e = this._attrs
                  , n = e.points
                  , i = n.length - 1;
                t = t || this.get("context"),
                e.startArrow && a.addStartArrow(t, e, n[1][0], n[1][1], n[0][0], n[0][1]),
                e.endArrow && a.addEndArrow(t, e, n[i - 1][0], n[i - 1][1], n[i][0], n[i][1])
            },
            getPoint: function(t) {
                var e, n, r = this._attrs.points, a = this.tCache;
                return a || (this._setTcache(),
                a = this.tCache),
                i.each(a, function(i, r) {
                    t >= i[0] && t <= i[1] && (e = (t - i[0]) / (i[1] - i[0]),
                    n = r)
                }),
                {
                    x: o.at(r[n][0], r[n + 1][0], e),
                    y: o.at(r[n][1], r[n + 1][1], e)
                }
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        a.ATTRS = {
            points: null,
            lineWidth: 1
        },
        i.extend(a, r),
        i.augment(a, {
            canFill: !0,
            canStroke: !0,
            type: "polygon",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1
                }
            },
            calculateBox: function() {
                var t = this._attrs.points
                  , e = this.getHitLineWidth();
                if (!t || 0 === t.length)
                    return null;
                var n = 1 / 0
                  , r = 1 / 0
                  , a = -1 / 0
                  , o = -1 / 0;
                i.each(t, function(t) {
                    var e = t[0]
                      , i = t[1];
                    e < n && (n = e),
                    e > a && (a = e),
                    i < r && (r = i),
                    i > o && (o = i)
                });
                var s = e / 2;
                return {
                    minX: n - s,
                    minY: r - s,
                    maxX: a + s,
                    maxY: o + s
                }
            },
            createPath: function(t) {
                var e = this._attrs.points;
                e.length < 2 || ((t = t || this.get("context")).beginPath(),
                i.each(e, function(e, n) {
                    0 === n ? t.moveTo(e[0], e[1]) : t.lineTo(e[0], e[1])
                }),
                t.closePath())
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(22)
          , o = n(19)
          , s = n(23)
          , u = n(31)
          , h = n(33)
          , c = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        c.ATTRS = {
            path: null,
            lineWidth: 1,
            startArrow: !1,
            endArrow: !1
        },
        i.extend(c, r),
        i.augment(c, {
            canFill: !0,
            canStroke: !0,
            type: "path",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                }
            },
            _afterSetAttrPath: function(t) {
                if (i.isNil(t))
                    return this.setSilent("segments", null),
                    void this.setSilent("box", void 0);
                var e, n = o.parsePath(t), r = [];
                if (i.isArray(n) && 0 !== n.length && ("M" === n[0][0] || "m" === n[0][0])) {
                    for (var s = n.length, u = 0; u < n.length; u++) {
                        var h = n[u];
                        e = new a(h,e,u === s - 1),
                        r.push(e)
                    }
                    this.setSilent("segments", r),
                    this.setSilent("tCache", null),
                    this.setSilent("totalLength", null),
                    this.setSilent("box", null)
                }
            },
            calculateBox: function() {
                var t = this.get("segments");
                if (!t)
                    return null;
                var e = this.getHitLineWidth()
                  , n = 1 / 0
                  , r = -1 / 0
                  , a = 1 / 0
                  , o = -1 / 0;
                return i.each(t, function(t) {
                    t.getBBox(e);
                    var i = t.box;
                    i && (i.minX < n && (n = i.minX),
                    i.maxX > r && (r = i.maxX),
                    i.minY < a && (a = i.minY),
                    i.maxY > o && (o = i.maxY))
                }),
                n === 1 / 0 || a === 1 / 0 ? {
                    minX: 0,
                    minY: 0,
                    maxX: 0,
                    maxY: 0
                } : {
                    minX: n,
                    minY: a,
                    maxX: r,
                    maxY: o
                }
            },
            _setTcache: function() {
                var t, e, n, r, a = 0, o = 0, s = [], u = this._cfg.curve;
                u && (i.each(u, function(t, e) {
                    n = u[e + 1],
                    r = t.length,
                    n && (a += h.len(t[r - 2], t[r - 1], n[1], n[2], n[3], n[4], n[5], n[6]))
                }),
                this._cfg.totalLength = a,
                i.each(u, function(i, c) {
                    n = u[c + 1],
                    r = i.length,
                    n && ((t = [])[0] = o / a,
                    e = h.len(i[r - 2], i[r - 1], n[1], n[2], n[3], n[4], n[5], n[6]),
                    o += e,
                    t[1] = o / a,
                    s.push(t))
                }),
                this._cfg.tCache = s)
            },
            getTotalLength: function() {
                var t = this.get("totalLength");
                return i.isNil(t) ? (this._calculateCurve(),
                this._setTcache(),
                this.get("totalLength")) : t
            },
            _calculateCurve: function() {
                var t = this._attrs.path;
                this._cfg.curve = u.pathTocurve(t)
            },
            getStartTangent: function() {
                var t, e, n, r, a = this.get("segments");
                if (a.length > 1)
                    if (t = a[0].endPoint,
                    e = a[1].endPoint,
                    n = a[1].startTangent,
                    r = [],
                    i.isFunction(n)) {
                        var o = n();
                        r.push([t.x - o[0], t.y - o[1]]),
                        r.push([t.x, t.y])
                    } else
                        r.push([e.x, e.y]),
                        r.push([t.x, t.y]);
                return r
            },
            getEndTangent: function() {
                var t, e, n, r, a = this.get("segments"), o = a.length;
                if (o > 1)
                    if (t = a[o - 2].endPoint,
                    e = a[o - 1].endPoint,
                    n = a[o - 1].endTangent,
                    r = [],
                    i.isFunction(n)) {
                        var s = n();
                        r.push([e.x - s[0], e.y - s[1]]),
                        r.push([e.x, e.y])
                    } else
                        r.push([t.x, t.y]),
                        r.push([e.x, e.y]);
                return r
            },
            getPoint: function(t) {
                var e, n, r = this._cfg.tCache;
                r || (this._calculateCurve(),
                this._setTcache(),
                r = this._cfg.tCache);
                var a = this._cfg.curve;
                if (!r)
                    return a ? {
                        x: a[0][1],
                        y: a[0][2]
                    } : null;
                i.each(r, function(i, r) {
                    t >= i[0] && t <= i[1] && (e = (t - i[0]) / (i[1] - i[0]),
                    n = r)
                });
                var o = a[n];
                if (i.isNil(o) || i.isNil(n))
                    return null;
                var s = o.length
                  , u = a[n + 1];
                return {
                    x: h.at(o[s - 2], u[1], u[3], u[5], 1 - e),
                    y: h.at(o[s - 1], u[2], u[4], u[6], 1 - e)
                }
            },
            createPath: function(t) {
                var e = this.get("segments");
                if (i.isArray(e)) {
                    (t = t || this.get("context")).beginPath();
                    for (var n = e.length, r = 0; r < n; r++)
                        e[r].draw(t)
                }
            },
            afterPath: function(t) {
                var e = this._attrs
                  , n = this.get("segments")
                  , r = e.path;
                if (t = t || this.get("context"),
                i.isArray(n) && 1 !== n.length && (e.startArrow || e.endArrow) && "z" !== r[r.length - 1] && "Z" !== r[r.length - 1] && !e.fill) {
                    var a = this.getStartTangent();
                    s.addStartArrow(t, e, a[0][0], a[0][1], a[1][0], a[1][1]);
                    var o = this.getEndTangent();
                    s.addEndArrow(t, e, o[0][0], o[0][1], o[1][0], o[1][1])
                }
            }
        }),
        t.exports = c
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(23)
          , o = n(25)
          , s = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        s.ATTRS = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            lineWidth: 1,
            startArrow: !1,
            endArrow: !1
        },
        i.extend(s, r),
        i.augment(s, {
            canStroke: !0,
            type: "line",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x1
                  , n = t.y1
                  , i = t.x2
                  , r = t.y2
                  , a = this.getHitLineWidth();
                return o.box(e, n, i, r, a)
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x1
                  , i = e.y1
                  , r = e.x2
                  , a = e.y2;
                (t = t || self.get("context")).beginPath(),
                t.moveTo(n, i),
                t.lineTo(r, a)
            },
            afterPath: function(t) {
                var e = this._attrs
                  , n = e.x1
                  , i = e.y1
                  , r = e.x2
                  , o = e.y2;
                t = t || this.get("context"),
                e.startArrow && a.addStartArrow(t, e, r, o, n, i),
                e.endArrow && a.addEndArrow(t, e, n, i, r, o)
            },
            getPoint: function(t) {
                var e = this._attrs;
                return {
                    x: o.at(e.x1, e.x2, t),
                    y: o.at(e.y1, e.y2, t)
                }
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        a.ATTRS = {
            x: 0,
            y: 0,
            img: void 0,
            width: 0,
            height: 0,
            sx: null,
            sy: null,
            swidth: null,
            sheight: null
        },
        i.extend(a, r),
        i.augment(a, {
            type: "image",
            isHitBox: function() {
                return !1
            },
            calculateBox: function() {
                var t = this._attrs;
                this._cfg.attrs && this._cfg.attrs.img === t.img || this._setAttrImg();
                var e = t.x
                  , n = t.y;
                return {
                    minX: e,
                    minY: n,
                    maxX: e + t.width,
                    maxY: n + t.height
                }
            },
            _beforeSetLoading: function(t) {
                var e = this.get("canvas");
                return !1 === t && !0 === this.get("toDraw") && (this._cfg.loading = !1,
                e.draw()),
                t
            },
            _setAttrImg: function() {
                var t = this
                  , e = t._attrs
                  , n = e.img;
                if (!i.isString(n))
                    return n instanceof Image ? (e.width || t.attr("width", n.width),
                    e.height || t.attr("height", n.height),
                    n) : n instanceof HTMLElement && i.isString(n.nodeName) && "CANVAS" === n.nodeName.toUpperCase() ? (e.width || t.attr("width", Number(n.getAttribute("width"))),
                    e.height || t.attr("height", Number(n.getAttribute("height"))),
                    n) : n instanceof ImageData ? (e.width || t.attr("width", n.width),
                    e.height || t.attr("height", n.height),
                    n) : null;
                var r = new Image;
                r.onload = function() {
                    if (t.get("destroyed"))
                        return !1;
                    t.attr("imgSrc", n),
                    t.attr("img", r);
                    var e = t.get("callback");
                    e && e.call(t),
                    t.set("loading", !1)
                }
                ,
                r.src = n,
                r.crossOrigin = "Anonymous",
                t.set("loading", !0)
            },
            drawInner: function(t) {
                this._cfg.hasUpdate && this._setAttrImg(),
                this.get("loading") ? this.set("toDraw", !0) : (this._drawImage(t),
                this._cfg.hasUpdate = !1)
            },
            _drawImage: function(t) {
                var e = this._attrs
                  , n = e.x
                  , r = e.y
                  , a = e.img
                  , o = e.width
                  , s = e.height
                  , u = e.sx
                  , h = e.sy
                  , c = e.swidth
                  , l = e.sheight;
                this.set("toDraw", !1);
                var f = a;
                if (f instanceof ImageData && ((f = new Image).src = a),
                f instanceof Image || f instanceof HTMLElement && i.isString(f.nodeName) && "CANVAS" === f.nodeName.toUpperCase()) {
                    if (i.isNil(u) || i.isNil(h) || i.isNil(c) || i.isNil(l))
                        return void t.drawImage(f, n, r, o, s);
                    if (!(i.isNil(u) || i.isNil(h) || i.isNil(c) || i.isNil(l)))
                        return void t.drawImage(f, u, h, c, l, n, r, o, s)
                }
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(24)
          , o = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        o.ATTRS = {
            x: 0,
            y: 0,
            rs: 0,
            re: 0,
            startAngle: 0,
            endAngle: 0,
            clockwise: !1,
            lineWidth: 1
        },
        i.extend(o, r),
        i.augment(o, {
            canFill: !0,
            canStroke: !0,
            type: "fan",
            getDefaultAttrs: function() {
                return {
                    clockwise: !1,
                    lineWidth: 1,
                    rs: 0,
                    re: 0
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.rs
                  , r = t.re
                  , o = t.startAngle
                  , s = t.endAngle
                  , u = t.clockwise
                  , h = this.getHitLineWidth()
                  , c = a.box(e, n, i, o, s, u)
                  , l = a.box(e, n, r, o, s, u)
                  , f = h / 2;
                return {
                    minX: Math.min(c.minX, l.minX) - f,
                    minY: Math.min(c.minY, l.minY) - f,
                    maxX: Math.max(c.maxX, l.maxX) + f,
                    maxY: Math.max(c.maxY, l.maxY) + f
                }
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x
                  , i = e.y
                  , r = e.rs
                  , a = e.re
                  , o = e.startAngle
                  , s = e.endAngle
                  , u = e.clockwise
                  , h = {
                    x: Math.cos(o) * r + n,
                    y: Math.sin(o) * r + i
                }
                  , c = {
                    x: Math.cos(o) * a + n,
                    y: Math.sin(o) * a + i
                }
                  , l = {
                    x: Math.cos(s) * r + n,
                    y: Math.sin(s) * r + i
                };
                (t = t || self.get("context")).beginPath(),
                t.moveTo(h.x, h.y),
                t.lineTo(c.x, c.y),
                t.arc(n, i, a, o, s, u),
                t.lineTo(l.x, l.y),
                t.arc(n, i, r, s, o, !u),
                t.closePath()
            }
        }),
        t.exports = o
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        a.ATTRS = {
            x: 0,
            y: 0,
            rx: 1,
            ry: 1,
            lineWidth: 1
        },
        i.extend(a, r),
        i.augment(a, {
            canFill: !0,
            canStroke: !0,
            type: "ellipse",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.rx
                  , r = t.ry
                  , a = this.getHitLineWidth()
                  , o = i + a / 2
                  , s = r + a / 2;
                return {
                    minX: e - o,
                    minY: n - s,
                    maxX: e + o,
                    maxY: n + s
                }
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x
                  , r = e.y
                  , a = e.rx
                  , o = e.ry;
                t = t || self.get("context");
                var s = a > o ? a : o
                  , u = a > o ? 1 : a / o
                  , h = a > o ? o / a : 1
                  , c = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                i.mat3.scale(c, c, [u, h]),
                i.mat3.translate(c, c, [n, r]),
                t.beginPath(),
                t.save(),
                t.transform(c[0], c[1], c[3], c[4], c[6], c[7]),
                t.arc(0, 0, s, 0, 2 * Math.PI),
                t.restore(),
                t.closePath()
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        i.extend(a, r),
        i.augment(a, {
            canFill: !0,
            canStroke: !0,
            type: "dom",
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.width
                  , r = t.height
                  , a = this.getHitLineWidth() / 2;
                return {
                    minX: e - a,
                    minY: n - a,
                    maxX: e + i + a,
                    maxY: n + r + a
                }
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        a.ATTRS = {
            x: 0,
            y: 0,
            r: 0,
            lineWidth: 1
        },
        i.extend(a, r),
        i.augment(a, {
            canFill: !0,
            canStroke: !0,
            type: "circle",
            getDefaultAttrs: function() {
                return {
                    lineWidth: 1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.r
                  , r = this.getHitLineWidth() / 2 + i;
                return {
                    minX: e - r,
                    minY: n - r,
                    maxX: e + r,
                    maxY: n + r
                }
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x
                  , i = e.y
                  , r = e.r;
                t.beginPath(),
                t.arc(n, i, r, 0, 2 * Math.PI, !1),
                t.closePath()
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(3)
          , a = n(24)
          , o = n(23);
        function s(t, e, n) {
            return t + e * Math.cos(n)
        }
        function u(t, e, n) {
            return t + e * Math.sin(n)
        }
        var h = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        h.ATTRS = {
            x: 0,
            y: 0,
            r: 0,
            startAngle: 0,
            endAngle: 0,
            clockwise: !1,
            lineWidth: 1,
            startArrow: !1,
            endArrow: !1
        },
        i.extend(h, r),
        i.augment(h, {
            canStroke: !0,
            type: "arc",
            getDefaultAttrs: function() {
                return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 0,
                    clockwise: !1,
                    lineWidth: 1,
                    startArrow: !1,
                    endArrow: !1
                }
            },
            calculateBox: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.r
                  , r = t.startAngle
                  , o = t.endAngle
                  , s = t.clockwise
                  , u = this.getHitLineWidth() / 2
                  , h = a.box(e, n, i, r, o, s);
                return h.minX -= u,
                h.minY -= u,
                h.maxX += u,
                h.maxY += u,
                h
            },
            getStartTangent: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.startAngle
                  , r = t.r
                  , a = t.clockwise
                  , o = Math.PI / 180;
                a && (o *= -1);
                var h = []
                  , c = s(e, r, i + o)
                  , l = u(n, r, i + o)
                  , f = s(e, r, i)
                  , d = u(n, r, i);
                return h.push([c, l]),
                h.push([f, d]),
                h
            },
            getEndTangent: function() {
                var t = this._attrs
                  , e = t.x
                  , n = t.y
                  , i = t.endAngle
                  , r = t.r
                  , a = t.clockwise
                  , o = Math.PI / 180
                  , h = [];
                a && (o *= -1);
                var c = s(e, r, i + o)
                  , l = u(n, r, i + o)
                  , f = s(e, r, i)
                  , d = u(n, r, i);
                return h.push([f, d]),
                h.push([c, l]),
                h
            },
            createPath: function(t) {
                var e = this._attrs
                  , n = e.x
                  , i = e.y
                  , r = e.r
                  , a = e.startAngle
                  , o = e.endAngle
                  , s = e.clockwise;
                (t = t || self.get("context")).beginPath(),
                t.arc(n, i, r, a, o, s)
            },
            afterPath: function(t) {
                var e = this._attrs;
                if (t = t || this.get("context"),
                e.startArrow) {
                    var n = this.getStartTangent();
                    o.addStartArrow(t, e, n[0][0], n[0][1], n[1][0], n[1][1])
                }
                if (e.endArrow) {
                    var i = this.getEndTangent();
                    o.addEndArrow(t, e, i[0][0], i[0][1], i[1][0], i[1][1])
                }
            }
        }),
        t.exports = h
    }
    , function(t, e) {
        t.exports = {
            xAt: function(t, e, n, i, r) {
                return e * Math.cos(t) * Math.cos(r) - n * Math.sin(t) * Math.sin(r) + i
            },
            yAt: function(t, e, n, i, r) {
                return e * Math.sin(t) * Math.cos(r) + n * Math.cos(t) * Math.sin(r) + i
            },
            xExtrema: function(t, e, n) {
                return Math.atan(-n / e * Math.tan(t))
            },
            yExtrema: function(t, e, n) {
                return Math.atan(n / (e * Math.tan(t)))
            }
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = i.vec2;
        function a(t, e, n, i) {
            var r = 1 - i;
            return r * (r * t + 2 * i * e) + i * i * n
        }
        function o(t, e, n, i, o, s, u, h, c) {
            var l, f, d, g, p, v, m, y = .005, x = 1 / 0, b = [u, h];
            for (p = 0; p < 1; p += .05)
                d = [a(t, n, o, p), a(e, i, s, p)],
                (f = r.squaredDistance(b, d)) < x && (l = p,
                x = f);
            for (x = 1 / 0,
            m = 0; m < 32 && !(y < 1e-4); m++) {
                var M = l - y
                  , w = l + y;
                d = [a(t, n, o, M), a(e, i, s, M)],
                f = r.squaredDistance(b, d),
                M >= 0 && f < x ? (l = M,
                x = f) : (g = [a(t, n, o, w), a(e, i, s, w)],
                v = r.squaredDistance(b, g),
                w <= 1 && v < x ? (l = w,
                x = v) : y *= .5)
            }
            return c && (c.x = a(t, n, o, l),
            c.y = a(e, i, s, l)),
            Math.sqrt(x)
        }
        t.exports = {
            at: a,
            projectPoint: function(t, e, n, i, r, a, s, u) {
                var h = {};
                return o(t, e, n, i, r, a, s, u, h),
                h
            },
            pointDistance: o,
            extrema: function(t, e, n) {
                var r = t + n - 2 * e;
                if (i.isNumberEqual(r, 0))
                    return [.5];
                var a = (t - e) / r;
                return a <= 1 && a >= 0 ? [a] : []
            }
        }
    }
    , function(t, e, n) {
        var i = n(39)
          , r = Array.prototype.slice;
        var a = function() {};
        i.augment(a, {
            on: function(t, e, n) {
                if (!i.isFunction(e))
                    throw new TypeError("listener should be a function");
                return this._cfg._events || (this._cfg._events = {}),
                this._cfg._events[t] || (this._cfg._events[t] = []),
                this._cfg._events[t].push({
                    callback: e,
                    one: n
                }),
                this
            },
            one: function(t, e) {
                return this.on(t, e, !0),
                this
            },
            emit: function(t) {
                if (!this.get("destroyed") && this._cfg._events && !i.isEmpty(this._cfg._events)) {
                    var e = this._cfg._events[t];
                    if (!i.isEmpty(e))
                        for (var n = arguments, a = r.call(n, 1), o = e.length, s = 0; s < o; )
                            e[s].callback.apply(this, a),
                            e[s].one ? (e.splice(s, 1),
                            o--) : s++
                }
            },
            trigger: function() {
                this.emit.apply(this, arguments)
            },
            off: function(t, e) {
                var n = this._cfg._events;
                if (n && !i.isEmpty(n)) {
                    if (0 === arguments.length)
                        return this._cfg._events = {},
                        this;
                    if (n[t]) {
                        var r = function(t, e) {
                            for (var n = t.length; n--; )
                                if (t[n].callback === e)
                                    return n;
                            return -1
                        }(n[t], e);
                        r >= 0 && n[t].splice(r, 1),
                        0 === n[t].length && delete n[t]
                    }
                }
            },
            removeEvent: function(t) {
                return void 0 === t ? this._cfg._events = {} : delete this._cfg._events[t],
                this
            },
            _getEvents: function() {
                return this._cfg._events || {}
            }
        }),
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(123)
          , a = n(122)
          , o = n(121)
          , s = n(120)
          , u = function(t) {
            this._cfg = {
                zIndex: 0,
                capture: !0,
                visible: !0,
                destroyed: !1
            },
            i.assign(this._cfg, this.getDefaultCfg(), t),
            this.initAttrs(this._cfg.attrs),
            this._cfg.attrs = {},
            this.initTransform(),
            this.init()
        };
        u.CFG = {
            id: null,
            zIndex: 0,
            canvas: null,
            parent: null,
            capture: !0,
            context: null,
            visible: !0,
            destroyed: !1
        },
        i.augment(u, r, a, s, o, {
            init: function() {
                this.setSilent("animable", !0),
                this.setSilent("animating", !1)
            },
            getParent: function() {
                return this._cfg.parent
            },
            getDefaultCfg: function() {
                return {}
            },
            set: function(t, e) {
                return "zIndex" === t && this._beforeSetZIndex && this._beforeSetZIndex(e),
                "loading" === t && this._beforeSetLoading && this._beforeSetLoading(e),
                this._cfg[t] = e,
                this
            },
            setSilent: function(t, e) {
                this._cfg[t] = e
            },
            get: function(t) {
                return this._cfg[t]
            },
            show: function() {
                return this._cfg.visible = !0,
                this
            },
            hide: function() {
                return this._cfg.visible = !1,
                this
            },
            remove: function(t, e) {
                var n = this._cfg
                  , r = n.parent
                  , a = n.el;
                return r && i.remove(r.get("children"), this),
                a && (e ? r && r._cfg.tobeRemoved.push(a) : a.parentNode.removeChild(a)),
                (t || void 0 === t) && this.destroy(),
                this
            },
            destroy: function() {
                this.get("destroyed") || (this._attrs = null,
                this.removeEvent(),
                this._cfg = {
                    destroyed: !0
                })
            },
            toFront: function() {
                var t = this._cfg
                  , e = t.parent;
                if (e) {
                    var n = e._cfg.children
                      , i = t.el
                      , r = n.indexOf(this);
                    n.splice(r, 1),
                    n.push(this),
                    i && (i.parentNode.removeChild(i),
                    t.el = null)
                }
            },
            toBack: function() {
                var t = this._cfg
                  , e = t.parent;
                if (e) {
                    var n = e._cfg.children
                      , i = t.el
                      , r = n.indexOf(this);
                    if (n.splice(r, 1),
                    n.unshift(this),
                    i) {
                        var a = i.parentNode;
                        a.removeChild(i),
                        a.insertBefore(i, a.firstChild)
                    }
                }
            },
            _beforeSetZIndex: function(t) {
                var e = this._cfg.parent;
                this._cfg.zIndex = t,
                i.isNil(e) || e.sort();
                var n = this._cfg.el;
                if (n) {
                    var r = e._cfg.children
                      , a = r.indexOf(this)
                      , o = n.parentNode;
                    o.removeChild(n),
                    a === r.length - 1 ? o.appendChild(n) : o.insertBefore(n, o.childNodes[a])
                }
                return t
            },
            _setAttrs: function(t) {
                return this.attr(t),
                t
            },
            setZIndex: function(t) {
                return this._cfg.zIndex = t,
                this._beforeSetZIndex(t)
            },
            clone: function() {
                return i.clone(this)
            },
            getBBox: function() {}
        }),
        t.exports = u
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(62)
          , a = n(119)
          , o = {}
          , s = "_INDEX";
        function u(t, e, n) {
            for (var i, r = t.length - 1; r >= 0; r--) {
                var a = t[r];
                if (a._cfg.visible && a._cfg.capture && (a.isGroup ? i = a.getShape(e, n) : a.isHit(e, n) && (i = a)),
                i)
                    break
            }
            return i
        }
        var h = function t(e) {
            t.superclass.constructor.call(this, e),
            this.set("children", []),
            this.set("tobeRemoved", []),
            this._beforeRenderUI(),
            this._renderUI(),
            this._bindUI()
        };
        i.extend(h, r),
        i.augment(h, {
            isGroup: !0,
            type: "group",
            canFill: !0,
            canStroke: !0,
            getDefaultCfg: function() {
                return function t(e) {
                    if (!e._cfg && e !== h) {
                        var n = e.superclass.constructor;
                        n && !n._cfg && t(n),
                        e._cfg = {},
                        i.merge(e._cfg, n._cfg),
                        i.merge(e._cfg, e.CFG)
                    }
                }(this.constructor),
                i.merge({}, this.constructor._cfg)
            },
            _beforeRenderUI: function() {},
            _renderUI: function() {},
            _bindUI: function() {},
            addShape: function(t, e) {
                var n = this.get("canvas");
                e = e || {};
                var r = o[t];
                if (r || (r = i.upperFirst(t),
                o[t] = r),
                e.attrs && n) {
                    var s = e.attrs;
                    if ("text" === t) {
                        var u = n.get("fontFamily");
                        u && (s.fontFamily = s.fontFamily ? s.fontFamily : u)
                    }
                }
                e.canvas = n,
                e.type = t;
                var h = new a[r](e);
                return this.add(h),
                h
            },
            addGroup: function(t, e) {
                var n, r = this.get("canvas");
                if (e = i.merge({}, e),
                i.isFunction(t))
                    e ? (e.canvas = r,
                    e.parent = this,
                    n = new t(e)) : n = new t({
                        canvas: r,
                        parent: this
                    }),
                    this.add(n);
                else if (i.isObject(t))
                    t.canvas = r,
                    n = new h(t),
                    this.add(n);
                else {
                    if (void 0 !== t)
                        return !1;
                    n = new h,
                    this.add(n)
                }
                return n
            },
            renderBack: function(t, e) {
                var n = this.get("backShape")
                  , r = this.getBBox();
                return i.merge(e, {
                    x: r.minX - t[3],
                    y: r.minY - t[0],
                    width: r.width + t[1] + t[3],
                    height: r.height + t[0] + t[2]
                }),
                n ? n.attr(e) : n = this.addShape("rect", {
                    zIndex: -1,
                    attrs: e
                }),
                this.set("backShape", n),
                this.sort(),
                n
            },
            removeChild: function(t, e) {
                if (arguments.length >= 2)
                    this.contain(t) && t.remove(e);
                else {
                    if (1 === arguments.length) {
                        if (!i.isBoolean(t))
                            return this.contain(t) && t.remove(!0),
                            this;
                        e = t
                    }
                    0 === arguments.length && (e = !0),
                    h.superclass.remove.call(this, e)
                }
                return this
            },
            add: function(t) {
                var e = this
                  , n = e.get("children");
                if (i.isArray(t))
                    i.each(t, function(t) {
                        var n = t.get("parent");
                        n && n.removeChild(t, !1),
                        e._setCfgProperty(t)
                    }),
                    e._cfg.children = n.concat(t);
                else {
                    var r = t
                      , a = r.get("parent");
                    a && a.removeChild(r, !1),
                    e._setCfgProperty(r),
                    n.push(r)
                }
                return e
            },
            _setCfgProperty: function(t) {
                var e = this._cfg;
                t.set("parent", this),
                t.set("canvas", e.canvas),
                e.timeline && t.set("timeline", e.timeline)
            },
            contain: function(t) {
                return this.get("children").indexOf(t) > -1
            },
            getChildByIndex: function(t) {
                return this.get("children")[t]
            },
            getFirst: function() {
                return this.getChildByIndex(0)
            },
            getLast: function() {
                var t = this.get("children").length - 1;
                return this.getChildByIndex(t)
            },
            getBBox: function() {
                var t = 1 / 0
                  , e = -1 / 0
                  , n = 1 / 0
                  , r = -1 / 0
                  , a = this.get("children");
                a.length > 0 ? i.each(a, function(i) {
                    if (i.get("visible")) {
                        if (i.isGroup && 0 === i.get("children").length)
                            return;
                        var a = i.getBBox();
                        if (!a)
                            return !0;
                        var o = [a.minX, a.minY, 1]
                          , s = [a.minX, a.maxY, 1]
                          , u = [a.maxX, a.minY, 1]
                          , h = [a.maxX, a.maxY, 1];
                        i.apply(o),
                        i.apply(s),
                        i.apply(u),
                        i.apply(h);
                        var c = Math.min(o[0], s[0], u[0], h[0])
                          , l = Math.max(o[0], s[0], u[0], h[0])
                          , f = Math.min(o[1], s[1], u[1], h[1])
                          , d = Math.max(o[1], s[1], u[1], h[1]);
                        c < t && (t = c),
                        l > e && (e = l),
                        f < n && (n = f),
                        d > r && (r = d)
                    }
                }) : (t = 0,
                e = 0,
                n = 0,
                r = 0);
                var o = {
                    minX: t,
                    minY: n,
                    maxX: e,
                    maxY: r
                };
                return o.x = o.minX,
                o.y = o.minY,
                o.width = o.maxX - o.minX,
                o.height = o.maxY - o.minY,
                o
            },
            getCount: function() {
                return this.get("children").length
            },
            sort: function() {
                var t = this.get("children");
                return i.each(t, function(t, e) {
                    return t[s] = e,
                    t
                }),
                t.sort(function(t) {
                    return function(e, n) {
                        var i = t(e, n);
                        return 0 === i ? e[s] - n[s] : i
                    }
                }(function(t, e) {
                    return t.get("zIndex") - e.get("zIndex")
                })),
                this
            },
            findById: function(t) {
                return this.find(function(e) {
                    return e.get("id") === t
                })
            },
            find: function(t) {
                if (i.isString(t))
                    return this.findById(t);
                var e = this.get("children")
                  , n = null;
                return i.each(e, function(e) {
                    if (t(e) ? n = e : e.find && (n = e.find(t)),
                    n)
                        return !1
                }),
                n
            },
            findAll: function(t) {
                var e = this.get("children")
                  , n = []
                  , r = [];
                return i.each(e, function(e) {
                    t(e) && n.push(e),
                    e.findAllBy && (r = e.findAllBy(t),
                    n = n.concat(r))
                }),
                n
            },
            findBy: function(t) {
                var e = this.get("children")
                  , n = null;
                return i.each(e, function(e) {
                    if (t(e) ? n = e : e.findBy && (n = e.findBy(t)),
                    n)
                        return !1
                }),
                n
            },
            findAllBy: function(t) {
                var e = this.get("children")
                  , n = []
                  , r = [];
                return i.each(e, function(e) {
                    t(e) && n.push(e),
                    e.findAllBy && (r = e.findAllBy(t),
                    n = n.concat(r))
                }),
                n
            },
            getShape: function(t, e) {
                var n, i = this._attrs.clip, r = this._cfg.children;
                if (i) {
                    var a = [t, e, 1];
                    i.invert(a, this.get("canvas")),
                    i.isPointInPath(a[0], a[1]) && (n = u(r, t, e))
                } else
                    n = u(r, t, e);
                return n
            },
            clearTotalMatrix: function() {
                if (this.get("totalMatrix")) {
                    this.setSilent("totalMatrix", null);
                    for (var t = this._cfg.children, e = 0; e < t.length; e++) {
                        t[e].clearTotalMatrix()
                    }
                }
            },
            clear: function(t) {
                if (!this.get("destroyed")) {
                    for (var e = this._cfg.children, n = e.length - 1; n >= 0; n--)
                        e[n].remove(!0, t);
                    return this._cfg.children = [],
                    this
                }
            },
            destroy: function() {
                this.get("destroyed") || (this.clear(),
                h.superclass.destroy.call(this))
            },
            clone: function() {
                var t = this._cfg.children
                  , e = this._attrs
                  , n = {};
                i.each(e, function(t, i) {
                    n[i] = "matrix" === i ? function(t) {
                        for (var e = [], n = 0; n < t.length; n++)
                            e.push(t[n]);
                        return e
                    }(e[i]) : e[i]
                });
                var r = new h({
                    attrs: n
                });
                return i.each(t, function(t) {
                    r.add(t.clone())
                }),
                r
            }
        }),
        t.exports = h
    }
    , function(t, e, n) {
        var i = n(37)
          , r = n(5)
          , a = n(36);
        t.exports = function(t, e) {
            return t = i(t),
            r(e, function(e) {
                switch (e[0]) {
                case "t":
                    a.translate(t, t, [e[1], e[2]]);
                    break;
                case "s":
                    a.scale(t, t, [e[1], e[2]]);
                    break;
                case "r":
                    a.rotate(t, t, e[1]);
                    break;
                case "m":
                    a.multiply(t, t, e[1]);
                    break;
                default:
                    return !1
                }
            }),
            t
        }
    }
    , function(t, e, n) {
        var i = n(125);
        t.exports = i
    }
    , function(t, e, n) {
        var i = n(126)
          , r = n(67);
        i.angle = function(t, e) {
            var n = i.dot(t, e) / (i.length(t) * i.length(e));
            return Math.acos(r(n, -1, 1))
        }
        ,
        i.direction = function(t, e) {
            return t[0] * e[1] - e[0] * t[1]
        }
        ,
        i.angleTo = function(t, e, n) {
            var r = i.angle(t, e)
              , a = i.direction(t, e) >= 0;
            return n ? a ? 2 * Math.PI - r : r : a ? r : 2 * Math.PI - r
        }
        ,
        i.vertical = function(t, e, n) {
            return n ? (t[0] = e[1],
            t[1] = -1 * e[0]) : (t[0] = -1 * e[1],
            t[1] = e[0]),
            t
        }
        ,
        t.exports = i
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            return t < e ? e : t > n ? n : t
        }
    }
    , function(t, e, n) {
        var i = n(38)
          , r = n(70)
          , a = n(27);
        t.exports = function(t) {
            for (var e = r(arguments), n = 1; n < e.length; n++) {
                var o = e[n];
                i(o) && (o = o.prototype),
                a(t.prototype, o)
            }
        }
    }
    , function(t, e, n) {
        var i = n(38)
          , r = n(27);
        t.exports = function(t, e, n, a) {
            i(e) || (n = e,
            e = t,
            t = function() {}
            );
            var o = Object.create ? function(t, e) {
                return Object.create(t, {
                    constructor: {
                        value: e
                    }
                })
            }
            : function(t, e) {
                function n() {}
                n.prototype = t;
                var i = new n;
                return i.constructor = e,
                i
            }
              , s = o(e.prototype, t);
            return t.prototype = r(s, t.prototype),
            t.superclass = o(e.prototype, e),
            r(s, n),
            r(t, a),
            t
        }
    }
    , function(t, e, n) {
        var i = n(20);
        t.exports = function(t) {
            return i(t) ? Array.prototype.slice.call(t) : []
        }
    }
    , function(t, e, n) {
        var i = n(135);
        t.exports = function(t) {
            var e = i(t);
            return e.charAt(0).toUpperCase() + e.substring(1)
        }
    }
    , function(t, e) {
        var n = function() {
            var t = {};
            return function(e) {
                return t[e = e || "g"] ? t[e] += 1 : t[e] = 1,
                e + t[e]
            }
        }();
        t.exports = n
    }
    , function(t, e, n) {
        var i = n(2);
        t.exports = function(t) {
            return i(t, "Number")
        }
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var i, r, a = 0, o = 0, s = 0, u = 1e3, h = 0, c = 0, l = 0, f = "object" == typeof performance && performance.now ? performance : Date, d = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        }
        ;
        function g() {
            return c || (d(p),
            c = f.now() + l)
        }
        function p() {
            c = 0
        }
        function v() {
            this._call = this._time = this._next = null
        }
        function m(t, e, n) {
            var i = new v;
            return i.restart(t, e, n),
            i
        }
        function y() {
            g(),
            ++a;
            for (var t, e = i; e; )
                (t = c - e._time) >= 0 && e._call.call(null, t),
                e = e._next;
            --a
        }
        function x() {
            c = (h = f.now()) + l,
            a = o = 0;
            try {
                y()
            } finally {
                a = 0,
                function() {
                    var t, e, n = i, a = 1 / 0;
                    for (; n; )
                        n._call ? (a > n._time && (a = n._time),
                        t = n,
                        n = n._next) : (e = n._next,
                        n._next = null,
                        n = t ? t._next = e : i = e);
                    r = t,
                    M(a)
                }(),
                c = 0
            }
        }
        function b() {
            var t = f.now()
              , e = t - h;
            e > u && (l -= e,
            h = t)
        }
        function M(t) {
            a || (o && (o = clearTimeout(o)),
            t - c > 24 ? (t < 1 / 0 && (o = setTimeout(x, t - f.now() - l)),
            s && (s = clearInterval(s))) : (s || (h = f.now(),
            s = setInterval(b, u)),
            a = 1,
            d(x)))
        }
        v.prototype = m.prototype = {
            constructor: v,
            restart: function(t, e, n) {
                if ("function" != typeof t)
                    throw new TypeError("callback is not a function");
                n = (null == n ? g() : +n) + (null == e ? 0 : +e),
                this._next || r === this || (r ? r._next = this : i = this,
                r = this),
                this._call = t,
                this._time = n,
                M()
            },
            stop: function() {
                this._call && (this._call = null,
                this._time = 1 / 0,
                M())
            }
        };
        var w = function(t, e, n) {
            var i = new v;
            return e = null == e ? 0 : +e,
            i.restart(function(n) {
                i.stop(),
                t(n + e)
            }, e, n),
            i
        }
          , _ = function(t, e, n) {
            var i = new v
              , r = e;
            return null == e ? (i.restart(t, e, n),
            i) : (e = +e,
            n = null == n ? g() : +n,
            i.restart(function a(o) {
                o += r,
                i.restart(a, r += e, n),
                t(o)
            }, e, n),
            i)
        };
        n.d(e, "now", function() {
            return g
        }),
        n.d(e, "timer", function() {
            return m
        }),
        n.d(e, "timerFlush", function() {
            return y
        }),
        n.d(e, "timeout", function() {
            return w
        }),
        n.d(e, "interval", function() {
            return _
        })
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            return +t
        }
        function r(t) {
            return t * t
        }
        function a(t) {
            return t * (2 - t)
        }
        function o(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }
        function s(t) {
            return t * t * t
        }
        function u(t) {
            return --t * t * t + 1
        }
        function h(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        n.r(e);
        var c = function t(e) {
            function n(t) {
                return Math.pow(t, e)
            }
            return e = +e,
            n.exponent = t,
            n
        }(3)
          , l = function t(e) {
            function n(t) {
                return 1 - Math.pow(1 - t, e)
            }
            return e = +e,
            n.exponent = t,
            n
        }(3)
          , f = function t(e) {
            function n(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            }
            return e = +e,
            n.exponent = t,
            n
        }(3)
          , d = Math.PI
          , g = d / 2;
        function p(t) {
            return 1 - Math.cos(t * g)
        }
        function v(t) {
            return Math.sin(t * g)
        }
        function m(t) {
            return (1 - Math.cos(d * t)) / 2
        }
        function y(t) {
            return Math.pow(2, 10 * t - 10)
        }
        function x(t) {
            return 1 - Math.pow(2, -10 * t)
        }
        function b(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
        }
        function M(t) {
            return 1 - Math.sqrt(1 - t * t)
        }
        function w(t) {
            return Math.sqrt(1 - --t * t)
        }
        function _(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        }
        var P = 4 / 11
          , S = 6 / 11
          , A = 8 / 11
          , C = .75
          , I = 9 / 11
          , k = 10 / 11
          , T = .9375
          , E = 21 / 22
          , B = 63 / 64
          , N = 1 / P / P;
        function L(t) {
            return 1 - O(1 - t)
        }
        function O(t) {
            return (t = +t) < P ? N * t * t : t < A ? N * (t -= S) * t + C : t < k ? N * (t -= I) * t + T : N * (t -= E) * t + B
        }
        function D(t) {
            return ((t *= 2) <= 1 ? 1 - O(1 - t) : O(t - 1) + 1) / 2
        }
        var Y = function t(e) {
            function n(t) {
                return t * t * ((e + 1) * t - e)
            }
            return e = +e,
            n.overshoot = t,
            n
        }(1.70158)
          , X = function t(e) {
            function n(t) {
                return --t * t * ((e + 1) * t + e) + 1
            }
            return e = +e,
            n.overshoot = t,
            n
        }(1.70158)
          , R = function t(e) {
            function n(t) {
                return ((t *= 2) < 1 ? t * t * ((e + 1) * t - e) : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            }
            return e = +e,
            n.overshoot = t,
            n
        }(1.70158)
          , F = 2 * Math.PI
          , q = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= F);
            function r(t) {
                return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / n)
            }
            return r.amplitude = function(e) {
                return t(e, n * F)
            }
            ,
            r.period = function(n) {
                return t(e, n)
            }
            ,
            r
        }(1, .3)
          , j = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= F);
            function r(t) {
                return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / n)
            }
            return r.amplitude = function(e) {
                return t(e, n * F)
            }
            ,
            r.period = function(n) {
                return t(e, n)
            }
            ,
            r
        }(1, .3)
          , z = function t(e, n) {
            var i = Math.asin(1 / (e = Math.max(1, e))) * (n /= F);
            function r(t) {
                return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / n) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / n)) / 2
            }
            return r.amplitude = function(e) {
                return t(e, n * F)
            }
            ,
            r.period = function(n) {
                return t(e, n)
            }
            ,
            r
        }(1, .3);
        n.d(e, "easeLinear", function() {
            return i
        }),
        n.d(e, "easeQuad", function() {
            return o
        }),
        n.d(e, "easeQuadIn", function() {
            return r
        }),
        n.d(e, "easeQuadOut", function() {
            return a
        }),
        n.d(e, "easeQuadInOut", function() {
            return o
        }),
        n.d(e, "easeCubic", function() {
            return h
        }),
        n.d(e, "easeCubicIn", function() {
            return s
        }),
        n.d(e, "easeCubicOut", function() {
            return u
        }),
        n.d(e, "easeCubicInOut", function() {
            return h
        }),
        n.d(e, "easePoly", function() {
            return f
        }),
        n.d(e, "easePolyIn", function() {
            return c
        }),
        n.d(e, "easePolyOut", function() {
            return l
        }),
        n.d(e, "easePolyInOut", function() {
            return f
        }),
        n.d(e, "easeSin", function() {
            return m
        }),
        n.d(e, "easeSinIn", function() {
            return p
        }),
        n.d(e, "easeSinOut", function() {
            return v
        }),
        n.d(e, "easeSinInOut", function() {
            return m
        }),
        n.d(e, "easeExp", function() {
            return b
        }),
        n.d(e, "easeExpIn", function() {
            return y
        }),
        n.d(e, "easeExpOut", function() {
            return x
        }),
        n.d(e, "easeExpInOut", function() {
            return b
        }),
        n.d(e, "easeCircle", function() {
            return _
        }),
        n.d(e, "easeCircleIn", function() {
            return M
        }),
        n.d(e, "easeCircleOut", function() {
            return w
        }),
        n.d(e, "easeCircleInOut", function() {
            return _
        }),
        n.d(e, "easeBounce", function() {
            return O
        }),
        n.d(e, "easeBounceIn", function() {
            return L
        }),
        n.d(e, "easeBounceOut", function() {
            return O
        }),
        n.d(e, "easeBounceInOut", function() {
            return D
        }),
        n.d(e, "easeBack", function() {
            return R
        }),
        n.d(e, "easeBackIn", function() {
            return Y
        }),
        n.d(e, "easeBackOut", function() {
            return X
        }),
        n.d(e, "easeBackInOut", function() {
            return R
        }),
        n.d(e, "easeElastic", function() {
            return j
        }),
        n.d(e, "easeElasticIn", function() {
            return q
        }),
        n.d(e, "easeElasticOut", function() {
            return j
        }),
        n.d(e, "easeElasticInOut", function() {
            return z
        })
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = function(t, e, n) {
            t.prototype = e.prototype = n,
            n.constructor = t
        };
        function r(t, e) {
            var n = Object.create(t.prototype);
            for (var i in e)
                n[i] = e[i];
            return n
        }
        function a() {}
        var o = "\\s*([+-]?\\d+)\\s*"
          , s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
          , u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
          , h = /^#([0-9a-f]{3})$/
          , c = /^#([0-9a-f]{6})$/
          , l = new RegExp("^rgb\\(" + [o, o, o] + "\\)$")
          , f = new RegExp("^rgb\\(" + [u, u, u] + "\\)$")
          , d = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$")
          , g = new RegExp("^rgba\\(" + [u, u, u, s] + "\\)$")
          , p = new RegExp("^hsl\\(" + [s, u, u] + "\\)$")
          , v = new RegExp("^hsla\\(" + [s, u, u, s] + "\\)$")
          , m = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        function y(t) {
            var e;
            return t = (t + "").trim().toLowerCase(),
            (e = h.exec(t)) ? new _((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | 240 & e,(15 & e) << 4 | 15 & e,1) : (e = c.exec(t)) ? x(parseInt(e[1], 16)) : (e = l.exec(t)) ? new _(e[1],e[2],e[3],1) : (e = f.exec(t)) ? new _(255 * e[1] / 100,255 * e[2] / 100,255 * e[3] / 100,1) : (e = d.exec(t)) ? b(e[1], e[2], e[3], e[4]) : (e = g.exec(t)) ? b(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = p.exec(t)) ? S(e[1], e[2] / 100, e[3] / 100, 1) : (e = v.exec(t)) ? S(e[1], e[2] / 100, e[3] / 100, e[4]) : m.hasOwnProperty(t) ? x(m[t]) : "transparent" === t ? new _(NaN,NaN,NaN,0) : null
        }
        function x(t) {
            return new _(t >> 16 & 255,t >> 8 & 255,255 & t,1)
        }
        function b(t, e, n, i) {
            return i <= 0 && (t = e = n = NaN),
            new _(t,e,n,i)
        }
        function M(t) {
            return t instanceof a || (t = y(t)),
            t ? new _((t = t.rgb()).r,t.g,t.b,t.opacity) : new _
        }
        function w(t, e, n, i) {
            return 1 === arguments.length ? M(t) : new _(t,e,n,null == i ? 1 : i)
        }
        function _(t, e, n, i) {
            this.r = +t,
            this.g = +e,
            this.b = +n,
            this.opacity = +i
        }
        function P(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }
        function S(t, e, n, i) {
            return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
            new C(t,e,n,i)
        }
        function A(t, e, n, i) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof C)
                    return new C(t.h,t.s,t.l,t.opacity);
                if (t instanceof a || (t = y(t)),
                !t)
                    return new C;
                if (t instanceof C)
                    return t;
                var e = (t = t.rgb()).r / 255
                  , n = t.g / 255
                  , i = t.b / 255
                  , r = Math.min(e, n, i)
                  , o = Math.max(e, n, i)
                  , s = NaN
                  , u = o - r
                  , h = (o + r) / 2;
                return u ? (s = e === o ? (n - i) / u + 6 * (n < i) : n === o ? (i - e) / u + 2 : (e - n) / u + 4,
                u /= h < .5 ? o + r : 2 - o - r,
                s *= 60) : u = h > 0 && h < 1 ? 0 : s,
                new C(s,u,h,t.opacity)
            }(t) : new C(t,e,n,null == i ? 1 : i)
        }
        function C(t, e, n, i) {
            this.h = +t,
            this.s = +e,
            this.l = +n,
            this.opacity = +i
        }
        function I(t, e, n) {
            return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e)
        }
        i(a, y, {
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: function() {
                return this.rgb().hex()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }),
        i(_, w, r(a, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                new _(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                new _(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function() {
                return "#" + P(this.r) + P(this.g) + P(this.b)
            },
            toString: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })),
        i(C, A, r(a, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                new C(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                new C(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0)
                  , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                  , n = this.l
                  , i = n + (n < .5 ? n : 1 - n) * e
                  , r = 2 * n - i;
                return new _(I(t >= 240 ? t - 240 : t + 120, r, i),I(t, r, i),I(t < 120 ? t + 240 : t - 120, r, i),this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var k = Math.PI / 180
          , T = 180 / Math.PI
          , E = .96422
          , B = 1
          , N = .82521
          , L = 4 / 29
          , O = 6 / 29
          , D = 3 * O * O
          , Y = O * O * O;
        function X(t) {
            if (t instanceof F)
                return new F(t.l,t.a,t.b,t.opacity);
            if (t instanceof V) {
                if (isNaN(t.h))
                    return new F(t.l,0,0,t.opacity);
                var e = t.h * k;
                return new F(t.l,Math.cos(e) * t.c,Math.sin(e) * t.c,t.opacity)
            }
            t instanceof _ || (t = M(t));
            var n, i, r = H(t.r), a = H(t.g), o = H(t.b), s = q((.2225045 * r + .7168786 * a + .0606169 * o) / B);
            return r === a && a === o ? n = i = s : (n = q((.4360747 * r + .3850649 * a + .1430804 * o) / E),
            i = q((.0139322 * r + .0971045 * a + .7141733 * o) / N)),
            new F(116 * s - 16,500 * (n - s),200 * (s - i),t.opacity)
        }
        function R(t, e, n, i) {
            return 1 === arguments.length ? X(t) : new F(t,e,n,null == i ? 1 : i)
        }
        function F(t, e, n, i) {
            this.l = +t,
            this.a = +e,
            this.b = +n,
            this.opacity = +i
        }
        function q(t) {
            return t > Y ? Math.pow(t, 1 / 3) : t / D + L
        }
        function j(t) {
            return t > O ? t * t * t : D * (t - L)
        }
        function z(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }
        function H(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        function U(t) {
            if (t instanceof V)
                return new V(t.h,t.c,t.l,t.opacity);
            if (t instanceof F || (t = X(t)),
            0 === t.a && 0 === t.b)
                return new V(NaN,0,t.l,t.opacity);
            var e = Math.atan2(t.b, t.a) * T;
            return new V(e < 0 ? e + 360 : e,Math.sqrt(t.a * t.a + t.b * t.b),t.l,t.opacity)
        }
        function W(t, e, n, i) {
            return 1 === arguments.length ? U(t) : new V(t,e,n,null == i ? 1 : i)
        }
        function V(t, e, n, i) {
            this.h = +t,
            this.c = +e,
            this.l = +n,
            this.opacity = +i
        }
        i(F, R, r(a, {
            brighter: function(t) {
                return new F(this.l + 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            darker: function(t) {
                return new F(this.l - 18 * (null == t ? 1 : t),this.a,this.b,this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116
                  , e = isNaN(this.a) ? t : t + this.a / 500
                  , n = isNaN(this.b) ? t : t - this.b / 200;
                return new _(z(3.1338561 * (e = E * j(e)) - 1.6168667 * (t = B * j(t)) - .4906146 * (n = N * j(n))),z(-.9787684 * e + 1.9161415 * t + .033454 * n),z(.0719453 * e - .2289914 * t + 1.4052427 * n),this.opacity)
            }
        })),
        i(V, W, r(a, {
            brighter: function(t) {
                return new V(this.h,this.c,this.l + 18 * (null == t ? 1 : t),this.opacity)
            },
            darker: function(t) {
                return new V(this.h,this.c,this.l - 18 * (null == t ? 1 : t),this.opacity)
            },
            rgb: function() {
                return X(this).rgb()
            }
        }));
        var G = -.14861
          , Z = 1.78277
          , Q = -.29227
          , $ = -.90649
          , K = 1.97294
          , J = K * $
          , tt = K * Z
          , et = Z * Q - $ * G;
        function nt(t, e, n, i) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof it)
                    return new it(t.h,t.s,t.l,t.opacity);
                t instanceof _ || (t = M(t));
                var e = t.r / 255
                  , n = t.g / 255
                  , i = t.b / 255
                  , r = (et * i + J * e - tt * n) / (et + J - tt)
                  , a = i - r
                  , o = (K * (n - r) - Q * a) / $
                  , s = Math.sqrt(o * o + a * a) / (K * r * (1 - r))
                  , u = s ? Math.atan2(o, a) * T - 120 : NaN;
                return new it(u < 0 ? u + 360 : u,s,r,t.opacity)
            }(t) : new it(t,e,n,null == i ? 1 : i)
        }
        function it(t, e, n, i) {
            this.h = +t,
            this.s = +e,
            this.l = +n,
            this.opacity = +i
        }
        function rt(t, e, n, i, r) {
            var a = t * t
              , o = a * t;
            return ((1 - 3 * t + 3 * a - o) * e + (4 - 6 * a + 3 * o) * n + (1 + 3 * t + 3 * a - 3 * o) * i + o * r) / 6
        }
        i(it, nt, r(a, {
            brighter: function(t) {
                return t = null == t ? 1 / .7 : Math.pow(1 / .7, t),
                new it(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                new it(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * k
                  , e = +this.l
                  , n = isNaN(this.s) ? 0 : this.s * e * (1 - e)
                  , i = Math.cos(t)
                  , r = Math.sin(t);
                return new _(255 * (e + n * (G * i + Z * r)),255 * (e + n * (Q * i + $ * r)),255 * (e + n * (K * i)),this.opacity)
            }
        }));
        var at = function(t) {
            var e = t.length - 1;
            return function(n) {
                var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1,
                e - 1) : Math.floor(n * e)
                  , r = t[i]
                  , a = t[i + 1]
                  , o = i > 0 ? t[i - 1] : 2 * r - a
                  , s = i < e - 1 ? t[i + 2] : 2 * a - r;
                return rt((n - i / e) * e, o, r, a, s)
            }
        }
          , ot = function(t) {
            var e = t.length;
            return function(n) {
                var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e)
                  , r = t[(i + e - 1) % e]
                  , a = t[i % e]
                  , o = t[(i + 1) % e]
                  , s = t[(i + 2) % e];
                return rt((n - i / e) * e, r, a, o, s)
            }
        }
          , st = function(t) {
            return function() {
                return t
            }
        };
        function ut(t, e) {
            return function(n) {
                return t + n * e
            }
        }
        function ht(t, e) {
            var n = e - t;
            return n ? ut(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : st(isNaN(t) ? e : t)
        }
        function ct(t) {
            return 1 == (t = +t) ? lt : function(e, n) {
                return n - e ? function(t, e, n) {
                    return t = Math.pow(t, n),
                    e = Math.pow(e, n) - t,
                    n = 1 / n,
                    function(i) {
                        return Math.pow(t + i * e, n)
                    }
                }(e, n, t) : st(isNaN(e) ? n : e)
            }
        }
        function lt(t, e) {
            var n = e - t;
            return n ? ut(t, n) : st(isNaN(t) ? e : t)
        }
        var ft = function t(e) {
            var n = ct(e);
            function i(t, e) {
                var i = n((t = w(t)).r, (e = w(e)).r)
                  , r = n(t.g, e.g)
                  , a = n(t.b, e.b)
                  , o = lt(t.opacity, e.opacity);
                return function(e) {
                    return t.r = i(e),
                    t.g = r(e),
                    t.b = a(e),
                    t.opacity = o(e),
                    t + ""
                }
            }
            return i.gamma = t,
            i
        }(1);
        function dt(t) {
            return function(e) {
                var n, i, r = e.length, a = new Array(r), o = new Array(r), s = new Array(r);
                for (n = 0; n < r; ++n)
                    i = w(e[n]),
                    a[n] = i.r || 0,
                    o[n] = i.g || 0,
                    s[n] = i.b || 0;
                return a = t(a),
                o = t(o),
                s = t(s),
                i.opacity = 1,
                function(t) {
                    return i.r = a(t),
                    i.g = o(t),
                    i.b = s(t),
                    i + ""
                }
            }
        }
        var gt = dt(at)
          , pt = dt(ot)
          , vt = function(t, e) {
            var n, i = e ? e.length : 0, r = t ? Math.min(i, t.length) : 0, a = new Array(r), o = new Array(i);
            for (n = 0; n < r; ++n)
                a[n] = Ct(t[n], e[n]);
            for (; n < i; ++n)
                o[n] = e[n];
            return function(t) {
                for (n = 0; n < r; ++n)
                    o[n] = a[n](t);
                return o
            }
        }
          , mt = function(t, e) {
            var n = new Date;
            return e -= t = +t,
            function(i) {
                return n.setTime(t + e * i),
                n
            }
        }
          , yt = function(t, e) {
            return e -= t = +t,
            function(n) {
                return t + e * n
            }
        }
          , xt = function(t, e) {
            var n, i = {}, r = {};
            for (n in null !== t && "object" == typeof t || (t = {}),
            null !== e && "object" == typeof e || (e = {}),
            e)
                n in t ? i[n] = Ct(t[n], e[n]) : r[n] = e[n];
            return function(t) {
                for (n in i)
                    r[n] = i[n](t);
                return r
            }
        }
          , bt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
          , Mt = new RegExp(bt.source,"g");
        var wt, _t, Pt, St, At = function(t, e) {
            var n, i, r, a = bt.lastIndex = Mt.lastIndex = 0, o = -1, s = [], u = [];
            for (t += "",
            e += ""; (n = bt.exec(t)) && (i = Mt.exec(e)); )
                (r = i.index) > a && (r = e.slice(a, r),
                s[o] ? s[o] += r : s[++o] = r),
                (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null,
                u.push({
                    i: o,
                    x: yt(n, i)
                })),
                a = Mt.lastIndex;
            return a < e.length && (r = e.slice(a),
            s[o] ? s[o] += r : s[++o] = r),
            s.length < 2 ? u[0] ? function(t) {
                return function(e) {
                    return t(e) + ""
                }
            }(u[0].x) : function(t) {
                return function() {
                    return t
                }
            }(e) : (e = u.length,
            function(t) {
                for (var n, i = 0; i < e; ++i)
                    s[(n = u[i]).i] = n.x(t);
                return s.join("")
            }
            )
        }, Ct = function(t, e) {
            var n, i = typeof e;
            return null == e || "boolean" === i ? st(e) : ("number" === i ? yt : "string" === i ? (n = y(e)) ? (e = n,
            ft) : At : e instanceof y ? ft : e instanceof Date ? mt : Array.isArray(e) ? vt : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? xt : yt)(t, e)
        }, It = function(t, e) {
            return e -= t = +t,
            function(n) {
                return Math.round(t + e * n)
            }
        }, kt = 180 / Math.PI, Tt = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        }, Et = function(t, e, n, i, r, a) {
            var o, s, u;
            return (o = Math.sqrt(t * t + e * e)) && (t /= o,
            e /= o),
            (u = t * n + e * i) && (n -= t * u,
            i -= e * u),
            (s = Math.sqrt(n * n + i * i)) && (n /= s,
            i /= s,
            u /= s),
            t * i < e * n && (t = -t,
            e = -e,
            u = -u,
            o = -o),
            {
                translateX: r,
                translateY: a,
                rotate: Math.atan2(e, t) * kt,
                skewX: Math.atan(u) * kt,
                scaleX: o,
                scaleY: s
            }
        };
        function Bt(t, e, n, i) {
            function r(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(a, o) {
                var s = []
                  , u = [];
                return a = t(a),
                o = t(o),
                function(t, i, r, a, o, s) {
                    if (t !== r || i !== a) {
                        var u = o.push("translate(", null, e, null, n);
                        s.push({
                            i: u - 4,
                            x: yt(t, r)
                        }, {
                            i: u - 2,
                            x: yt(i, a)
                        })
                    } else
                        (r || a) && o.push("translate(" + r + e + a + n)
                }(a.translateX, a.translateY, o.translateX, o.translateY, s, u),
                function(t, e, n, a) {
                    t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360),
                    a.push({
                        i: n.push(r(n) + "rotate(", null, i) - 2,
                        x: yt(t, e)
                    })) : e && n.push(r(n) + "rotate(" + e + i)
                }(a.rotate, o.rotate, s, u),
                function(t, e, n, a) {
                    t !== e ? a.push({
                        i: n.push(r(n) + "skewX(", null, i) - 2,
                        x: yt(t, e)
                    }) : e && n.push(r(n) + "skewX(" + e + i)
                }(a.skewX, o.skewX, s, u),
                function(t, e, n, i, a, o) {
                    if (t !== n || e !== i) {
                        var s = a.push(r(a) + "scale(", null, ",", null, ")");
                        o.push({
                            i: s - 4,
                            x: yt(t, n)
                        }, {
                            i: s - 2,
                            x: yt(e, i)
                        })
                    } else
                        1 === n && 1 === i || a.push(r(a) + "scale(" + n + "," + i + ")")
                }(a.scaleX, a.scaleY, o.scaleX, o.scaleY, s, u),
                a = o = null,
                function(t) {
                    for (var e, n = -1, i = u.length; ++n < i; )
                        s[(e = u[n]).i] = e.x(t);
                    return s.join("")
                }
            }
        }
        var Nt = Bt(function(t) {
            return "none" === t ? Tt : (wt || (wt = document.createElement("DIV"),
            _t = document.documentElement,
            Pt = document.defaultView),
            wt.style.transform = t,
            t = Pt.getComputedStyle(_t.appendChild(wt), null).getPropertyValue("transform"),
            _t.removeChild(wt),
            t = t.slice(7, -1).split(","),
            Et(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }, "px, ", "px)", "deg)")
          , Lt = Bt(function(t) {
            return null == t ? Tt : (St || (St = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            St.setAttribute("transform", t),
            (t = St.transform.baseVal.consolidate()) ? (t = t.matrix,
            Et(t.a, t.b, t.c, t.d, t.e, t.f)) : Tt)
        }, ", ", ")", ")")
          , Ot = Math.SQRT2;
        function Dt(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var Yt = function(t, e) {
            var n, i, r = t[0], a = t[1], o = t[2], s = e[0], u = e[1], h = e[2], c = s - r, l = u - a, f = c * c + l * l;
            if (f < 1e-12)
                i = Math.log(h / o) / Ot,
                n = function(t) {
                    return [r + t * c, a + t * l, o * Math.exp(Ot * t * i)]
                }
                ;
            else {
                var d = Math.sqrt(f)
                  , g = (h * h - o * o + 4 * f) / (2 * o * 2 * d)
                  , p = (h * h - o * o - 4 * f) / (2 * h * 2 * d)
                  , v = Math.log(Math.sqrt(g * g + 1) - g)
                  , m = Math.log(Math.sqrt(p * p + 1) - p);
                i = (m - v) / Ot,
                n = function(t) {
                    var e = t * i
                      , n = Dt(v)
                      , s = o / (2 * d) * (n * function(t) {
                        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                    }(Ot * e + v) - function(t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2
                    }(v));
                    return [r + s * c, a + s * l, o * n / Dt(Ot * e + v)]
                }
            }
            return n.duration = 1e3 * i,
            n
        };
        function Xt(t) {
            return function(e, n) {
                var i = t((e = A(e)).h, (n = A(n)).h)
                  , r = lt(e.s, n.s)
                  , a = lt(e.l, n.l)
                  , o = lt(e.opacity, n.opacity);
                return function(t) {
                    return e.h = i(t),
                    e.s = r(t),
                    e.l = a(t),
                    e.opacity = o(t),
                    e + ""
                }
            }
        }
        var Rt = Xt(ht)
          , Ft = Xt(lt);
        function qt(t, e) {
            var n = lt((t = R(t)).l, (e = R(e)).l)
              , i = lt(t.a, e.a)
              , r = lt(t.b, e.b)
              , a = lt(t.opacity, e.opacity);
            return function(e) {
                return t.l = n(e),
                t.a = i(e),
                t.b = r(e),
                t.opacity = a(e),
                t + ""
            }
        }
        function jt(t) {
            return function(e, n) {
                var i = t((e = W(e)).h, (n = W(n)).h)
                  , r = lt(e.c, n.c)
                  , a = lt(e.l, n.l)
                  , o = lt(e.opacity, n.opacity);
                return function(t) {
                    return e.h = i(t),
                    e.c = r(t),
                    e.l = a(t),
                    e.opacity = o(t),
                    e + ""
                }
            }
        }
        var zt = jt(ht)
          , Ht = jt(lt);
        function Ut(t) {
            return function e(n) {
                function i(e, i) {
                    var r = t((e = nt(e)).h, (i = nt(i)).h)
                      , a = lt(e.s, i.s)
                      , o = lt(e.l, i.l)
                      , s = lt(e.opacity, i.opacity);
                    return function(t) {
                        return e.h = r(t),
                        e.s = a(t),
                        e.l = o(Math.pow(t, n)),
                        e.opacity = s(t),
                        e + ""
                    }
                }
                return n = +n,
                i.gamma = e,
                i
            }(1)
        }
        var Wt = Ut(ht)
          , Vt = Ut(lt)
          , Gt = function(t, e) {
            for (var n = new Array(e), i = 0; i < e; ++i)
                n[i] = t(i / (e - 1));
            return n
        };
        n.d(e, "interpolate", function() {
            return Ct
        }),
        n.d(e, "interpolateArray", function() {
            return vt
        }),
        n.d(e, "interpolateBasis", function() {
            return at
        }),
        n.d(e, "interpolateBasisClosed", function() {
            return ot
        }),
        n.d(e, "interpolateDate", function() {
            return mt
        }),
        n.d(e, "interpolateNumber", function() {
            return yt
        }),
        n.d(e, "interpolateObject", function() {
            return xt
        }),
        n.d(e, "interpolateRound", function() {
            return It
        }),
        n.d(e, "interpolateString", function() {
            return At
        }),
        n.d(e, "interpolateTransformCss", function() {
            return Nt
        }),
        n.d(e, "interpolateTransformSvg", function() {
            return Lt
        }),
        n.d(e, "interpolateZoom", function() {
            return Yt
        }),
        n.d(e, "interpolateRgb", function() {
            return ft
        }),
        n.d(e, "interpolateRgbBasis", function() {
            return gt
        }),
        n.d(e, "interpolateRgbBasisClosed", function() {
            return pt
        }),
        n.d(e, "interpolateHsl", function() {
            return Rt
        }),
        n.d(e, "interpolateHslLong", function() {
            return Ft
        }),
        n.d(e, "interpolateLab", function() {
            return qt
        }),
        n.d(e, "interpolateHcl", function() {
            return zt
        }),
        n.d(e, "interpolateHclLong", function() {
            return Ht
        }),
        n.d(e, "interpolateCubehelix", function() {
            return Wt
        }),
        n.d(e, "interpolateCubehelixLong", function() {
            return Vt
        }),
        n.d(e, "quantize", function() {
            return Gt
        })
    }
    , function(t, e, n) {
        var i = n(1);
        function r(t, e) {
            var n = -1;
            return i.each(t, function(t, i) {
                if (e.id === t.id)
                    return n = i,
                    !1
            }),
            n
        }
        var a = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            !function(t, e) {
                t.prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e
            }(e, t);
            var n = e.prototype;
            return n.render = function() {
                var t = this.get("data");
                if (!t)
                    throw new Error("data must be defined first");
                this.clear(),
                this.emit("beforerender");
                var e = this.get("autoPaint");
                this.setAutoPaint(!1);
                var n = this._refreshLayout(t)
                  , i = this._addChild(n, null);
                this.set("root", i),
                this.paint(),
                this.setAutoPaint(e),
                this.emit("afterrender")
            }
            ,
            n.addChild = function(t, e) {
                i.isString(e) || (e = e.get("id"));
                var n = this.findDataById(e);
                n.children || (n.children = []),
                n.children.push(t),
                this.changeData(this.get("data"))
            }
            ,
            n._addChild = function(t, e) {
                var n = this
                  , r = n.addItem("node", t);
                return e && (r.set("parent", e),
                n.addItem("edge", {
                    source: e,
                    target: r,
                    id: e.get("id") + ":" + r.get("id")
                })),
                i.each(t.children, function(t) {
                    n._addChild(t, r)
                }),
                r
            }
            ,
            n.changeData = function(t) {
                if (!this.get("data"))
                    return this.data(t),
                    void this.render();
                var e = this.get("autoPaint");
                this.setAutoPaint(!1),
                t && this.data(t);
                var n = this._refreshLayout();
                this._updateChild(n, null),
                this.paint(),
                this.setAutoPaint(e)
            }
            ,
            n.updateChild = function(t, e) {
                if (e && (e = this.findDataById(e).get("model")),
                e) {
                    if (this.findById(t.id)) {
                        var n = r(e.children, t);
                        e.children[n] = t
                    } else
                        e.children || (e.children = []),
                        e.children.push(t);
                    this.changeData()
                } else
                    this.changeData(t)
            }
            ,
            n._updateChild = function(t, e) {
                var n = this
                  , a = n.findById(t.id);
                a ? (i.each(t.children, function(t) {
                    n._updateChild(t, a)
                }),
                i.each(a.get("model").children, function(e) {
                    -1 === r(t.children, e) && n._removeChild(e.id)
                }),
                n.updateItem(a, t)) : n._addChild(t, e)
            }
            ,
            n.removeChild = function(t) {
                var e = this.findById(t);
                if (e) {
                    var n = e.get("parent");
                    if (n && !n.destroyed) {
                        var i = this.findDataById(n.get("id")).children
                          , a = r(i, e.get("model"));
                        i.splice(a, 1)
                    }
                    this._removeChild(t),
                    this.changeData()
                }
            }
            ,
            n._removeChild = function(t) {
                var e = this
                  , n = e.findById(t);
                n && (i.each(n.get("model").children, function(t) {
                    e._removeChild(t.id)
                }),
                e.removeItem(n))
            }
            ,
            n.save = function() {
                return this.get("data")
            }
            ,
            n._refreshLayout = function() {
                var t = this.get("data")
                  , e = this.get("layout");
                if (e || t.x && t.y)
                    return e && (t = e(t)),
                    t;
                console.warn("tree graph accepts either a layout method or calculated data")
            }
            ,
            n.findDataById = function(t, e) {
                var n = this;
                if (e || (e = n.get("data")),
                t === e.id)
                    return e;
                var r = null;
                return i.each(e.children, function(e) {
                    return e.id === t ? (r = e,
                    !1) : !(r = n.findDataById(t, e)) && void 0
                }),
                r
            }
            ,
            n.changeLayout = function(t) {
                if (this.set("layout", t),
                t) {
                    var e = this.get("autoPaint");
                    this.setAutoPaint(!1);
                    var n = this._refreshLayout();
                    this._updateChild(n, null),
                    this.fitView(),
                    this.paint(),
                    this.setAutoPaint(e)
                }
            }
            ,
            n.layoutAnimate = function(t, e, n, r, a, o) {
                void 0 === n && (n = 500),
                void 0 === r && (r = "easeLinear"),
                void 0 === o && (o = 0);
                var s = this;
                s.emit("layoutanimatestart", {
                    data: t
                });
                var u = s.get("autoPaint");
                s.setAutoPaint(!1),
                this.get("canvas").animate({
                    onFrame: function(n) {
                        i.traverseTree(t, function(r) {
                            var a = s.findById(r.id)
                              , o = a.get("origin")
                              , u = a.get("model");
                            if (o || (o = {
                                x: u.x,
                                y: u.y,
                                style: u.style
                            },
                            a.set("origin", o)),
                            e) {
                                var h = e(a, n, o, t);
                                a.set("model", i.mix(u, h))
                            } else
                                u.x = o.x + (t.x - o.x) * n,
                                u.y = o.y + (t.y - o.y) * n
                        }),
                        s.refreshPositions()
                    }
                }, n, r, function() {
                    s.setAutoPaint(u),
                    s.emit("layoutanimateend", {
                        data: t
                    }),
                    a && a(),
                    i.each(s.get("nodes"), function(t) {
                        t.set("origin", null)
                    })
                }, o)
            }
            ,
            n.stopLayoutAnimate = function() {
                this.get("canvas").stopAnimate(),
                this.emit("layoutanimateend", {
                    data: this.get("data")
                }),
                this.layoutAnimating = !1
            }
            ,
            n.isLayoutAnimating = function() {
                return this.layoutAnimating
            }
            ,
            e
        }(n(41));
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(1)
          , r = {
            source: "start",
            target: "end"
        }
          , a = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            !function(t, e) {
                t.prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e
            }(e, t);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {
                    type: "edge",
                    sourceNode: null,
                    targetNode: null,
                    startPoint: null,
                    endPoint: null,
                    linkCenter: !1
                }
            }
            ,
            n.init = function() {
                t.prototype.init.call(this),
                this.setSource(this.get("source")),
                this.setTarget(this.get("target"))
            }
            ,
            n.setSource = function(t) {
                this._setEnd("source", t),
                this.set("source", t)
            }
            ,
            n.setTarget = function(t) {
                this._setEnd("target", t),
                this.set("target", t)
            }
            ,
            n.getSource = function() {
                return this.get("source")
            }
            ,
            n.getTarget = function() {
                return this.get("target")
            }
            ,
            n._setEnd = function(t, e) {
                var n = r[t] + "Point"
                  , a = t + "Node"
                  , o = this.get(a);
                o && o.removeEdge(this),
                i.isPlainObject(e) ? (this.set(n, e),
                this.set(a, null)) : (e.addEdge(this),
                this.set(a, e),
                this.set(n, null))
            }
            ,
            n._getLinkPoint = function(t, e, n) {
                var a = r[t] + "Point"
                  , o = t + "Node"
                  , s = this.get(a);
                if (!s) {
                    var u = this.get(o)
                      , h = t + "Anchor"
                      , c = this._getPrePoint(t, n)
                      , l = e[h];
                    i.isNil(l) || (s = u.getLinkPointByAnchor(l)),
                    s = s || u.getLinkPoint(c)
                }
                return s
            }
            ,
            n._getPrePoint = function(t, e) {
                if (e && e.length)
                    return e["source" === t ? 0 : e.length - 1];
                var n = "source" === t ? "target" : "source";
                return this._getEndPoint(n)
            }
            ,
            n._getControlPointsByCenter = function(t) {
                var e = this._getEndPoint("source")
                  , n = this._getEndPoint("target");
                return this.get("shapeFactory").getControlPoints(t.shape, {
                    startPoint: e,
                    endPoint: n
                })
            }
            ,
            n._getEndPoint = function(t) {
                var e = t + "Node"
                  , n = r[t] + "Point"
                  , i = this.get(e);
                return i ? i.get("model") : this.get(n)
            }
            ,
            n._getEndCenter = function(t) {
                var e = t + "Node"
                  , n = r[t] + "Point"
                  , i = this.get(e);
                if (i) {
                    var a = i.getBBox();
                    return {
                        x: a.centerX,
                        y: a.centerY
                    }
                }
                return this.get(n)
            }
            ,
            n.getShapeCfg = function(e) {
                var n = this.get("linkCenter")
                  , i = t.prototype.getShapeCfg.call(this, e);
                if (n)
                    i.startPoint = this._getEndCenter("source"),
                    i.endPoint = this._getEndCenter("target");
                else {
                    var r = i.controlPoints || this._getControlPointsByCenter(i);
                    i.startPoint = this._getLinkPoint("source", e, r),
                    i.endPoint = this._getLinkPoint("target", e, r)
                }
                return i.sourceNode = this.get("sourceNode"),
                i.targetNode = this.get("targetNode"),
                i
            }
            ,
            n.getModel = function() {
                var t = this.get("model")
                  , e = i.mix({}, t)
                  , n = this.get("sourceNode")
                  , r = this.get("targetNode");
                return e.source = n ? n.get("id") : this.get("startPoint"),
                e.target = r ? r.get("id") : this.get("endPoint"),
                e
            }
            ,
            n.destroy = function() {
                var e = this.get("sourceNode")
                  , n = this.get("targetNode");
                e && !e.destroyed && e.removeEdge(this),
                n && !n.destroyed && n.removeEdge(this),
                t.prototype.destroy.call(this)
            }
            ,
            e
        }(n(40));
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(1);
        function r(t, e) {
            return (e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y)
        }
        var a = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            !function(t, e) {
                t.prototype = Object.create(e.prototype),
                t.prototype.constructor = t,
                t.__proto__ = e
            }(e, t);
            var n = e.prototype;
            return n.getDefaultCfg = function() {
                return {
                    type: "node",
                    anchors: [],
                    edges: [],
                    status: []
                }
            }
            ,
            n.getEdges = function() {
                return this.get("edges")
            }
            ,
            n.getInEdges = function() {
                var t = this;
                return this.get("edges").filter(function(e) {
                    return e.get("target") === t
                })
            }
            ,
            n.getOutEdges = function() {
                var t = this;
                return this.get("edges").filter(function(e) {
                    return e.get("source") === t
                })
            }
            ,
            n.getLinkPointByAnchor = function(t) {
                return this.getAnchorPoints()[t]
            }
            ,
            n.getLinkPoint = function(t) {
                var e, n = this.get("keyShape").get("type"), a = this.getBBox(), o = a.centerX, s = a.centerY, u = this.getAnchorPoints();
                switch (n) {
                case "circle":
                    e = i.getCircleIntersectByPoint({
                        x: o,
                        y: s,
                        r: a.width / 2
                    }, t);
                    break;
                case "ellipse":
                    e = i.getEllispeIntersectByPoint({
                        x: o,
                        y: s,
                        rx: a.width / 2,
                        ry: a.height / 2
                    }, t);
                    break;
                default:
                    e = i.getRectIntersectByPoint(a, t)
                }
                var h = e;
                return u.length && (h || (h = t),
                h = function(t, e) {
                    for (var n = t[0], i = r(t[0], e), a = 0; a < t.length; a++) {
                        var o = t[a]
                          , s = r(o, e);
                        s < i && (n = o,
                        i = s)
                    }
                    return n
                }(u, h)),
                h || (h = {
                    x: o,
                    y: s
                }),
                h
            }
            ,
            n.addEdge = function(t) {
                this.get("edges").push(t)
            }
            ,
            n.removeEdge = function(t) {
                var e = this.getEdges()
                  , n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            }
            ,
            n.updatePosition = function(e) {
                t.prototype.updatePosition.call(this, e),
                this.set("anchorPointsCache", null)
            }
            ,
            n.afterUpdate = function() {
                this.set("anchorPointsCache", null)
            }
            ,
            n.getAnchorPoints = function() {
                var t = this.get("anchorPointsCache");
                if (!t) {
                    t = [];
                    var e = this.get("shapeFactory")
                      , n = this.getBBox()
                      , r = this.get("model")
                      , a = this.getShapeCfg(r)
                      , o = e.getAnchorPoints(r.shape, a) || [];
                    i.each(o, function(e, r) {
                        var a = i.mix({
                            x: n.minX + e[0] * n.width,
                            y: n.minY + e[1] * n.height
                        }, e[2], {
                            index: r
                        });
                        t.push(a)
                    }),
                    this.set("anchorPointsCache", t)
                }
                return t
            }
            ,
            e
        }(n(40));
        t.exports = a
    }
    , function(t, e, n) {
        t.exports = {
            Node: n(79),
            Edge: n(78)
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(80)
          , a = Object.hasOwnProperty
          , o = function() {
            function t(t) {
                this.graph = t
            }
            var e = t.prototype;
            return e.addItem = function(t, e) {
                var n, o = this.graph, s = o.get(t + "Group") || o.get("group"), u = i.upperFirst(t), h = o.get(t + "Style"), c = o.get("default" + u);
                if (c && i.each(c, function(t, n) {
                    a.call(e, n) || (i.isObject(t) ? e[n] = i.clone(t) : e[n] = c[n])
                }),
                "edge" === t) {
                    var l = e.source
                      , f = e.target;
                    if (l && i.isString(l) && (l = o.findById(l)),
                    f && i.isString(f) && (f = o.findById(f)),
                    !l || !f)
                        return void console.warn("The source or target node of edge " + e.id + " does not exist!");
                    n = new r[u]({
                        model: e,
                        source: l,
                        target: f,
                        styles: h,
                        linkCenter: o.get("linkCenter"),
                        group: s.addGroup()
                    })
                } else
                    n = new r[u]({
                        model: e,
                        styles: h,
                        group: s.addGroup()
                    });
                return o.get(t + "s").push(n),
                o.get("itemMap")[n.get("id")] = n,
                o.autoPaint(),
                o.emit("aftereadditem", {
                    type: t,
                    model: e
                }),
                n
            }
            ,
            e.updateItem = function(t, e) {
                var n = this.graph;
                if (i.isString(t) && (t = n.findById(t)),
                t && !t.destroyed) {
                    if (n.emit("beforeitemupdate", {
                        item: t,
                        cfg: e
                    }),
                    "edge" === t.getType()) {
                        if (e.source) {
                            var r = e.source;
                            i.isString(r) && (r = n.findById(r)),
                            t.setSource(r)
                        }
                        if (e.target) {
                            var a = e.target;
                            i.isString(a) && (a = n.findById(a)),
                            t.setTarget(a)
                        }
                    }
                    if (t.update(e),
                    "node" === t.getType()) {
                        var o = n.get("autoPaint");
                        n.setAutoPaint(!1),
                        i.each(t.getEdges(), function(t) {
                            n.refreshItem(t)
                        }),
                        n.setAutoPaint(o)
                    }
                    n.autoPaint(),
                    n.emit("afteritemupdate", {
                        item: t,
                        cfg: e
                    })
                }
            }
            ,
            e.removeItem = function(t) {
                var e = this.graph;
                if (i.isString(t) && (t = e.findById(t)),
                t && !t.destroyed) {
                    e.emit("beforeremoveitem", {
                        item: t
                    });
                    var n = t.getType()
                      , r = e.get(t.getType() + "s")
                      , a = r.indexOf(t);
                    if (r.splice(a, 1),
                    delete e.get("itemMap")[t.get("id")],
                    "node" === n)
                        for (var o = t.getEdges(), s = o.length; s >= 0; s--)
                            e.removeItem(o[s]);
                    t.destroy(),
                    e.autoPaint(),
                    e.emit("afterremoveitem", {
                        item: t
                    })
                }
            }
            ,
            e.setItemState = function(t, e, n) {
                var r = this.graph;
                i.isString(t) && (t = r.findById(t)),
                t.hasState(e) !== n && (r.emit("beforeitemstatechange", {
                    item: t,
                    state: e,
                    enabled: n
                }),
                t.setState(e, n),
                r.autoPaint(),
                r.emit("afteritemstatechange", {
                    item: t,
                    state: e,
                    enabled: n
                }))
            }
            ,
            e.clearItemStates = function(t, e) {
                var n = this.graph;
                i.isString(t) && (t = n.findById(t)),
                n.emit("beforeitemstatesclear", {
                    item: t,
                    states: e
                }),
                t.clearStates(e),
                n.autoPaint(),
                n.emit("afteritemstatesclear", {
                    item: t,
                    states: e
                })
            }
            ,
            e.refreshItem = function(t) {
                var e = this.graph;
                i.isString(t) && (t = e.findById(t)),
                e.emit("beforeitemrefresh", {
                    item: t
                }),
                t.refresh(),
                e.autoPaint(),
                e.emit("afteritemrefresh", {
                    item: t
                })
            }
            ,
            e.changeItemVisibility = function(t, e) {
                var n = this
                  , r = n.graph;
                if (i.isString(t) && (t = r.findById(t)),
                r.emit("beforeitemvisibilitychange", {
                    item: t,
                    visible: e
                }),
                t.changeVisibility(e),
                "node" === t.getType()) {
                    var a = r.get("autoPaint");
                    r.setAutoPaint(!1),
                    i.each(t.getEdges(), function(t) {
                        (!e || t.get("source").isVisible() && t.get("target").isVisible()) && n.changeItemVisibility(t, e)
                    }),
                    r.setAutoPaint(a)
                }
                r.autoPaint(),
                r.emit("afteritemvisibilitychange", {
                    item: t,
                    visible: e
                })
            }
            ,
            e.destroy = function() {
                this.graph = null,
                this.destroyed = !0
            }
            ,
            t
        }();
        t.exports = o
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(43);
        function a(t, e) {
            return i.each(e, function(e) {
                t.indexOf(e) < 0 && (i.isString(e) && (e = {
                    type: e
                }),
                t.push(e))
            }),
            t
        }
        function o(t, e) {
            var n = [];
            return t.forEach(function(t) {
                e.indexOf(t.type) < 0 && n.push(t)
            }),
            n
        }
        var s = function() {
            function t(t) {
                this.graph = t,
                this.modes = t.get("modes") || {
                    default: []
                },
                this._formatModes(),
                this.mode = t.get("defaultMode") || "default",
                this.currentBehaves = [],
                this.setMode(this.mode)
            }
            var e = t.prototype;
            return e._formatModes = function() {
                var t = this.modes;
                i.each(t, function(t) {
                    i.each(t, function(e, n) {
                        i.isString(e) && (t[n] = {
                            type: e
                        })
                    })
                })
            }
            ,
            e.setMode = function(t) {
                var e = this.modes
                  , n = this.graph;
                if (e[t])
                    return n.emit("beforemodechange", {
                        mode: t
                    }),
                    i.each(this.currentBehaves, function(t) {
                        t.unbind(n)
                    }),
                    this._setBehaviors(t),
                    n.emit("aftermodechange", {
                        mode: t
                    }),
                    this.mode = t,
                    this
            }
            ,
            e.manipulateBehaviors = function(t, e, n) {
                var r = this;
                return i.isArray(t) || (t = [t]),
                i.isArray(e) ? (i.each(e, function(e) {
                    r.modes[e] ? r.modes[e] = n ? a(r.modes[e], t) : o(r.modes[e], t) : n && (r.modes[e] = [].concat(t))
                }),
                this) : (e || (e = this.mode),
                r.modes[e] = n ? a(r.modes[e], t) : o(r.modes[e], t),
                r.setMode(this.mode),
                this)
            }
            ,
            e._setBehaviors = function(t) {
                var e, n = this.graph, a = this.modes[t], o = [];
                i.each(a, function(t) {
                    r.getBehavior(t.type) && ((e = new (r.getBehavior(t.type))(t)) && e.bind(n),
                    o.push(e))
                }),
                this.currentBehaves = o
            }
            ,
            e.destroy = function() {
                this.graph = null,
                this.modes = null,
                this.currentBehaves = null,
                this.destroyed = !0
            }
            ,
            t
        }();
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(1)
          , r = ["click", "mousedown", "mouseup", "dblclick", "contextmenu", "mouseenter", "mouseout", "mouseover", "mousemove", "mouseleave", "dragstart", "dragend", "drag", "dragenter", "dragleave", "drop"];
        var a = [1, 0, 0, 0, 1, 0, 0, 0, 1]
          , o = 9;
        var s = function() {
            function t(t) {
                this.graph = t,
                this.extendEvents = [],
                this._initEvents()
            }
            var e = t.prototype;
            return e._initEvents = function() {
                var t = this.graph.get("canvas")
                  , e = t.get("el")
                  , n = this.extendEvents
                  , a = i.wrapBehavior(this, "_onCanvasEvents")
                  , o = i.wrapBehavior(this, "_onExtendEvents")
                  , s = i.wrapBehavior(this, "_onWheelEvent");
                i.each(r, function(e) {
                    t.on(e, a)
                }),
                this.canvasHandler = a,
                n.push(i.addEventListener(e, "DOMMouseScroll", s)),
                n.push(i.addEventListener(e, "mousewheel", s)),
                window && n.push(i.addEventListener(window, "keydown", o)),
                window && n.push(i.addEventListener(window, "keyup", o))
            }
            ,
            e._onCanvasEvents = function(t) {
                var e = this.graph
                  , n = e.get("canvas")
                  , i = n.get("pixelRatio")
                  , r = t.target
                  , s = t.type;
                t.canvasX = t.x / i,
                t.canvasY = t.y / i;
                var u = {
                    x: t.canvasX,
                    y: t.canvasY
                };
                if (function(t) {
                    for (var e = 0; e < o; e++)
                        if (t[e] !== a[e])
                            return !0;
                    return !1
                }(e.get("group").getMatrix()) && (u = e.getPointByCanvas(t.canvasX, t.canvasY)),
                t.x = u.x,
                t.y = u.y,
                t.currentTarget = e,
                r === n)
                    return "mousemove" === s && this._handleMouseMove(t, "canvas"),
                    t.target = n,
                    t.item = null,
                    e.emit(s, t),
                    void e.emit("canvas:" + s, t);
                var h = function(t) {
                    for (; t && !t.get("item"); )
                        t = t.get("parent");
                    return t
                }(r);
                if (h) {
                    var c = h.get("item");
                    if (!c.destroyed) {
                        var l = c.getType();
                        t.target = r,
                        t.item = c,
                        e.emit(s, t),
                        "mouseenter" !== s && "mouseleave" !== s && "dragenter" !== s && "dragleave" !== s && (e.emit(l + ":" + s, t),
                        "dragstart" === s && (this.dragging = !0),
                        "dragend" === s && (this.dragging = !1),
                        "mousemove" === s && this._handleMouseMove(t, l))
                    }
                } else
                    e.emit(s, t)
            }
            ,
            e._onExtendEvents = function(t) {
                this.graph.emit(t.type, t)
            }
            ,
            e._onWheelEvent = function(t) {
                i.isNil(t.wheelDelta) && (t.wheelDelta = -t.detail),
                this.graph.emit("wheel", t)
            }
            ,
            e._handleMouseMove = function(t, e) {
                var n = this.graph.get("canvas")
                  , r = t.target === n ? null : t.item
                  , a = this.preItem;
                t = i.cloneEvent(t),
                a && a !== r && !a.destroyed && (t.item = a,
                this.dragging ? this._emitCustomEvent(a.getType(), "dragleave", t) : this._emitCustomEvent(a.getType(), "mouseleave", t)),
                r && a !== r && (t.item = r,
                this.dragging ? this._emitCustomEvent(e, "dragenter", t) : this._emitCustomEvent(e, "mouseenter", t)),
                this.preItem = r
            }
            ,
            e._emitCustomEvent = function(t, e, n) {
                n.type = e,
                this.graph.emit(t + ":" + e, n)
            }
            ,
            e.destroy = function() {
                var t = this.graph
                  , e = this.canvasHandler
                  , n = t.get("canvas");
                i.each(r, function(t) {
                    n.off(t, e)
                }),
                i.each(this.extendEvents, function(t) {
                    t.remove()
                })
            }
            ,
            t
        }();
        t.exports = s
    }
    , function(t, e, n) {
        var i = n(1)
          , r = function() {
            function t(t) {
                this.graph = t
            }
            var e = t.prototype;
            return e.getFormatPadding = function() {
                return i.formatPadding(this.graph.get("fitViewPadding"))
            }
            ,
            e._fitView = function() {
                var t = this.getFormatPadding()
                  , e = this.graph
                  , n = e.get("group")
                  , i = e.get("width")
                  , r = e.get("height");
                n.resetMatrix();
                var a = n.getBBox()
                  , o = this._getViewCenter()
                  , s = a.x + a.width / 2
                  , u = a.y + a.height / 2;
                e.translate(o.x - s, o.y - u);
                var h = (i - t[1] - t[3]) / a.width
                  , c = (r - t[0] - t[2]) / a.height
                  , l = h;
                h > c && (l = c),
                e.zoom(l, o)
            }
            ,
            e.focusPoint = function(t) {
                var e = this._getViewCenter()
                  , n = this.getPointByCanvas(e.x, e.y)
                  , i = this.graph.get("group").getMatrix();
                this.graph.translate((n.x - t.x) * i[0], (n.y - t.y) * i[4])
            }
            ,
            e.getPointByClient = function(t, e) {
                var n = this.graph.get("canvas")
                  , i = n.get("pixelRatio")
                  , r = n.getPointByClient(t, e);
                return this.getPointByCanvas(r.x / i, r.y / i)
            }
            ,
            e.getClientByPoint = function(t, e) {
                var n = this.graph.get("canvas")
                  , i = this.getCanvasByPoint(t, e)
                  , r = n.get("pixelRatio")
                  , a = n.getClientByPoint(i.x * r, i.y * r);
                return {
                    x: a.clientX,
                    y: a.clientY
                }
            }
            ,
            e.getPointByCanvas = function(t, e) {
                var n = this.graph.get("group").getMatrix();
                return i.invertMatrix({
                    x: t,
                    y: e
                }, n)
            }
            ,
            e.getCanvasByPoint = function(t, e) {
                var n = this.graph.get("group").getMatrix();
                return i.applyMatrix({
                    x: t,
                    y: e
                }, n)
            }
            ,
            e.focus = function(t) {
                if (i.isString(t) && (t = this.graph.findById[t]),
                t) {
                    var e = t.get("group").getMatrix();
                    this.focusPoint({
                        x: e[6],
                        y: e[7]
                    })
                }
            }
            ,
            e.changeSize = function(t, e) {
                if (!i.isNumber(t) || !i.isNumber(e))
                    throw Error("invalid canvas width & height");
                this.graph.set({
                    width: t,
                    height: e
                }),
                this.graph.get("canvas").changeSize(t, e)
            }
            ,
            e._getViewCenter = function() {
                var t = this.getFormatPadding()
                  , e = this.graph
                  , n = this.graph.get("width")
                  , i = e.get("height");
                return {
                    x: (n - t[2] - t[3]) / 2 + t[3],
                    y: (i - t[0] - t[2]) / 2 + t[0]
                }
            }
            ,
            e.destroy = function() {
                this.graph = null,
                this.destroyed = !0
            }
            ,
            t
        }();
        t.exports = r
    }
    , function(t, e, n) {
        t.exports = {
            View: n(84),
            Event: n(83),
            Mode: n(82),
            Item: n(81)
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = {
            duration: 500,
            delay: 0,
            callback: function() {},
            easing: "easeLinear"
        };
        t.exports = {
            getDefaultCfg: function() {
                return {
                    onChange: function() {},
                    animate: {}
                }
            },
            getEvents: function() {
                return {
                    "node:click": "onNodeClick"
                }
            },
            onNodeClick: function(t) {
                var e = t.item
                  , n = e.get("model").data.children;
                if (n && 0 !== n.length) {
                    var i = !e.hasState("collapsed");
                    if (this.shouldBegin(t, i) && (e.set("collapsed", i),
                    this.graph.emit("itemcollapsed", {
                        item: t.item,
                        collapsed: i
                    }),
                    this.shouldUpdate(t, i))) {
                        var r = this.graph.get("autoPaint");
                        this.graph.setAutoPaint(!1),
                        this.updateLayout(e, i),
                        this.setChildrenState(e, "collapsed", i),
                        this.graph.setAutoPaint(r)
                    }
                }
            },
            updateLayout: function(t, e) {
                var n = this.graph
                  , r = this.onChange(t, e);
                if (r)
                    if (r = "boolean" == typeof r ? n.get("data") : r,
                    n.get("layout") && (r = n.get("layout")(r)),
                    this.animate)
                        this.graph.isLayoutAnimating() && this.graph.stopLayoutAnimate(),
                        this.animateChild(r),
                        this.performAnimate();
                    else {
                        var a = n.get("autoPaint");
                        n.setAutoPaint(!1),
                        i.traverseTree(r, function(t) {
                            var e = n.findById(t.id);
                            e.get("model").x = t.x,
                            e.get("model").y = t.y
                        }),
                        n.refresh(),
                        i.traverseTree(t.get("model").data, function(i) {
                            var r = n.findById(i.id);
                            r !== t && (e ? n.hideItem(r) : n.showItem(r))
                        }),
                        n.paint(),
                        n.setAutoPaint(a)
                    }
                else if (this.animate) {
                    var o = t.get("model");
                    e ? this.collapsePosition(t, {
                        x: o.x,
                        y: o.y
                    }) : this.expandPosition(t, {
                        x: o.x,
                        y: o.y
                    }),
                    this.performAnimate()
                } else
                    e ? this.collapse(t) : this.expand(t),
                    this.graph.paint()
            },
            performAnimate: function() {
                var t = i.mix({}, r, this.animate)
                  , e = this.graph;
                e.layoutAnimate(e.get("data"), function(t, e, n) {
                    var i = t.get("toPosition");
                    if (i)
                        return {
                            x: n.x + (i.x - n.x) * e,
                            y: n.y + (i.y - n.y) * e
                        }
                }, t.duration, t.easing, function() {
                    i.each(e.get("nodes"), function(t) {
                        t.get("shouldHide") && (t.set("shouldHide", !1),
                        e.hideItem(t)),
                        t.set("toPosition", null)
                    }),
                    e.paint(),
                    t.callback()
                }, t.delay)
            },
            animateChild: function(t) {
                var e = this
                  , n = e.graph.findById(t.id)
                  , r = n.get("model")
                  , a = {
                    x: t.x,
                    y: t.y
                };
                if (i.isNil(a.x) || i.isNil(a.y)) {
                    var o = n.get("parent").get("model");
                    a.x = o.x,
                    a.y = o.y
                }
                r.x === a.x && r.y === a.y || n.set("toPosition", {
                    x: a.x,
                    y: a.y
                }),
                i.each(t.children, function(n) {
                    e.animateChild(n, t)
                }),
                n.get("collapsed") && e.collapsePosition(n, a),
                e.graph.showItem(n)
            },
            collapsePosition: function(t, e) {
                var n = this;
                i.each(t.get("model").children, function(t) {
                    var i = (t = n.graph.findById(t.id)).get("model");
                    t.get("originPosition") || t.set("originPosition", {
                        x: i.x,
                        y: i.y
                    }),
                    t.set("toPosition", {
                        x: e.x,
                        y: e.y
                    }),
                    t.set("shouldHide", !0),
                    t.get("collapsed") || n.collapsePosition(t, e)
                })
            },
            expandPosition: function(t, e) {
                var n = this
                  , r = t.get("model").children;
                i.each(r, function(t) {
                    t = n.graph.findById(t.id),
                    n.graph.showItem(t);
                    var i = t.get("originPosition");
                    t.set("toPosition", {
                        x: i.x,
                        y: i.y
                    }),
                    t.get("collapsed") || n.expandPosition(t, e)
                })
            },
            setChildrenState: function(t, e, n) {
                var r = this;
                !n && t.get("collapsed") || (r.graph.setItemState(t, e, n),
                i.each(t.get("model").children, function(t) {
                    var i = r.graph.findById(t.id);
                    r.setChildrenState(i, e, n)
                }))
            },
            expand: function(t) {
                var e = this
                  , n = e.graph;
                t.get("collapsed") ? n.showItem(t) : (n.showItem(t),
                i.each(t.get("model").children, function(t) {
                    var n = e.graph.findById(t.id);
                    e.expand(n)
                }))
            },
            collapse: function(t) {
                var e = this
                  , n = e.graph;
                n.setItemState(t, "collapsed", !0),
                i.each(t.get("model").children, function(t) {
                    var i = n.findById(t.id);
                    e.collapse(i),
                    e.graph.hideItem(i)
                })
            }
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(42);
        t.exports = i.mix({
            getDefaultCfg: function() {
                return {
                    item: "edge",
                    formatText: function(t) {
                        return "source:" + t.source + " target:" + t.target
                    }
                }
            },
            getEvents: function() {
                return {
                    "edge:mouseenter": "onMouseEnter",
                    "edge:mouseleave": "onMouseLeave",
                    "edge:mousemove": "onMouseMove"
                }
            }
        }, r)
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(42);
        t.exports = i.mix({
            getDefaultCfg: function() {
                return {
                    item: "node",
                    formatText: function(t) {
                        return t.label
                    }
                }
            },
            getEvents: function() {
                return {
                    "node:mouseenter": "onMouseEnter",
                    "node:mouseleave": "onMouseLeave",
                    "node:mousemove": "onMouseMove"
                }
            }
        }, r)
    }
    , function(t, e, n) {
        var i = n(1);
        t.exports = {
            getDefaultCfg: function() {
                return {
                    multiple: !0,
                    keyCode: 17
                }
            },
            getEvents: function() {
                return {
                    "node:click": "onClick",
                    "canvas:click": "onCanvasClick",
                    keyup: "onKeyUp",
                    keydown: "onKeyDown"
                }
            },
            onClick: function(t) {
                var e = t.item
                  , n = this.graph
                  , r = n.get("autoPaint");
                if (n.setAutoPaint(!1),
                !this.keydown || !this.multiple) {
                    var a = n.findAllByState("node", "selected");
                    i.each(a, function(t) {
                        t !== e && n.setItemState(t, "selected", !1)
                    })
                }
                e.hasState("selected") ? (this.shouldUpdate.call(this, t) && n.setItemState(e, "selected", !1),
                n.emit("nodeselectchange", {
                    target: e,
                    select: !1
                })) : (this.shouldUpdate.call(this, t) && n.setItemState(e, "selected", !0),
                n.emit("nodeselectchange", {
                    target: e,
                    select: !0
                })),
                n.setAutoPaint(r),
                n.paint()
            },
            onCanvasClick: function() {
                var t = this.graph
                  , e = t.get("autoPaint");
                t.setAutoPaint(!1);
                var n = t.findAllByState("node", "selected");
                i.each(n, function(e) {
                    t.setItemState(e, "selected", !1)
                }),
                t.paint(),
                t.setAutoPaint(e)
            },
            onKeyDown: function(t) {
                (t.keyCode || t.which) === this.keyCode ? this.keydown = !0 : this.keydown = !1
            },
            onKeyUp: function() {
                this.keydown = !1
            }
        }
    }
    , function(t, e, n) {
        function i() {
            return (i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var r = n(1).mix
          , a = n(14).delegateStyle;
        t.exports = {
            getDefaultCfg: function() {
                return {
                    updateEdge: !0,
                    delegate: !0,
                    delegateStyle: {}
                }
            },
            getEvents: function() {
                return {
                    "node:dragstart": "onDragStart",
                    "node:drag": "onDrag",
                    "node:dragend": "onDragEnd"
                }
            },
            onDragStart: function(t) {
                this.shouldBegin.call(this, t) && (this.target = t.item,
                this.origin = {
                    x: t.clientX,
                    y: t.clientY
                })
            },
            onDrag: function(t) {
                this.origin && this.get("shouldUpdate").call(this, t) && this._update(this.target, t)
            },
            onDragEnd: function(t) {
                if (this.shouldEnd.call(this, t) && this.origin) {
                    var e = t.item.get("delegateShape");
                    e && (e.remove(),
                    this.target.set("delegateShape", null)),
                    this._update(this.target, t, !0),
                    this.point = null,
                    this.origin = null
                }
            },
            _update: function(t, e, n) {
                var i = this.origin
                  , r = t.get("model");
                this.point || (this.point = {
                    x: r.x,
                    y: r.y
                });
                var a = e.clientX - i.x + this.point.x
                  , o = e.clientY - i.y + this.point.y;
                this.origin = {
                    x: e.clientX,
                    y: e.clientY
                },
                this.point = {
                    x: a,
                    y: o
                },
                !this.delegate || n ? this.get("updateEdge") ? this.graph.updateItem(t, {
                    x: a,
                    y: o
                }) : (t.updatePosition({
                    x: a,
                    y: o
                }),
                this.graph.paint()) : this._updateDelegate(t, a, o)
            },
            _updateDelegate: function(t, e, n) {
                var o = t.get("delegateShape")
                  , s = t.get("keyShape").getBBox();
                if (!o) {
                    var u = this.graph.get("group")
                      , h = r({}, a, this.delegateStyle);
                    (o = u.addShape("rect", {
                        attrs: i({
                            width: s.width,
                            height: s.height,
                            x: e - s.width / 2,
                            y: n - s.height / 2
                        }, h)
                    })).set("capture", !1),
                    t.set("delegateShape", o)
                }
                o.attr({
                    x: e - s.width / 2,
                    y: n - s.height / 2
                }),
                this.graph.paint()
            }
        }
    }
    , function(t, e) {
        t.exports = {
            getDefaultCfg: function() {
                return {
                    sensitivity: 5,
                    minZoom: .1,
                    maxZoom: 10
                }
            },
            getEvents: function() {
                return {
                    wheel: "onWheel"
                }
            },
            onWheel: function(t) {
                if (t.preventDefault(),
                this.shouldUpdate.call(this, t)) {
                    var e = this.graph
                      , n = e.get("canvas")
                      , i = n.getPointByClient(t.clientX, t.clientY)
                      , r = n.get("pixelRatio")
                      , a = this.get("sensitivity")
                      , o = e.getZoom()
                      , s = (o = t.wheelDelta > 0 ? 1 - .05 * a : 1 + .05 * a) * e.getZoom();
                    s > this.get("maxZoom") || s < this.get("minZoom") || (e.zoom(o, {
                        x: i.x / r,
                        y: i.y / r
                    }),
                    e.paint(),
                    e.emit("wheelzoom", t))
                }
            }
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = Math.abs;
        t.exports = {
            getDefaultCfg: function() {
                return {
                    direction: "both"
                }
            },
            getEvents: function() {
                return {
                    "canvas:mousedown": "onMouseDown",
                    "canvas:mousemove": "onMouseMove",
                    "canvas:mouseup": "onMouseUp",
                    "canvas:click": "onClick"
                }
            },
            updateViewport: function(t) {
                var e = this.origin
                  , n = +t.clientX
                  , i = +t.clientY;
                if (!isNaN(n) && !isNaN(i)) {
                    var r = n - e.x
                      , a = i - e.y;
                    "x" === this.get("direction") ? a = 0 : "y" === this.get("direction") && (r = 0),
                    this.origin = {
                        x: n,
                        y: i
                    },
                    this.graph.translate(r, a),
                    this.graph.paint()
                }
            },
            onMouseDown: function(t) {
                this.origin = {
                    x: t.clientX,
                    y: t.clientY
                },
                this.dragging = !1
            },
            onMouseMove: function(t) {
                t = i.cloneEvent(t);
                var e = this.graph;
                if (this.origin) {
                    if (this.origin && !this.dragging) {
                        if (r(this.origin.x - t.clientX) + r(this.origin.y - t.clientY) < 10)
                            return;
                        this.shouldBegin.call(this, t) && (t.type = "dragstart",
                        e.emit("canvas:dragstart", t),
                        this.dragging = !0)
                    }
                    this.dragging && (t.type = "drag",
                    e.emit("canvas:drag", t)),
                    this.shouldUpdate.call(this, t) && this.updateViewport(t)
                }
            },
            onMouseUp: function(t) {
                if (this.dragging) {
                    t = i.cloneEvent(t);
                    var e = this.graph;
                    this.shouldEnd.call(this, t) && this.updateViewport(t),
                    t.type = "dragend",
                    e.emit("canvas:dragend", t),
                    this.origin = null,
                    this.dragging = !1
                } else
                    this.origin = null
            },
            onClick: function() {
                this.origin = null,
                this.dragging = !1
            }
        }
    }
    , function(t, e, n) {
        var i = n(1)
          , r = {
            registerBehavior: function(t, e) {
                if (!e)
                    throw new Error("please specify handler for this behavior:" + t);
                var n = function(t) {
                    var e = this;
                    i.mix(e, e.getDefaultCfg(), t);
                    var n = e.getEvents();
                    if (n) {
                        var r = {};
                        i.each(n, function(t, n) {
                            r[n] = i.wrapBehavior(e, t)
                        }),
                        this._events = r
                    }
                };
                i.augment(n, {
                    shouldBegin: function() {
                        return !0
                    },
                    shouldUpdate: function() {
                        return !0
                    },
                    shouldEnd: function() {
                        return !0
                    },
                    getEvents: function() {},
                    bind: function(t) {
                        var e = this._events;
                        this.graph = t,
                        i.each(e, function(e, n) {
                            t.on(n, e)
                        })
                    },
                    unbind: function(t) {
                        var e = this._events;
                        i.each(e, function(e, n) {
                            t.off(n, e)
                        })
                    },
                    get: function(t) {
                        return this[t]
                    },
                    set: function(t, e) {
                        return this[t] = e,
                        this
                    },
                    getDefaultCfg: function() {}
                }, e),
                r[t] = n
            },
            hasBehavior: function(t) {
                return !!r[t]
            },
            getBehavior: function(t) {
                return r[t]
            }
        };
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(30)
          , r = n(1)
          , a = n(14)
          , o = n(44)
          , s = r.vec2;
        i.registerFactory("edge", {
            defaultShapeType: "line"
        });
        var u = r.mix({}, o, {
            itemType: "edge",
            labelPosition: "center",
            labelAutoRotate: !1,
            getPath: function(t) {
                var e = [];
                return r.each(t, function(t, n) {
                    0 === n ? e.push(["M", t.x, t.y]) : e.push(["L", t.x, t.y])
                }),
                e
            },
            getShapeStyle: function(t) {
                var e = t.color || a.defaultEdge.color
                  , n = t.size || a.defaultEdge.size
                  , i = (t = this.getPathPoints(t)).startPoint
                  , o = t.endPoint
                  , s = this.getControlPoints(t)
                  , u = [i];
                s && (u = u.concat(s)),
                u.push(o);
                var h = this.getPath(u);
                return r.mix({}, a.defaultEdge.style, {
                    stroke: e,
                    lineWidth: n,
                    path: h
                }, t.style)
            },
            getLabelStyleByPosition: function(t, e, n) {
                var i, a = e.position || this.labelPosition, o = {}, u = n.findByClassName("edge-shape");
                i = "start" === a ? 0 : "end" === a ? 1 : .5;
                var h, c, l = u.getPoint(i), f = e.refX, d = e.refY;
                if (t.startPoint.x === t.endPoint.x && t.startPoint.y === t.endPoint.y)
                    return o.x = t.startPoint.x + f ? f : 0,
                    o.y = t.endPoint.y + d ? d : 0,
                    o;
                1 === i ? (h = u.getPoint(i - .01),
                c = l) : (h = l,
                c = u.getPoint(i + .01));
                var g = r.isNil(e.autoRotate) ? this.labelAutoRotate : e.autoRotate
                  , p = [];
                if (s.normalize(p, [c.x - h.x, c.y - h.y]),
                f || d) {
                    var v = this._getOffset(f, d, p);
                    o.x = l.x + v[0],
                    o.y = l.y + v[1]
                } else
                    o.x = l.x,
                    o.y = l.y;
                var m = s.angleTo([1, 0], p)
                  , y = this._getTextAlign(a, m, g);
                return o.textAlign = y,
                g && (o.rotate = this._getAutoRotate(a, y, m)),
                o
            },
            _getOffset: function(t, e, n) {
                t = t || 0,
                e = e || 0;
                var i = [-n[1], n[0]]
                  , r = []
                  , a = []
                  , o = [];
                return s.scale(a, n, t),
                s.scale(o, i, e),
                s.add(r, a, o),
                r
            },
            _getAutoRotate: function(t, e, n) {
                return "center" === t ? n > .5 * Math.PI && n < 1.5 * Math.PI ? n - Math.PI : n : t === e ? n : n - Math.PI
            },
            _getTextAlign: function(t, e) {
                var n = "center";
                return e %= 2 * Math.PI,
                "center" !== t && (n = e >= 0 && e <= Math.PI / 2 || e > 1.5 * Math.PI && e < 2 * Math.PI ? t : function(t) {
                    var e = t;
                    return "start" === t ? e = "end" : "end" === t && (e = "start"),
                    e
                }(t)),
                n
            },
            getControlPoints: function(t) {
                return t.controlPoints
            },
            getPathPoints: function(t) {
                return t
            },
            drawShape: function(t, e) {
                var n = this.getShapeStyle(t);
                return e.addShape("path", {
                    className: "edge-shape",
                    attrs: n
                })
            }
        });
        i.registerEdge("single-line", u),
        i.registerEdge("line", {
            getControlPoints: function() {
                return []
            }
        }, "single-line"),
        i.registerEdge("polyline", {}, "single-line"),
        i.registerEdge("spline", {
            getPath: function(t) {
                return r.getSpline(t)
            }
        }, "single-line"),
        i.registerEdge("quadratic", {
            curvePosition: .5,
            curveOffset: -20,
            getControlPoints: function(t) {
                var e = t.controlPoints;
                if (!e || !e.length) {
                    var n = t.startPoint
                      , i = t.endPoint;
                    e = [r.getControlPoint(n, i, this.curvePosition, this.curveOffset)]
                }
                return e
            },
            getPath: function(t) {
                var e = [];
                return e.push(["M", t[0].x, t[0].y]),
                e.push(["Q", t[1].x, t[1].y, t[2].x, t[2].y]),
                e
            }
        }, "single-line"),
        i.registerEdge("cubic", {
            curvePosition: [.5, .5],
            curveOffset: [-20, 20],
            getControlPoints: function(t) {
                var e = t.controlPoints;
                if (!e || !e.length) {
                    var n = t.startPoint
                      , i = t.endPoint;
                    e = [r.getControlPoint(n, i, this.curvePosition[0], this.curveOffset[0]), r.getControlPoint(n, i, this.curvePosition[1], this.curveOffset[1])]
                }
                return e
            },
            getPath: function(t) {
                var e = [];
                return e.push(["M", t[0].x, t[0].y]),
                e.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]),
                e
            }
        }, "single-line"),
        i.registerEdge("cubic-vertical", {
            curvePosition: [.5, .5],
            getControlPoints: function(t) {
                var e = t.startPoint
                  , n = t.endPoint;
                return [{
                    x: e.x,
                    y: (n.y - e.y) * this.curvePosition[0] + e.y
                }, {
                    x: n.x,
                    y: (n.y - e.y) * this.curvePosition[1] + e.y
                }]
            }
        }, "cubic"),
        i.registerEdge("cubic-horizontal", {
            curvePosition: [.5, .5],
            getControlPoints: function(t) {
                var e = t.startPoint
                  , n = t.endPoint;
                return [{
                    x: (n.x - e.x) * this.curvePosition[0] + e.x,
                    y: e.y
                }, {
                    x: (n.x - e.x) * this.curvePosition[1] + e.x,
                    y: n.y
                }]
            }
        }, "cubic"),
        i.registerEdge("loop", {
            getPathPoints: function(t) {
                return r.getLoopCfgs(t)
            },
            getControlPoints: function(t) {
                return t.controlPoints
            }
        }, "cubic")
    }
    , function(t, e, n) {
        var i = n(30)
          , r = n(1)
          , a = n(14)
          , o = n(44);
        i.registerFactory("node", {
            defaultShapeType: "circle"
        });
        var s = r.mix({}, o, {
            itemType: "node",
            shapeType: "",
            labelPosition: "center",
            getSize: function(t) {
                var e = t.size || a.defaultNode.size;
                return r.isArray(e) || (e = [e, e]),
                e
            },
            getLabelStyleByPosition: function(t, e) {
                var n = e.position || this.labelPosition;
                if ("center" === n)
                    return {
                        x: 0,
                        y: 0
                    };
                var i, o = this.getSize(t), s = o[0], u = o[1], h = e.offset;
                switch (r.isNil(h) && (h = a.nodeLabel.offset),
                n) {
                case "top":
                    i = {
                        x: 0,
                        y: 0 - u / 2 - h,
                        textBaseline: "bottom"
                    };
                    break;
                case "bottom":
                    i = {
                        x: 0,
                        y: u / 2 + h,
                        textBaseline: "top"
                    };
                    break;
                case "left":
                    i = {
                        x: 0 - s / 2 - h,
                        y: 0,
                        textAlign: "right"
                    };
                    break;
                default:
                    i = {
                        x: s / 2 + h,
                        y: 0,
                        textAlign: "left"
                    }
                }
                return i
            },
            drawShape: function(t, e) {
                var n = this.shapeType
                  , i = this.getShapeStyle(t);
                return e.addShape(n, {
                    attrs: i
                })
            }
        });
        i.registerNode("single-shape", s),
        i.registerNode("circle", {
            shapeType: "circle",
            getShapeStyle: function(t) {
                var e = this.getSize(t)
                  , n = t.color || a.defaultNode.color;
                return r.mix({}, {
                    x: 0,
                    y: 0,
                    r: e[0] / 2,
                    stroke: n
                }, a.defaultNode.style, t.style)
            }
        }, "single-shape"),
        i.registerNode("ellipse", {
            shapeType: "ellipse",
            getShapeStyle: function(t) {
                var e = this.getSize(t)
                  , n = e[0] / 2
                  , i = e[1] / 2
                  , o = t.color || a.defaultNode.color;
                return r.mix({}, {
                    x: 0,
                    y: 0,
                    rx: n,
                    ry: i,
                    stroke: o
                }, a.defaultNode.style, t.style)
            }
        }, "single-shape"),
        i.registerNode("rect", {
            shapeType: "rect",
            getShapeStyle: function(t) {
                var e = this.getSize(t)
                  , n = e[0]
                  , i = e[1]
                  , o = t.color || a.defaultNode.color;
                return r.mix({}, a.defaultNode.style, {
                    x: 0 - n / 2,
                    y: 0 - i / 2,
                    width: n,
                    height: i,
                    stroke: o
                }, t.style)
            }
        }, "single-shape"),
        i.registerNode("image", {
            shapeType: "image",
            labelPosition: "bottom",
            getShapeStyle: function(t) {
                var e = this.getSize(t)
                  , n = t.img
                  , i = e[0]
                  , a = e[1];
                return r.mix({}, {
                    x: 0 - i / 2,
                    y: 0 - a / 2,
                    width: i,
                    height: a,
                    img: n
                }, t.style)
            }
        }, "single-shape")
    }
    , function(t, e, n) {
        var i = n(1)
          , r = n(28).Group;
        t.exports = i.augment(r, {
            findByClassName: function(t) {
                return this.find(function(e) {
                    return e.get("className") === t
                })
            }
        })
    }
    , function(t, e, n) {
        var i = n(45)
          , r = n(21)
          , a = n(14)
          , o = Math.sin(Math.PI / 8)
          , s = Math.cos(Math.PI / 8);
        var u = {
            getBBox: function(t, e) {
                var n = t.getBBox()
                  , r = {
                    x: n.minX,
                    y: n.minY
                }
                  , a = {
                    x: n.maxX,
                    y: n.maxY
                };
                if (e) {
                    var o = e.getMatrix();
                    r = i.applyMatrix(r, o),
                    a = i.applyMatrix(a, o)
                }
                return {
                    minX: r.x,
                    minY: r.y,
                    maxX: a.x,
                    maxY: a.y
                }
            },
            getLoopCfgs: function(t) {
                var e = t.sourceNode || t.targetNode
                  , n = e.get("group").getMatrix()
                  , i = e.getKeyShape().getBBox()
                  , u = t.loopCfg || {}
                  , h = u.dist || 2 * Math.max(i.width, i.height)
                  , c = u.position || a.loopPosition
                  , l = Math.max(i.width, i.height) / 2
                  , f = (l + h) / l
                  , d = [n[6], n[7]]
                  , g = l * o
                  , p = l * s
                  , v = [t.startPoint.x, t.startPoint.y]
                  , m = [t.endPoint.x, t.endPoint.y];
                if (v[0] === m[0] && v[1] === m[1]) {
                    switch (c) {
                    case "top":
                        v = [d[0] - g, d[1] - p],
                        m = [d[0] + g, d[1] - p];
                        break;
                    case "top-right":
                        v = [d[0] + g, d[1] - p],
                        m = [d[0] + p, d[1] - g];
                        break;
                    case "right":
                        v = [d[0] + p, d[1] - g],
                        m = [d[0] + p, d[1] + g];
                        break;
                    case "bottom-right":
                        v = [d[0] + p, d[1] + g],
                        m = [d[0] + g, d[1] + p];
                        break;
                    case "bottom":
                        v = [d[0] + g, d[1] + p],
                        m = [d[0] - g, d[1] + p];
                        break;
                    case "bottom-left":
                        v = [d[0] - g, d[1] + p],
                        m = [d[0] - p, d[1] + g];
                        break;
                    case "left":
                        v = [d[0] - p, d[1] + g],
                        m = [d[0] - p, d[1] - g];
                        break;
                    case "top-left":
                        v = [d[0] - p, d[1] - g],
                        m = [d[0] - g, d[1] - p];
                        break;
                    default:
                        v = [d[0] - g, d[1] - p],
                        m = [d[0] + g, d[1] - p]
                    }
                    if (!1 === u.clockwise) {
                        var y = [v[0], v[1]];
                        v = [m[0], m[1]],
                        m = [y[0], y[1]]
                    }
                }
                var x = [v[0] - d[0], v[1] - d[1]]
                  , b = r.vec2.scale([], x, f)
                  , M = [d[0] + b[0], d[1] + b[1]]
                  , w = [m[0] - d[0], m[1] - d[1]]
                  , _ = r.vec2.scale([], w, f)
                  , P = [d[0] + _[0], d[1] + _[1]];
                return t.shape = "cubic",
                t.startPoint = {
                    x: v[0],
                    y: v[1]
                },
                t.endPoint = {
                    x: m[0],
                    y: m[1]
                },
                t.controlPoints = [{
                    x: M[0],
                    y: M[1]
                }, {
                    x: P[0],
                    y: P[1]
                }],
                t
            },
            traverseTree: function(t, e) {
                "function" == typeof e && function t(e, n) {
                    !1 !== n(e) && r.each(e.children, function(e) {
                        t(e, n)
                    })
                }(t, e)
            },
            radialLayout: function(t, e) {
                var n = {
                    x: 1 / 0,
                    y: 1 / 0
                }
                  , i = {
                    x: -1 / 0,
                    y: -1 / 0
                }
                  , r = "x"
                  , a = "y";
                e && ["V", "TB", "BT"].indexOf(e) >= 0 && (a = "x",
                r = "y");
                var o = 0;
                this.traverseTree(t, function(t) {
                    o++,
                    t.x > i.x && (i.x = t.x),
                    t.x < n.x && (n.x = t.x),
                    t.y > i.y && (i.y = t.y),
                    t.y < n.y && (n.y = t.y)
                });
                var s = 2 * Math.PI / o
                  , u = i[a] - n[a];
                return 0 === u ? t : (this.traverseTree(t, function(t) {
                    var e = (t[a] - n[a]) / u * (2 * Math.PI - s) + s
                      , i = t[r];
                    t.x = i * Math.cos(e),
                    t.y = i * Math.sin(e)
                }),
                t)
            }
        };
        t.exports = u
    }
    , function(t, e, n) {
        var i = n(28)
          , r = n(21).vec2;
        t.exports = {
            getSpline: function(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    e.push(r.x),
                    e.push(r.y)
                }
                var a = i.PathUtil.catmullRomToBezier(e);
                return a.unshift(["M", t[0].x, t[0].y]),
                a
            },
            getControlPoint: function(t, e, n, i) {
                var a = {
                    x: (1 - n) * t.x + n * e.x,
                    y: (1 - n) * t.y + n * e.y
                }
                  , o = [];
                r.normalize(o, [e.x - t.x, e.y - t.y]);
                var s = [-o[1] * i, o[0] * i];
                return a.x += s[0],
                a.y += s[1],
                a
            }
        }
    }
    , function(t, e, n) {
        var i = n(20)
          , r = Array.prototype.splice;
        t.exports = function(t, e) {
            if (!i(t))
                return [];
            for (var n = t ? e.length : 0, a = n - 1; n--; ) {
                var o = void 0
                  , s = e[n];
                n !== a && s === o || (o = s,
                r.call(t, s, 1))
            }
            return t
        }
    }
    , function(t, e, n) {
        var i = n(20)
          , r = n(99);
        t.exports = function(t, e) {
            var n = [];
            if (!i(t))
                return n;
            for (var a = -1, o = [], s = t.length; ++a < s; ) {
                var u = t[a];
                e(u, a, t) && (n.push(u),
                o.push(a))
            }
            return r(t, o),
            n
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            if (t) {
                if (t.addEventListener)
                    return t.addEventListener(e, n, !1),
                    {
                        remove: function() {
                            t.removeEventListener(e, n, !1)
                        }
                    };
                if (t.attachEvent)
                    return t.attachEvent("on" + e, n),
                    {
                        remove: function() {
                            t.detachEvent("on" + e, n)
                        }
                    }
            }
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            var i = void 0
              , r = void 0
              , a = void 0
              , o = void 0
              , s = 0;
            n || (n = {});
            var u = function() {
                s = !1 === n.leading ? 0 : Date.now(),
                i = null,
                o = t.apply(r, a),
                i || (r = a = null)
            }
              , h = function() {
                var h = Date.now();
                s || !1 !== n.leading || (s = h);
                var c = e - (h - s);
                return r = this,
                a = arguments,
                c <= 0 || c > e ? (i && (clearTimeout(i),
                i = null),
                s = h,
                o = t.apply(r, a),
                i || (r = a = null)) : i || !1 === n.trailing || (i = setTimeout(u, c)),
                o
            };
            return h.cancel = function() {
                clearTimeout(i),
                s = 0,
                i = r = a = null
            }
            ,
            h
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            var i = void 0;
            return function() {
                var r = this
                  , a = arguments
                  , o = n && !i;
                clearTimeout(i),
                i = setTimeout(function() {
                    i = null,
                    n || t.apply(r, a)
                }, e),
                o && t.apply(r, a)
            }
        }
    }
    , function(t, e) {
        var n = {
            svg: "svg",
            circle: "circle",
            rect: "rect",
            text: "text",
            path: "path",
            foreignObject: "foreignObject",
            polygon: "polygon",
            ellipse: "ellipse",
            image: "image"
        };
        t.exports = function(t, e, i) {
            var r = i.target || i.srcElement;
            if (!n[r.tagName]) {
                for (var a = r.parentNode; a && !n[a.tagName]; )
                    a = a.parentNode;
                r = a
            }
            return this._cfg.el === r ? this : this.find(function(t) {
                return t._cfg && t._cfg.el === r
            })
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i
          , a = function() {
            function t(t) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
                e.setAttribute("patternUnits", "userSpaceOnUse");
                var n = document.createElementNS("http://www.w3.org/2000/svg", "image");
                e.appendChild(n);
                var a = i.uniqueId("pattern_");
                e.id = a,
                this.el = e,
                this.id = a,
                this.cfg = t;
                var o = r.exec(t)[2];
                n.setAttribute("href", o);
                var s = new Image;
                function u() {
                    console.log(s.width, s.height),
                    e.setAttribute("width", s.width),
                    e.setAttribute("height", s.height)
                }
                return o.match(/^data:/i) || (s.crossOrigin = "Anonymous"),
                s.src = o,
                s.complete ? u() : (s.onload = u,
                s.src = s.src),
                this
            }
            return t.prototype.match = function(t, e) {
                return this.cfg === e
            }
            ,
            t
        }();
        t.exports = a
    }
    , function(t, e, n) {
        var i = n(0)
          , r = function() {
            function t(t) {
                this.type = "clip";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
                this.el = e,
                this.id = i.uniqueId("clip_"),
                e.id = this.id;
                var n = t._cfg.el;
                return e.appendChild(n.cloneNode(!0)),
                this.cfg = t,
                this
            }
            var e = t.prototype;
            return e.match = function() {
                return !1
            }
            ,
            e.remove = function() {
                var t = this.el;
                t.parentNode.removeChild(t)
            }
            ,
            t
        }();
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(0)
          , r = function() {
            function t(t, e) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "marker")
                  , r = i.uniqueId("marker_");
                n.setAttribute("id", r);
                var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return a.setAttribute("stroke", "none"),
                a.setAttribute("fill", t.stroke || "#000"),
                n.appendChild(a),
                n.setAttribute("overflow", "visible"),
                n.setAttribute("orient", "auto-start-reverse"),
                this.el = n,
                this.child = a,
                this.id = r,
                this.cfg = t["marker-start" === e ? "startArrow" : "endArrow"],
                this.stroke = t.stroke || "#000",
                !0 === this.cfg ? this._setDefaultPath(e, a) : this._setMarker(t.lineWidth, a),
                this
            }
            var e = t.prototype;
            return e.match = function() {
                return !1
            }
            ,
            e._setDefaultPath = function(t, e) {
                var n = this.el;
                e.setAttribute("d", "M0,0 L6,3 L0,6 L3,3Z"),
                n.setAttribute("refX", 3),
                n.setAttribute("refY", 3)
            }
            ,
            e._setMarker = function(t, e) {
                var n = this.el
                  , r = this.cfg.path
                  , a = this.cfg.d;
                i.isArray(r) && (r = r.map(function(t) {
                    return t.join(" ")
                }).join("")),
                e.setAttribute("d", r),
                n.appendChild(e),
                a && n.setAttribute("refX", a / t)
            }
            ,
            e.update = function(t) {
                var e = this.child;
                e.attr ? e.attr("fill", t) : e.setAttribute("fill", t)
            }
            ,
            t
        }();
        t.exports = r
    }
    , function(t, e, n) {
        var i = n(0)
          , r = {
            shadowColor: "color",
            shadowOpacity: "opacity",
            shadowBlur: "blur",
            shadowOffsetX: "dx",
            shadowOffsetY: "dy"
        }
          , a = {
            x: "-40%",
            y: "-40%",
            width: "200%",
            height: "200%"
        }
          , o = function() {
            function t(t) {
                this.type = "filter";
                var e = document.createElementNS("http://www.w3.org/2000/svg", "filter");
                return i.each(a, function(t, n) {
                    e.setAttribute(n, t)
                }),
                this.el = e,
                this.id = i.uniqueId("filter_"),
                this.el.id = this.id,
                this.cfg = t,
                this._parseShadow(t, e),
                this
            }
            var e = t.prototype;
            return e.match = function(t, e) {
                if (this.type !== t)
                    return !1;
                var n = !0
                  , r = this.cfg;
                return i.each(Object.keys(r), function(t) {
                    if (r[t] !== e[t])
                        return n = !1,
                        !1
                }),
                n
            }
            ,
            e.update = function(t, e) {
                var n = this.cfg;
                return n[r[t]] = e,
                this._parseShadow(n, this.el),
                this
            }
            ,
            e._parseShadow = function(t, e) {
                var n = '<feDropShadow \n      dx="' + (t.dx || 0) + '" \n      dy="' + (t.dy || 0) + '" \n      stdDeviation="' + (t.blur ? t.blur / 10 : 0) + '"\n      flood-color="' + (t.color ? t.color : "#000") + '"\n      flood-opacity="' + (t.opacity ? t.opacity : 1) + '"\n      />';
                e.innerHTML = n
            }
            ,
            t
        }();
        t.exports = o
    }
    , function(t, e, n) {
        var i = n(0)
          , r = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i
          , a = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i
          , o = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
        function s(t) {
            var e = t.match(o);
            if (!e)
                return "";
            var n = "";
            return e.sort(function(t, e) {
                return t = t.split(":"),
                e = e.split(":"),
                Number(t[0]) - Number(e[0])
            }),
            i.each(e, function(t) {
                t = t.split(":"),
                n += '<stop offset="' + t[0] + '" stop-color="' + t[1] + '"></stop>'
            }),
            n
        }
        var u = function() {
            function t(t) {
                var e = null
                  , n = i.uniqueId("gradient_");
                return "l" === t.toLowerCase()[0] ? function(t, e) {
                    var n, a, o = r.exec(t), u = i.mod(i.toRadian(parseFloat(o[1])), 2 * Math.PI), h = o[2];
                    u >= 0 && u < .5 * Math.PI ? (n = {
                        x: 0,
                        y: 0
                    },
                    a = {
                        x: 1,
                        y: 1
                    }) : .5 * Math.PI <= u && u < Math.PI ? (n = {
                        x: 1,
                        y: 0
                    },
                    a = {
                        x: 0,
                        y: 1
                    }) : Math.PI <= u && u < 1.5 * Math.PI ? (n = {
                        x: 1,
                        y: 1
                    },
                    a = {
                        x: 0,
                        y: 0
                    }) : (n = {
                        x: 0,
                        y: 1
                    },
                    a = {
                        x: 1,
                        y: 0
                    });
                    var c = Math.tan(u)
                      , l = c * c
                      , f = (a.x - n.x + c * (a.y - n.y)) / (l + 1) + n.x
                      , d = c * (a.x - n.x + c * (a.y - n.y)) / (l + 1) + n.y;
                    e.setAttribute("x1", n.x),
                    e.setAttribute("y1", n.y),
                    e.setAttribute("x2", f),
                    e.setAttribute("y2", d),
                    e.innerHTML = s(h)
                }(t, e = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")) : function(t, e) {
                    var n = a.exec(t)
                      , i = parseFloat(n[1])
                      , r = parseFloat(n[2])
                      , o = parseFloat(n[3])
                      , u = n[4];
                    e.setAttribute("cx", i),
                    e.setAttribute("cy", r),
                    e.setAttribute("r", o),
                    e.innerHTML = s(u)
                }(t, e = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient")),
                e.setAttribute("id", n),
                this.el = e,
                this.id = n,
                this.cfg = t,
                this
            }
            return t.prototype.match = function(t, e) {
                return this.cfg === e
            }
            ,
            t
        }();
        t.exports = u
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(109)
          , a = n(108)
          , o = n(107)
          , s = n(106)
          , u = n(105)
          , h = function() {
            function t(t) {
                var e = document.createElementNS("http://www.w3.org/2000/svg", "defs")
                  , n = i.uniqueId("defs_");
                e.id = n,
                t.appendChild(e),
                this.children = [],
                this.defaultArrow = {},
                this.el = e,
                this.canvas = t
            }
            var e = t.prototype;
            return e.find = function(t, e) {
                for (var n = this.children, i = null, r = 0; r < n.length; r++)
                    if (n[r].match(t, e)) {
                        i = n[r].id;
                        break
                    }
                return i
            }
            ,
            e.findById = function(t) {
                for (var e = this.children, n = null, i = 0; i < e.length; i++)
                    if (e[i].id === t) {
                        n = e[i];
                        break
                    }
                return n
            }
            ,
            e.add = function(t) {
                this.children.push(t),
                t.canvas = this.canvas,
                t.parent = this
            }
            ,
            e.getDefaultArrow = function(t, e) {
                var n = t.stroke || t.strokeStyle;
                if (this.defaultArrow[n])
                    return this.defaultArrow[n].id;
                var i = new o(t,e);
                return this.defaultArrow[n] = i,
                this.el.appendChild(i.el),
                i.id
            }
            ,
            e.addGradient = function(t) {
                var e = new r(t);
                return this.el.appendChild(e.el),
                this.add(e),
                e.id
            }
            ,
            e.addArrow = function(t, e) {
                var n = new o(t,e);
                return this.el.appendChild(n.el),
                n.id
            }
            ,
            e.addShadow = function(t) {
                var e = new a(t);
                return this.el.appendChild(e.el),
                this.add(e),
                e.id
            }
            ,
            e.addPattern = function(t) {
                var e = new u(t);
                return this.el.appendChild(e.el),
                this.add(e),
                e.id
            }
            ,
            e.addClip = function(t) {
                var e = new s(t);
                return this.el.appendChild(e.el),
                this.add(e),
                e.id
            }
            ,
            t
        }();
        t.exports = h
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(19).parseRadius
          , a = n(32)
          , o = n(110)
          , s = {
            rect: "path",
            circle: "circle",
            line: "line",
            path: "path",
            marker: "path",
            text: "text",
            polygon: "polygon",
            image: "image",
            ellipse: "ellipse",
            dom: "foreignObject",
            fan: "path",
            group: "g"
        }
          , u = {
            opacity: "opacity",
            fillStyle: "fill",
            strokeOpacity: "stroke-opacity",
            fillOpacity: "fill-opacity",
            strokeStyle: "stroke",
            x: "x",
            y: "y",
            r: "r",
            width: "width",
            height: "height",
            x1: "x1",
            x2: "x2",
            y1: "y1",
            y2: "y2",
            lineCap: "stroke-linecap",
            lineJoin: "stroke-linejoin",
            lineWidth: "stroke-width",
            lineDash: "stroke-dasharray",
            lineDashOffset: "stroke-dashoffset",
            miterLimit: "stroke-miterlimit",
            font: "font",
            fontSize: "font-size",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            fontFamily: "font-family",
            startArrow: "marker-start",
            endArrow: "marker-end",
            path: "d",
            class: "class",
            id: "id",
            style: "style",
            preserveAspectRatio: "preserveAspectRatio"
        }
          , h = {
            top: "before-edge",
            middle: "central",
            bottom: "after-edge",
            alphabetic: "baseline",
            hanging: "hanging"
        }
          , c = {
            left: "left",
            start: "left",
            center: "middle",
            right: "end",
            end: "end"
        }
          , l = function() {
            function t(t) {
                if (!t)
                    return null;
                var e = i.uniqueId("canvas_")
                  , n = i.createDom('<svg id="' + e + '"></svg>');
                return t.appendChild(n),
                this.type = "svg",
                this.canvas = n,
                this.context = new o(n),
                this.toDraw = !1,
                this
            }
            var e = t.prototype;
            return e.draw = function(t) {
                var e = this;
                e.animateHandler ? e.toDraw = !0 : function n() {
                    e.animateHandler = i.requestAnimationFrame(function() {
                        e.animateHandler = void 0,
                        e.toDraw && n()
                    });
                    try {
                        e._drawChildren(t)
                    } catch (t) {
                        console.warn("error in draw canvas, detail as:"),
                        console.warn(t)
                    } finally {
                        e.toDraw = !1
                    }
                }()
            }
            ,
            e.drawSync = function(t) {
                this._drawChildren(t)
            }
            ,
            e._drawGroup = function(t, e) {
                var n = t._cfg;
                n.removed || n.destroyed || (n.tobeRemoved && (i.each(n.tobeRemoved, function(t) {
                    t.parentNode && t.parentNode.removeChild(t)
                }),
                n.tobeRemoved = []),
                this._drawShape(t, e),
                n.children && n.children.length > 0 && this._drawChildren(t))
            }
            ,
            e._drawChildren = function(t) {
                var e, n = t._cfg.children;
                if (n)
                    for (var i = 0; i < n.length; i++)
                        (e = n[i]).isGroup ? this._drawGroup(e, i) : this._drawShape(e, i)
            }
            ,
            e._drawShape = function(t, e) {
                var n = t._attrs
                  , i = t._cfg
                  , r = i.el;
                i.removed || i.destroyed ? r && r.parentNode.removeChild(i.el) : (!r && i.parent && (this._createDom(t, e),
                this._updateShape(t)),
                r = i.el,
                !1 !== i.visible ? (i.visible && r.hasAttribute("visibility") && r.removeAttribute("visibility"),
                i.hasUpdate && this._updateShape(t),
                n.clip && n.clip._cfg.hasUpdate && this._updateShape(n.clip)) : r.setAttribute("visibility", "hidden"))
            }
            ,
            e._updateShape = function(t) {
                var e = t._attrs
                  , n = t._cfg.attrs;
                if (n)
                    if (t._cfg.el || this._createDom(t),
                    "clip"in e && this._setClip(t, e.clip),
                    ("shadowOffsetX"in e || "shadowOffsetY"in e || "shadowBlur"in e || "shadowColor"in e) && this._setShadow(t),
                    "text" !== t.type) {
                        for (var r in "fan" === t.type && this._updateFan(t),
                        "marker" === t.type && t._cfg.el.setAttribute("d", this._assembleMarker(e)),
                        "rect" === t.type && t._cfg.el.setAttribute("d", this._assembleRect(e)),
                        e)
                            e[r] !== n[r] && this._setAttribute(t, r, e[r]);
                        t._cfg.attrs = i.deepMix({}, t._attrs),
                        t._cfg.hasUpdate = !1
                    } else
                        this._updateText(t)
            }
            ,
            e._setAttribute = function(t, e, n) {
                var r = t.type
                  , a = t._attrs
                  , o = t._cfg.el
                  , s = this.context;
                if ("marker" !== r && "rect" !== r || !~["x", "y", "radius", "r"].indexOf(e))
                    if (~["circle", "ellipse"].indexOf(r) && ~["x", "y"].indexOf(e))
                        o.setAttribute("c" + e, parseInt(n, 10));
                    else {
                        if ("polygon" === r && "points" === e)
                            return n && 0 !== n.length || (n = ""),
                            i.isArray(n) && (n = (n = n.map(function(t) {
                                return t[0] + "," + t[1]
                            })).join(" ")),
                            void o.setAttribute("points", n);
                        if ("path" === e && i.isArray(n))
                            o.setAttribute("d", this._formatPath(n));
                        else if ("img" !== e) {
                            if ("transform" === e)
                                return n ? void this._setTransform(t) : void o.removeAttribute("transform");
                            if ("rotate" === e)
                                return n ? void this._setTransform(t) : void o.removeAttribute("transform");
                            if ("matrix" !== e)
                                if ("fillStyle" !== e && "strokeStyle" !== e) {
                                    if ("clip" !== e)
                                        if (~e.indexOf("Arrow"))
                                            if (e = u[e],
                                            n) {
                                                var h = null;
                                                h = "boolean" == typeof n ? s.getDefaultArrow(a, e) : s.addArrow(a, e),
                                                o.setAttribute(e, "url(#" + h + ")"),
                                                t._cfg[e] = h
                                            } else
                                                t._cfg[e] = null,
                                                o.removeAttribute(e);
                                        else
                                            "html" === e && ("string" == typeof n ? o.innerHTML = n : (o.innerHTML = "",
                                            o.appendChild(n))),
                                            u[e] && o.setAttribute(u[e], n)
                                } else
                                    this._setColor(t, e, n);
                            else
                                this._setTransform(t)
                        } else
                            this._setImage(t, n)
                    }
            }
            ,
            e._createDom = function(t, e) {
                var n = s[t.type]
                  , i = t._attrs
                  , r = t._cfg.parent;
                if (!n)
                    throw new Error("the type" + t.type + "is not supported by svg");
                var a = document.createElementNS("http://www.w3.org/2000/svg", n);
                if (t._cfg.id && (a.id = t._cfg.id),
                t._cfg.el = a,
                r) {
                    var o = r._cfg.el;
                    if (void 0 === e)
                        o.appendChild(a);
                    else {
                        var u = r._cfg.el.childNodes;
                        "svg" === o.tagName && (e += 1),
                        u.length <= e ? o.appendChild(a) : o.insertBefore(a, u[e])
                    }
                }
                return t._cfg.attrs = {},
                "text" === t.type ? (a.setAttribute("paint-order", "stroke"),
                a.setAttribute("style", "stroke-linecap:butt; stroke-linejoin:miter;")) : (i.stroke || i.strokeStyle || a.setAttribute("stroke", "none"),
                i.fill || i.fillStyle || a.setAttribute("fill", "none")),
                a
            }
            ,
            e._assembleMarker = function(t) {
                var e = t.r;
                if (void 0 === t.r && (e = t.radius),
                isNaN(Number(t.x)) || isNaN(Number(t.y)) || isNaN(Number(e)))
                    return "";
                var n = "";
                return n = "function" == typeof t.symbol ? t.symbol(t.x, t.y, e) : a.Symbols[t.symbol || "circle"](t.x, t.y, e),
                i.isArray(n) && (n = n.map(function(t) {
                    return t.join(" ")
                }).join("")),
                n
            }
            ,
            e._assembleRect = function(t) {
                var e = t.x
                  , n = t.y
                  , a = t.width
                  , o = t.height
                  , s = t.radius;
                if (!s)
                    return "M " + e + "," + n + " l " + a + ",0 l 0," + o + " l" + -a + " 0 z";
                var u = r(s);
                return i.isArray(s) ? 1 === s.length ? u.r1 = u.r2 = u.r3 = u.r4 = s[0] : 2 === s.length ? (u.r1 = u.r3 = s[0],
                u.r2 = u.r4 = s[1]) : 3 === s.length ? (u.r1 = s[0],
                u.r2 = u.r4 = s[1],
                u.r3 = s[2]) : (u.r1 = s[0],
                u.r2 = s[1],
                u.r3 = s[2],
                u.r4 = s[3]) : u.r1 = u.r2 = u.r3 = u.r4 = s,
                [["M " + (e + u.r1) + "," + n], ["l " + (a - u.r1 - u.r2) + ",0"], ["a " + u.r2 + "," + u.r2 + ",0,0,1," + u.r2 + "," + u.r2], ["l 0," + (o - u.r2 - u.r3)], ["a " + u.r3 + "," + u.r3 + ",0,0,1," + -u.r3 + "," + u.r3], ["l " + (u.r3 + u.r4 - a) + ",0"], ["a " + u.r4 + "," + u.r4 + ",0,0,1," + -u.r4 + "," + -u.r4], ["l 0," + (u.r4 + u.r1 - o)], ["a " + u.r1 + "," + u.r1 + ",0,0,1," + u.r1 + "," + -u.r1], ["z"]].join(" ")
            }
            ,
            e._formatPath = function(t) {
                return ~(t = t.map(function(t) {
                    return t.join(" ")
                }).join("")).indexOf("NaN") ? "" : t
            }
            ,
            e._setTransform = function(t) {
                for (var e = t._attrs.matrix, n = t._cfg.el, i = [], r = 0; r < 9; r += 3)
                    i.push(e[r] + "," + e[r + 1]);
                -1 === (i = i.join(",")).indexOf("NaN") ? n.setAttribute("transform", "matrix(" + i + ")") : console.warn("invalid matrix:", e)
            }
            ,
            e._setImage = function(t, e) {
                var n = t._attrs
                  , r = t._cfg.el;
                if (i.isString(e))
                    r.setAttribute("href", e);
                else if (e instanceof Image)
                    n.width || (r.setAttribute("width", e.width),
                    t._attrs.width = e.width),
                    n.height || (r.setAttribute("height", e.height),
                    t._attrs.height = e.height),
                    r.setAttribute("href", e.src);
                else if (e instanceof HTMLElement && i.isString(e.nodeName) && "CANVAS" === e.nodeName.toUpperCase())
                    r.setAttribute("href", e.toDataURL());
                else if (e instanceof ImageData) {
                    var a = document.createElement("canvas");
                    a.setAttribute("width", e.width),
                    a.setAttribute("height", e.height),
                    a.getContext("2d").putImageData(e, 0, 0),
                    n.width || (r.setAttribute("width", e.width),
                    t._attrs.width = e.width),
                    n.height || (r.setAttribute("height", e.height),
                    t._attrs.height = e.height),
                    r.setAttribute("href", a.toDataURL())
                }
            }
            ,
            e._updateFan = function(t) {
                function e(t, e, n) {
                    return {
                        x: e * Math.cos(t) + n.x,
                        y: e * Math.sin(t) + n.y
                    }
                }
                var n = t._attrs
                  , r = t._cfg
                  , a = {
                    x: n.x,
                    y: n.y
                }
                  , o = []
                  , s = n.startAngle
                  , u = n.endAngle;
                i.isNumberEqual(u - s, 2 * Math.PI) && (u -= 1e-5);
                var h = e(s, n.re, a)
                  , c = e(u, n.re, a)
                  , l = u > s ? 1 : 0
                  , f = Math.abs(u - s) > Math.PI ? 1 : 0
                  , d = n.rs
                  , g = n.re
                  , p = e(s, n.rs, a)
                  , v = e(u, n.rs, a);
                n.rs > 0 ? (o.push("M " + c.x + "," + c.y),
                o.push("L " + v.x + "," + v.y),
                o.push("A " + d + "," + d + ",0," + f + "," + (1 === l ? 0 : 1) + "," + p.x + "," + p.y),
                o.push("L " + h.x + " " + h.y)) : (o.push("M " + a.x + "," + a.y),
                o.push("L " + h.x + "," + h.y)),
                o.push("A " + g + "," + g + ",0," + f + "," + l + "," + c.x + "," + c.y),
                n.rs > 0 ? o.push("L " + v.x + "," + v.y) : o.push("Z"),
                r.el.setAttribute("d", o.join(" "))
            }
            ,
            e._updateText = function(t) {
                var e = t._attrs
                  , n = t._cfg.attrs
                  , i = t._cfg.el;
                for (var r in this._setFont(t),
                e)
                    if (e[r] !== n[r]) {
                        if ("text" === r) {
                            this._setText(t, "" + e[r]);
                            continue
                        }
                        if ("fillStyle" === r || "strokeStyle" === r) {
                            this._setColor(t, r, e[r]);
                            continue
                        }
                        if ("matrix" === r) {
                            this._setTransform(t);
                            continue
                        }
                        u[r] && i.setAttribute(u[r], e[r])
                    }
                t._cfg.attrs = Object.assign({}, t._attrs),
                t._cfg.hasUpdate = !1
            }
            ,
            e._setFont = function(t) {
                var e = t.get("el")
                  , n = t._attrs
                  , i = n.fontSize;
                e.setAttribute("alignment-baseline", h[n.textBaseline] || "baseline"),
                e.setAttribute("text-anchor", c[n.textAlign] || "left"),
                i && +i < 12 && (n.matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                t.transform([["t", -n.x, -n.y], ["s", +i / 12, +i / 12], ["t", n.x, n.y]]))
            }
            ,
            e._setText = function(t, e) {
                var n = t._cfg.el
                  , r = t._attrs.textBaseline || "bottom";
                if (e)
                    if (~e.indexOf("\n")) {
                        var a = t._attrs.x
                          , o = e.split("\n")
                          , s = o.length - 1
                          , u = "";
                        i.each(o, function(t, e) {
                            0 === e ? "alphabetic" === r ? u += '<tspan x="' + a + '" dy="' + -s + 'em">' + t + "</tspan>" : "top" === r ? u += '<tspan x="' + a + '" dy="0.9em">' + t + "</tspan>" : "middle" === r ? u += '<tspan x="' + a + '" dy="' + -(s - 1) / 2 + 'em">' + t + "</tspan>" : "bottom" === r ? u += '<tspan x="' + a + '" dy="-' + (s + .3) + 'em">' + t + "</tspan>" : "hanging" === r && (u += '<tspan x="' + a + '" dy="' + (-(s - 1) - .3) + 'em">' + t + "</tspan>") : u += '<tspan x="' + a + '" dy="1em">' + t + "</tspan>"
                        }),
                        n.innerHTML = u
                    } else
                        n.innerHTML = e;
                else
                    n.innerHTML = ""
            }
            ,
            e._setClip = function(t, e) {
                var n = t._cfg.el;
                if (e)
                    if (n.hasAttribute("clip-path"))
                        e._cfg.hasUpdate && this._updateShape(e);
                    else {
                        this._createDom(e),
                        this._updateShape(e);
                        var i = this.context.addClip(e);
                        n.setAttribute("clip-path", "url(#" + i + ")")
                    }
                else
                    n.removeAttribute("clip-path")
            }
            ,
            e._setColor = function(t, e, n) {
                var i = t._cfg.el
                  , r = this.context;
                if (n)
                    if (n = n.trim(),
                    /^[r,R,L,l]{1}[\s]*\(/.test(n)) {
                        var a = r.find("gradient", n);
                        a || (a = r.addGradient(n)),
                        i.setAttribute(u[e], "url(#" + a + ")")
                    } else if (/^[p,P]{1}[\s]*\(/.test(n)) {
                        var o = r.find("pattern", n);
                        o || (o = r.addPattern(n)),
                        i.setAttribute(u[e], "url(#" + o + ")")
                    } else
                        i.setAttribute(u[e], n);
                else
                    i.setAttribute(u[e], "none")
            }
            ,
            e._setShadow = function(t) {
                var e = t._cfg.el
                  , n = t._attrs
                  , i = {
                    dx: n.shadowOffsetX,
                    dy: n.shadowOffsetY,
                    blur: n.shadowBlur,
                    color: n.shadowColor
                };
                if (i.dx || i.dy || i.blur || i.color) {
                    var r = this.context.find("filter", i);
                    r || (r = this.context.addShadow(i, this)),
                    e.setAttribute("filter", "url(#" + r + ")")
                } else
                    e.removeAttribute("filter")
            }
            ,
            t
        }();
        t.exports = l
    }
    , function(t, e, n) {
        t.exports = {
            painter: n(111),
            getShape: n(104)
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi
          , a = /[^\s\,]+/gi
          , o = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i
          , s = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i
          , u = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i
          , h = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
        function c(t, e) {
            var n = t.match(h);
            i.each(n, function(t) {
                t = t.split(":"),
                e.addColorStop(t[0], t[1])
            })
        }
        t.exports = {
            parsePath: function(t) {
                return t = t || [],
                i.isArray(t) ? t : i.isString(t) ? (t = t.match(r),
                i.each(t, function(e, n) {
                    if ((e = e.match(a))[0].length > 1) {
                        var r = e[0].charAt(0);
                        e.splice(1, 0, e[0].substr(1)),
                        e[0] = r
                    }
                    i.each(e, function(t, n) {
                        isNaN(t) || (e[n] = +t)
                    }),
                    t[n] = e
                }),
                t) : void 0
            },
            parseStyle: function(t, e, n) {
                if (i.isString(t)) {
                    if ("(" === t[1] || "(" === t[2]) {
                        if ("l" === t[0])
                            return function(t, e, n) {
                                var r, a, s = o.exec(t), u = i.mod(i.toRadian(parseFloat(s[1])), 2 * Math.PI), h = s[2], l = e.getBBox();
                                u >= 0 && u < .5 * Math.PI ? (r = {
                                    x: l.minX,
                                    y: l.minY
                                },
                                a = {
                                    x: l.maxX,
                                    y: l.maxY
                                }) : .5 * Math.PI <= u && u < Math.PI ? (r = {
                                    x: l.maxX,
                                    y: l.minY
                                },
                                a = {
                                    x: l.minX,
                                    y: l.maxY
                                }) : Math.PI <= u && u < 1.5 * Math.PI ? (r = {
                                    x: l.maxX,
                                    y: l.maxY
                                },
                                a = {
                                    x: l.minX,
                                    y: l.minY
                                }) : (r = {
                                    x: l.minX,
                                    y: l.maxY
                                },
                                a = {
                                    x: l.maxX,
                                    y: l.minY
                                });
                                var f = Math.tan(u)
                                  , d = f * f
                                  , g = (a.x - r.x + f * (a.y - r.y)) / (d + 1) + r.x
                                  , p = f * (a.x - r.x + f * (a.y - r.y)) / (d + 1) + r.y
                                  , v = n.createLinearGradient(r.x, r.y, g, p);
                                return c(h, v),
                                v
                            }(t, e, n);
                        if ("r" === t[0])
                            return function(t, e, n) {
                                var i = s.exec(t)
                                  , r = parseFloat(i[1])
                                  , a = parseFloat(i[2])
                                  , o = parseFloat(i[3])
                                  , u = i[4];
                                if (0 === o) {
                                    var l = u.match(h);
                                    return l[l.length - 1].split(":")[1]
                                }
                                var f = e.getBBox()
                                  , d = f.maxX - f.minX
                                  , g = f.maxY - f.minY
                                  , p = Math.sqrt(d * d + g * g) / 2
                                  , v = n.createRadialGradient(f.minX + d * r, f.minY + g * a, o * p, f.minX + d / 2, f.minY + g / 2, p);
                                return c(u, v),
                                v
                            }(t, e, n);
                        if ("p" === t[0])
                            return function(t, e, n) {
                                if (e.get("patternSource") && e.get("patternSource") === t)
                                    return e.get("pattern");
                                var i, r, a = u.exec(t), o = a[1], s = a[2];
                                function h() {
                                    i = n.createPattern(r, o),
                                    e.setSilent("pattern", i),
                                    e.setSilent("patternSource", t)
                                }
                                switch (o) {
                                case "a":
                                    o = "repeat";
                                    break;
                                case "x":
                                    o = "repeat-x";
                                    break;
                                case "y":
                                    o = "repeat-y";
                                    break;
                                case "n":
                                    o = "no-repeat";
                                    break;
                                default:
                                    o = "no-repeat"
                                }
                                return r = new Image,
                                s.match(/^data:/i) || (r.crossOrigin = "Anonymous"),
                                r.src = s,
                                r.complete ? h() : (r.onload = h,
                                r.src = r.src),
                                i
                            }(t, e, n)
                    }
                    return t
                }
            }
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(113)
          , a = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "lineDashOffset"]
          , o = function() {
            function t(t) {
                if (!t)
                    return null;
                var e = i.uniqueId("canvas_")
                  , n = i.createDom('<canvas id="' + e + '"></canvas>');
                return t.appendChild(n),
                this.type = "canvas",
                this.canvas = n,
                this.context = n.getContext("2d"),
                this.toDraw = !1,
                this
            }
            var e = t.prototype;
            return e.beforeDraw = function() {
                var t = this.canvas;
                this.context && this.context.clearRect(0, 0, t.width, t.height)
            }
            ,
            e.draw = function(t) {
                var e = this;
                e.animateHandler ? e.toDraw = !0 : function n() {
                    e.animateHandler = i.requestAnimationFrame(function() {
                        e.animateHandler = void 0,
                        e.toDraw && n()
                    }),
                    e.beforeDraw();
                    try {
                        e._drawGroup(t)
                    } catch (t) {
                        console.warn("error in draw canvas, detail as:"),
                        console.warn(t)
                    } finally {
                        e.toDraw = !1
                    }
                }()
            }
            ,
            e.drawSync = function(t) {
                this.beforeDraw(),
                this._drawGroup(t)
            }
            ,
            e._drawGroup = function(t) {
                if (!t._cfg.removed && !t._cfg.destroyed && t._cfg.visible) {
                    var e = t._cfg.children
                      , n = null;
                    this.setContext(t);
                    for (var i = 0; i < e.length; i++)
                        n = e[i],
                        e[i].isGroup ? this._drawGroup(n) : this._drawShape(n);
                    this.restoreContext(t)
                }
            }
            ,
            e._drawShape = function(t) {
                t._cfg.removed || t._cfg.destroyed || !t._cfg.visible || (this.setContext(t),
                t.drawInner(this.context),
                this.restoreContext(t),
                t._cfg.attrs = t._attrs,
                t._cfg.hasUpdate = !1)
            }
            ,
            e.setContext = function(t) {
                var e = this.context
                  , n = t._attrs.clip;
                e.save(),
                n && (n.resetTransform(e),
                n.createPath(e),
                e.clip()),
                this.resetContext(t),
                t.resetTransform(e)
            }
            ,
            e.restoreContext = function() {
                this.context.restore()
            }
            ,
            e.resetContext = function(t) {
                var e = this.context
                  , n = t._attrs;
                if (!t.isGroup)
                    for (var o in n)
                        if (a.indexOf(o) > -1) {
                            var s = n[o];
                            "fillStyle" === o && (s = r.parseStyle(s, t, e)),
                            "strokeStyle" === o && (s = r.parseStyle(s, t, e)),
                            "lineDash" === o && e.setLineDash ? i.isArray(s) ? e.setLineDash(s) : i.isString(s) && e.setLineDash(s.split(" ")) : e[o] = s
                        }
            }
            ,
            t
        }();
        t.exports = o
    }
    , function(t, e, n) {
        t.exports = {
            painter: n(114)
        }
    }
    , function(t, e, n) {
        t.exports = {
            canvas: n(115),
            svg: n(112)
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(31)
          , a = n(74)
          , o = n(75)
          , s = n(76)
          , u = s.interpolate
          , h = s.interpolateArray
          , c = function(t) {
            this._animators = [],
            this._current = 0,
            this._timer = null,
            this.canvas = t
        };
        function l(t, e, n) {
            var a, s = e.startTime;
            if (n < s + e.delay || e.isPaused)
                return !1;
            var c = e.duration
              , l = e.easing;
            if (n = n - s - e.delay,
            e.repeat)
                a = n % c / c,
                a = o[l](a);
            else {
                if (!((a = n / c) < 1)) {
                    var f = e.toAttrs || e.onFrame(1);
                    return t.attr(f),
                    e.toMatrix && t.setMatrix(e.toMatrix),
                    !0
                }
                a = o[l](a)
            }
            if (e.onFrame) {
                var d = e.onFrame(a);
                t.attr(d)
            } else
                !function(t, e, n) {
                    var a = {}
                      , o = e.toAttrs
                      , s = e.fromAttrs
                      , c = e.toMatrix;
                    if (!t.get("destroyed")) {
                        var l;
                        for (var f in o)
                            if (!i.isEqual(s[f], o[f]))
                                if ("path" === f) {
                                    var d = o[f]
                                      , g = s[f];
                                    d.length > g.length ? (d = r.parsePathString(o[f]),
                                    g = r.parsePathString(s[f]),
                                    g = r.fillPathByDiff(g, d),
                                    g = r.formatPath(g, d),
                                    e.fromAttrs.path = g,
                                    e.toAttrs.path = d) : e.pathFormatted || (d = r.parsePathString(o[f]),
                                    g = r.parsePathString(s[f]),
                                    g = r.formatPath(g, d),
                                    e.fromAttrs.path = g,
                                    e.toAttrs.path = d,
                                    e.pathFormatted = !0),
                                    a[f] = [];
                                    for (var p = 0; p < d.length; p++) {
                                        for (var v = d[p], m = g[p], y = [], x = 0; x < v.length; x++)
                                            i.isNumber(v[x]) && m && i.isNumber(m[x]) ? (l = u(m[x], v[x]),
                                            y.push(l(n))) : y.push(v[x]);
                                        a[f].push(y)
                                    }
                                } else
                                    l = u(s[f], o[f]),
                                    a[f] = l(n);
                        if (c) {
                            var b = h(e.fromMatrix, c)(n);
                            t.setMatrix(b)
                        }
                        t.attr(a)
                    }
                }(t, e, a);
            return !1
        }
        i.augment(c, {
            initTimer: function() {
                var t, e, n, i = this, r = this;
                r._timer = a.timer(function(a) {
                    if (r._current = a,
                    i._animators.length > 0) {
                        for (var o = i._animators.length - 1; o >= 0; o--)
                            if ((t = i._animators[o]).get("destroyed"))
                                r.removeAnimator(o);
                            else {
                                if (!t.get("pause").isPaused)
                                    for (var s = (e = t.get("animators")).length - 1; s >= 0; s--)
                                        n = e[s],
                                        l(t, n, a) && (e.splice(s, 1),
                                        !1,
                                        n.callback && n.callback());
                                0 === e.length && r.removeAnimator(o)
                            }
                        i.canvas.draw()
                    }
                })
            },
            addAnimator: function(t) {
                this._animators.push(t)
            },
            removeAnimator: function(t) {
                this._animators.splice(t, 1)
            },
            isAnimating: function() {
                return !!this._animators.length
            },
            stop: function() {
                this._timer && this._timer.stop()
            },
            stopAllAnimations: function() {
                this._animators.forEach(function(t) {
                    t.stopAnimate()
                }),
                this._animators = [],
                this.canvas.draw()
            },
            getTime: function() {
                return this._current
            }
        }),
        t.exports = c
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(34)
          , a = {
            arc: n(24),
            ellipse: n(59),
            line: n(25)
        }
          , o = i.createDom('<canvas width="500" height="500"></canvas>').getContext("2d");
        function s(t, e, n) {
            return n.createPath(o),
            o.isPointInPath(t, e)
        }
        var u = {
            arc: function(t, e) {
                var n = this._attrs
                  , i = n.x
                  , a = n.y
                  , o = n.r
                  , s = n.startAngle
                  , u = n.endAngle
                  , h = n.clockwise
                  , c = this.getHitLineWidth();
                return !!this.hasStroke() && r.arcline(i, a, o, s, u, h, c, t, e)
            },
            circle: function(t, e) {
                var n = this._attrs
                  , i = n.x
                  , a = n.y
                  , o = n.r
                  , s = this.getHitLineWidth()
                  , u = this.hasFill()
                  , h = this.hasStroke();
                return u && h ? r.circle(i, a, o, t, e) || r.arcline(i, a, o, 0, 2 * Math.PI, !1, s, t, e) : u ? r.circle(i, a, o, t, e) : !!h && r.arcline(i, a, o, 0, 2 * Math.PI, !1, s, t, e)
            },
            dom: function(t, e) {
                if (!this._cfg.el)
                    return !1;
                var n = this._cfg.el.getBBox();
                return r.box(n.x, n.x + n.width, n.y, n.y + n.height, t, e)
            },
            ellipse: function(t, e) {
                var n = this._attrs
                  , a = this.hasFill()
                  , o = this.hasStroke()
                  , s = n.x
                  , u = n.y
                  , h = n.rx
                  , c = n.ry
                  , l = this.getHitLineWidth()
                  , f = h > c ? h : c
                  , d = h > c ? 1 : h / c
                  , g = h > c ? c / h : 1
                  , p = [t, e, 1]
                  , v = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                i.mat3.scale(v, v, [d, g]),
                i.mat3.translate(v, v, [s, u]);
                var m = i.mat3.invert([], v);
                return i.vec3.transformMat3(p, p, m),
                a && o ? r.circle(0, 0, f, p[0], p[1]) || r.arcline(0, 0, f, 0, 2 * Math.PI, !1, l, p[0], p[1]) : a ? r.circle(0, 0, f, p[0], p[1]) : !!o && r.arcline(0, 0, f, 0, 2 * Math.PI, !1, l, p[0], p[1])
            },
            fan: function(t, e) {
                var n = this
                  , o = n.hasFill()
                  , s = n.hasStroke()
                  , u = n._attrs
                  , h = u.x
                  , c = u.y
                  , l = u.rs
                  , f = u.re
                  , d = u.startAngle
                  , g = u.endAngle
                  , p = u.clockwise
                  , v = [t - h, e - c]
                  , m = i.vec2.angleTo([1, 0], v);
                function y() {
                    var t = a.arc.nearAngle(m, d, g, p);
                    if (i.isNumberEqual(m, t)) {
                        var e = i.vec2.squaredLength(v);
                        if (l * l <= e && e <= f * f)
                            return !0
                    }
                    return !1
                }
                function x() {
                    var i = n.getHitLineWidth()
                      , a = {
                        x: Math.cos(d) * l + h,
                        y: Math.sin(d) * l + c
                    }
                      , o = {
                        x: Math.cos(d) * f + h,
                        y: Math.sin(d) * f + c
                    }
                      , s = {
                        x: Math.cos(g) * l + h,
                        y: Math.sin(g) * l + c
                    }
                      , u = {
                        x: Math.cos(g) * f + h,
                        y: Math.sin(g) * f + c
                    };
                    return !!(r.line(a.x, a.y, o.x, o.y, i, t, e) || r.line(s.x, s.y, u.x, u.y, i, t, e) || r.arcline(h, c, l, d, g, p, i, t, e) || r.arcline(h, c, f, d, g, p, i, t, e))
                }
                return o && s ? y() || x() : o ? y() : !!s && x()
            },
            image: function(t, e) {
                var n = this._attrs;
                if (this.get("toDraw") || !n.img)
                    return !1;
                this._cfg.attrs && this._cfg.attrs.img === n.img || this._setAttrImg();
                var i = n.x
                  , a = n.y
                  , o = n.width
                  , s = n.height;
                return r.rect(i, a, o, s, t, e)
            },
            line: function(t, e) {
                var n = this._attrs
                  , i = n.x1
                  , a = n.y1
                  , o = n.x2
                  , s = n.y2
                  , u = this.getHitLineWidth();
                return !!this.hasStroke() && r.line(i, a, o, s, u, t, e)
            },
            path: function(t, e) {
                var n = this
                  , r = n.get("segments")
                  , a = n.hasFill()
                  , o = n.hasStroke();
                function u() {
                    if (!i.isEmpty(r)) {
                        for (var a = n.getHitLineWidth(), o = 0, s = r.length; o < s; o++)
                            if (r[o].isInside(t, e, a))
                                return !0;
                        return !1
                    }
                }
                return a && o ? s(t, e, n) || u() : a ? s(t, e, n) : !!o && u()
            },
            marker: function(t, e) {
                var n = this._attrs
                  , i = n.x
                  , a = n.y
                  , o = n.radius || n.r
                  , s = this.getHitLineWidth();
                return r.circle(i, a, o + s / 2, t, e)
            },
            polygon: function(t, e) {
                var n = this
                  , i = n.hasFill()
                  , a = n.hasStroke();
                function o() {
                    var i = n._attrs.points;
                    if (i.length < 2)
                        return !1;
                    var a = n.getHitLineWidth()
                      , o = i.slice(0);
                    return i.length >= 3 && o.push(i[0]),
                    r.polyline(o, a, t, e)
                }
                return i && a ? s(t, e, n) || o() : i ? s(t, e, n) : !!a && o()
            },
            polyline: function(t, e) {
                var n = this._attrs;
                if (this.hasStroke()) {
                    var i = n.points;
                    if (i.length < 2)
                        return !1;
                    var a = n.lineWidth;
                    return r.polyline(i, a, t, e)
                }
                return !1
            },
            rect: function(t, e) {
                var n = this
                  , i = n.hasFill()
                  , a = n.hasStroke();
                function o() {
                    var i = n._attrs
                      , a = i.x
                      , o = i.y
                      , s = i.width
                      , u = i.height
                      , h = i.radius
                      , c = n.getHitLineWidth();
                    if (0 === h) {
                        var l = c / 2;
                        return r.line(a - l, o, a + s + l, o, c, t, e) || r.line(a + s, o - l, a + s, o + u + l, c, t, e) || r.line(a + s + l, o + u, a - l, o + u, c, t, e) || r.line(a, o + u + l, a, o - l, c, t, e)
                    }
                    return r.line(a + h, o, a + s - h, o, c, t, e) || r.line(a + s, o + h, a + s, o + u - h, c, t, e) || r.line(a + s - h, o + u, a + h, o + u, c, t, e) || r.line(a, o + u - h, a, o + h, c, t, e) || r.arcline(a + s - h, o + h, h, 1.5 * Math.PI, 2 * Math.PI, !1, c, t, e) || r.arcline(a + s - h, o + u - h, h, 0, .5 * Math.PI, !1, c, t, e) || r.arcline(a + h, o + u - h, h, .5 * Math.PI, Math.PI, !1, c, t, e) || r.arcline(a + h, o + h, h, Math.PI, 1.5 * Math.PI, !1, c, t, e)
                }
                return i && a ? s(t, e, n) || o() : i ? s(t, e, n) : !!a && o()
            },
            text: function(t, e) {
                var n = this.getBBox();
                if (this.hasFill() || this.hasStroke())
                    return r.box(n.minX, n.maxX, n.minY, n.maxY, t, e)
            }
        };
        t.exports = {
            isPointInPath: function(t, e) {
                var n = u[this.type];
                return !!n && n.call(this, t, e)
            }
        }
    }
    , function(t, e, n) {
        var i = n(3);
        i.Arc = n(58),
        i.Circle = n(57),
        i.Dom = n(56),
        i.Ellipse = n(55),
        i.Fan = n(54),
        i.Image = n(53),
        i.Line = n(52),
        i.Marker = n(32),
        i.Path = n(51),
        i.Polygon = n(50),
        i.Polyline = n(49),
        i.Rect = n(48),
        i.Text = n(47),
        t.exports = i
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(26)
          , a = n(61)
          , o = ["click", "mousedown", "mouseup", "dblclick", "contextmenu", "mouseout", "mouseover", "mousemove", "dragstart", "drag", "dragend", "dragenter", "dragleave", "drop"]
          , s = function() {};
        i.augment(s, a, {
            emit: function(t, e) {
                var n = arguments;
                if (a.prototype.emit.apply(this, n),
                !(n.length >= 2 && n[1]instanceof r && n[1].propagationStopped) && o.indexOf(t) >= 0 && e.target === this)
                    for (var i = this._cfg.parent; i && !i.get("destroyed"); )
                        i.emit.apply(i, n),
                        i = i._cfg.parent
            }
        }),
        t.exports = s
    }
    , function(t, e, n) {
        function i() {
            return (i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }
            ).apply(this, arguments)
        }
        var r = n(0)
          , a = {
            delay: "delay",
            repeat: "repeat",
            rotate: "rotate"
        }
          , o = {
            fill: "fill",
            stroke: "stroke",
            fillStyle: "fillStyle",
            strokeStyle: "strokeStyle"
        };
        t.exports = {
            animate: function(t, e, n, s, u) {
                void 0 === u && (u = 0);
                this.set("animating", !0);
                var h = this.get("timeline");
                h || (h = this.get("canvas").get("timeline"),
                this.setSilent("timeline", h));
                var c = this.get("animators") || [];
                h._timer || h.initTimer(),
                r.isNumber(s) && (u = s,
                s = null),
                r.isFunction(n) ? (s = n,
                n = "easeLinear") : n = n || "easeLinear";
                var l = {
                    repeat: t.repeat,
                    duration: e,
                    easing: n,
                    callback: s,
                    delay: u,
                    startTime: h.getTime(),
                    id: r.uniqueId()
                };
                if (t.onFrame)
                    l.onFrame = t.onFrame;
                else {
                    var f = function(t, e) {
                        var n = {
                            matrix: null,
                            attrs: {}
                        }
                          , i = e._attrs;
                        for (var s in t)
                            if ("transform" === s)
                                n.matrix = r.transform(e.getMatrix(), t[s]);
                            else if ("matrix" === s)
                                n.matrix = t[s];
                            else {
                                if (o[s] && /^[r,R,L,l]{1}[\s]*\(/.test(t[s]))
                                    continue;
                                a[s] || i[s] === t[s] || ("rotate" === s && (e._attrs.rotate = e._attrs.rotate || 0),
                                n.attrs[s] = t[s])
                            }
                        return n
                    }(t, this);
                    l = i({
                        fromAttrs: function(t, e) {
                            var n = {}
                              , i = e._attrs;
                            for (var r in t.attrs)
                                n[r] = i[r];
                            return n
                        }(f, this),
                        toAttrs: f.attrs,
                        fromMatrix: r.clone(this.getMatrix()),
                        toMatrix: f.matrix
                    }, l)
                }
                c.length > 0 ? c = function(t, e) {
                    if (e.onFrame)
                        return t;
                    var n = e.delay
                      , i = Object.prototype.hasOwnProperty;
                    return r.each(e.toAttrs, function(e, a) {
                        r.each(t, function(t) {
                            n < t.startTime + t.duration && i.call(t.toAttrs, a) && (delete t.toAttrs[a],
                            delete t.fromAttrs[a])
                        })
                    }),
                    e.toMatrix && r.each(t, function(t) {
                        n < t.startTime + t.duration && t.toMatrix && delete t.toMatrix
                    }),
                    t
                }(c, l) : h.addAnimator(this),
                c.push(l),
                this.setSilent("animators", c),
                this.setSilent("pause", {
                    isPaused: !1
                })
            },
            stopAnimate: function() {
                var t = this
                  , e = this.get("animators");
                r.each(e, function(e) {
                    t.attr(e.toAttrs || e.onFrame(1)),
                    e.toMatrix && t.attr("matrix", e.toMatrix),
                    e.callback && e.callback()
                }),
                this.setSilent("animating", !1),
                this.setSilent("animators", [])
            },
            pauseAnimate: function() {
                var t = this.get("timeline");
                return this.setSilent("pause", {
                    isPaused: !0,
                    pauseTime: t.getTime()
                }),
                this
            },
            resumeAnimate: function() {
                var t = this.get("timeline").getTime()
                  , e = this.get("animators")
                  , n = this.get("pause").pauseTime;
                return r.each(e, function(e) {
                    e.startTime = e.startTime + (t - n),
                    e._paused = !1,
                    e._pauseTime = null
                }),
                this.setSilent("pause", {
                    isPaused: !1
                }),
                this.setSilent("animators", e),
                this
            }
        }
    }
    , function(t, e, n) {
        var i = n(0);
        function r(t) {
            return 1 === t[0] && 0 === t[1] && 0 === t[3] && 1 === t[4] && 0 === t[6] && 0 === t[7]
        }
        function a(t) {
            return 0 === t[1] && 0 === t[3] && 0 === t[6] && 0 === t[7]
        }
        function o(t, e) {
            r(e) || (a(e) ? (t[0] *= e[0],
            t[4] *= e[4]) : i.mat3.multiply(t, t, e))
        }
        t.exports = {
            initTransform: function() {},
            resetMatrix: function() {
                this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1])
            },
            translate: function(t, e) {
                var n = this._attrs.matrix;
                return i.mat3.translate(n, n, [t, e]),
                this.clearTotalMatrix(),
                this.attr("matrix", n),
                this
            },
            rotate: function(t) {
                var e = this._attrs.matrix;
                return i.mat3.rotate(e, e, t),
                this.clearTotalMatrix(),
                this.attr("matrix", e),
                this
            },
            scale: function(t, e) {
                var n = this._attrs.matrix;
                return i.mat3.scale(n, n, [t, e]),
                this.clearTotalMatrix(),
                this.attr("matrix", n),
                this
            },
            rotateAtStart: function(t) {
                var e = this._attrs.x || this._cfg.attrs.x
                  , n = this._attrs.y || this._cfg.attrs.y;
                return Math.abs(t) > 2 * Math.PI && (t = t / 180 * Math.PI),
                this.transform([["t", -e, -n], ["r", t], ["t", e, n]])
            },
            move: function(t, e) {
                var n = this.get("x") || 0
                  , i = this.get("y") || 0;
                return this.translate(t - n, e - i),
                this.set("x", t),
                this.set("y", e),
                this
            },
            transform: function(t) {
                var e = this
                  , n = this._attrs.matrix;
                return i.each(t, function(t) {
                    switch (t[0]) {
                    case "t":
                        e.translate(t[1], t[2]);
                        break;
                    case "s":
                        e.scale(t[1], t[2]);
                        break;
                    case "r":
                        e.rotate(t[1]);
                        break;
                    case "m":
                        e.attr("matrix", i.mat3.multiply([], n, t[1])),
                        e.clearTotalMatrix()
                    }
                }),
                e
            },
            setTransform: function(t) {
                return this.attr("matrix", [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                this.transform(t)
            },
            getMatrix: function() {
                return this.attr("matrix")
            },
            setMatrix: function(t) {
                return this.attr("matrix", t),
                this.clearTotalMatrix(),
                this
            },
            apply: function(t, e) {
                var n;
                return n = e ? this._getMatrixByRoot(e) : this.attr("matrix"),
                i.vec3.transformMat3(t, t, n),
                this
            },
            _getMatrixByRoot: function(t) {
                t = t || this;
                for (var e = this, n = []; e !== t; )
                    n.unshift(e),
                    e = e.get("parent");
                n.unshift(e);
                var r = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                return i.each(n, function(t) {
                    i.mat3.multiply(r, t.attr("matrix"), r)
                }),
                r
            },
            getTotalMatrix: function() {
                var t = this._cfg.totalMatrix;
                if (!t) {
                    t = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    var e = this._cfg.parent;
                    if (e)
                        o(t, e.getTotalMatrix());
                    o(t, this.attr("matrix")),
                    this._cfg.totalMatrix = t
                }
                return t
            },
            clearTotalMatrix: function() {},
            invert: function(t) {
                var e = this.getTotalMatrix();
                if (a(e))
                    t[0] /= e[0],
                    t[1] /= e[4];
                else {
                    var n = i.mat3.invert([], e);
                    n && i.vec3.transformMat3(t, t, n)
                }
                return this
            },
            resetTransform: function(t) {
                var e = this.attr("matrix");
                r(e) || t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
            }
        }
    }
    , function(t, e, n) {
        var i = n(0);
        t.exports = {
            canFill: !1,
            canStroke: !1,
            initAttrs: function(t) {
                return this._attrs = {
                    opacity: 1,
                    fillOpacity: 1,
                    strokeOpacity: 1,
                    matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1]
                },
                this.attr(i.assign(this.getDefaultAttrs(), t)),
                this
            },
            getDefaultAttrs: function() {
                return {}
            },
            attr: function(t, e) {
                if (0 === arguments.length)
                    return this._attrs;
                if (i.isObject(t)) {
                    for (var n in t)
                        this._setAttr(n, t[n]);
                    return this.clearBBox(),
                    this._cfg.hasUpdate = !0,
                    this
                }
                return 2 === arguments.length ? (this._setAttr(t, e),
                this.clearBBox(),
                this._cfg.hasUpdate = !0,
                this) : this._attrs[t]
            },
            _setAttr: function(t, e) {
                var n = this._attrs;
                n[t] = e,
                "fill" !== t && "stroke" !== t ? "opacity" !== t ? "clip" === t && e ? this._setClip(e) : "path" === t && this._afterSetAttrPath ? this._afterSetAttrPath(e) : "transform" !== t ? "rotate" === t && this.rotateAtStart(e) : this.transform(e) : n.globalAlpha = e : n[t + "Style"] = e
            },
            clearBBox: function() {
                this.setSilent("box", null)
            },
            hasFill: function() {
                return this.canFill && this._attrs.fillStyle
            },
            hasStroke: function() {
                return this.canStroke && this._attrs.strokeStyle
            },
            _setClip: function(t) {
                t._cfg.renderer = this._cfg.renderer,
                t._cfg.canvas = this._cfg.canvas,
                t._cfg.parent = this._cfg.parent,
                t.hasFill = function() {
                    return !0
                }
            }
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(26)
          , a = ["mousedown", "mouseup", "dblclick", "mouseenter", "mouseout", "mouseover", "mousemove", "mouseleave"]
          , o = null
          , s = null
          , u = {}
          , h = null
          , c = null;
        t.exports = {
            registerEvent: function() {
                var t = this
                  , e = this.get("el");
                i.each(a, function(n) {
                    e.addEventListener(n, function(e) {
                        t._triggerEvent(n, e)
                    }, !1)
                }),
                e.addEventListener("touchstart", function(e) {
                    i.isEmpty(e.touches) || t._triggerEvent("touchstart", e.touches[0])
                }, !1),
                e.addEventListener("touchmove", function(e) {
                    i.isEmpty(e.touches) || t._triggerEvent("touchmove", e.touches[0])
                }, !1),
                e.addEventListener("touchend", function(e) {
                    i.isEmpty(e.changedTouches) || t._triggerEvent("touchend", e.changedTouches[0])
                }, !1),
                e.addEventListener("contextmenu", function(e) {
                    t._triggerEvent("contextmenu", e),
                    e.preventDefault()
                }, !1)
            },
            _getEmitter: function(t, e) {
                if (t) {
                    if (!i.isEmpty(t._getEvents()))
                        return t;
                    var n = t.get("parent");
                    if (n && !e.propagationStopped)
                        return this._getEmitter(n, e)
                }
            },
            _getEventObj: function(t, e, n, i) {
                var a = new r(t,e,!0,!0);
                return a.x = n.x,
                a.y = n.y,
                a.clientX = e.clientX,
                a.clientY = e.clientY,
                a.currentTarget = i,
                a.target = i,
                a
            },
            _triggerEvent: function(t, e) {
                var n = this.getPointByClient(e.clientX, e.clientY)
                  , i = this.getShape(n.x, n.y, e)
                  , r = this.get("el");
                if (h && "svg" === this.getRenderer() && (i = this.getShape(n.x, n.y)),
                "mousemove" === t) {
                    if (o && o !== i && (this._emitEvent("mouseout", e, n, o),
                    this._emitEvent("mouseleave", e, n, o),
                    h && this._emitEvent("dragleave", e, n, o),
                    i && !i.destroyed || (r.style.cursor = "default")),
                    h && (this._emitEvent("drag", e, n, h),
                    this._emitEvent("mousemove", e, n, i)),
                    i)
                        h || (s === i ? (h = i,
                        s = null,
                        this._emitEvent("dragstart", e, n, i)) : this._emitEvent("mousemove", e, n, i)),
                        o !== i && (this._emitEvent("mouseenter", e, n, i),
                        this._emitEvent("mouseover", e, n, i),
                        h && this._emitEvent("dragenter", e, n, i));
                    else {
                        var a = this._getEventObj("mousemove", e, n, this);
                        this.emit("mousemove", a)
                    }
                    o = i
                } else if (this._emitEvent(t, e, n, i || this),
                h || "mousedown" !== t || 0 !== e.button || (s = i,
                u = {
                    x: e.clientX,
                    y: e.clientY
                }),
                "mouseup" === t && 0 === e.button) {
                    var l = u.x - e.clientX
                      , f = u.y - e.clientY;
                    l * l + f * f < 40 && (clearTimeout(c),
                    c = null,
                    this._emitEvent("click", e, n, s || this)),
                    h && (h._cfg.capture = !0,
                    this._emitEvent("dragend", e, n, h),
                    h = null,
                    this._emitEvent("drop", e, n, i || this)),
                    s = null
                }
                i && !i.get("destroyed") && (r.style.cursor = i.attr("cursor") || "default")
            },
            _emitEvent: function(t, e, n, i) {
                var r = this._getEventObj(t, e, n, i)
                  , a = this._getEmitter(i, e);
                return a && !a.get("destroyed") && a.emit(t, r),
                a
            }
        }
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0,
        e.create = r,
        e.clone = function(t) {
            var e = new i.ARRAY_TYPE(3);
            return e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e
        }
        ,
        e.length = a,
        e.fromValues = o,
        e.copy = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t
        }
        ,
        e.set = function(t, e, n, i) {
            return t[0] = e,
            t[1] = n,
            t[2] = i,
            t
        }
        ,
        e.add = function(t, e, n) {
            return t[0] = e[0] + n[0],
            t[1] = e[1] + n[1],
            t[2] = e[2] + n[2],
            t
        }
        ,
        e.subtract = s,
        e.multiply = u,
        e.divide = h,
        e.ceil = function(t, e) {
            return t[0] = Math.ceil(e[0]),
            t[1] = Math.ceil(e[1]),
            t[2] = Math.ceil(e[2]),
            t
        }
        ,
        e.floor = function(t, e) {
            return t[0] = Math.floor(e[0]),
            t[1] = Math.floor(e[1]),
            t[2] = Math.floor(e[2]),
            t
        }
        ,
        e.min = function(t, e, n) {
            return t[0] = Math.min(e[0], n[0]),
            t[1] = Math.min(e[1], n[1]),
            t[2] = Math.min(e[2], n[2]),
            t
        }
        ,
        e.max = function(t, e, n) {
            return t[0] = Math.max(e[0], n[0]),
            t[1] = Math.max(e[1], n[1]),
            t[2] = Math.max(e[2], n[2]),
            t
        }
        ,
        e.round = function(t, e) {
            return t[0] = Math.round(e[0]),
            t[1] = Math.round(e[1]),
            t[2] = Math.round(e[2]),
            t
        }
        ,
        e.scale = function(t, e, n) {
            return t[0] = e[0] * n,
            t[1] = e[1] * n,
            t[2] = e[2] * n,
            t
        }
        ,
        e.scaleAndAdd = function(t, e, n, i) {
            return t[0] = e[0] + n[0] * i,
            t[1] = e[1] + n[1] * i,
            t[2] = e[2] + n[2] * i,
            t
        }
        ,
        e.distance = c,
        e.squaredDistance = l,
        e.squaredLength = f,
        e.negate = function(t, e) {
            return t[0] = -e[0],
            t[1] = -e[1],
            t[2] = -e[2],
            t
        }
        ,
        e.inverse = function(t, e) {
            return t[0] = 1 / e[0],
            t[1] = 1 / e[1],
            t[2] = 1 / e[2],
            t
        }
        ,
        e.normalize = d,
        e.dot = g,
        e.cross = function(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2]
              , o = n[0]
              , s = n[1]
              , u = n[2];
            return t[0] = r * u - a * s,
            t[1] = a * o - i * u,
            t[2] = i * s - r * o,
            t
        }
        ,
        e.lerp = function(t, e, n, i) {
            var r = e[0]
              , a = e[1]
              , o = e[2];
            return t[0] = r + i * (n[0] - r),
            t[1] = a + i * (n[1] - a),
            t[2] = o + i * (n[2] - o),
            t
        }
        ,
        e.hermite = function(t, e, n, i, r, a) {
            var o = a * a
              , s = o * (2 * a - 3) + 1
              , u = o * (a - 2) + a
              , h = o * (a - 1)
              , c = o * (3 - 2 * a);
            return t[0] = e[0] * s + n[0] * u + i[0] * h + r[0] * c,
            t[1] = e[1] * s + n[1] * u + i[1] * h + r[1] * c,
            t[2] = e[2] * s + n[2] * u + i[2] * h + r[2] * c,
            t
        }
        ,
        e.bezier = function(t, e, n, i, r, a) {
            var o = 1 - a
              , s = o * o
              , u = a * a
              , h = s * o
              , c = 3 * a * s
              , l = 3 * u * o
              , f = u * a;
            return t[0] = e[0] * h + n[0] * c + i[0] * l + r[0] * f,
            t[1] = e[1] * h + n[1] * c + i[1] * l + r[1] * f,
            t[2] = e[2] * h + n[2] * c + i[2] * l + r[2] * f,
            t
        }
        ,
        e.random = function(t, e) {
            e = e || 1;
            var n = 2 * i.RANDOM() * Math.PI
              , r = 2 * i.RANDOM() - 1
              , a = Math.sqrt(1 - r * r) * e;
            return t[0] = Math.cos(n) * a,
            t[1] = Math.sin(n) * a,
            t[2] = r * e,
            t
        }
        ,
        e.transformMat4 = function(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2]
              , o = n[3] * i + n[7] * r + n[11] * a + n[15];
            return o = o || 1,
            t[0] = (n[0] * i + n[4] * r + n[8] * a + n[12]) / o,
            t[1] = (n[1] * i + n[5] * r + n[9] * a + n[13]) / o,
            t[2] = (n[2] * i + n[6] * r + n[10] * a + n[14]) / o,
            t
        }
        ,
        e.transformMat3 = function(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2];
            return t[0] = i * n[0] + r * n[3] + a * n[6],
            t[1] = i * n[1] + r * n[4] + a * n[7],
            t[2] = i * n[2] + r * n[5] + a * n[8],
            t
        }
        ,
        e.transformQuat = function(t, e, n) {
            var i = n[0]
              , r = n[1]
              , a = n[2]
              , o = n[3]
              , s = e[0]
              , u = e[1]
              , h = e[2]
              , c = r * h - a * u
              , l = a * s - i * h
              , f = i * u - r * s
              , d = r * f - a * l
              , g = a * c - i * f
              , p = i * l - r * c
              , v = 2 * o;
            return c *= v,
            l *= v,
            f *= v,
            d *= 2,
            g *= 2,
            p *= 2,
            t[0] = s + c + d,
            t[1] = u + l + g,
            t[2] = h + f + p,
            t
        }
        ,
        e.rotateX = function(t, e, n, i) {
            var r = []
              , a = [];
            return r[0] = e[0] - n[0],
            r[1] = e[1] - n[1],
            r[2] = e[2] - n[2],
            a[0] = r[0],
            a[1] = r[1] * Math.cos(i) - r[2] * Math.sin(i),
            a[2] = r[1] * Math.sin(i) + r[2] * Math.cos(i),
            t[0] = a[0] + n[0],
            t[1] = a[1] + n[1],
            t[2] = a[2] + n[2],
            t
        }
        ,
        e.rotateY = function(t, e, n, i) {
            var r = []
              , a = [];
            return r[0] = e[0] - n[0],
            r[1] = e[1] - n[1],
            r[2] = e[2] - n[2],
            a[0] = r[2] * Math.sin(i) + r[0] * Math.cos(i),
            a[1] = r[1],
            a[2] = r[2] * Math.cos(i) - r[0] * Math.sin(i),
            t[0] = a[0] + n[0],
            t[1] = a[1] + n[1],
            t[2] = a[2] + n[2],
            t
        }
        ,
        e.rotateZ = function(t, e, n, i) {
            var r = []
              , a = [];
            return r[0] = e[0] - n[0],
            r[1] = e[1] - n[1],
            r[2] = e[2] - n[2],
            a[0] = r[0] * Math.cos(i) - r[1] * Math.sin(i),
            a[1] = r[0] * Math.sin(i) + r[1] * Math.cos(i),
            a[2] = r[2],
            t[0] = a[0] + n[0],
            t[1] = a[1] + n[1],
            t[2] = a[2] + n[2],
            t
        }
        ,
        e.angle = function(t, e) {
            var n = o(t[0], t[1], t[2])
              , i = o(e[0], e[1], e[2]);
            d(n, n),
            d(i, i);
            var r = g(n, i);
            return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
        }
        ,
        e.str = function(t) {
            return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
        }
        ,
        e.exactEquals = function(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
        }
        ,
        e.equals = function(t, e) {
            var n = t[0]
              , r = t[1]
              , a = t[2]
              , o = e[0]
              , s = e[1]
              , u = e[2];
            return Math.abs(n - o) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - s) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(a - u) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(u))
        }
        ;
        var i = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(n(35));
        function r() {
            var t = new i.ARRAY_TYPE(3);
            return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
            t[1] = 0,
            t[2] = 0),
            t
        }
        function a(t) {
            var e = t[0]
              , n = t[1]
              , i = t[2];
            return Math.sqrt(e * e + n * n + i * i)
        }
        function o(t, e, n) {
            var r = new i.ARRAY_TYPE(3);
            return r[0] = t,
            r[1] = e,
            r[2] = n,
            r
        }
        function s(t, e, n) {
            return t[0] = e[0] - n[0],
            t[1] = e[1] - n[1],
            t[2] = e[2] - n[2],
            t
        }
        function u(t, e, n) {
            return t[0] = e[0] * n[0],
            t[1] = e[1] * n[1],
            t[2] = e[2] * n[2],
            t
        }
        function h(t, e, n) {
            return t[0] = e[0] / n[0],
            t[1] = e[1] / n[1],
            t[2] = e[2] / n[2],
            t
        }
        function c(t, e) {
            var n = e[0] - t[0]
              , i = e[1] - t[1]
              , r = e[2] - t[2];
            return Math.sqrt(n * n + i * i + r * r)
        }
        function l(t, e) {
            var n = e[0] - t[0]
              , i = e[1] - t[1]
              , r = e[2] - t[2];
            return n * n + i * i + r * r
        }
        function f(t) {
            var e = t[0]
              , n = t[1]
              , i = t[2];
            return e * e + n * n + i * i
        }
        function d(t, e) {
            var n = e[0]
              , i = e[1]
              , r = e[2]
              , a = n * n + i * i + r * r;
            return a > 0 && (a = 1 / Math.sqrt(a),
            t[0] = e[0] * a,
            t[1] = e[1] * a,
            t[2] = e[2] * a),
            t
        }
        function g(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }
        e.sub = s,
        e.mul = u,
        e.div = h,
        e.dist = c,
        e.sqrDist = l,
        e.len = a,
        e.sqrLen = f,
        e.forEach = function() {
            var t = r();
            return function(e, n, i, r, a, o) {
                var s = void 0
                  , u = void 0;
                for (n || (n = 3),
                i || (i = 0),
                u = r ? Math.min(r * n + i, e.length) : e.length,
                s = i; s < u; s += n)
                    t[0] = e[s],
                    t[1] = e[s + 1],
                    t[2] = e[s + 2],
                    a(t, t, o),
                    e[s] = t[0],
                    e[s + 1] = t[1],
                    e[s + 2] = t[2];
                return e
            }
        }()
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0,
        e.create = r,
        e.clone = function(t) {
            var e = new i.ARRAY_TYPE(2);
            return e[0] = t[0],
            e[1] = t[1],
            e
        }
        ,
        e.fromValues = function(t, e) {
            var n = new i.ARRAY_TYPE(2);
            return n[0] = t,
            n[1] = e,
            n
        }
        ,
        e.copy = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t
        }
        ,
        e.set = function(t, e, n) {
            return t[0] = e,
            t[1] = n,
            t
        }
        ,
        e.add = function(t, e, n) {
            return t[0] = e[0] + n[0],
            t[1] = e[1] + n[1],
            t
        }
        ,
        e.subtract = a,
        e.multiply = o,
        e.divide = s,
        e.ceil = function(t, e) {
            return t[0] = Math.ceil(e[0]),
            t[1] = Math.ceil(e[1]),
            t
        }
        ,
        e.floor = function(t, e) {
            return t[0] = Math.floor(e[0]),
            t[1] = Math.floor(e[1]),
            t
        }
        ,
        e.min = function(t, e, n) {
            return t[0] = Math.min(e[0], n[0]),
            t[1] = Math.min(e[1], n[1]),
            t
        }
        ,
        e.max = function(t, e, n) {
            return t[0] = Math.max(e[0], n[0]),
            t[1] = Math.max(e[1], n[1]),
            t
        }
        ,
        e.round = function(t, e) {
            return t[0] = Math.round(e[0]),
            t[1] = Math.round(e[1]),
            t
        }
        ,
        e.scale = function(t, e, n) {
            return t[0] = e[0] * n,
            t[1] = e[1] * n,
            t
        }
        ,
        e.scaleAndAdd = function(t, e, n, i) {
            return t[0] = e[0] + n[0] * i,
            t[1] = e[1] + n[1] * i,
            t
        }
        ,
        e.distance = u,
        e.squaredDistance = h,
        e.length = c,
        e.squaredLength = l,
        e.negate = function(t, e) {
            return t[0] = -e[0],
            t[1] = -e[1],
            t
        }
        ,
        e.inverse = function(t, e) {
            return t[0] = 1 / e[0],
            t[1] = 1 / e[1],
            t
        }
        ,
        e.normalize = function(t, e) {
            var n = e[0]
              , i = e[1]
              , r = n * n + i * i;
            r > 0 && (r = 1 / Math.sqrt(r),
            t[0] = e[0] * r,
            t[1] = e[1] * r);
            return t
        }
        ,
        e.dot = function(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }
        ,
        e.cross = function(t, e, n) {
            var i = e[0] * n[1] - e[1] * n[0];
            return t[0] = t[1] = 0,
            t[2] = i,
            t
        }
        ,
        e.lerp = function(t, e, n, i) {
            var r = e[0]
              , a = e[1];
            return t[0] = r + i * (n[0] - r),
            t[1] = a + i * (n[1] - a),
            t
        }
        ,
        e.random = function(t, e) {
            e = e || 1;
            var n = 2 * i.RANDOM() * Math.PI;
            return t[0] = Math.cos(n) * e,
            t[1] = Math.sin(n) * e,
            t
        }
        ,
        e.transformMat2 = function(t, e, n) {
            var i = e[0]
              , r = e[1];
            return t[0] = n[0] * i + n[2] * r,
            t[1] = n[1] * i + n[3] * r,
            t
        }
        ,
        e.transformMat2d = function(t, e, n) {
            var i = e[0]
              , r = e[1];
            return t[0] = n[0] * i + n[2] * r + n[4],
            t[1] = n[1] * i + n[3] * r + n[5],
            t
        }
        ,
        e.transformMat3 = function(t, e, n) {
            var i = e[0]
              , r = e[1];
            return t[0] = n[0] * i + n[3] * r + n[6],
            t[1] = n[1] * i + n[4] * r + n[7],
            t
        }
        ,
        e.transformMat4 = function(t, e, n) {
            var i = e[0]
              , r = e[1];
            return t[0] = n[0] * i + n[4] * r + n[12],
            t[1] = n[1] * i + n[5] * r + n[13],
            t
        }
        ,
        e.rotate = function(t, e, n, i) {
            var r = e[0] - n[0]
              , a = e[1] - n[1]
              , o = Math.sin(i)
              , s = Math.cos(i);
            return t[0] = r * s - a * o + n[0],
            t[1] = r * o + a * s + n[1],
            t
        }
        ,
        e.angle = function(t, e) {
            var n = t[0]
              , i = t[1]
              , r = e[0]
              , a = e[1]
              , o = n * n + i * i;
            o > 0 && (o = 1 / Math.sqrt(o));
            var s = r * r + a * a;
            s > 0 && (s = 1 / Math.sqrt(s));
            var u = (n * r + i * a) * o * s;
            return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u)
        }
        ,
        e.str = function(t) {
            return "vec2(" + t[0] + ", " + t[1] + ")"
        }
        ,
        e.exactEquals = function(t, e) {
            return t[0] === e[0] && t[1] === e[1]
        }
        ,
        e.equals = function(t, e) {
            var n = t[0]
              , r = t[1]
              , a = e[0]
              , o = e[1];
            return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - o) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(o))
        }
        ;
        var i = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(n(35));
        function r() {
            var t = new i.ARRAY_TYPE(2);
            return i.ARRAY_TYPE != Float32Array && (t[0] = 0,
            t[1] = 0),
            t
        }
        function a(t, e, n) {
            return t[0] = e[0] - n[0],
            t[1] = e[1] - n[1],
            t
        }
        function o(t, e, n) {
            return t[0] = e[0] * n[0],
            t[1] = e[1] * n[1],
            t
        }
        function s(t, e, n) {
            return t[0] = e[0] / n[0],
            t[1] = e[1] / n[1],
            t
        }
        function u(t, e) {
            var n = e[0] - t[0]
              , i = e[1] - t[1];
            return Math.sqrt(n * n + i * i)
        }
        function h(t, e) {
            var n = e[0] - t[0]
              , i = e[1] - t[1];
            return n * n + i * i
        }
        function c(t) {
            var e = t[0]
              , n = t[1];
            return Math.sqrt(e * e + n * n)
        }
        function l(t) {
            var e = t[0]
              , n = t[1];
            return e * e + n * n
        }
        e.len = c,
        e.sub = a,
        e.mul = o,
        e.div = s,
        e.dist = u,
        e.sqrDist = h,
        e.sqrLen = l,
        e.forEach = function() {
            var t = r();
            return function(e, n, i, r, a, o) {
                var s = void 0
                  , u = void 0;
                for (n || (n = 2),
                i || (i = 0),
                u = r ? Math.min(r * n + i, e.length) : e.length,
                s = i; s < u; s += n)
                    t[0] = e[s],
                    t[1] = e[s + 1],
                    a(t, t, o),
                    e[s] = t[0],
                    e[s + 1] = t[1];
                return e
            }
        }()
    }
    , function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.sub = e.mul = void 0,
        e.create = function() {
            var t = new i.ARRAY_TYPE(9);
            i.ARRAY_TYPE != Float32Array && (t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[5] = 0,
            t[6] = 0,
            t[7] = 0);
            return t[0] = 1,
            t[4] = 1,
            t[8] = 1,
            t
        }
        ,
        e.fromMat4 = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[4],
            t[4] = e[5],
            t[5] = e[6],
            t[6] = e[8],
            t[7] = e[9],
            t[8] = e[10],
            t
        }
        ,
        e.clone = function(t) {
            var e = new i.ARRAY_TYPE(9);
            return e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e[3] = t[3],
            e[4] = t[4],
            e[5] = t[5],
            e[6] = t[6],
            e[7] = t[7],
            e[8] = t[8],
            e
        }
        ,
        e.copy = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4],
            t[5] = e[5],
            t[6] = e[6],
            t[7] = e[7],
            t[8] = e[8],
            t
        }
        ,
        e.fromValues = function(t, e, n, r, a, o, s, u, h) {
            var c = new i.ARRAY_TYPE(9);
            return c[0] = t,
            c[1] = e,
            c[2] = n,
            c[3] = r,
            c[4] = a,
            c[5] = o,
            c[6] = s,
            c[7] = u,
            c[8] = h,
            c
        }
        ,
        e.set = function(t, e, n, i, r, a, o, s, u, h) {
            return t[0] = e,
            t[1] = n,
            t[2] = i,
            t[3] = r,
            t[4] = a,
            t[5] = o,
            t[6] = s,
            t[7] = u,
            t[8] = h,
            t
        }
        ,
        e.identity = function(t) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 1,
            t[5] = 0,
            t[6] = 0,
            t[7] = 0,
            t[8] = 1,
            t
        }
        ,
        e.transpose = function(t, e) {
            if (t === e) {
                var n = e[1]
                  , i = e[2]
                  , r = e[5];
                t[1] = e[3],
                t[2] = e[6],
                t[3] = n,
                t[5] = e[7],
                t[6] = i,
                t[7] = r
            } else
                t[0] = e[0],
                t[1] = e[3],
                t[2] = e[6],
                t[3] = e[1],
                t[4] = e[4],
                t[5] = e[7],
                t[6] = e[2],
                t[7] = e[5],
                t[8] = e[8];
            return t
        }
        ,
        e.invert = function(t, e) {
            var n = e[0]
              , i = e[1]
              , r = e[2]
              , a = e[3]
              , o = e[4]
              , s = e[5]
              , u = e[6]
              , h = e[7]
              , c = e[8]
              , l = c * o - s * h
              , f = -c * a + s * u
              , d = h * a - o * u
              , g = n * l + i * f + r * d;
            if (!g)
                return null;
            return g = 1 / g,
            t[0] = l * g,
            t[1] = (-c * i + r * h) * g,
            t[2] = (s * i - r * o) * g,
            t[3] = f * g,
            t[4] = (c * n - r * u) * g,
            t[5] = (-s * n + r * a) * g,
            t[6] = d * g,
            t[7] = (-h * n + i * u) * g,
            t[8] = (o * n - i * a) * g,
            t
        }
        ,
        e.adjoint = function(t, e) {
            var n = e[0]
              , i = e[1]
              , r = e[2]
              , a = e[3]
              , o = e[4]
              , s = e[5]
              , u = e[6]
              , h = e[7]
              , c = e[8];
            return t[0] = o * c - s * h,
            t[1] = r * h - i * c,
            t[2] = i * s - r * o,
            t[3] = s * u - a * c,
            t[4] = n * c - r * u,
            t[5] = r * a - n * s,
            t[6] = a * h - o * u,
            t[7] = i * u - n * h,
            t[8] = n * o - i * a,
            t
        }
        ,
        e.determinant = function(t) {
            var e = t[0]
              , n = t[1]
              , i = t[2]
              , r = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , u = t[7]
              , h = t[8];
            return e * (h * a - o * u) + n * (-h * r + o * s) + i * (u * r - a * s)
        }
        ,
        e.multiply = r,
        e.translate = function(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2]
              , o = e[3]
              , s = e[4]
              , u = e[5]
              , h = e[6]
              , c = e[7]
              , l = e[8]
              , f = n[0]
              , d = n[1];
            return t[0] = i,
            t[1] = r,
            t[2] = a,
            t[3] = o,
            t[4] = s,
            t[5] = u,
            t[6] = f * i + d * o + h,
            t[7] = f * r + d * s + c,
            t[8] = f * a + d * u + l,
            t
        }
        ,
        e.rotate = function(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2]
              , o = e[3]
              , s = e[4]
              , u = e[5]
              , h = e[6]
              , c = e[7]
              , l = e[8]
              , f = Math.sin(n)
              , d = Math.cos(n);
            return t[0] = d * i + f * o,
            t[1] = d * r + f * s,
            t[2] = d * a + f * u,
            t[3] = d * o - f * i,
            t[4] = d * s - f * r,
            t[5] = d * u - f * a,
            t[6] = h,
            t[7] = c,
            t[8] = l,
            t
        }
        ,
        e.scale = function(t, e, n) {
            var i = n[0]
              , r = n[1];
            return t[0] = i * e[0],
            t[1] = i * e[1],
            t[2] = i * e[2],
            t[3] = r * e[3],
            t[4] = r * e[4],
            t[5] = r * e[5],
            t[6] = e[6],
            t[7] = e[7],
            t[8] = e[8],
            t
        }
        ,
        e.fromTranslation = function(t, e) {
            return t[0] = 1,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = 1,
            t[5] = 0,
            t[6] = e[0],
            t[7] = e[1],
            t[8] = 1,
            t
        }
        ,
        e.fromRotation = function(t, e) {
            var n = Math.sin(e)
              , i = Math.cos(e);
            return t[0] = i,
            t[1] = n,
            t[2] = 0,
            t[3] = -n,
            t[4] = i,
            t[5] = 0,
            t[6] = 0,
            t[7] = 0,
            t[8] = 1,
            t
        }
        ,
        e.fromScaling = function(t, e) {
            return t[0] = e[0],
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = e[1],
            t[5] = 0,
            t[6] = 0,
            t[7] = 0,
            t[8] = 1,
            t
        }
        ,
        e.fromMat2d = function(t, e) {
            return t[0] = e[0],
            t[1] = e[1],
            t[2] = 0,
            t[3] = e[2],
            t[4] = e[3],
            t[5] = 0,
            t[6] = e[4],
            t[7] = e[5],
            t[8] = 1,
            t
        }
        ,
        e.fromQuat = function(t, e) {
            var n = e[0]
              , i = e[1]
              , r = e[2]
              , a = e[3]
              , o = n + n
              , s = i + i
              , u = r + r
              , h = n * o
              , c = i * o
              , l = i * s
              , f = r * o
              , d = r * s
              , g = r * u
              , p = a * o
              , v = a * s
              , m = a * u;
            return t[0] = 1 - l - g,
            t[3] = c - m,
            t[6] = f + v,
            t[1] = c + m,
            t[4] = 1 - h - g,
            t[7] = d - p,
            t[2] = f - v,
            t[5] = d + p,
            t[8] = 1 - h - l,
            t
        }
        ,
        e.normalFromMat4 = function(t, e) {
            var n = e[0]
              , i = e[1]
              , r = e[2]
              , a = e[3]
              , o = e[4]
              , s = e[5]
              , u = e[6]
              , h = e[7]
              , c = e[8]
              , l = e[9]
              , f = e[10]
              , d = e[11]
              , g = e[12]
              , p = e[13]
              , v = e[14]
              , m = e[15]
              , y = n * s - i * o
              , x = n * u - r * o
              , b = n * h - a * o
              , M = i * u - r * s
              , w = i * h - a * s
              , _ = r * h - a * u
              , P = c * p - l * g
              , S = c * v - f * g
              , A = c * m - d * g
              , C = l * v - f * p
              , I = l * m - d * p
              , k = f * m - d * v
              , T = y * k - x * I + b * C + M * A - w * S + _ * P;
            if (!T)
                return null;
            return T = 1 / T,
            t[0] = (s * k - u * I + h * C) * T,
            t[1] = (u * A - o * k - h * S) * T,
            t[2] = (o * I - s * A + h * P) * T,
            t[3] = (r * I - i * k - a * C) * T,
            t[4] = (n * k - r * A + a * S) * T,
            t[5] = (i * A - n * I - a * P) * T,
            t[6] = (p * _ - v * w + m * M) * T,
            t[7] = (v * b - g * _ - m * x) * T,
            t[8] = (g * w - p * b + m * y) * T,
            t
        }
        ,
        e.projection = function(t, e, n) {
            return t[0] = 2 / e,
            t[1] = 0,
            t[2] = 0,
            t[3] = 0,
            t[4] = -2 / n,
            t[5] = 0,
            t[6] = -1,
            t[7] = 1,
            t[8] = 1,
            t
        }
        ,
        e.str = function(t) {
            return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
        }
        ,
        e.frob = function(t) {
            return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
        }
        ,
        e.add = function(t, e, n) {
            return t[0] = e[0] + n[0],
            t[1] = e[1] + n[1],
            t[2] = e[2] + n[2],
            t[3] = e[3] + n[3],
            t[4] = e[4] + n[4],
            t[5] = e[5] + n[5],
            t[6] = e[6] + n[6],
            t[7] = e[7] + n[7],
            t[8] = e[8] + n[8],
            t
        }
        ,
        e.subtract = a,
        e.multiplyScalar = function(t, e, n) {
            return t[0] = e[0] * n,
            t[1] = e[1] * n,
            t[2] = e[2] * n,
            t[3] = e[3] * n,
            t[4] = e[4] * n,
            t[5] = e[5] * n,
            t[6] = e[6] * n,
            t[7] = e[7] * n,
            t[8] = e[8] * n,
            t
        }
        ,
        e.multiplyScalarAndAdd = function(t, e, n, i) {
            return t[0] = e[0] + n[0] * i,
            t[1] = e[1] + n[1] * i,
            t[2] = e[2] + n[2] * i,
            t[3] = e[3] + n[3] * i,
            t[4] = e[4] + n[4] * i,
            t[5] = e[5] + n[5] * i,
            t[6] = e[6] + n[6] * i,
            t[7] = e[7] + n[7] * i,
            t[8] = e[8] + n[8] * i,
            t
        }
        ,
        e.exactEquals = function(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
        }
        ,
        e.equals = function(t, e) {
            var n = t[0]
              , r = t[1]
              , a = t[2]
              , o = t[3]
              , s = t[4]
              , u = t[5]
              , h = t[6]
              , c = t[7]
              , l = t[8]
              , f = e[0]
              , d = e[1]
              , g = e[2]
              , p = e[3]
              , v = e[4]
              , m = e[5]
              , y = e[6]
              , x = e[7]
              , b = e[8];
            return Math.abs(n - f) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(r - d) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(a - g) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(o - p) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(s - v) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(u - m) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(m)) && Math.abs(h - y) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(y)) && Math.abs(c - x) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(x)) && Math.abs(l - b) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(b))
        }
        ;
        var i = function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t,
            e
        }(n(35));
        function r(t, e, n) {
            var i = e[0]
              , r = e[1]
              , a = e[2]
              , o = e[3]
              , s = e[4]
              , u = e[5]
              , h = e[6]
              , c = e[7]
              , l = e[8]
              , f = n[0]
              , d = n[1]
              , g = n[2]
              , p = n[3]
              , v = n[4]
              , m = n[5]
              , y = n[6]
              , x = n[7]
              , b = n[8];
            return t[0] = f * i + d * o + g * h,
            t[1] = f * r + d * s + g * c,
            t[2] = f * a + d * u + g * l,
            t[3] = p * i + v * o + m * h,
            t[4] = p * r + v * s + m * c,
            t[5] = p * a + v * u + m * l,
            t[6] = y * i + x * o + b * h,
            t[7] = y * r + x * s + b * c,
            t[8] = y * a + x * u + b * l,
            t
        }
        function a(t, e, n) {
            return t[0] = e[0] - n[0],
            t[1] = e[1] - n[1],
            t[2] = e[2] - n[2],
            t[3] = e[3] - n[3],
            t[4] = e[4] - n[4],
            t[5] = e[5] - n[5],
            t[6] = e[6] - n[6],
            t[7] = e[7] - n[7],
            t[8] = e[8] - n[8],
            t
        }
        e.mul = r,
        e.sub = a
    }
    , function(t, e) {
        t.exports = function(t) {
            return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                return setTimeout(t, 16)
            }
            )(t)
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            return (t % e + e) % e
        }
    }
    , function(t, e) {
        var n = 180 / Math.PI;
        t.exports = function(t) {
            return n * t
        }
    }
    , function(t, e) {
        var n = Math.PI / 180;
        t.exports = function(t) {
            return n * t
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-5;
            return Math.abs(t - e) < n
        }
    }
    , function(t, e) {
        var n = Array.prototype
          , i = n.splice
          , r = n.indexOf
          , a = n.slice;
        t.exports = function(t) {
            for (var e = a.call(arguments, 1), n = 0; n < e.length; n++)
                for (var o = e[n], s = -1; (s = r.call(t, o)) > -1; )
                    i.call(t, s, 1);
            return t
        }
    }
    , function(t, e, n) {
        var i = n(12)
          , r = n(20)
          , a = n(8);
        t.exports = function t(e, n) {
            if (e === n)
                return !0;
            if (!e || !n)
                return !1;
            if (a(e) || a(n))
                return !1;
            if (r(e) || r(n)) {
                if (e.length !== n.length)
                    return !1;
                for (var o = !0, s = 0; s < e.length && (o = t(e[s], n[s])); s++)
                    ;
                return o
            }
            if (i(e) || i(n)) {
                var u = Object.keys(e)
                  , h = Object.keys(n);
                if (u.length !== h.length)
                    return !1;
                for (var c = !0, l = 0; l < u.length && (c = t(e[u[l]], n[u[l]])); l++)
                    ;
                return c
            }
            return !1
        }
    }
    , function(t, e, n) {
        var i = n(6);
        t.exports = function(t) {
            return i(t) ? "" : t.toString()
        }
    }
    , function(t, e) {
        var n = Object.prototype;
        t.exports = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || n)
        }
    }
    , function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).replace(/^\[object /, "").replace(/\]$/, "")
        }
    }
    , function(t, e, n) {
        var i = n(6)
          , r = n(20)
          , a = n(137)
          , o = n(136)
          , s = Object.prototype.hasOwnProperty;
        t.exports = function(t) {
            if (i(t))
                return !0;
            if (r(t))
                return !t.length;
            var e = a(t);
            if ("Map" === e || "Set" === e)
                return !t.size;
            if (o(t))
                return !Object.keys(t).length;
            for (var n in t)
                if (s.call(t, n))
                    return !1;
            return !0
        }
    }
    , function(t, e, n) {
        var i = n(2);
        t.exports = function(t) {
            return i(t, "Boolean")
        }
    }
    , function(t, e, n) {
        var i = n(0)
          , r = n(124)
          , a = n(63)
          , o = n(117)
          , s = n(116)
          , u = function t(e) {
            t.superclass.constructor.call(this, e)
        };
        u.CFG = {
            eventEnable: !0,
            width: null,
            height: null,
            widthCanvas: null,
            heightCanvas: null,
            widthStyle: null,
            heightStyle: null,
            containerDOM: null,
            canvasDOM: null,
            pixelRatio: null,
            renderer: "canvas"
        },
        i.extend(u, a),
        i.augment(u, r, {
            init: function() {
                u.superclass.init.call(this),
                this._setGlobalParam(),
                this._setContainer(),
                this._initPainter(),
                this._scale(),
                this.get("eventEnable") && this.registerEvent(this)
            },
            _scale: function() {
                if ("svg" !== this._cfg.renderType) {
                    var t = this.get("pixelRatio");
                    this.scale(t, t)
                }
            },
            _setGlobalParam: function() {
                var t = this.get("renderer") || "canvas";
                "svg" === t ? this.set("pixelRatio", 1) : this.get("pixelRatio") || this.set("pixelRatio", i.getRatio()),
                this._cfg.renderType = t;
                var e = s[t];
                this._cfg.renderer = e,
                this._cfg.canvas = this;
                var n = new o(this);
                this._cfg.timeline = n
            },
            _setContainer: function() {
                var t = this.get("containerId")
                  , e = this.get("containerDOM");
                e || (e = document.getElementById(t),
                this.set("containerDOM", e)),
                i.modifyCSS(e, {
                    position: "relative"
                })
            },
            _initPainter: function() {
                var t = this.get("containerDOM")
                  , e = new this._cfg.renderer.painter(t);
                this._cfg.painter = e,
                this._cfg.canvasDOM = this._cfg.el = e.canvas,
                this.changeSize(this.get("width"), this.get("height"))
            },
            _resize: function() {
                var t = this.get("canvasDOM")
                  , e = this.get("widthCanvas")
                  , n = this.get("heightCanvas")
                  , i = this.get("widthStyle")
                  , r = this.get("heightStyle");
                t.style.width = i,
                t.style.height = r,
                t.setAttribute("width", e),
                t.setAttribute("height", n)
            },
            getWidth: function() {
                var t = this.get("pixelRatio");
                return this.get("width") * t
            },
            getHeight: function() {
                var t = this.get("pixelRatio");
                return this.get("height") * t
            },
            changeSize: function(t, e) {
                var n = this.get("pixelRatio")
                  , i = t * n
                  , r = e * n;
                this.set("widthCanvas", i),
                this.set("heightCanvas", r),
                this.set("widthStyle", t + "px"),
                this.set("heightStyle", e + "px"),
                this.set("width", t),
                this.set("height", e),
                this._resize()
            },
            getPointByClient: function(t, e) {
                var n = this.get("el")
                  , i = this.get("pixelRatio") || 1
                  , r = n.getBoundingClientRect();
                return {
                    x: (t - r.left) * i,
                    y: (e - r.top) * i
                }
            },
            getClientByPoint: function(t, e) {
                var n = this.get("el").getBoundingClientRect()
                  , i = this.get("pixelRatio") || 1;
                return {
                    clientX: t / i + n.left,
                    clientY: e / i + n.top
                }
            },
            draw: function() {
                this._cfg.painter.draw(this)
            },
            getShape: function(t, e, n) {
                return 3 === arguments.length && this._cfg.renderer.getShape ? this._cfg.renderer.getShape.call(this, t, e, n) : u.superclass.getShape.call(this, t, e)
            },
            getRenderer: function() {
                return this._cfg.renderType
            },
            _drawSync: function() {
                this._cfg.painter.drawSync(this)
            },
            destroy: function() {
                var t = this._cfg
                  , e = t.containerDOM
                  , n = t.canvasDOM;
                n && e && e.removeChild(n),
                t.timeline.stop(),
                u.superclass.destroy.call(this)
            }
        }),
        t.exports = u
    }
    , function(t, e, n) {
        var i = n(14)
          , r = n(28)
          , a = n(46)
          , o = n(43)
          , s = {
            Graph: n(41),
            TreeGraph: n(77),
            Util: n(1),
            G: r,
            Global: i,
            Shape: a,
            registerNode: a.registerNode,
            registerEdge: a.registerEdge,
            registerBehavior: o.registerBehavior,
            version: i.version
        };
        t.exports = s
    }
    ])
});
//# sourceMappingURL=g6.js.map
