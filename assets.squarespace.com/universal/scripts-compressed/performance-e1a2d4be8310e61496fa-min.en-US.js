"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [52730], {
        597925: function(O, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), w.default = void 0;
            var y;
            (function(f) {
                f.MAIN_CONTENT = 1, f.CONTENT_COLLECTION = 1, f.PAGE = 2, f.SPLASH_PAGE = 3, f.CONTENT_ITEM = 50, f.NOT_FOUND = 100, f.ERROR = 101, f.SEARCH = 102, f.LOCK_SCREEN = 103, f.POPUP_OVERLAY = 104, f.PROTECTED_CONTENT = 105, f.MEMBER_AREA_ACCESS_DENIED = 106, f.PAYWALL = 107, f.SHOW_CART = 200, f.CHECKOUT = 201, f.ORDER_CONFIRMED = 202, f.DONATE = 203, f.CONTRIBUTION_CONFIRMED = 204, f.COMMERCE_CART_V2 = 205, f.SUBSCRIPTION_CONFIRMED = 206, f.ORDER_RECEIVED = 207, f.MEMBERSHIP_CONFIRMED = 208, f.REVIEWS_REQUEST = 209, f.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210, f.ORDER_STATUS = 211, f.NEWSLETTER_UNSUBSCRIBE = 300, f.COMMERCE_EMAIL_PREVIEW = 301, f.SSO_PAGE = 400
            })(y || (y = {}));
            var T = y;
            w.default = T, O.exports = w.default
        },
        593869: function(O, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            }), w.default = void 0;
            var y;
            (function(f) {
                f.EXPIRED = 1, f.PASTDUE = 2, f.TRIAL = 3, f.BETA = 4, f.REMOVED = 5, f.INTERNAL = 6, f.COMPED = 7, f.PAID = 8, f.V5_LINKED = 11, f.ACTIVE_PARKING_PAGE = 12, f.RESOLD = 13, f.RESOLD_GRACE_PERIOD = 14, f.ENTERPRISE = 15
            })(y || (y = {}));
            var T = y;
            w.default = T, O.exports = w.default
        },
        933441: function(O, w, y) {
            var T;
            T = {
                value: !0
            };
            var f = y(317500),
                E = D(y(593869)),
                Y = D(y(597925)),
                R = y(5814);

            function W(d, v, b) {
                return v in d ? Object.defineProperty(d, v, {
                    value: b,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : d[v] = b, d
            }

            function D(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function j(d) {
                for (var v = 1; v < arguments.length; v++) {
                    var b = arguments[v] != null ? arguments[v] : {},
                        I = Object.keys(b);
                    typeof Object.getOwnPropertySymbols == "function" && (I = I.concat(Object.getOwnPropertySymbols(b).filter(function(x) {
                        return Object.getOwnPropertyDescriptor(b, x).enumerable
                    }))), I.forEach(function(x) {
                        W(d, x, b[x])
                    })
                }
                return d
            }
            var _ = window.Static && window.Static.SQUARESPACE_CONTEXT,
                C = window.top !== window,
                F = Object.freeze(W({}, Y.default.COMMERCE_CART_V2, "commerce-cart"));

            function H() {
                var d = window.location && window.location.pathname || "";
                return !C && /^\/config(\/.*)?$/.test(d)
            }

            function A() {
                return {
                    inFrame: C,
                    templateId: _.templateId || "",
                    impersonatedSession: !!_.impersonatedSession,
                    pageType: typeof _.pageType == "number" ? _.pageType : -1
                }
            }

            function P() {
                var d = _.website,
                    v = d === void 0 ? {} : d;
                return {
                    authenticUrl: v.authenticUrl || "",
                    cloneable: !!v.cloneable,
                    developerMode: !!v.developerMode,
                    isHstsEnabled: !!v.isHstsEnabled,
                    language: v.language || "",
                    timeZone: v.timeZone || "",
                    websiteId: v.id || "",
                    websiteType: v.websiteType || -1
                }
            }

            function z() {
                var d = _.websiteSettings,
                    v = d === void 0 ? {} : d;
                return {
                    ampEnabled: !!v.ampEnabled
                }
            }

            function S() {
                var d = _.collection,
                    v = d === void 0 ? {} : d;
                return {
                    collectionType: v.type || -1
                }
            }

            function U() {
                return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
            }

            function l() {
                return _.hasOwnProperty("templateVersion") ? _.templateVersion.replace(".", "_") : U() ? "8" : null
            }

            function h(d) {
                var v = H(),
                    b = F[_.pageType],
                    I = {
                        appName: b || "v".concat(d, "-").concat(v ? "config" : "user-sites"),
                        context: j({}, A(), P(), z(), S()),
                        captureException: function($, ee) {
                            (0, R.withScope)(function(te) {
                                te.setTag("product_area", "rum-collector"), ee !== void 0 && te.setExtra("extras", ee), (0, R.captureException)($)
                            })
                        }
                    };
                if (v) {
                    var x = _.website.siteStatus.value === E.default.INTERNAL,
                        ie = _.authenticatedAccount,
                        ae = ie.createdOn,
                        Z = ie.id;
                    I.context.isInternal = x, I.context.createdOn = ae, I.context.memberId = Z
                }
                return I
            }

            function m() {
                if (_) {
                    var d = l();
                    if (d === null) return;
                    var v = h(d);
                    (0, f.init)(v)
                }
            }
            m()
        },
        5814: function(O, w) {
            Object.defineProperty(w, "__esModule", {
                value: !0
            });

            function y(l, h) {
                for (var m in h) Object.defineProperty(l, m, {
                    enumerable: !0,
                    get: h[m]
                })
            }
            y(w, {
                addBreadcrumb: function() {
                    return j
                },
                captureMessage: function() {
                    return _
                },
                captureException: function() {
                    return C
                },
                captureEvent: function() {
                    return F
                },
                configureScope: function() {
                    return H
                },
                withScope: function() {
                    return A
                },
                isSentryConnected: function() {
                    return U
                }
            });

            function T(l, h) {
                (h == null || h > l.length) && (h = l.length);
                for (var m = 0, d = new Array(h); m < h; m++) d[m] = l[m];
                return d
            }

            function f(l) {
                if (Array.isArray(l)) return T(l)
            }

            function E(l) {
                if (typeof Symbol != "undefined" && l[Symbol.iterator] != null || l["@@iterator"] != null) return Array.from(l)
            }

            function Y() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function R(l) {
                return f(l) || E(l) || W(l) || Y()
            }

            function W(l, h) {
                if (l) {
                    if (typeof l == "string") return T(l, h);
                    var m = Object.prototype.toString.call(l).slice(8, -1);
                    if (m === "Object" && l.constructor && (m = l.constructor.name), m === "Map" || m === "Set") return Array.from(m);
                    if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)) return T(l, h)
                }
            }
            var D = function() {},
                j, _, C, F, H, A, P = function(l) {
                    return function(h) {
                        for (var m = arguments.length, d = new Array(m > 1 ? m - 1 : 0), v = 1; v < m; v++) d[v - 1] = arguments[v];
                        var b;
                        return (b = console).log.apply(b, ["[Sentry][".concat(l, "] ").concat(h)].concat(R(d))), "some-error-identifier"
                    }
                },
                z = !1,
                S = function(l) {
                    var h = l.category,
                        m = l.message;
                    console.log("[Sentry][addBreadcrumb] (".concat(h, ") ").concat(m))
                },
                U = !1;
            window.SQUARESPACE_SENTRY ? (U = !0, j = window.SQUARESPACE_SENTRY.addBreadcrumb, _ = window.SQUARESPACE_SENTRY.captureMessage, C = window.SQUARESPACE_SENTRY.captureException, F = window.SQUARESPACE_SENTRY.captureEvent, H = window.SQUARESPACE_SENTRY.configureScope, A = window.SQUARESPACE_SENTRY.withScope) : (console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."), j = z ? S : D, _ = P("captureMessage"), C = P("captureException"), F = P("captureEvent"), H = D, A = function(l) {
                var h = new Proxy({}, {
                    get: function() {
                        return D
                    }
                });
                P("withScope")("", h), l(h)
            })
        },
        317500: function(O) {
            function w(t, e) {
                (e == null || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function y(t) {
                if (Array.isArray(t)) return t
            }

            function T(t) {
                if (Array.isArray(t)) return w(t)
            }

            function f(t, e, n, r, i, a, o) {
                try {
                    var u = t[a](o),
                        s = u.value
                } catch (c) {
                    n(c);
                    return
                }
                u.done ? e(s) : Promise.resolve(s).then(r, i)
            }

            function E(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, i) {
                        var a = t.apply(e, n);

                        function o(s) {
                            f(a, r, i, o, u, "next", s)
                        }

                        function u(s) {
                            f(a, r, i, o, u, "throw", s)
                        }
                        o(void 0)
                    })
                }
            }

            function Y(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function R(t, e) {
                return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
            }

            function W(t) {
                if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
            }

            function D(t, e) {
                var n = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
                if (n != null) {
                    var r = [],
                        i = !0,
                        a = !1,
                        o, u;
                    try {
                        for (n = n.call(t); !(i = (o = n.next()).done) && (r.push(o.value), !(e && r.length === e)); i = !0);
                    } catch (s) {
                        a = !0, u = s
                    } finally {
                        try {
                            !i && n.return != null && n.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    return r
                }
            }

            function j() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function _() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e] != null ? arguments[e] : {},
                        r = Object.keys(n);
                    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
                        return Object.getOwnPropertyDescriptor(n, i).enumerable
                    }))), r.forEach(function(i) {
                        Y(t, i, n[i])
                    })
                }
                return t
            }

            function F(t, e) {
                if (t == null) return {};
                var n = H(t, e),
                    r, i;
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (i = 0; i < a.length; i++) r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                }
                return n
            }

            function H(t, e) {
                if (t == null) return {};
                var n = {},
                    r = Object.keys(t),
                    i, a;
                for (a = 0; a < r.length; a++) i = r[a], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
                return n
            }

            function A(t, e) {
                return y(t) || D(t, e) || z(t, e) || j()
            }

            function P(t) {
                return T(t) || W(t) || z(t) || _()
            }

            function z(t, e) {
                if (t) {
                    if (typeof t == "string") return w(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(n);
                    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e)
                }
            }

            function S(t, e) {
                var n, r, i, a, o = {
                    label: 0,
                    sent: function() {
                        if (i[0] & 1) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function u(c) {
                    return function(p) {
                        return s([c, p])
                    }
                }

                function s(c) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (n = 1, r && (i = c[0] & 2 ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
                        switch (r = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, r = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (i = o.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                    o = 0;
                                    continue
                                }
                                if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (c[0] === 6 && o.label < i[1]) {
                                    o.label = i[1], i = c;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(c);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = e.call(t, o)
                    } catch (p) {
                        c = [6, p], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (c[0] & 5) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            }
            var U = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                h = Object.getOwnPropertyNames,
                m = Object.prototype.hasOwnProperty,
                d = function(t, e) {
                    return function() {
                        return t && (e = (0, t[h(t)[0]])(t = 0)), e
                    }
                },
                v = function(t, e) {
                    for (var n in e) U(t, n, {
                        get: e[n],
                        enumerable: !0
                    })
                },
                b = function(t, e, n, r) {
                    if (e && typeof e == "object" || typeof e == "function") {
                        var i = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (var u = function() {
                                    var p = c.value;
                                    !m.call(t, p) && p !== n && U(t, p, {
                                        get: function() {
                                            return e[p]
                                        },
                                        enumerable: !(r = l(e, p)) || r.enumerable
                                    })
                                }, s = h(e)[Symbol.iterator](), c; !(i = (c = s.next()).done); i = !0) u()
                        } catch (p) {
                            a = !0, o = p
                        } finally {
                            try {
                                !i && s.return != null && s.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                    }
                    return t
                },
                I = function(t) {
                    return b(U({}, "__esModule", {
                        value: !0
                    }), t)
                },
                x, ie = d({
                    "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js": function() {
                        "use strict";
                        x = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
                    }
                }),
                ae = {};
            v(ae, {
                customAlphabet: function() {
                    return ee
                },
                customRandom: function() {
                    return $
                },
                nanoid: function() {
                    return te
                },
                random: function() {
                    return Z
                },
                urlAlphabet: function() {
                    return x
                }
            });
            var Z, $, ee, te, Lt = d({
                    "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/index.browser.js": function() {
                        "use strict";
                        ie(), Z = function(t) {
                            return crypto.getRandomValues(new Uint8Array(t))
                        }, $ = function(t, e, n) {
                            var r = (2 << Math.log(t.length - 1) / Math.LN2) - 1,
                                i = -~(1.6 * r * e / t.length);
                            return function() {
                                for (var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e, o = "";;)
                                    for (var u = n(i), s = i; s--;)
                                        if (o += t[u[s] & r] || "", o.length === a) return o
                            }
                        }, ee = function(t) {
                            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 21;
                            return $(t, e, Z)
                        }, te = function() {
                            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
                            return crypto.getRandomValues(new Uint8Array(t)).reduce(function(e, n) {
                                return n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e
                            }, "")
                        }
                    }
                }),
                xe = {};
            v(xe, {
                RUM_PREFIX: function() {
                    return J
                },
                default: function() {
                    return kn
                },
                getA11yData: function() {
                    return mt
                },
                getCumulativeLayoutShift: function() {
                    return st
                },
                getDomainLookup: function() {
                    return je
                },
                getFirstContentfulPaint: function() {
                    return ft
                },
                getFirstInputDelay: function() {
                    return dt
                },
                getInteractionToNextPaint: function() {
                    return lt
                },
                getLargestContentfulPaint: function() {
                    return vt
                },
                getNavigationTimingType: function() {
                    return Fe
                },
                getPerformanceMetrics: function() {
                    return Re
                },
                getServerTiming: function() {
                    return He
                },
                getTcpConnection: function() {
                    return Ve
                },
                getTlsNegotiation: function() {
                    return qe
                },
                init: function() {
                    return Ct
                },
                mark: function() {
                    return wn
                },
                measure: function() {
                    return _n
                },
                trackEventsV2Factory: function() {
                    return Dn
                },
                trackLoadPerformance: function() {
                    return Un
                },
                trackSqspImages: function() {
                    return _t
                }
            }), O.exports = I(xe);
            var De = {};
            v(De, {
                getCumulativeLayoutShift: function() {
                    return st
                },
                getDomainLookup: function() {
                    return je
                },
                getFirstContentfulPaint: function() {
                    return ft
                },
                getFirstInputDelay: function() {
                    return dt
                },
                getInteractionToNextPaint: function() {
                    return lt
                },
                getLargestContentfulPaint: function() {
                    return vt
                },
                getNavigationTimingType: function() {
                    return Fe
                },
                getServerTiming: function() {
                    return He
                },
                getTcpConnection: function() {
                    return Ve
                },
                getTlsNegotiation: function() {
                    return qe
                }
            });
            var Mt = "/api/1/performance/records",
                xt = "load",
                ge = "visibilitychange",
                Dt = ["Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", " ", "Enter"],
                Ut = "SS_MID",
                kt = "SS_ANALYTICS_ID",
                Bt = 3e4,
                jt = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i,
                Ft = "4.12.1",
                he = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return new Promise(function(i, a) {
                            try {
                                t.apply(void 0, [function(o) {
                                    i(o)
                                }].concat(P(n)))
                            } catch (o) {
                                a(o)
                            }
                        })
                    }
                },
                Ue = function(t) {
                    return he(setTimeout)(t)
                },
                ke = function() {
                    return he(function(t) {
                        var e = function(n) {
                            (n.type === "pagehide" || document.visibilityState === "hidden") && (t(n), removeEventListener("visibilitychange", e, !0), removeEventListener("pagehide", e, !0))
                        };
                        window.addEventListener("visibilitychange", e, !0), window.addEventListener("pagehide", e, !0)
                    })()
                },
                Ht = function(t) {
                    document.readyState === "complete" ? window.setTimeout(t, 0) : window.addEventListener("pageshow", t, {
                        once: !0
                    })
                },
                Vt = function() {
                    return he(Ht)
                },
                qt = function() {
                    var t = {
                            entryType: "navigation",
                            startTime: 0
                        },
                        e = performance.timing;
                    for (var n in e)
                        if (n !== "navigationStart" && n !== "toJSON") {
                            var r = Math.max(e[n] - e.navigationStart, 0);
                            t[n] = r
                        }
                    return t
                },
                we = function() {
                    var t = E(function() {
                        var e, n;
                        return S(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, Vt()];
                                case 1:
                                    return r.sent(), e = A(window.performance.getEntriesByType("navigation"), 1), n = e[0], [2, n != null ? n : qt()]
                            }
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                V = function() {
                    var t = E(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, we()];
                                case 1:
                                    return n = i.sent(), r = n[e], typeof r != "number" || r < 0 || r > 2147483647 ? [2] : [2, Math.round(r)]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                Qt = function() {
                    var t = E(function() {
                        var e;
                        return S(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, we()];
                                case 1:
                                    return e = n.sent(), [2, e.serverTiming]
                            }
                        })
                    });
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                Be = function() {
                    var t = E(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, we()];
                                case 1:
                                    return n = i.sent(), r = n[e], typeof r != "string" ? [2] : [2, r]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                _e = function(t, e) {
                    if (typeof t == "number" && typeof e == "number" && t >= e) return t - e
                },
                je = function(t) {
                    return Promise.all([V("domainLookupEnd"), V("domainLookupStart")]).then(function(e) {
                        var n = A(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            domainLookup: _e(r, i)
                        })
                    })
                },
                Fe = function(t) {
                    return Be("type").then(function(e) {
                        t({
                            navigationTimingType: e
                        })
                    })
                },
                He = function(t) {
                    return Qt().then(function(e) {
                        t({
                            serverTiming: JSON.stringify(e)
                        })
                    })
                },
                Ve = function(t) {
                    return Promise.all([V("connectEnd"), V("connectStart")]).then(function(e) {
                        var n = A(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            tcpConnection: _e(r, i)
                        })
                    })
                },
                qe = function(t) {
                    return Promise.all([V("connectEnd"), V("secureConnectionStart")]).then(function(e) {
                        var n = A(e, 2),
                            r = n[0],
                            i = n[1];
                        t({
                            tlsNegotiation: _e(r, i)
                        })
                    })
                },
                k, ne, Qe, oe, ye, Ye = -1,
                G = function(e) {
                    addEventListener("pageshow", function(n) {
                        n.persisted && (Ye = n.timeStamp, e(n))
                    }, !0)
                },
                We = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                },
                Ee = function() {
                    var e = We();
                    return e && e.activationStart || 0
                },
                N = function(e, n) {
                    var r = We(),
                        i = "navigate";
                    return Ye >= 0 ? i = "back-forward-cache" : r && (i = document.prerendering || Ee() > 0 ? "prerender" : document.wasDiscarded ? "restore" : r.type.replace(/_/g, "-")), {
                        name: e,
                        value: n === void 0 ? -1 : n,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: i
                    }
                },
                X = function(e, n, r) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var i = new PerformanceObserver(function(a) {
                                Promise.resolve().then(function() {
                                    n(a.getEntries())
                                })
                            });
                            return i.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, r || {})), i
                        }
                    } catch (a) {}
                },
                L = function(e, n, r, i) {
                    var a, o;
                    return function(u) {
                        n.value >= 0 && (u || i) && ((o = n.value - (a || 0)) || a === void 0) && (a = n.value, n.delta = o, n.rating = function(s, c) {
                            return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
                        }(n.value, r), e(n))
                    }
                },
                Se = function(e) {
                    requestAnimationFrame(function() {
                        return requestAnimationFrame(function() {
                            return e()
                        })
                    })
                },
                ue = function(e) {
                    var n = function(i) {
                        i.type !== "pagehide" && document.visibilityState !== "hidden" || e(i)
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                be = function(e) {
                    var n = !1;
                    return function(r) {
                        n || (e(r), n = !0)
                    }
                },
                K = -1,
                ze = function() {
                    return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
                },
                ce = function(e) {
                    document.visibilityState === "hidden" && K > -1 && (K = e.type === "visibilitychange" ? e.timeStamp : 0, Yt())
                },
                Ge = function() {
                    addEventListener("visibilitychange", ce, !0), addEventListener("prerenderingchange", ce, !0)
                },
                Yt = function() {
                    removeEventListener("visibilitychange", ce, !0), removeEventListener("prerenderingchange", ce, !0)
                },
                Te = function() {
                    return K < 0 && (K = ze(), Ge(), G(function() {
                        setTimeout(function() {
                            K = ze(), Ge()
                        }, 0)
                    })), {
                        get firstHiddenTime() {
                            return K
                        }
                    }
                },
                se = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", function() {
                        return e()
                    }, !0) : e()
                },
                Xe = [1800, 3e3],
                Ke = function(e, n) {
                    n = n || {}, se(function() {
                        var r, i = Te(),
                            a = N("FCP"),
                            o = X("paint", function(u) {
                                u.forEach(function(s) {
                                    s.name === "first-contentful-paint" && (o.disconnect(), s.startTime < i.firstHiddenTime && (a.value = Math.max(s.startTime - Ee(), 0), a.entries.push(s), r(!0)))
                                })
                            });
                        o && (r = L(e, a, Xe, n.reportAllChanges), G(function(u) {
                            a = N("FCP"), r = L(e, a, Xe, n.reportAllChanges), Se(function() {
                                a.value = performance.now() - u.timeStamp, r(!0)
                            })
                        }))
                    })
                },
                Je = [.1, .25],
                Wt = function(e, n) {
                    n = n || {}, Ke(be(function() {
                        var r, i = N("CLS", 0),
                            a = 0,
                            o = [],
                            u = function(p) {
                                p.forEach(function(g) {
                                    if (!g.hadRecentInput) {
                                        var Q = o[0],
                                            B = o[o.length - 1];
                                        a && g.startTime - B.startTime < 1e3 && g.startTime - Q.startTime < 5e3 ? (a += g.value, o.push(g)) : (a = g.value, o = [g])
                                    }
                                }), a > i.value && (i.value = a, i.entries = o, r())
                            },
                            s = X("layout-shift", u);
                        s && (r = L(e, i, Je, n.reportAllChanges), ue(function() {
                            u(s.takeRecords()), r(!0)
                        }), G(function() {
                            a = 0, i = N("CLS", 0), r = L(e, i, Je, n.reportAllChanges), Se(function() {
                                return r()
                            })
                        }), setTimeout(r, 0))
                    }))
                },
                re = {
                    passive: !0,
                    capture: !0
                },
                zt = new Date,
                Ze = function(e, n) {
                    k || (k = n, ne = e, Qe = new Date, et(removeEventListener), $e())
                },
                $e = function() {
                    if (ne >= 0 && ne < Qe - zt) {
                        var e = {
                            entryType: "first-input",
                            name: k.type,
                            target: k.target,
                            cancelable: k.cancelable,
                            startTime: k.timeStamp,
                            processingStart: k.timeStamp + ne
                        };
                        oe.forEach(function(n) {
                            n(e)
                        }), oe = []
                    }
                },
                Gt = function(e) {
                    if (e.cancelable) {
                        var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        e.type == "pointerdown" ? function(r, i) {
                            var a = function() {
                                    Ze(r, i), u()
                                },
                                o = function() {
                                    u()
                                },
                                u = function() {
                                    removeEventListener("pointerup", a, re), removeEventListener("pointercancel", o, re)
                                };
                            addEventListener("pointerup", a, re), addEventListener("pointercancel", o, re)
                        }(n, e) : Ze(n, e)
                    }
                },
                et = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                        return e(n, Gt, re)
                    })
                },
                tt = [100, 300],
                Xt = function(e, n) {
                    n = n || {}, se(function() {
                        var r, i = Te(),
                            a = N("FID"),
                            o = function(p) {
                                p.startTime < i.firstHiddenTime && (a.value = p.processingStart - p.startTime, a.entries.push(p), r(!0))
                            },
                            u = function(p) {
                                p.forEach(o)
                            },
                            s = X("first-input", u);
                        r = L(e, a, tt, n.reportAllChanges), s && ue(be(function() {
                            u(s.takeRecords()), s.disconnect()
                        })), s && G(function() {
                            var c;
                            a = N("FID"), r = L(e, a, tt, n.reportAllChanges), oe = [], ne = -1, k = null, et(addEventListener), c = o, oe.push(c), $e()
                        })
                    })
                },
                nt = 0,
                Ae = 1 / 0,
                fe = 0,
                Kt = function(e) {
                    e.forEach(function(n) {
                        n.interactionId && (Ae = Math.min(Ae, n.interactionId), fe = Math.max(fe, n.interactionId), nt = fe ? (fe - Ae) / 7 + 1 : 0)
                    })
                },
                rt = function() {
                    return ye ? nt : performance.interactionCount || 0
                },
                Jt = function() {
                    "interactionCount" in performance || ye || (ye = X("event", Kt, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                },
                it = [200, 500],
                at = 0,
                ot = function() {
                    return rt() - at
                },
                M = [],
                Ce = {},
                ut = function(e) {
                    var n = M[M.length - 1],
                        r = Ce[e.interactionId];
                    if (r || M.length < 10 || e.duration > n.latency) {
                        if (r) r.entries.push(e), r.latency = Math.max(r.latency, e.duration);
                        else {
                            var i = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            Ce[i.id] = i, M.push(i)
                        }
                        M.sort(function(a, o) {
                            return o.latency - a.latency
                        }), M.splice(10).forEach(function(a) {
                            delete Ce[a.id]
                        })
                    }
                },
                Zt = function(e, n) {
                    n = n || {}, se(function() {
                        Jt();
                        var r, i = N("INP"),
                            a = function(s) {
                                s.forEach(function(g) {
                                    g.interactionId && ut(g), g.entryType === "first-input" && !M.some(function(Q) {
                                        return Q.entries.some(function(B) {
                                            return g.duration === B.duration && g.startTime === B.startTime
                                        })
                                    }) && ut(g)
                                });
                                var c, p = (c = Math.min(M.length - 1, Math.floor(ot() / 50)), M[c]);
                                p && p.latency !== i.value && (i.value = p.latency, i.entries = p.entries, r())
                            },
                            o = X("event", a, {
                                durationThreshold: n.durationThreshold || 40
                            });
                        r = L(e, i, it, n.reportAllChanges), o && (o.observe({
                            type: "first-input",
                            buffered: !0
                        }), ue(function() {
                            a(o.takeRecords()), i.value < 0 && ot() > 0 && (i.value = 0, i.entries = []), r(!0)
                        }), G(function() {
                            M = [], at = rt(), i = N("INP"), r = L(e, i, it, n.reportAllChanges)
                        }))
                    })
                },
                ct = [2500, 4e3],
                Oe = {},
                $t = function(e, n) {
                    n = n || {}, se(function() {
                        var r, i = Te(),
                            a = N("LCP"),
                            o = function(p) {
                                var g = p[p.length - 1];
                                g && g.startTime < i.firstHiddenTime && (a.value = Math.max(g.startTime - Ee(), 0), a.entries = [g], r())
                            },
                            u = X("largest-contentful-paint", o);
                        if (u) {
                            r = L(e, a, ct, n.reportAllChanges);
                            var s = be(function() {
                                Oe[a.id] || (o(u.takeRecords()), u.disconnect(), Oe[a.id] = !0, r(!0))
                            });
                            ["keydown", "click"].forEach(function(c) {
                                addEventListener(c, s, !0)
                            }), ue(s), G(function(c) {
                                a = N("LCP"), r = L(e, a, ct, n.reportAllChanges), Se(function() {
                                    a.value = performance.now() - c.timeStamp, Oe[a.id] = !0, r(!0)
                                })
                            })
                        }
                    })
                },
                de = function(t) {
                    return t ? Math.round(t.value) : void 0
                },
                st = function(t) {
                    Wt(function(e) {
                        var n;
                        t({
                            cumulativeLayoutShift: (n = e == null ? void 0 : e.value) !== null && n !== void 0 ? n : void 0
                        })
                    }, {
                        reportAllChanges: !0
                    })
                },
                ft = function(t) {
                    Ke(function(e) {
                        return t({
                            firstContentfulPaint: de(e)
                        })
                    })
                },
                dt = function(t) {
                    Xt(function(e) {
                        return t({
                            firstInputDelay: de(e)
                        })
                    })
                },
                lt = function(t) {
                    Zt(function(e) {
                        return t({
                            interactionToNextPaint: de(e)
                        })
                    })
                },
                vt = function(t) {
                    $t(function(e) {
                        return t({
                            largestContentfulPaint: de(e)
                        })
                    })
                },
                en = ["connectEnd", "connectStart", "decodedBodySize", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "encodedBodySize", "fetchStart", "loadEventEnd", "loadEventStart", "redirectCount", "redirectEnd", "redirectStart", "responseStart", "responseEnd", "responseStatus", "secureConnectionStart", "transferSize", "unloadEventEnd", "unloadEventStart", "workerStart"],
                tn = ["initiatorType", "nextHopProtocol"],
                pt = function(t, e) {
                    return function() {
                        var n = E(function(r) {
                            var i, a, o, u, s;
                            return S(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 2, , 3]), i = [{}, r], [4, t(r)];
                                    case 1:
                                        return e.apply(void 0, [Y.apply(void 0, i.concat([c.sent()]))]), [3, 3];
                                    case 2:
                                        return a = c.sent(), (s = window) === null || s === void 0 || (u = s.SQUARESPACE_SENTRY) === null || u === void 0 || (o = u.captureException) === null || o === void 0 || o.call(u, a), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        });
                        return function(r) {
                            return n.apply(this, arguments)
                        }
                    }()
                };

            function Re(t) {
                Object.values(De).forEach(function() {
                    var e = E(function(n) {
                        var r, i, a, o;
                        return S(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), [4, n(t)];
                                case 1:
                                    return u.sent(), [3, 3];
                                case 2:
                                    return r = u.sent(), (o = window) === null || o === void 0 || (a = o.SQUARESPACE_SENTRY) === null || a === void 0 || (i = a.captureException) === null || i === void 0 || i.call(a, r), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    });
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()), en.forEach(pt(V, t)), tn.forEach(pt(Be, t))
            }
            var nn = ["more", "less", "custom"],
                rn = function() {
                    var t;
                    return (t = nn.find(function(e) {
                        return window.matchMedia("prefers-contrast: ".concat(e)).matches
                    })) !== null && t !== void 0 ? t : "no-preference"
                },
                mt = function() {
                    var t;
                    return {
                        forceColors: window.matchMedia("(forced-colors: active)").matches,
                        networkInformationType: (t = navigator.connection) === null || t === void 0 ? void 0 : t.type,
                        prefersContrast: rn(),
                        prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        primaryInputHasHover: window.matchMedia("(hover: hover)").matches,
                        keyboardUsage: !1
                    }
                },
                an = function(t) {
                    var e = mt(),
                        n = function() {
                            t(e, "a11y")
                        },
                        r = function(i) {
                            var a;
                            ["INPUT", "TEXTAREA"].includes((a = i.target) === null || a === void 0 ? void 0 : a.tagName) || !Dt.includes(i.key) || (e.keyboardUsage = !0, n(), document.removeEventListener("keydown", r))
                        };
                    document.addEventListener("keydown", r), document.addEventListener(ge, function() {
                        document.visibilityState === "hidden" && n()
                    })
                };

            function gt(t) {
                var e = new RegExp("(^| )".concat(t, "=([^;]+)")),
                    n = document.cookie.match(e);
                return n ? n[2] : ""
            }

            function on() {
                return !!(window.PerformanceMeasure && window.PerformanceMark)
            }

            function ht() {
                if (!Object.prototype.hasOwnProperty.call(window, "PerformanceObserver")) return !1;
                try {
                    var t = new window.PerformanceObserver(function() {
                        return null
                    });
                    t.observe({
                        entryTypes: ["mark"]
                    }), t.disconnect()
                } catch (e) {
                    return !1
                }
                return !0
            }

            function wt() {
                var t;
                return typeof((t = window.navigator) === null || t === void 0 ? void 0 : t.sendBeacon) == "function" && !jt.test(window.navigator.userAgent)
            }

            function un() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    e, n, r, i, a, o, u;
                return {
                    context: t,
                    analyticsId: gt(kt),
                    marketingId: gt(Ut),
                    memberId: (r = window.Static) === null || r === void 0 || (n = r.SQUARESPACE_CONTEXT) === null || n === void 0 || (e = n.authenticatedAccount) === null || e === void 0 ? void 0 : e.id,
                    version: Ft,
                    downlink: (i = navigator.connection) === null || i === void 0 ? void 0 : i.downlink,
                    effectiveType: (a = navigator.connection) === null || a === void 0 ? void 0 : a.effectiveType,
                    rtt: (o = navigator.connection) === null || o === void 0 ? void 0 : o.rtt,
                    saveData: (u = navigator.connection) === null || u === void 0 ? void 0 : u.saveData,
                    deliveryType: wt() ? "beacon" : "xhr",
                    devicePixelRatio: window.devicePixelRatio,
                    screenHeight: window.screen.height,
                    screenWidth: window.screen.width,
                    viewportHeight: window.innerHeight,
                    viewportWidth: window.innerWidth,
                    deviceMemory: navigator.deviceMemory,
                    hardwareConcurrency: navigator.hardwareConcurrency,
                    hash: window.location.hash || "",
                    hostname: window.location.hostname || "",
                    pathname: window.location.pathname || "/"
                }
            }
            var cn = function() {
                    var t = E(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = un(e), r = {}, Re(function(a) {
                                        Object.assign(r, a)
                                    }), [4, Promise.race([Ue(6e4), ke()])];
                                case 1:
                                    return i.sent(), [2, C({}, n, r)]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                sn = function() {
                    var t = E(function(e, n) {
                        var r;
                        return S(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, cn(n)];
                                case 1:
                                    return r = i.sent(), e(r, "page_speed"), [2]
                            }
                        })
                    });
                    return function(n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                fn = ["media-www.sqspcdn.com", "images.squarespace-cdn.com", "static1.squarespace.com"],
                dn = function(t) {
                    return fn.some(function(e) {
                        return t.includes(e)
                    })
                },
                ln = function(t) {
                    return t.hasAttribute("data-loader") ? 2 : t.hasAttribute("data-src") ? 1 : 0
                },
                vn = function(t, e) {
                    if (t.hasAttribute("data-image-resolution")) {
                        var n;
                        return Number((n = t.getAttribute("data-image-resolution")) === null || n === void 0 ? void 0 : n.replace("w", ""))
                    }
                    var r = e.indexOf("format=");
                    return r !== -1 ? Number(e.slice(r + 7).replace(/w.*/, "")) : NaN
                },
                pn = function(t, e, n) {
                    if (n === 1 && R(t, HTMLImageElement) && t.naturalHeight === 0) {
                        var r = document.querySelector('div[style*="'.concat(e, '"]'));
                        if (r) return r
                    }
                    return t
                },
                mn = function(t) {
                    if (R(t, HTMLImageElement)) {
                        var e = t.naturalHeight,
                            n = t.naturalWidth,
                            r = t.width,
                            i = t.height;
                        return {
                            naturalHeight: e,
                            naturalWidth: n,
                            width: r,
                            height: i
                        }
                    }
                    var a = t.getBoundingClientRect(),
                        o = Math.floor(a.width),
                        u = Math.floor(a.height);
                    return {
                        naturalHeight: u,
                        naturalWidth: o
                    }
                },
                gn = function() {
                    var t = E(function(e, n) {
                        var r, i, a, o, u, s, c, p, g, Q, B, ve, Rt, Ne, Pt, Le, pe, It;
                        return S(this, function(jn) {
                            r = vn(n, e.name), i = ln(n), a = n.getAttribute("data-loader"), o = n.getAttribute("elementtiming"), u = e.toJSON(), s = u.serverTiming, c = u.workerTiming, p = F(u, ["serverTiming", "workerTiming"]), g = !0, Q = !1, B = void 0;
                            try {
                                for (ve = Object.entries(p)[Symbol.iterator](); !(g = (Rt = ve.next()).done); g = !0) Ne = A(Rt.value, 2), Pt = Ne[0], Le = Ne[1], typeof Le == "number" && (p[Pt] = Math.floor(Le))
                            } catch (Me) {
                                Q = !0, B = Me
                            } finally {
                                try {
                                    !g && ve.return != null && ve.return()
                                } finally {
                                    if (Q) throw B
                                }
                            }
                            return pe = pn(n, e.name, i), It = mn(pe), [2, new Promise(function(Me) {
                                var Nt = new IntersectionObserver(function(Bn) {
                                    Bn.forEach(function(me) {
                                        if (me.target === pe) return Nt.disconnect(), Me(C({
                                            visibleOnLoad: me.isIntersecting,
                                            observationTime: Math.floor(me.time),
                                            intersectionRatio: me.intersectionRatio,
                                            squarespaceSize: r,
                                            imageType: i,
                                            imageLoaderType: a,
                                            elementTiming: o
                                        }, It, p))
                                    })
                                });
                                Nt.observe(pe)
                            })]
                        })
                    });
                    return function(n, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                hn = function() {
                    var t = E(function(e) {
                        var n, r, i, a, o;
                        return S(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return n = e.resource, r = e.deliverMetrics, !(R(n, PerformanceResourceTiming) && n.initiatorType === "img") || !dn(n.name) ? [2] : (i = n.name.replace(/\?.*/, ""), a = Array.from(document.querySelectorAll('img[src="'.concat(n.name, '"], img[data-src*="').concat(i, '"], img[srcset*="').concat(n.name, '"]'))), document.querySelectorAll('picture > source[srcset*="'.concat(n.name, '"]')).forEach(function(s) {
                                        var c = s.parentElement;
                                        c !== null && a.push(c.lastElementChild)
                                    }), a.length !== 1 ? [2] : [4, gn(n, a[0])]);
                                case 1:
                                    return o = u.sent(), r(o, "image"), [2]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                _t = function() {
                    var t = E(function(e) {
                        var n, r;
                        return S(this, function(i) {
                            return ht() ? (n = function(a) {
                                return hn({
                                    resource: a,
                                    deliverMetrics: e
                                })
                            }, performance.getEntriesByType("resource").forEach(n), r = new PerformanceObserver(function(a) {
                                a.getEntries().forEach(n)
                            }), r.observe({
                                entryTypes: ["resource"]
                            }), [2]) : [2]
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }(),
                q, Pe = function(t) {
                    var e = t.spanName,
                        n = t.tracer,
                        r = t.startTime,
                        i = t.spanAttributes,
                        a = i === void 0 ? {} : i;
                    q === void 0 && (q = new Map);
                    var o = n.startSpan(e, {
                        startTime: r
                    });
                    o.setAttributes(a), q.set(e, o)
                },
                yt = function(t) {
                    var e = t.spanName,
                        n = t.spanAttributes,
                        r = n === void 0 ? {} : n,
                        i = t.updateName;
                    if (!(q === void 0 || !q.has(e))) {
                        var a = q.get(e);
                        a.setAttributes(r), i !== void 0 && a.updateName(i), a.end(), q.delete(e)
                    }
                },
                J = "rum-",
                Et = function(t) {
                    var e, n;
                    typeof((n = window) === null || n === void 0 || (e = n.SQUARESPACE_SENTRY) === null || e === void 0 ? void 0 : e.captureException) == "function" ? window.SQUARESPACE_SENTRY.captureException(t): console.warn("@sqs/rum-collector: user timing exception: ".concat(t))
                };

            function wn(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                try {
                    if (!St()) return;
                    var n = J + t;
                    window.performance.clearMarks(n);
                    var r = window.performance.mark(n, {
                        detail: e.detail,
                        startTime: e.startTime
                    });
                    if (e.tracer !== void 0) {
                        var i = A(window.performance.getEntriesByName(n, "mark").slice(-1), 1),
                            a = i[0];
                        Pe({
                            spanName: n,
                            tracer: e.tracer,
                            startTime: a.startTime,
                            spanAttributes: e.spanAttributes
                        })
                    }
                    return r
                } catch (o) {
                    Et(o)
                }
            }

            function _n(t) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    requireStart: !1
                };
                try {
                    if (!(St() && yn())) return;
                    var n = J + t,
                        r = {
                            detail: e.detail,
                            duration: e.duration
                        };
                    if (e.start === void 0 ? window.performance.getEntriesByName(n, "mark").length > 0 && (r.start = n) : typeof e.start == "string" ? r.start = J + e.start : r.start = e.start, r.end = typeof e.end == "string" ? J + e.end : e.end, e.requireStart && typeof r.start != "string") return;
                    if (e.tracer !== void 0) {
                        var i = C({
                            measureName: n
                        }, e.spanAttributes);
                        if (typeof r.start == "number") Pe({
                            spanName: n,
                            tracer: e.tracer,
                            startTime: r.start
                        }), yt({
                            spanName: n,
                            spanAttributes: i
                        });
                        else {
                            var a;
                            if (window.performance.getEntriesByName((a = r.start) !== null && a !== void 0 ? a : n, "mark").length === 0) {
                                var o;
                                Pe({
                                    spanName: (o = r.start) !== null && o !== void 0 ? o : n,
                                    tracer: e.tracer,
                                    startTime: 0
                                })
                            }
                            var u;
                            yt({
                                spanName: (u = r.start) !== null && u !== void 0 ? u : n,
                                spanAttributes: i,
                                updateName: r.start !== n ? n : void 0
                            })
                        }
                    }
                    Sn(n, r);
                    var s = En(n);
                    return s
                } catch (c) {
                    Et(c)
                }
            }

            function yn() {
                return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
            }

            function St() {
                return "mark" in window.performance && "measure" in window.performance
            }

            function En(t) {
                var e = window.performance.getEntriesByName(t, "measure");
                return e[e.length - 1]
            }

            function Sn(t, e) {
                try {
                    window.performance.measure(t, e)
                } catch (i) {
                    var n = typeof e.start == "string" ? e.start : t,
                        r = typeof e.end == "string" ? e.end : void 0;
                    try {
                        window.performance.measure(t, n, r)
                    } catch (a) {
                        if (!R(a, DOMException)) throw a;
                        try {
                            window.performance.measure(t, "navigationStart")
                        } catch (o) {
                            if (!R(o, DOMException)) throw o;
                            window.performance.measure(t)
                        }
                    }
                }
            }

            function bn(t) {
                return typeof t == "string" && t.substring(0, 4) === J
            }

            function Tn(t) {
                var e = {};
                for (var n in t) typeof t[n] != "function" && (e[n] = t[n]);
                return e
            }
            var bt = new Set,
                An = function(t) {
                    if (on()) {
                        var e = function(r) {
                            var i = r.map(Tn);
                            i.forEach(function(a) {
                                if (bn(a.name)) {
                                    var o = "".concat(a.name, "|").concat(a.duration);
                                    bt.has(o) || (t(a, "user"), bt.add(o))
                                }
                            })
                        };
                        if (e(window.performance.getEntriesByType("measure")), ht()) {
                            var n = new window.PerformanceObserver(function(r) {
                                return e(r.getEntries())
                            });
                            n.observe({
                                entryTypes: ["measure"]
                            })
                        } else document.addEventListener(ge, function() {
                            document.visibilityState === "hidden" && e(window.performance.getEntriesByType("measure"))
                        })
                    }
                },
                Tt, le = [],
                Cn = function(t) {
                    le.push(t)
                };

            function On(t, e) {
                if (!(wt() && navigator.sendBeacon(t, e))) {
                    var n = new XMLHttpRequest;
                    n.open("POST", t, !0), n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), n.send(e)
                }
            }

            function At(t) {
                if (le.length) {
                    var e = JSON.stringify(le);
                    On(t, e), le = []
                }
            }

            function Rn(t) {
                window.addEventListener(xt, function() {
                    Tt = window.setTimeout(function() {
                        return At(t)
                    }, Bt)
                }), document.addEventListener(ge, function() {
                    document.visibilityState === "hidden" && (window.clearTimeout(Tt), At(t))
                })
            }

            function Pn(t) {
                Cn(C({
                    raw: !0
                }, t))
            }
            var In = function(t, e) {
                    return function(n, r) {
                        var i = {
                            app: t,
                            data: n,
                            event: r,
                            pageLoadId: e,
                            ts: Date.now()
                        };
                        Pn(i)
                    }
                },
                Nn = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        t && t.apply(void 0, P(n))
                    }
                },
                Ln = function(t) {
                    var e = {
                        appName: t.appName || "",
                        context: t.context || {},
                        enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
                        serviceURL: t.serviceURL || Mt,
                        captureException: Nn(t.captureException)
                    };
                    return e
                };

            function Ct(t) {
                return Ie.apply(this, arguments)
            }

            function Ie() {
                return Ie = E(function(t) {
                    var e, n, r;
                    return S(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e = Ln(t), e.enabled ? [4, Promise.resolve().then(function() {
                                    return Lt(), ae
                                })] : [2];
                            case 1:
                                n = i.sent().nanoid();
                                try {
                                    r = In(e.appName, n), sn(r, e.context), An(r), _t(r), an(r), Rn(e.serviceURL)
                                } catch (a) {
                                    e.captureException(a, {
                                        pageLoadId: n,
                                        parsedOptions: e
                                    })
                                }
                                return [2]
                        }
                    })
                }), Ie.apply(this, arguments)
            }
            var Mn = {
                    action: "load",
                    actor: "user",
                    event_owner_team: "web_performance",
                    event_source: "web",
                    object_type: "website"
                },
                xn = function() {
                    var t = /^qa\d+.sqsp.net/g,
                        e = /^stage.sqsp.net/g,
                        n = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g,
                        r = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
                    return e.test(r) || t.test(r) ? "staging" : n.test(r) ? "dev" : "prod"
                },
                Dn = function(t) {
                    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xn();
                    return new t({
                        customSchemaName: "Performance",
                        sourceEnvironment: e
                    }, Mn)
                },
                Ot = Object.freeze({
                    cumulativeLayoutShift: "cumulative_layout_shift",
                    decodedBodySize: "decoded_body_size_bytes",
                    domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
                    domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
                    domainLookup: "domain_lookup_ms",
                    encodedBodySize: "encoded_body_size_bytes",
                    firstContentfulPaint: "first_contentful_paint_ms",
                    firstInputDelay: "first_input_delay_ms",
                    interactionToNextPaint: "interaction_to_next_paint_ms",
                    largestContentfulPaint: "largest_contentful_paint_ms",
                    loadEventEnd: "load_event_end_ms",
                    loadEventStart: "load_event_start_ms",
                    responseStart: "response_start_ms",
                    tcpConnection: "tcp_connection_ms",
                    tlsNegotiation: "tls_negotiation_ms"
                }),
                Un = function() {
                    var t = E(function(e) {
                        var n;
                        return S(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = {}, Re(function(i) {
                                        Object.entries(i).forEach(function(a) {
                                            var o = A(a, 2),
                                                u = o[0],
                                                s = o[1];
                                            Object.prototype.hasOwnProperty.call(Ot, u) && (n[Ot[u]] = s)
                                        })
                                    }), [4, Promise.race([Ue(6e4), ke()])];
                                case 1:
                                    return r.sent(), e(n), [2]
                            }
                        })
                    });
                    return function(n) {
                        return t.apply(this, arguments)
                    }
                }();

            function kn() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."), Ct.apply(void 0, P(e))
            }
        }
    },
    function(O) {
        var w = function(T) {
                return O(O.s = T)
            },
            y = w(933441)
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/5b9c6a0da82c3bb1643d656cd9879643/performance-e1a2d4be8310e61496fa-min.en-US.js.map