websiteComponents.loader.define("website.components.shape.visitor", [], (() => (() => {
    "use strict";
    var e = {
            2811: (e, t) => {
                var r;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }),
                    function(e) {
                        e.ARCHED_WINDOW = "arched-window", e.AWARD = "award", e.CIRCLE = "circle", e.DIAMOND = "diamond", e.EGG = "egg", e.EYE = "eye", e.EIGHT_SIDED_SHIELD = "eight-sided-shield", e.FLOWER = "flower", e.FOUR_LEAF_CLOVER = "four-leaf-clover", e.FOUR_PETAL_FLOWER = "four-petal-flower", e.FOUR_POINT_STAR = "four-point-star", e.GEAR = "gear", e.HORIZONTAL_RIGHT_LEANING_OVAL = "horizontal-right-leaning-oval", e.HORIZONTAL_STACKED_CIRCLES = "horizontal-stacked-circles", e.HOURGLASS = "hourglass", e.KEYSTONE = "keystone", e.NARROW_CORSET = "narrow-corset", e.NARROW_POW = "narrow-pow", e.NARROW_RIBBON = "narrow-ribbon", e.NARROW_VERTICAL_STACKED_PILLS = "narrow-vertical-stacked-pills", e.OCTAGON = "octagon", e.OPEN_BOOK = "open-book", e.PARALLELOGRAM = "parallelogram", e.PENTAGON = "pentagon", e.POINTED_STAR = "pointed-star", e.POINTED_WINDOW = "pointed-window", e.RABBET = "rabbet", e.RECTANGLE = "rectangle", e.ROUNDED_ARCHED_WINDOW = "rounded-arched-window", e.ROUNDED_DIAMOND = "rounded-diamond", e.ROUNDED_EIGHT_POINT_STAR = "rounded-eight-point-star", e.ROUNDED_FOUR_POINT_STAR = "rounded-four-point-star", e.ROUNDED_PENTAGON = "rounded-pentagon", e.ROUNDED_RIBBON = "rounded-ribbon", e.ROUNDED_STAR = "rounded-star", e.ROUNDED_TEN_POINT_STAR = "rounded-ten-point-star", e.STEPPED_CROSS = "stepped-cross", e.TRIANGLE = "triangle", e.TV = "tv", e.VERTICAL_PARALLELOGRAM = "vertical-parallelogram", e.WIDE_HORIZONTAL_STACKED_PILLS = "wide-horizontal-stacked-pills", e.WIDE_VERTICAL_STACKED_PILLS = "wide-vertical-stacked-pills"
                    }(r || (r = {})), t.default = r
            },
            9348: (e, t) => {
                function r({
                    angle: e,
                    distance: t,
                    blur: r
                }) {
                    const o = (180 - e) * Math.PI / 180,
                        s = Math.round(Math.cos(o)) * t.value,
                        i = Math.round(Math.sin(o)) * t.value;
                    return `drop-shadow(${s}${t.unit} ${i}${t.unit} ${r.value}${r.unit})`
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.applyBlendMode = t.applyFilters = t.getDropShadowCss = void 0, t.getDropShadowCss = r, t.applyFilters = function(e, t, o) {
                    let s = "";
                    const i = null == e ? void 0 : e.parentElement,
                        n = null == e ? void 0 : e.querySelector(".sqs-shape-block-container");
                    if (i) {
                        if (n && t) {
                            s = r(t);
                            const e = window.getComputedStyle(n).getPropertyValue("color");
                            i.style.color = e
                        }
                        const e = (null == o ? void 0 : o.enabled) && (null == o ? void 0 : o.blurRadius) ? `blur(${o.blurRadius.value}${o.blurRadius.unit}) ` : "";
                        i.style.filter = `${e}${s}`
                    }
                }, t.applyBlendMode = function(e, t) {
                    const r = null == e ? void 0 : e.parentElement;
                    r && (r.style.mixBlendMode = t)
                }
            },
            749: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeResizeObserver = t.attachResizeObserver = t.doesObserverExist = void 0, t.doesObserverExist = function(e, t) {
                    return !(!t._sqsResizeObservers || !t._sqsResizeObservers[e])
                }, t.attachResizeObserver = function({
                    observerName: e,
                    resizeListenerTarget: t,
                    callback: r
                }) {
                    const o = new ResizeObserver((function(e) {
                        for (const t of e) r(t)
                    }));
                    o.observe(t), t._sqsResizeObservers || (t._sqsResizeObservers = {}), t._sqsResizeObservers[e] = o
                }, t.removeResizeObserver = function({
                    resizeListenerTarget: e,
                    observerName: t
                }) {
                    const r = e._sqsResizeObservers && e._sqsResizeObservers[t];
                    r && (r.unobserve(e), e._sqsResizeObservers && (e._sqsResizeObservers[t] = null))
                }
            },
            4031: function(e, t, r) {
                var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
                        void 0 === o && (o = r);
                        var s = Object.getOwnPropertyDescriptor(t, r);
                        s && !("get" in s ? !t.__esModule : s.writable || s.configurable) || (s = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, o, s)
                    } : function(e, t, r, o) {
                        void 0 === o && (o = r), e[o] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                        return s(t, e), t
                    },
                    n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initializeShapeBlockInVisitorView = t.adjustDimensionsForShapeFill = t.adjustDimensionsForShapeFit = t.syncDimensionsForShape = t.setPreserveAspectRatio = t.RESIZE_OBSERVER_NAME = void 0;
                const a = n(r(2811)),
                    l = r(9348),
                    u = i(r(749));

                function d(e, t) {
                    e && t && Object.assign(e.style, t)
                }

                function c(e) {
                    e && "svg" === e.nodeName && e.setAttribute("preserveAspectRatio", "none")
                }

                function O(e, r) {
                    e && (u.doesObserverExist(t.RESIZE_OBSERVER_NAME, e) && u.removeResizeObserver({
                        resizeListenerTarget: e,
                        observerName: t.RESIZE_OBSERVER_NAME
                    }), c(r), function(e) {
                        return !!e.querySelector("[data-stretched-to-fill]")
                    }(e) ? p(r) : u.attachResizeObserver({
                        observerName: t.RESIZE_OBSERVER_NAME,
                        resizeListenerTarget: e,
                        callback: () => R(e, r)
                    }))
                }

                function R(e, t) {
                    var r;
                    if (!t) return;
                    let o, s;
                    if (function(e) {
                            const t = e.querySelector(".sqs-shape-block-container");
                            if (t) return t.getAttribute("data-shape-name")
                        }(e) === a.default.RECTANGLE) o = 1, s = 1;
                    else {
                        const e = (null === (r = t.getAttribute("viewBox")) || void 0 === r ? void 0 : r.split(" ")) || [];
                        s = Number.parseInt(e.pop() || "0"), o = Number.parseInt(e.pop() || "0")
                    }
                    const i = e.clientWidth,
                        n = e.clientHeight,
                        l = o / s,
                        u = {},
                        c = i / n > l ? "height" : "width";
                    u[c] = "100%", "height" === c ? u.width = n * l + "px" : u.height = i / l + "px", d(t, u)
                }

                function p(e) {
                    d(e, {
                        width: "100%",
                        height: "100%"
                    })
                }
                t.RESIZE_OBSERVER_NAME = "shapeFit", t.setPreserveAspectRatio = c, t.syncDimensionsForShape = O, t.adjustDimensionsForShapeFit = R, t.adjustDimensionsForShapeFill = p, t.initializeShapeBlockInVisitorView = function(e) {
                    const t = e.querySelector(".sqs-shape"),
                        r = null == t ? void 0 : t.parentElement;
                    if (t && O(e, t), r) {
                        try {
                            const t = r.getAttribute("data-drop-shadow"),
                                o = t ? JSON.parse(t) : void 0,
                                s = r.getAttribute("data-blur"),
                                i = s ? JSON.parse(s) : void 0;
                            (0, l.applyFilters)(e, o, i)
                        } catch (e) {
                            console.error(e)
                        }
                        try {
                            const t = r.getAttribute("data-blend-mode");
                            (0, l.applyBlendMode)(e, t || "normal")
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
            }
        },
        t = {};

    function r(o) {
        var s = t[o];
        if (void 0 !== s) return s.exports;
        var i = t[o] = {
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, r), i.exports
    }
    var o = {};
    return (() => {
        var e = o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Visitor = void 0;
        const t = r(4031);
        class s {
            constructor(e) {
                (0, t.initializeShapeBlockInVisitorView)(e)
            }
            onRenderSuccess(e) {
                (0, t.initializeShapeBlockInVisitorView)(e)
            }
        }
        e.Visitor = s, e.default = e => new s(e)
    })(), o
})()));