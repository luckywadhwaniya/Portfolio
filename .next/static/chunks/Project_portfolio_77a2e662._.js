(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Project/portfolio/components/ParticleBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ParticleBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const colors = [
                "#6366f1",
                "#8b5cf6",
                "#06b6d4",
                "#ec4899",
                "#a78bfa"
            ];
            const particles = Array.from({
                length: 80
            }, {
                "ParticleBackground.useEffect.particles": (_, i)=>({
                        id: i,
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 2 + 0.5,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        speedX: (Math.random() - 0.5) * 0.4,
                        speedY: (Math.random() - 0.5) * 0.4,
                        opacity: Math.random() * 0.6 + 0.1
                    })
            }["ParticleBackground.useEffect.particles"]);
            let animId;
            const animate = {
                "ParticleBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    particles.forEach({
                        "ParticleBackground.useEffect.animate": (p)=>{
                            p.x += p.speedX;
                            p.y += p.speedY;
                            if (p.x < 0) p.x = canvas.width;
                            if (p.x > canvas.width) p.x = 0;
                            if (p.y < 0) p.y = canvas.height;
                            if (p.y > canvas.height) p.y = 0;
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                            ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
                            ctx.fill();
                        }
                    }["ParticleBackground.useEffect.animate"]);
                    // Draw connections
                    particles.forEach({
                        "ParticleBackground.useEffect.animate": (p, i)=>{
                            particles.slice(i + 1).forEach({
                                "ParticleBackground.useEffect.animate": (p2)=>{
                                    const dx = p.x - p2.x;
                                    const dy = p.y - p2.y;
                                    const dist = Math.sqrt(dx * dx + dy * dy);
                                    if (dist < 120) {
                                        ctx.beginPath();
                                        ctx.moveTo(p.x, p.y);
                                        ctx.lineTo(p2.x, p2.y);
                                        ctx.strokeStyle = "rgba(99,102,241,".concat(0.15 * (1 - dist / 120), ")");
                                        ctx.lineWidth = 0.5;
                                        ctx.stroke();
                                    }
                                }
                            }["ParticleBackground.useEffect.animate"]);
                        }
                    }["ParticleBackground.useEffect.animate"]);
                    animId = requestAnimationFrame(animate);
                }
            }["ParticleBackground.useEffect.animate"];
            animate();
            const handleResize = {
                "ParticleBackground.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["ParticleBackground.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            return ({
                "ParticleBackground.useEffect": ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("resize", handleResize);
                }
            })["ParticleBackground.useEffect"];
        }
    }["ParticleBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        "data-orchids-id": "components\\ParticleBackground.tsx:93:4@canvasRef",
        "data-orchids-name": "canvas",
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            opacity: 0.7
        }
    }, void 0, false, {
        fileName: "[project]/Project/portfolio/components/ParticleBackground.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(ParticleBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = ParticleBackground;
var _c;
__turbopack_context__.k.register(_c, "ParticleBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const sections = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "skills",
        label: "Skills"
    },
    {
        id: "projects",
        label: "Projects"
    },
    {
        id: "achievements",
        label: "Achievements"
    },
    {
        id: "connect",
        label: "Connect"
    },
    {
        id: "contact",
        label: "Contact"
    }
];
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                    const sectionEls = sections.map({
                        "Navbar.useEffect.onScroll.sectionEls": (s)=>({
                                id: s.id,
                                el: document.getElementById(s.id)
                            })
                    }["Navbar.useEffect.onScroll.sectionEls"]);
                    let current = "home";
                    sectionEls.forEach({
                        "Navbar.useEffect.onScroll": (param)=>{
                            let { id, el } = param;
                            if (el) {
                                const rect = el.getBoundingClientRect();
                                if (rect.top <= 120) current = id;
                            }
                        }
                    }["Navbar.useEffect.onScroll"]);
                    setActive(current);
                }
            }["Navbar.useEffect.onScroll"];
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const scrollTo = (id)=>{
        var _document_getElementById;
        (_document_getElementById = document.getElementById(id)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
            behavior: "smooth"
        });
        setMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                "data-orchids-id": "components\\Navbar.tsx:50:6",
                "data-orchids-name": "motion.nav",
                initial: {
                    y: -80,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                },
                className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(scrolled ? "nav-blur bg-[#0a0a0f]/80 border-b border-[rgba(99,102,241,0.2)]" : "bg-transparent"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "components\\Navbar.tsx:60:8",
                    "data-orchids-name": "div",
                    className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "components\\Navbar.tsx:62:10",
                            "data-orchids-name": "motion.div",
                            className: "text-xl font-bold gradient-text cursor-pointer",
                            onClick: ()=>scrollTo("home"),
                            whileHover: {
                                scale: 1.05
                            },
                            children: "< HAP's Portfolio />"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "components\\Navbar.tsx:71:10",
                            "data-orchids-name": "div",
                            className: "hidden md:flex items-center gap-8",
                            children: sections.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "components\\Navbar.tsx:73:14@sections",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollTo(s.id),
                                    className: "text-sm font-medium transition-all duration-200 relative ".concat(active === s.id ? "text-[#6366f1]" : "text-[#94a3b8] hover:text-white"),
                                    children: [
                                        s.label,
                                        active === s.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-orchids-id": "components\\Navbar.tsx:84:18@sections",
                                            "data-orchids-name": "motion.div",
                                            layoutId: "nav-indicator",
                                            className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-orchids-id": "components\\Navbar.tsx:94:10",
                            "data-orchids-name": "motion.button",
                            className: "hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white animated-border",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            onClick: ()=>scrollTo("contact"),
                            children: "Hire Me"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "components\\Navbar.tsx:104:10",
                            "data-orchids-name": "button",
                            className: "md:hidden text-[#94a3b8] hover:text-white",
                            onClick: ()=>setMenuOpen(!menuOpen),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\Navbar.tsx:108:12",
                                "data-orchids-name": "div",
                                className: "w-6 h-5 flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\Navbar.tsx:109:14",
                                        "data-orchids-name": "span",
                                        className: "block h-0.5 bg-current transition-all duration-300 ".concat(menuOpen ? "rotate-45 translate-y-2" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\Navbar.tsx:110:14",
                                        "data-orchids-name": "span",
                                        className: "block h-0.5 bg-current transition-all duration-300 ".concat(menuOpen ? "opacity-0" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\Navbar.tsx:111:14",
                                        "data-orchids-name": "span",
                                        className: "block h-0.5 bg-current transition-all duration-300 ".concat(menuOpen ? "-rotate-45 -translate-y-2" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                "data-orchids-id": "components\\Navbar.tsx:118:6",
                "data-orchids-name": "AnimatePresence",
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "components\\Navbar.tsx:120:10",
                    "data-orchids-name": "motion.div",
                    initial: {
                        opacity: 0,
                        x: "100%"
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: "100%"
                    },
                    transition: {
                        type: "tween",
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-40 nav-blur bg-[#0a0a0f]/95 flex flex-col items-center justify-center gap-8",
                    children: sections.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-map-index": i,
                            "data-orchids-id": "components\\Navbar.tsx:128:14@sections",
                            "data-orchids-name": "motion.button",
                            initial: {
                                opacity: 0,
                                x: 30
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                delay: i * 0.06
                            },
                            onClick: ()=>scrollTo(s.id),
                            className: "text-2xl font-semibold transition-colors ".concat(active === s.id ? "gradient-text" : "text-[#94a3b8]"),
                            children: s.label
                        }, s.id, false, {
                            fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                    lineNumber: 120,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/Navbar.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "+ozGSJ12ecFirLAa5R780fs8dV8=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/react-type-animation/dist/esm/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
"use client";
;
;
;
;
function HeroSection() {
    const scrollToNext = ()=>{
        var _document_getElementById;
        (_document_getElementById = document.getElementById("about")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\HeroSection.tsx:21:4",
        "data-orchids-name": "section",
        id: "home",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden grid-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\HeroSection.tsx:26:6",
                "data-orchids-name": "div",
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full blur-[140px] opacity-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\HeroSection.tsx:27:6",
                "data-orchids-name": "div",
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[140px] opacity-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\HeroSection.tsx:28:6",
                "data-orchids-name": "div",
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4] rounded-full blur-[180px] opacity-5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\HeroSection.tsx:30:6",
                "data-orchids-name": "div",
                className: "relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\HeroSection.tsx:32:8",
                        "data-orchids-name": "div",
                        className: "flex-1 text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\HeroSection.tsx:34:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] text-sm text-[#a5b4fc] mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\HeroSection.tsx:40:12",
                                        "data-orchids-name": "span",
                                        className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    "Available for Work"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                "data-orchids-id": "components\\HeroSection.tsx:45:10",
                                "data-orchids-name": "motion.h1",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.1
                                },
                                className: "text-5xl lg:text-7xl font-black mb-4 leading-tight",
                                children: [
                                    "Hi, I'm ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\HeroSection.tsx:51:25",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Harshil Panchal"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\HeroSection.tsx:55:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.2
                                },
                                className: "text-2xl lg:text-3xl font-semibold text-[#94a3b8] mb-6 h-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$react$2d$type$2d$animation$2f$dist$2f$esm$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeAnimation"], {
                                    "data-orchids-id": "components\\HeroSection.tsx:61:12",
                                    "data-orchids-name": "TypeAnimation",
                                    sequence: [
                                        "Full Stack Developer",
                                        2000,
                                        "Java Enthusiast",
                                        2000,
                                        "Python Developer",
                                        2000,
                                        "UI/UX Craftsman",
                                        2000,
                                        "Open Source Contributor",
                                        2000
                                    ],
                                    wrapper: "span",
                                    speed: 50,
                                    repeat: Infinity,
                                    className: "text-[#6366f1]"
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                "data-orchids-id": "components\\HeroSection.tsx:82:10",
                                "data-orchids-name": "motion.p",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.3
                                },
                                className: "text-[#64748b] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0",
                                children: "Passionate full-stack developer with expertise in Java, Python, and modern web technologies. I craft high-performance applications with elegant UI and scalable backend architectures."
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\HeroSection.tsx:94:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.4
                                },
                                className: "flex flex-wrap gap-2 mb-8 justify-center lg:justify-start",
                                children: [
                                    "Java",
                                    "Python",
                                    "React",
                                    "Node.js",
                                    "DSA",
                                    "SQL"
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\HeroSection.tsx:101:14",
                                        "data-orchids-name": "span",
                                        className: "tech-badge",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                "data-orchids-id": "components\\HeroSection.tsx:102:16",
                                                "data-orchids-name": "Code2",
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            t
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\HeroSection.tsx:108:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.5
                                },
                                className: "flex flex-wrap gap-4 justify-center lg:justify-start mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        "data-orchids-id": "components\\HeroSection.tsx:114:12",
                                        "data-orchids-name": "motion.a",
                                        href: "#projects",
                                        onClick: (e)=>{
                                            var _document_getElementById;
                                            e.preventDefault();
                                            (_document_getElementById = document.getElementById("projects")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        },
                                        className: "flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] glow-purple hover:opacity-90 transition-all",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: "View Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        "data-orchids-id": "components\\HeroSection.tsx:128:12",
                                        "data-orchids-name": "motion.a",
                                        href: "#contact",
                                        onClick: (e)=>{
                                            var _document_getElementById;
                                            e.preventDefault();
                                            (_document_getElementById = document.getElementById("contact")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                        },
                                        className: "flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#a5b4fc] border border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.1)] transition-all",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                "data-orchids-id": "components\\HeroSection.tsx:140:14",
                                                "data-orchids-name": "Download",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            "Download CV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\HeroSection.tsx:146:10",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.6
                                },
                                className: "flex items-center gap-4 justify-center lg:justify-start",
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                        href: "https://github.com/Hars505",
                                        label: "GitHub"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                        href: "https://www.linkedin.com/in/hp-hp5065/",
                                        label: "LinkedIn"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                        href: "https://x.com/harshil_505pl",
                                        label: "Twitter"
                                    }
                                ].map((param)=>{
                                    let { icon: Icon, href, label } = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        "data-orchids-id": "components\\HeroSection.tsx:169:14",
                                        "data-orchids-name": "motion.a",
                                        href: href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "w-10 h-10 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] flex items-center justify-center text-[#94a3b8] hover:text-[#6366f1] hover:border-[#6366f1] transition-all",
                                        whileHover: {
                                            scale: 1.15,
                                            y: -2
                                        },
                                        title: label,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            "data-orchids-id": "components\\HeroSection.tsx:178:16",
                                            "data-orchids-name": "Icon",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this)
                                    }, label, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "data-orchids-id": "components\\HeroSection.tsx:185:8",
                        "data-orchids-name": "motion.div",
                        initial: {
                            opacity: 0,
                            scale: 0.8,
                            x: 60
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.3,
                            type: "spring",
                            stiffness: 80
                        },
                        className: "flex-1 flex justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "components\\HeroSection.tsx:196:10",
                            "data-orchids-name": "div",
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "components\\HeroSection.tsx:198:12",
                                    "data-orchids-name": "div",
                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] blur-2xl opacity-30 scale-110"
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "components\\HeroSection.tsx:201:12",
                                    "data-orchids-name": "div",
                                    className: "relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-[rgba(99,102,241,0.4)] bg-gradient-to-br from-[#1e1e2e] to-[#0a0a0f] flex items-center justify-center float-animation pulse-glow overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "components\\HeroSection.tsx:203:14",
                                        "data-orchids-name": "div",
                                        className: "w-full h-full rounded-full flex flex-col items-center justify-center p-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\HeroSection.tsx:204:16",
                                            "data-orchids-name": "div",
                                            className: "w-full bg-[#0d0d1a] rounded-xl border border-[rgba(99,102,241,0.2)] overflow-hidden shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\HeroSection.tsx:206:18",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-2 px-4 py-3 bg-[#111127] border-b border-[rgba(99,102,241,0.15)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:207:20",
                                                            "data-orchids-name": "div",
                                                            className: "w-3 h-3 rounded-full bg-red-500/80"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:208:20",
                                                            "data-orchids-name": "div",
                                                            className: "w-3 h-3 rounded-full bg-yellow-500/80"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:209:20",
                                                            "data-orchids-name": "div",
                                                            className: "w-3 h-3 rounded-full bg-green-500/80"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:210:20",
                                                            "data-orchids-name": "span",
                                                            className: "ml-2 text-[#475569] text-xs font-mono",
                                                            children: "portfolio.js"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\HeroSection.tsx:215:18",
                                                    "data-orchids-name": "div",
                                                    className: "p-4 font-mono text-xs leading-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:216:20",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:217:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#6366f1]",
                                                                    children: "const"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:218:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#06b6d4]",
                                                                    children: "dev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " =",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:219:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#fbbf24]",
                                                                    children: "{"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:221:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:222:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#94a3b8]",
                                                                    children: "name:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:223:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'Harshil Panchal'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ","
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:228:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:229:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#94a3b8]",
                                                                    children: "role:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:230:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'Full Stack'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ","
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:235:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:236:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#94a3b8]",
                                                                    children: "skills:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ["
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:238:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:239:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'Java'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ",",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:240:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'Python'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ","
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:243:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:244:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'React'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 23
                                                                }, this),
                                                                ",",
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:245:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-green-400",
                                                                    children: "'DSA'"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:247:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-4",
                                                            children: "],"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:248:20",
                                                            "data-orchids-name": "div",
                                                            className: "pl-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:249:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#94a3b8]",
                                                                    children: "available:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 249,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "components\\HeroSection.tsx:250:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-[#6366f1]",
                                                                    children: "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\HeroSection.tsx:252:20",
                                                            "data-orchids-name": "div",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "components\\HeroSection.tsx:253:22",
                                                                "data-orchids-name": "span",
                                                                className: "text-[#fbbf24]",
                                                                children: "}"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        text: "Java",
                                        color: "#ef4444",
                                        pos: "top-4 -left-4"
                                    },
                                    {
                                        text: "Python",
                                        color: "#06b6d4",
                                        pos: "top-4 -right-4"
                                    },
                                    {
                                        text: "React",
                                        color: "#6366f1",
                                        pos: "bottom-16 -left-8"
                                    },
                                    {
                                        text: "SQL",
                                        color: "#fbbf24",
                                        pos: "bottom-16 -right-8"
                                    }
                                ].map((param)=>{
                                    let { text, color, pos } = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "data-orchids-id": "components\\HeroSection.tsx:267:14",
                                        "data-orchids-name": "motion.div",
                                        className: "absolute ".concat(pos, " px-3 py-1.5 rounded-full text-xs font-bold text-white border"),
                                        style: {
                                            background: color + "22",
                                            borderColor: color + "66",
                                            color
                                        },
                                        animate: {
                                            y: [
                                                0,
                                                -8,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 3 + Math.random() * 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: text
                                    }, text, false, {
                                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                "data-orchids-id": "components\\HeroSection.tsx:290:6@scrollToNext",
                "data-orchids-name": "motion.button",
                onClick: scrollToNext,
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] hover:text-[#6366f1] transition-colors",
                animate: {
                    y: [
                        0,
                        8,
                        0
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "components\\HeroSection.tsx:296:8",
                        "data-orchids-name": "span",
                        className: "text-xs font-medium tracking-widest uppercase",
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        "data-orchids-id": "components\\HeroSection.tsx:299:8",
                        "data-orchids-name": "ArrowDown",
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/HeroSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RevealOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RevealOnScroll(param) {
    let { children, className = "", delay = 0, direction = "up" } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.7,
                delay,
                ease: "easeOut"
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "data-orchids-id": "components\\RevealOnScroll.tsx:36:4@ref@variants",
        "data-orchids-name": "motion.div",
        ref: ref,
        className: className,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: variants,
        children: children
    }, void 0, false, {
        fileName: "[project]/Project/portfolio/components/RevealOnScroll.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(RevealOnScroll, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = RevealOnScroll;
var _c;
__turbopack_context__.k.register(_c, "RevealOnScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const skills = [
    {
        name: "Java",
        level: 90,
        category: "Backend"
    },
    {
        name: "Python",
        level: 88,
        category: "Backend"
    },
    {
        name: "JavaScript / TypeScript",
        level: 68,
        category: "Frontend"
    },
    {
        name: "HTML & CSS",
        level: 95,
        category: "Frontend"
    },
    {
        name: "React / Next.js",
        level: 40,
        category: "Frontend"
    },
    {
        name: "DSA & Algorithms",
        level: 85,
        category: "CS Core"
    },
    {
        name: "DBMS / SQL",
        level: 70,
        category: "Database"
    },
    {
        name: "Git & Version Control",
        level: 50,
        category: "DevOps"
    }
];
const techCategories = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "Languages",
        color: "#6366f1",
        items: [
            "Java",
            "Python",
            "JavaScript"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Frontend",
        color: "#06b6d4",
        items: [
            "HTML5",
            "CSS3",
            "Tailwind CSS"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
        title: "Backend",
        color: "#8b5cf6",
        items: [
            "Spring Boot",
            "REST APIs",
            "MatplotLib"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "Database",
        color: "#fbbf24",
        items: [
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: "CS Fundamentals",
        color: "#ec4899",
        items: [
            "Data Structures",
            "Algorithms",
            "DBMS"
        ]
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Tools & Platforms",
        color: "#10b981",
        items: [
            "Git/GitHub",
            "VS Code"
        ]
    }
];
function SkillBar(param) {
    let { name, level, index } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "data-orchids-id": "components\\AboutSection.tsx:63:4@ref",
        "data-orchids-name": "motion.div",
        ref: ref,
        initial: {
            opacity: 0,
            x: -20
        },
        animate: isInView ? {
            opacity: 1,
            x: 0
        } : {},
        transition: {
            delay: index * 0.07,
            duration: 0.5
        },
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AboutSection.tsx:70:6",
                "data-orchids-name": "div",
                className: "flex justify-between mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "components\\AboutSection.tsx:71:8",
                        "data-orchids-name": "span",
                        className: "text-sm text-[#cbd5e1] font-medium",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-orchids-id": "components\\AboutSection.tsx:72:8",
                        "data-orchids-name": "span",
                        className: "text-sm text-[#6366f1] font-bold",
                        children: [
                            level,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AboutSection.tsx:74:6",
                "data-orchids-name": "div",
                className: "h-1.5 bg-[rgba(99,102,241,0.12)] rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "components\\AboutSection.tsx:75:8",
                    "data-orchids-name": "motion.div",
                    className: "h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]",
                    initial: {
                        width: 0
                    },
                    animate: isInView ? {
                        width: "".concat(level, "%")
                    } : {
                        width: 0
                    },
                    transition: {
                        delay: index * 0.07 + 0.3,
                        duration: 1.2,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    }
                }, void 0, false, {
                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(SkillBar, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = SkillBar;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\AboutSection.tsx:88:4",
        "data-orchids-name": "section",
        id: "about",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AboutSection.tsx:90:6",
                "data-orchids-name": "div",
                className: "absolute top-0 right-0 w-80 h-80 bg-[#8b5cf6] rounded-full blur-[160px] opacity-5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AboutSection.tsx:92:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\AboutSection.tsx:94:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\AboutSection.tsx:95:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "Who I Am"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\AboutSection.tsx:96:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "About ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\AboutSection.tsx:97:18",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Me"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\AboutSection.tsx:99:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\AboutSection.tsx:103:8",
                        "data-orchids-name": "div",
                        className: "grid lg:grid-cols-2 gap-16 mb-20 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "components\\AboutSection.tsx:105:10",
                                "data-orchids-name": "RevealOnScroll",
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "components\\AboutSection.tsx:106:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "components\\AboutSection.tsx:107:14",
                                            "data-orchids-name": "p",
                                            className: "text-[#94a3b8] text-lg leading-relaxed",
                                            children: [
                                                "I'm a passionate ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "components\\AboutSection.tsx:108:38",
                                                    "data-orchids-name": "span",
                                                    className: "text-white font-semibold",
                                                    children: "Full Stack Developer"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 39
                                                }, this),
                                                " with a strong foundation in Computer Science. I love solving complex problems with clean, efficient code."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "components\\AboutSection.tsx:111:14",
                                            "data-orchids-name": "p",
                                            className: "text-[#94a3b8] text-lg leading-relaxed",
                                            children: [
                                                "My journey started with ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "components\\AboutSection.tsx:112:40",
                                                    "data-orchids-name": "span",
                                                    className: "text-[#6366f1] font-semibold",
                                                    children: "Java"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 41
                                                }, this),
                                                " and",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "components\\AboutSection.tsx:113:21",
                                                    "data-orchids-name": "span",
                                                    className: "text-[#06b6d4] font-semibold",
                                                    children: "Python"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 22
                                                }, this),
                                                ", and evolved into building end-to-end web applications. I'm deeply passionate about ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "components\\AboutSection.tsx:114:63",
                                                    "data-orchids-name": "span",
                                                    className: "text-[#8b5cf6] font-semibold",
                                                    children: "AI & ML"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 64
                                                }, this),
                                                ", competitive programming, and crafting seamless user experiences."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "components\\AboutSection.tsx:117:14",
                                            "data-orchids-name": "p",
                                            className: "text-[#94a3b8] text-lg leading-relaxed",
                                            children: "When not coding, I contribute to open-source, write technical blogs, and mentor fellow developers."
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\AboutSection.tsx:122:14",
                                            "data-orchids-name": "div",
                                            className: "grid grid-cols-3 gap-4 pt-4",
                                            children: [
                                                {
                                                    num: "8+",
                                                    label: "Leadership In Projects"
                                                },
                                                {
                                                    num: "12+",
                                                    label: "Projects Built"
                                                },
                                                {
                                                    num: "500+",
                                                    label: "Github Pushs"
                                                }
                                            ].map((param)=>{
                                                let { num, label } = param;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    "data-orchids-id": "components\\AboutSection.tsx:128:18",
                                                    "data-orchids-name": "motion.div",
                                                    className: "bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] rounded-xl p-4 text-center card-hover",
                                                    whileHover: {
                                                        scale: 1.05
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\AboutSection.tsx:133:20",
                                                            "data-orchids-name": "div",
                                                            className: "text-2xl font-black gradient-text",
                                                            children: num
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\AboutSection.tsx:134:20",
                                                            "data-orchids-name": "div",
                                                            className: "text-xs text-[#64748b] mt-1",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "components\\AboutSection.tsx:142:10",
                                "data-orchids-name": "RevealOnScroll",
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "components\\AboutSection.tsx:143:12",
                                    "data-orchids-name": "div",
                                    className: "bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.15)] rounded-2xl p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            "data-orchids-id": "components\\AboutSection.tsx:144:14",
                                            "data-orchids-name": "h3",
                                            className: "text-lg font-bold text-white mb-6 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\AboutSection.tsx:145:16",
                                                    "data-orchids-name": "div",
                                                    className: "w-1 h-5 bg-gradient-to-b from-[#6366f1] to-[#8b5cf6] rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                "Proficiency"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        skills.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                                "data-map-index": i,
                                                "data-orchids-id": "components\\AboutSection.tsx:149:16@skills",
                                                "data-orchids-name": "SkillBar",
                                                name: s.name,
                                                level: s.level,
                                                index: i
                                            }, s.name, false, {
                                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\AboutSection.tsx:156:8",
                        "data-orchids-name": "RevealOnScroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "components\\AboutSection.tsx:157:10",
                            "data-orchids-name": "h3",
                            className: "text-2xl font-bold text-center text-white mb-10",
                            children: [
                                "Tech ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "components\\AboutSection.tsx:158:17",
                                    "data-orchids-name": "span",
                                    className: "gradient-text",
                                    children: "Arsenal"
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                    lineNumber: 158,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\AboutSection.tsx:161:8",
                        "data-orchids-name": "div",
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: techCategories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-map-index": i,
                                "data-orchids-id": "components\\AboutSection.tsx:163:12@techCategories",
                                "data-orchids-name": "RevealOnScroll",
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\AboutSection.tsx:164:14@techCategories",
                                    "data-orchids-name": "motion.div",
                                    className: "bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-6 card-hover group",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AboutSection.tsx:168:16@techCategories",
                                            "data-orchids-name": "div",
                                            className: "flex items-center gap-3 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AboutSection.tsx:169:18@techCategories",
                                                    "data-orchids-name": "div",
                                                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                                    style: {
                                                        background: cat.color + "22",
                                                        border: "1px solid ".concat(cat.color, "44")
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(cat.icon, {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\AboutSection.tsx:173:20@techCategories",
                                                        "data-orchids-name": "cat.icon",
                                                        className: "w-5 h-5",
                                                        style: {
                                                            color: cat.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AboutSection.tsx:175:18@techCategories",
                                                    "data-orchids-name": "span",
                                                    className: "font-bold text-white",
                                                    children: cat.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AboutSection.tsx:177:16@techCategories",
                                            "data-orchids-name": "div",
                                            className: "flex flex-wrap gap-2",
                                            children: cat.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AboutSection.tsx:179:20@techCategories",
                                                    "data-orchids-name": "span",
                                                    className: "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
                                                    style: {
                                                        background: cat.color + "15",
                                                        border: "1px solid ".concat(cat.color, "30"),
                                                        color: cat.color
                                                    },
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            }, cat.title, false, {
                                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/AboutSection.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c1 = AboutSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkillBar");
__turbopack_context__.k.register(_c1, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/SkillsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const skillGrid = [
    {
        name: "Java",
        icon: "☕",
        level: 90,
        color: "#ef4444",
        desc: "OOP, Database ,JVM"
    },
    {
        name: "Python",
        icon: "🐍",
        level: 88,
        color: "#06b6d4",
        desc: "Django, FastAPI, ML libs"
    },
    {
        name: "JavaScript",
        icon: "⚡",
        level: 75,
        color: "#fbbf24",
        desc: "ES2024, async/await, DOM"
    },
    {
        name: "TypeScript",
        icon: "🔷",
        level: 72,
        color: "#3b82f6",
        desc: "Strict mode, generics"
    },
    {
        name: "React.js",
        icon: "⚛️",
        level: 65,
        color: "#61dafb",
        desc: "Hooks, Context, Redux"
    },
    {
        name: "Node.js",
        icon: "🟢",
        level: 68,
        color: "#22c55e",
        desc: "Express, REST, WebSocket"
    },
    {
        name: "MySQL",
        icon: "🐬",
        level: 85,
        color: "#00758f",
        desc: "Complex queries, indexing"
    },
    {
        name: "MongoDB",
        icon: "🍃",
        level: 60,
        color: "#47a248",
        desc: "Aggregation, Atlas"
    },
    {
        name: "PostgreSQL",
        icon: "🐘",
        level: 70,
        color: "#336791",
        desc: "ACID, PL/pgSQL"
    },
    {
        name: "Git & GitHub",
        icon: "🌿",
        level: 90,
        color: "#f97316",
        desc: "Branching, CI/CD"
    },
    {
        name: "HTML/CSS",
        icon: "🎨",
        level: 95,
        color: "#e34f26",
        desc: "Semantic, Flexbox, Grid"
    }
];
const proficiencyLevels = [
    {
        range: "85-100%",
        label: "Expert",
        color: "#6366f1"
    },
    {
        range: "70-84%",
        label: "Proficient",
        color: "#06b6d4"
    },
    {
        range: "60-69%",
        label: "Intermediate",
        color: "#fbbf24"
    }
];
function SkillsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\SkillsSection.tsx:95:4",
        "data-orchids-name": "section",
        id: "skills",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\SkillsSection.tsx:96:6",
                "data-orchids-name": "div",
                className: "absolute top-1/3 left-0 w-80 h-80 bg-[#06b6d4] rounded-full blur-[160px] opacity-[0.05] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\SkillsSection.tsx:98:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\SkillsSection.tsx:99:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\SkillsSection.tsx:100:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "What I Know"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\SkillsSection.tsx:103:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "Skills & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\SkillsSection.tsx:104:21",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Technologies"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                        lineNumber: 104,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\SkillsSection.tsx:106:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mb-6"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\SkillsSection.tsx:107:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-6 flex-wrap",
                                children: proficiencyLevels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "components\\SkillsSection.tsx:109:14@proficiencyLevels",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2 text-sm text-[#64748b]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "components\\SkillsSection.tsx:113:16@proficiencyLevels",
                                                "data-orchids-name": "div",
                                                className: "w-3 h-3 rounded-full",
                                                style: {
                                                    background: l.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            l.range,
                                            " · ",
                                            l.label
                                        ]
                                    }, l.label, true, {
                                        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\SkillsSection.tsx:124:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: skillGrid.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-map-index": i,
                                "data-orchids-id": "components\\SkillsSection.tsx:126:12@skillGrid",
                                "data-orchids-name": "RevealOnScroll",
                                delay: i * 0.04,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\SkillsSection.tsx:127:14@skillGrid",
                                    "data-orchids-name": "motion.div",
                                    className: "group relative bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-5 card-hover overflow-hidden",
                                    whileHover: {
                                        y: -4,
                                        borderColor: skill.color + "60"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\SkillsSection.tsx:132:16@skillGrid",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
                                            style: {
                                                background: "radial-gradient(circle at center, ".concat(skill.color, "08, transparent 70%)")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\SkillsSection.tsx:140:16@skillGrid",
                                            "data-orchids-name": "div",
                                            className: "flex items-center gap-3 mb-4 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\SkillsSection.tsx:141:18@skillGrid",
                                                    "data-orchids-name": "div",
                                                    className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0",
                                                    style: {
                                                        background: skill.color + "15",
                                                        border: "1px solid ".concat(skill.color, "30")
                                                    },
                                                    children: skill.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\SkillsSection.tsx:150:18@skillGrid",
                                                    "data-orchids-name": "div",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\SkillsSection.tsx:151:20@skillGrid",
                                                            "data-orchids-name": "div",
                                                            className: "text-sm font-bold text-white",
                                                            children: skill.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\SkillsSection.tsx:154:20@skillGrid",
                                                            "data-orchids-name": "div",
                                                            className: "text-[10px] text-[#475569]",
                                                            children: skill.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\SkillsSection.tsx:161:16@skillGrid",
                                            "data-orchids-name": "div",
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\SkillsSection.tsx:162:18@skillGrid",
                                                    "data-orchids-name": "div",
                                                    className: "flex justify-between text-[10px] mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\SkillsSection.tsx:163:20@skillGrid",
                                                            "data-orchids-name": "span",
                                                            className: "text-[#475569]",
                                                            children: "Proficiency"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\SkillsSection.tsx:164:20@skillGrid",
                                                            "data-orchids-name": "span",
                                                            style: {
                                                                color: skill.color
                                                            },
                                                            className: "font-bold",
                                                            children: [
                                                                skill.level,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\SkillsSection.tsx:168:18@skillGrid",
                                                    "data-orchids-name": "div",
                                                    className: "h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\SkillsSection.tsx:169:20@skillGrid",
                                                        "data-orchids-name": "motion.div",
                                                        className: "h-full rounded-full",
                                                        style: {
                                                            background: "linear-gradient(90deg, ".concat(skill.color, "99, ").concat(skill.color, ")")
                                                        },
                                                        initial: {
                                                            width: 0
                                                        },
                                                        whileInView: {
                                                            width: "".concat(skill.level, "%")
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 1.2,
                                                            delay: i * 0.04,
                                                            ease: [
                                                                0.4,
                                                                0,
                                                                0.2,
                                                                1
                                                            ]
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            }, skill.name, false, {
                                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/SkillsSection.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c = SkillsSection;
var _c;
__turbopack_context__.k.register(_c, "SkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-client] (ecmascript) <export default as GitFork>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const projects = [
    {
        id: 1,
        title: "Wheels An Deals",
        description: "The Wheels and Deals console program is a console based java program to simulate a car dealership's point-of-sale system, where users can seamlessly interact with a virtual showroom and finalize vehicle purchases.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        tags: [
            "Java",
            "MySQL",
            "CURD"
        ],
        category: "JAVA",
        github: "https://github.com/Hars505/1st_Year_project",
        stars: 124,
        forks: 38,
        color: "#6366f1"
    },
    {
        id: 2,
        title: "Life-Desk",
        description: "Comprehensive DBMS project with complex SQL queries, stored procedures, and a React frontend. Features role-based access control and reporting.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
        tags: [
            "Python",
            "MySQL",
            "DBMS",
            "Javascript",
            "HTML/CSS"
        ],
        category: "Full Stack",
        github: "https://github.com/Hars505/sem_3_projects",
        stars: 67,
        forks: 19,
        color: "#4a91fd"
    },
    {
        id: 3,
        title: "Python Data Dashboard",
        description: "Analytics dashboard with ML-powered insights. Processes large datasets, generates predictions, and visualizes trends using interactive charts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "React",
            "Recharts"
        ],
        category: "Full Stack",
        github: "https://github.com",
        stars: 91,
        forks: 28,
        color: "#10b981"
    }
];
const categories = [
    "All",
    "Full Stack",
    "Frontend",
    "AI/ML"
];
function ProjectsSection() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const filtered = activeFilter === "All" ? projects : projects.filter((p)=>p.category === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\ProjectsSection.tsx:65:4",
        "data-orchids-name": "section",
        id: "projects",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ProjectsSection.tsx:66:6",
                "data-orchids-name": "div",
                className: "absolute bottom-0 left-0 w-96 h-96 bg-[#6366f1] rounded-full blur-[160px] opacity-5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ProjectsSection.tsx:68:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\ProjectsSection.tsx:69:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\ProjectsSection.tsx:70:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "What I've Built"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\ProjectsSection.tsx:73:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "Featured ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\ProjectsSection.tsx:74:21",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                        lineNumber: 74,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\ProjectsSection.tsx:76:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mb-8"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\ProjectsSection.tsx:79:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center gap-3 flex-wrap",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        "data-orchids-id": "components\\ProjectsSection.tsx:81:14@categories",
                                        "data-orchids-name": "motion.button",
                                        onClick: ()=>setActiveFilter(cat),
                                        className: "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ".concat(activeFilter === cat ? "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white" : "border border-[rgba(99,102,241,0.3)] text-[#94a3b8] hover:text-white hover:border-[rgba(99,102,241,0.6)]"),
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        "data-orchids-id": "components\\ProjectsSection.tsx:98:8",
                        "data-orchids-name": "AnimatePresence",
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-orchids-id": "components\\ProjectsSection.tsx:99:10",
                            "data-orchids-name": "motion.div",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: filtered.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\ProjectsSection.tsx:108:14@filtered",
                                    "data-orchids-name": "motion.div",
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.5
                                    },
                                    className: "group bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl overflow-hidden card-hover cursor-pointer",
                                    onMouseEnter: ()=>setHovered(project.id),
                                    onMouseLeave: ()=>setHovered(null),
                                    whileHover: {
                                        y: -8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ProjectsSection.tsx:119:16@filtered",
                                            "data-orchids-name": "div",
                                            className: "relative h-48 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:120:18@filtered",
                                                    "data-orchids-name": "img",
                                                    src: project.image,
                                                    alt: project.title,
                                                    className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:125:18@filtered",
                                                    "data-orchids-name": "div",
                                                    className: "absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-80",
                                                    style: {
                                                        background: "linear-gradient(to top, ".concat(project.color, "40, transparent)")
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:133:18@filtered",
                                                    "data-orchids-name": "div",
                                                    className: "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white",
                                                    style: {
                                                        background: project.color + "cc"
                                                    },
                                                    children: project.category
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:139:18@filtered",
                                                    "data-orchids-name": "AnimatePresence",
                                                    children: hovered === project.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\ProjectsSection.tsx:141:22@filtered",
                                                        "data-orchids-name": "motion.div",
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            opacity: 0
                                                        },
                                                        className: "absolute inset-0 bg-[#0a0a0f]/80 flex items-center justify-center gap-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\ProjectsSection.tsx:147:24@filtered",
                                                            "data-orchids-name": "motion.a",
                                                            href: project.github,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                                                            whileHover: {
                                                                scale: 1.1
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                                "data-orchids-id": "components\\ProjectsSection.tsx:155:26",
                                                                "data-orchids-name": "Github",
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ProjectsSection.tsx:163:16@filtered",
                                            "data-orchids-name": "div",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:164:18@filtered",
                                                    "data-orchids-name": "h3",
                                                    className: "text-lg font-bold text-white mb-2 group-hover:text-[#a5b4fc] transition-colors",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:167:18@filtered",
                                                    "data-orchids-name": "p",
                                                    className: "text-[#64748b] text-sm leading-relaxed mb-4 line-clamp-2",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:172:18@filtered",
                                                    "data-orchids-name": "div",
                                                    className: "flex flex-wrap gap-2 mb-4",
                                                    children: project.tags.slice(0, 4).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\ProjectsSection.tsx:174:22@filtered",
                                                            "data-orchids-name": "span",
                                                            className: "px-2 py-0.5 rounded-md text-[10px] font-medium",
                                                            style: {
                                                                background: project.color + "18",
                                                                color: project.color,
                                                                border: "1px solid ".concat(project.color, "30")
                                                            },
                                                            children: tag
                                                        }, tag, false, {
                                                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ProjectsSection.tsx:189:18@filtered",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center justify-between pt-4 border-t border-[rgba(99,102,241,0.1)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\ProjectsSection.tsx:190:20@filtered",
                                                        "data-orchids-name": "div",
                                                        className: "flex items-center gap-4 text-[#475569] text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-map-index": i,
                                                                "data-orchids-id": "components\\ProjectsSection.tsx:191:22@filtered",
                                                                "data-orchids-name": "span",
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        "data-map-index": i,
                                                                        "data-orchids-id": "components\\ProjectsSection.tsx:192:24@filtered",
                                                                        "data-orchids-name": "Star",
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    project.stars
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-map-index": i,
                                                                "data-orchids-id": "components\\ProjectsSection.tsx:194:22@filtered",
                                                                "data-orchids-name": "span",
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"], {
                                                                        "data-map-index": i,
                                                                        "data-orchids-id": "components\\ProjectsSection.tsx:195:24@filtered",
                                                                        "data-orchids-name": "GitFork",
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    project.forks
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this))
                        }, activeFilter, false, {
                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\ProjectsSection.tsx:206:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            "data-orchids-id": "components\\ProjectsSection.tsx:207:10",
                            "data-orchids-name": "motion.a",
                            href: "https://github.com/Hars505?tab=repositories",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-[#a5b4fc] border border-[rgba(99,102,241,0.4)] hover:bg-[rgba(99,102,241,0.1)] transition-all",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    "data-orchids-id": "components\\ProjectsSection.tsx:215:12",
                                    "data-orchids-name": "Github",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                "View All on GitHub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/ProjectsSection.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "NKx8SzmvIQEnMQk2lUg//eaM6ZQ=");
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/AchievementsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AchievementsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/medal.js [app-client] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
"use client";
;
;
;
;
const achievements = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
        title: "LeetCode Top 40%",
        description: "Solved 50+ problems with a global ranking in the top 40%. Expertise in Dynamic Programming, Graphs, and Trees.",
        metric: "100+",
        metricLabel: "Problems Solved",
        color: "#fbbf24",
        badge: "Competitive"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"],
        title: "Hackathon",
        description: "Worked in Numerous Hackathons of 8-48 hrs and Participate in 2+ hackathons",
        metric: "2+",
        metricLabel: "Participation",
        color: "#6366f1",
        badge: "Award"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        title: "Open Source Contributor",
        description: "15+ merged pull requests across major open source projects. 100+ GitHub pusha on personal repositories.",
        metric: "100+",
        metricLabel: "GitHub pushs",
        color: "#06b6d4",
        badge: "Open Source"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "Leadership",
        description: "Led the Projects of Multiple Gropus with 8+ members. Organized 6+ Groups on web development.",
        metric: "10+",
        metricLabel: "Members Led",
        color: "#ec4899",
        badge: "Leadership"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Dean's List Scholar",
        description: "Awarded Dean's List scholarship for exceptional academic performance — 8.2 CGPA in Artificial Intelligence and Machine Learning.",
        metric: "8.2",
        metricLabel: "CGPA",
        color: "#10b981",
        badge: "Academic"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: "100 Days of Code",
        description: "Completed the #100DaysOfCode challenge, building and shipping a new project or feature every single day.",
        metric: "100",
        metricLabel: "Days Streak",
        color: "#a855f7",
        badge: "Discipline"
    }
];
const certifications = [];
function AchievementsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\AchievementsSection.tsx:91:4",
        "data-orchids-name": "section",
        id: "achievements",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AchievementsSection.tsx:92:6",
                "data-orchids-name": "div",
                className: "absolute top-1/2 right-0 w-96 h-96 bg-[#fbbf24] rounded-full blur-[180px] opacity-[0.04] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\AchievementsSection.tsx:94:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\AchievementsSection.tsx:96:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\AchievementsSection.tsx:97:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "Hall of Fame"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\AchievementsSection.tsx:100:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "Achievements & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\AchievementsSection.tsx:101:27",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Recognition"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\AchievementsSection.tsx:103:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\AchievementsSection.tsx:107:8",
                        "data-orchids-name": "div",
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20",
                        children: achievements.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-map-index": i,
                                "data-orchids-id": "components\\AchievementsSection.tsx:109:12@achievements",
                                "data-orchids-name": "RevealOnScroll",
                                delay: i * 0.06,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\AchievementsSection.tsx:110:14@achievements",
                                    "data-orchids-name": "motion.div",
                                    className: "relative bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl p-6 card-hover group overflow-hidden",
                                    whileHover: {
                                        y: -5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:115:16@achievements",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
                                            style: {
                                                background: "radial-gradient(circle at top left, ".concat(item.color, "12, transparent 60%)")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:123:16@achievements",
                                            "data-orchids-name": "div",
                                            className: "inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold mb-4",
                                            style: {
                                                background: item.color + "22",
                                                color: item.color
                                            },
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:131:16@achievements",
                                            "data-orchids-name": "div",
                                            className: "flex items-start justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AchievementsSection.tsx:132:18@achievements",
                                                    "data-orchids-name": "div",
                                                    className: "w-12 h-12 rounded-xl flex items-center justify-center",
                                                    style: {
                                                        background: item.color + "20",
                                                        border: "1px solid ".concat(item.color, "40")
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\AchievementsSection.tsx:139:20@achievements",
                                                        "data-orchids-name": "item.icon",
                                                        className: "w-6 h-6",
                                                        style: {
                                                            color: item.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AchievementsSection.tsx:144:18@achievements",
                                                    "data-orchids-name": "div",
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\AchievementsSection.tsx:145:20@achievements",
                                                            "data-orchids-name": "div",
                                                            className: "text-2xl font-black",
                                                            style: {
                                                                color: item.color
                                                            },
                                                            children: item.metric
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-map-index": i,
                                                            "data-orchids-id": "components\\AchievementsSection.tsx:151:20@achievements",
                                                            "data-orchids-name": "div",
                                                            className: "text-[10px] text-[#475569]",
                                                            children: item.metricLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:157:16@achievements",
                                            "data-orchids-name": "h3",
                                            className: "font-bold text-white mb-2 text-sm",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:160:16@achievements",
                                            "data-orchids-name": "p",
                                            className: "text-[#64748b] text-xs leading-relaxed",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            }, item.title, false, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\AchievementsSection.tsx:169:8",
                        "data-orchids-name": "RevealOnScroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "components\\AchievementsSection.tsx:170:10",
                            "data-orchids-name": "h3",
                            className: "text-2xl font-bold text-center mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\AchievementsSection.tsx:171:12",
                                "data-orchids-name": "span",
                                className: "gradient-text",
                                children: "Certifications"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\AchievementsSection.tsx:174:8",
                        "data-orchids-name": "div",
                        className: "flex flex-wrap gap-4 justify-center",
                        children: certifications.map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-map-index": i,
                                "data-orchids-id": "components\\AchievementsSection.tsx:176:12@certifications",
                                "data-orchids-name": "RevealOnScroll",
                                delay: i * 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\AchievementsSection.tsx:177:14@certifications",
                                    "data-orchids-name": "motion.div",
                                    className: "flex items-center gap-4 bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.12)] rounded-2xl px-6 py-4 card-hover",
                                    whileHover: {
                                        scale: 1.03
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:181:16@certifications",
                                            "data-orchids-name": "div",
                                            className: "w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shrink-0",
                                            style: {
                                                background: cert.color + "33",
                                                border: "1px solid ".concat(cert.color, "66")
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                "data-map-index": i,
                                                "data-orchids-id": "components\\AchievementsSection.tsx:188:18@certifications",
                                                "data-orchids-name": "Award",
                                                className: "w-5 h-5",
                                                style: {
                                                    color: cert.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\AchievementsSection.tsx:190:16@certifications",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AchievementsSection.tsx:191:18@certifications",
                                                    "data-orchids-name": "div",
                                                    className: "text-sm font-semibold text-white",
                                                    children: cert.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\AchievementsSection.tsx:194:18@certifications",
                                                    "data-orchids-name": "div",
                                                    className: "text-xs text-[#64748b]",
                                                    children: [
                                                        cert.org,
                                                        " · ",
                                                        cert.year
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, cert.name, false, {
                                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/AchievementsSection.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c = AchievementsSection;
var _c;
__turbopack_context__.k.register(_c, "AchievementsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/ConnectSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConnectSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
"use client";
;
;
;
;
const socials = [
    {
        name: "GitHub",
        handle: "@HP_Coder",
        description: "200+ stars · 20+ repos · Open source contributions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
        href: "https://github.com/Hars505",
        color: "#e2e8f0",
        bg: "#1a1a2e",
        border: "rgba(226,232,240,0.2)",
        stats: "200+ Stars"
    },
    {
        name: "LinkedIn",
        handle: "Harshil Panchal",
        description: "Professional network · 250+ connections · Posts about tech",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
        href: "https://www.linkedin.com/in/hp-hp5065/",
        color: "#0ea5e9",
        bg: "#0c1a2e",
        border: "rgba(14,165,233,0.2)",
        stats: "250+ Connections"
    },
    {
        name: "Twitter / X",
        handle: "@HP_Coder",
        description: "Daily coding tips · Tech threads · Dev community",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        href: "https://x.com/harshil_505pl",
        color: "#38bdf8",
        bg: "#0c1a2e",
        border: "rgba(56,189,248,0.2)",
        stats: "Followers"
    },
    {
        name: "LeetCode",
        handle: "Harshil",
        description: "100+ problems · Top 40% globally · Contest rating 100+",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        href: "https://leetcode.com/u/HP2505/",
        color: "#fbbf24",
        bg: "#1a1400",
        border: "rgba(251,191,36,0.2)",
        stats: "100+ Solved"
    },
    {
        name: "Dev.to",
        handle: "@alexdev",
        description: "Technical blogs · Tutorials · Community posts  Always trying to do better.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        href: "https://dev.to",
        color: "#a855f7",
        bg: "#130a1a",
        border: "rgba(168,85,247,0.2)",
        stats: "20 Posts"
    },
    {
        name: "Portfolio",
        handle: "Harshil.me",
        description: "This site! Built with Next.js, Framer Motion, and lots of love.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        href: "#",
        color: "#6366f1",
        bg: "#0f0f1a",
        border: "rgba(99,102,241,0.3)",
        stats: "You're Here!"
    }
];
function ConnectSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\ConnectSection.tsx:92:4",
        "data-orchids-name": "section",
        id: "connect",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ConnectSection.tsx:93:6",
                "data-orchids-name": "div",
                className: "absolute top-0 left-1/3 w-96 h-96 bg-[#6366f1] rounded-full blur-[180px] opacity-[0.05] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ConnectSection.tsx:95:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\ConnectSection.tsx:96:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\ConnectSection.tsx:97:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "Let's Stay Connected"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\ConnectSection.tsx:100:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "Find Me ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\ConnectSection.tsx:101:20",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Online"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                        lineNumber: 101,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "components\\ConnectSection.tsx:103:10",
                                "data-orchids-name": "p",
                                className: "text-[#64748b] text-lg max-w-xl mx-auto mt-4",
                                children: "I'm active across multiple platforms. Follow me for daily coding content, open source work, and dev community discussions."
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\ConnectSection.tsx:107:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mt-6"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\ConnectSection.tsx:110:8",
                        "data-orchids-name": "div",
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
                        children: socials.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-map-index": i,
                                "data-orchids-id": "components\\ConnectSection.tsx:112:12@socials",
                                "data-orchids-name": "RevealOnScroll",
                                delay: i * 0.07,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\ConnectSection.tsx:113:14@socials",
                                    "data-orchids-name": "motion.a",
                                    href: s.href,
                                    target: s.href !== "#" ? "_blank" : undefined,
                                    rel: "noopener noreferrer",
                                    className: "group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-pointer block",
                                    style: {
                                        background: s.bg,
                                        borderColor: s.border
                                    },
                                    whileHover: {
                                        y: -6,
                                        scale: 1.02
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ConnectSection.tsx:126:16@socials",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:127:18@socials",
                                                    "data-orchids-name": "div",
                                                    className: "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                                    style: {
                                                        background: s.color + "22",
                                                        border: "1px solid ".concat(s.color, "44")
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                        "data-map-index": i,
                                                        "data-orchids-id": "components\\ConnectSection.tsx:134:20@socials",
                                                        "data-orchids-name": "s.icon",
                                                        className: "w-6 h-6",
                                                        style: {
                                                            color: s.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:136:18@socials",
                                                    "data-orchids-name": "div",
                                                    className: "px-2 py-1 rounded-full text-[10px] font-semibold",
                                                    style: {
                                                        background: s.color + "18",
                                                        color: s.color
                                                    },
                                                    children: s.stats
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ConnectSection.tsx:145:16@socials",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:146:18@socials",
                                                    "data-orchids-name": "div",
                                                    className: "font-bold text-white text-sm mb-0.5",
                                                    children: s.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:149:18@socials",
                                                    "data-orchids-name": "div",
                                                    className: "text-xs font-medium mb-2",
                                                    style: {
                                                        color: s.color
                                                    },
                                                    children: s.handle
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:155:18@socials",
                                                    "data-orchids-name": "p",
                                                    className: "text-[#475569] text-xs leading-relaxed",
                                                    children: s.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ConnectSection.tsx:161:16@socials",
                                            "data-orchids-name": "div",
                                            className: "flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity",
                                            style: {
                                                color: s.color
                                            },
                                            children: [
                                                "Visit Profile ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ConnectSection.tsx:165:32@socials",
                                                    "data-orchids-name": "ExternalLink",
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            }, s.name, false, {
                                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\ConnectSection.tsx:173:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            "data-orchids-id": "components\\ConnectSection.tsx:174:10",
                            "data-orchids-name": "motion.a",
                            href: "#",
                            target: "_self",
                            rel: "",
                            className: "inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1200] border border-[rgba(251,191,36,0.3)] text-[#fbbf24] font-semibold hover:bg-[rgba(251,191,36,0.1)] transition-all",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    "data-orchids-id": "components\\ConnectSection.tsx:182:12",
                                    "data-orchids-name": "ArrowUp",
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                "GO UP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/ConnectSection.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c = ConnectSection;
var _c;
__turbopack_context__.k.register(_c, "ConnectSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/RevealOnScroll.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/loader.js [app-client] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2d$nfc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmartphoneNfc$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/smartphone-nfc.js [app-client] (ecmascript) <export default as SmartphoneNfc>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ContactSection() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const handleChange = (e)=>{
        setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("loading");
        // Simulate send
        await new Promise((r)=>setTimeout(r, 1800));
        setStatus("success");
        setTimeout(()=>{
            setStatus("idle");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        }, 3000);
    };
    const inputClass = "w-full bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.2)] rounded-xl px-4 py-3 text-[#e2e8f0] text-sm placeholder-[#475569] focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[rgba(99,102,241,0.3)] transition-all duration-200";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "components\\ContactSection.tsx:59:4",
        "data-orchids-name": "section",
        id: "contact",
        className: "relative py-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ContactSection.tsx:60:6",
                "data-orchids-name": "div",
                className: "absolute bottom-0 right-1/4 w-96 h-96 bg-[#06b6d4] rounded-full blur-[180px] opacity-[0.05] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\ContactSection.tsx:62:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "data-orchids-id": "components\\ContactSection.tsx:63:8",
                        "data-orchids-name": "RevealOnScroll",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "components\\ContactSection.tsx:64:10",
                                "data-orchids-name": "span",
                                className: "text-[#6366f1] text-sm font-semibold tracking-widest uppercase mb-3 block",
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "components\\ContactSection.tsx:67:10",
                                "data-orchids-name": "h2",
                                className: "text-4xl lg:text-5xl font-black mb-4",
                                children: [
                                    "Let's ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\ContactSection.tsx:68:23",
                                        "data-orchids-name": "span",
                                        className: "gradient-text",
                                        children: "Work Together"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "components\\ContactSection.tsx:70:10",
                                "data-orchids-name": "p",
                                className: "text-[#64748b] text-lg max-w-xl mx-auto mt-4",
                                children: "Have a project in mind? Looking for a developer? Or just want to say hi? I'd love to hear from you!"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\ContactSection.tsx:74:10",
                                "data-orchids-name": "div",
                                className: "w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full mx-auto mt-6"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\ContactSection.tsx:77:8",
                        "data-orchids-name": "div",
                        className: "grid lg:grid-cols-2 gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "components\\ContactSection.tsx:79:10",
                                "data-orchids-name": "RevealOnScroll",
                                direction: "left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "components\\ContactSection.tsx:80:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\ContactSection.tsx:81:14",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:82:16",
                                                    "data-orchids-name": "h3",
                                                    className: "text-2xl font-bold text-white mb-3",
                                                    children: "Contact Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:85:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-[#64748b] leading-relaxed",
                                                    children: "I'm currently open to full-time roles, freelance projects, and technical consultations. Response time is usually within 24 hours."
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                                label: "Email",
                                                value: "harshil505p@gmail.com",
                                                href: "mailto:harshil505p@gmail.com",
                                                color: "#6366f1"
                                            },
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                                label: "Phone",
                                                value: "+91 74878 68007",
                                                href: "tel:+917487868007",
                                                color: "#06b6d4"
                                            },
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2d$nfc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SmartphoneNfc$3e$__["SmartphoneNfc"],
                                                label: "Whatsapp",
                                                value: "+91 74878 68007",
                                                href: "tel:+917487868007",
                                                color: "#065fd4"
                                            },
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                                label: "Location",
                                                value: "Ahemdabad,Gujarat,India",
                                                href: "#",
                                                color: "#ec4899"
                                            }
                                        ].map((param)=>{
                                            let { icon: Icon, label, value, href, color } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                "data-orchids-id": "components\\ContactSection.tsx:122:16",
                                                "data-orchids-name": "motion.a",
                                                href: href,
                                                className: "flex items-center gap-4 p-4 rounded-xl bg-[rgba(15,15,26,0.8)] border border-[rgba(99,102,241,0.12)] hover:border-[rgba(99,102,241,0.3)] transition-all group",
                                                whileHover: {
                                                    x: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "components\\ContactSection.tsx:128:18",
                                                        "data-orchids-name": "div",
                                                        className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                                        style: {
                                                            background: color + "20",
                                                            border: "1px solid ".concat(color, "40")
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            "data-orchids-id": "components\\ContactSection.tsx:135:20",
                                                            "data-orchids-name": "Icon",
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "components\\ContactSection.tsx:137:18",
                                                        "data-orchids-name": "div",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "components\\ContactSection.tsx:138:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-xs text-[#475569] mb-0.5",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "components\\ContactSection.tsx:139:20",
                                                                "data-orchids-name": "div",
                                                                className: "text-sm font-medium text-[#cbd5e1] group-hover:text-white transition-colors",
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\ContactSection.tsx:147:14",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:148:16",
                                                    "data-orchids-name": "div",
                                                    className: "text-xs text-[#475569] mb-4 uppercase tracking-widest",
                                                    children: "Follow me"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:151:16",
                                                    "data-orchids-name": "div",
                                                    className: "flex gap-3",
                                                    children: [
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                                            href: "https://github.com/Hars505",
                                                            color: "#e2e8f0"
                                                        },
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                                            href: "https://www.linkedin.com/in/hp-hp5065/",
                                                            color: "#0ea5e9"
                                                        },
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                                            href: "https://x.com/harshil_505pl",
                                                            color: "#38bdf8"
                                                        }
                                                    ].map((param)=>{
                                                        let { icon: Icon, href, color } = param;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                            "data-orchids-id": "components\\ContactSection.tsx:169:20",
                                                            "data-orchids-name": "motion.a",
                                                            href: href,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "w-11 h-11 rounded-xl flex items-center justify-center border border-[rgba(99,102,241,0.2)] bg-[rgba(15,15,26,0.8)] hover:border-[rgba(99,102,241,0.5)] transition-all",
                                                            style: {
                                                                color
                                                            },
                                                            whileHover: {
                                                                scale: 1.1,
                                                                y: -2
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                "data-orchids-id": "components\\ContactSection.tsx:178:22",
                                                                "data-orchids-name": "Icon",
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, href, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-orchids-id": "components\\ContactSection.tsx:185:14",
                                            "data-orchids-name": "motion.div",
                                            className: "p-5 rounded-2xl bg-gradient-to-br from-[rgba(99,102,241,0.12)] to-[rgba(139,92,246,0.06)] border border-[rgba(99,102,241,0.2)]",
                                            animate: {
                                                boxShadow: [
                                                    "0 0 0 rgba(99,102,241,0)",
                                                    "0 0 30px rgba(99,102,241,0.1)",
                                                    "0 0 0 rgba(99,102,241,0)"
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:196:16",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-3 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:197:18",
                                                            "data-orchids-name": "span",
                                                            className: "w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:198:18",
                                                            "data-orchids-name": "span",
                                                            className: "text-sm font-semibold text-green-400",
                                                            children: "Available for Work"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:202:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-[#94a3b8] text-sm",
                                                    children: "Currently open to full-time positions and interesting freelance projects."
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$RevealOnScroll$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "components\\ContactSection.tsx:211:10",
                                "data-orchids-name": "RevealOnScroll",
                                direction: "right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                                    "data-orchids-id": "components\\ContactSection.tsx:212:12@handleSubmit",
                                    "data-orchids-name": "motion.form",
                                    onSubmit: handleSubmit,
                                    className: "bg-[rgba(15,15,26,0.9)] border border-[rgba(99,102,241,0.15)] rounded-2xl p-8 space-y-5 mt-30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\ContactSection.tsx:216:14",
                                            "data-orchids-name": "div",
                                            className: "grid sm:grid-cols-2 gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:217:16",
                                                    "data-orchids-name": "div",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:218:18",
                                                            "data-orchids-name": "label",
                                                            className: "block text-xs text-[#64748b] mb-2 uppercase tracking-widest",
                                                            children: "Your Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:221:18@handleChange@inputClass",
                                                            "data-orchids-name": "input",
                                                            type: "text",
                                                            name: "name",
                                                            value: form.name,
                                                            onChange: handleChange,
                                                            placeholder: "James Bond",
                                                            required: true,
                                                            className: inputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:231:16",
                                                    "data-orchids-name": "div",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:232:18",
                                                            "data-orchids-name": "label",
                                                            className: "block text-xs text-[#64748b] mb-2 uppercase tracking-widest",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:235:18@handleChange@inputClass",
                                                            "data-orchids-name": "input",
                                                            type: "email",
                                                            name: "email",
                                                            value: form.email,
                                                            onChange: handleChange,
                                                            placeholder: "john@example.com",
                                                            required: true,
                                                            className: inputClass
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\ContactSection.tsx:247:14",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:248:16",
                                                    "data-orchids-name": "label",
                                                    className: "block text-xs text-[#64748b] mb-2 uppercase tracking-widest",
                                                    children: "Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:251:16@handleChange@inputClass",
                                                    "data-orchids-name": "select",
                                                    name: "subject",
                                                    value: form.subject,
                                                    onChange: handleChange,
                                                    required: true,
                                                    className: inputClass,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:258:18",
                                                            "data-orchids-name": "option",
                                                            value: "",
                                                            disabled: true,
                                                            children: "Select a subject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:261:18",
                                                            "data-orchids-name": "option",
                                                            value: "job",
                                                            children: "Job Opportunity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:262:18",
                                                            "data-orchids-name": "option",
                                                            value: "freelance",
                                                            children: "Freelance Project"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:263:18",
                                                            "data-orchids-name": "option",
                                                            value: "collab",
                                                            children: "Collaboration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:264:18",
                                                            "data-orchids-name": "option",
                                                            value: "mentorship",
                                                            children: "Mentorship"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            "data-orchids-id": "components\\ContactSection.tsx:265:18",
                                                            "data-orchids-name": "option",
                                                            value: "other",
                                                            children: "General Inquiry"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "components\\ContactSection.tsx:269:14",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:270:16",
                                                    "data-orchids-name": "label",
                                                    className: "block text-xs text-[#64748b] mb-2 uppercase tracking-widest",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    "data-orchids-id": "components\\ContactSection.tsx:273:16@handleChange",
                                                    "data-orchids-name": "textarea",
                                                    name: "message",
                                                    value: form.message,
                                                    onChange: handleChange,
                                                    placeholder: "Tell me about your project or inquiry...",
                                                    required: true,
                                                    rows: 5,
                                                    className: inputClass + " resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            "data-orchids-id": "components\\ContactSection.tsx:284:14",
                                            "data-orchids-name": "motion.button",
                                            type: "submit",
                                            disabled: status !== "idle",
                                            className: "w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-white transition-all duration-300 ".concat(status === "success" ? "bg-green-600/80" : "bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:opacity-90"),
                                            whileHover: status === "idle" ? {
                                                scale: 1.02
                                            } : {},
                                            whileTap: status === "idle" ? {
                                                scale: 0.98
                                            } : {},
                                            children: [
                                                status === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            "data-orchids-id": "components\\ContactSection.tsx:297:20",
                                                            "data-orchids-name": "Send",
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Send Message"
                                                    ]
                                                }, void 0, true),
                                                status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                                            className: "w-4 h-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Sending..."
                                                    ]
                                                }, void 0, true),
                                                status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            "data-orchids-id": "components\\ContactSection.tsx:307:20",
                                                            "data-orchids-name": "CheckCircle",
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Message Sent!"
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/ContactSection.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "iocLquYDaUdD661nbRd8YLFZldc=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
"use client";
;
;
;
function Footer() {
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "data-orchids-id": "components\\Footer.tsx:12:4",
        "data-orchids-name": "footer",
        className: "relative py-12 border-t border-[rgba(99,102,241,0.1)] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\Footer.tsx:13:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 grid-bg opacity-30 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "components\\Footer.tsx:15:6",
                "data-orchids-name": "div",
                className: "max-w-7xl mx-auto px-6 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\Footer.tsx:16:8",
                        "data-orchids-name": "div",
                        className: "flex flex-col md:flex-row items-center justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "components\\Footer.tsx:18:10",
                                "data-orchids-name": "motion.div",
                                className: "text-xl font-bold gradient-text",
                                whileHover: {
                                    scale: 1.05
                                },
                                children: "< HAP's Portfolio />"
                            }, void 0, false, {
                                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\Footer.tsx:26:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2 text-[#475569] text-sm",
                                children: [
                                    "Made with",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "components\\Footer.tsx:28:12",
                                        "data-orchids-name": "Heart",
                                        className: "w-4 h-4 text-[#ec4899] fill-[#ec4899] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "by",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "components\\Footer.tsx:30:12",
                                        "data-orchids-name": "span",
                                        className: "text-[#a5b4fc] font-semibold",
                                        children: "Harshil Panchal"
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    "© ",
                                    new Date().getFullYear()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "components\\Footer.tsx:35:10",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3",
                                children: [
                                    [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
                                            href: "https://github.com/Hars505"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                            href: "https://www.linkedin.com/in/hp-hp5065/"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                            href: "https://x.com/harshil_505pl"
                                        }
                                    ].map((param, i)=>{
                                        let { icon: Icon, href } = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                            "data-orchids-id": "components\\Footer.tsx:44:14",
                                            "data-orchids-name": "motion.a",
                                            href: href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-9 h-9 rounded-lg flex items-center justify-center border border-[rgba(99,102,241,0.2)] text-[#64748b] hover:text-[#6366f1] hover:border-[rgba(99,102,241,0.5)] transition-all",
                                            whileHover: {
                                                scale: 1.1,
                                                y: -2
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                "data-orchids-id": "components\\Footer.tsx:52:16",
                                                "data-orchids-name": "Icon",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        "data-orchids-id": "components\\Footer.tsx:56:12@scrollToTop",
                                        "data-orchids-name": "motion.button",
                                        onClick: scrollToTop,
                                        className: "w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white ml-2 hover:opacity-80 transition-all",
                                        whileHover: {
                                            scale: 1.1,
                                            y: -2
                                        },
                                        title: "Scroll to top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                            "data-orchids-id": "components\\Footer.tsx:62:14",
                                            "data-orchids-name": "ArrowUp",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Project/portfolio/components/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "components\\Footer.tsx:67:8",
                        "data-orchids-name": "div",
                        className: "mt-6 pt-6 border-t border-[rgba(99,102,241,0.07)] text-center text-xs text-[#334155]",
                        children: "Built with Next.js · javaScript · Tailwind CSS · Html · Deployed on VS code"
                    }, void 0, false, {
                        fileName: "[project]/Project/portfolio/components/Footer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Project/portfolio/components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/components/ScrollOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const sectionIds = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "connect",
    "contact"
];
const sectionLabels = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Connect",
    "Contact"
];
const sectionPreviews = [
    {
        id: "home",
        label: "Home",
        color: "#6366f1"
    },
    {
        id: "about",
        label: "About",
        color: "#06b6d4"
    },
    {
        id: "skills",
        label: "Skills",
        color: "#8b5cf6"
    },
    {
        id: "projects",
        label: "Projects",
        color: "#fbbf24"
    },
    {
        id: "achievements",
        label: "Achievements",
        color: "#ec4899"
    },
    {
        id: "connect",
        label: "Connect",
        color: "#10b981"
    },
    {
        id: "contact",
        label: "Contact",
        color: "#f97316"
    }
];
function ScrollOverview() {
    _s();
    const [showOverview, setShowOverview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollUpDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lockScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const openOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollOverview.useCallback[openOverview]": ()=>{
            if (isOverview.current) return;
            isOverview.current = true;
            setShowOverview(true);
            document.body.style.overflow = "hidden";
        }
    }["ScrollOverview.useCallback[openOverview]"], []);
    const closeOverview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollOverview.useCallback[closeOverview]": ()=>{
            if (!isOverview.current) return;
            isOverview.current = false;
            setShowOverview(false);
            document.body.style.overflow = "";
            scrollUpDelta.current = 0;
        }
    }["ScrollOverview.useCallback[closeOverview]"], []);
    const navigateTo = (id)=>{
        closeOverview();
        setTimeout(()=>{
            var _document_getElementById;
            (_document_getElementById = document.getElementById(id)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView({
                behavior: "smooth"
            });
        }, 300);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollOverview.useEffect": ()=>{
            const handleScroll = {
                "ScrollOverview.useEffect.handleScroll": ()=>{
                    if (lockScroll.current) return;
                    const currentY = window.scrollY;
                    const delta = lastScrollY.current - currentY; // positive = scrolling up
                    // Only trigger if at top of page and scrolling up more
                    if (currentY <= 0 || currentY < 80) {
                        if (delta > 0) {
                            scrollUpDelta.current += delta;
                            if (scrollUpDelta.current > 60 && !isOverview.current) {
                                openOverview();
                            }
                        }
                    } else {
                        scrollUpDelta.current = 0;
                    }
                    lastScrollY.current = currentY;
                }
            }["ScrollOverview.useEffect.handleScroll"];
            const handleWheel = {
                "ScrollOverview.useEffect.handleWheel": (e)=>{
                    if (lockScroll.current) return;
                    // If at top of page and scrolling up (negative deltaY = scroll up)
                    if (window.scrollY <= 10 && e.deltaY < -30 && !isOverview.current) {
                        scrollUpDelta.current += Math.abs(e.deltaY);
                        if (scrollUpDelta.current > 80) {
                            openOverview();
                        }
                        return;
                    }
                    // When overview is open and user scrolls down, close it
                    if (isOverview.current && e.deltaY > 30) {
                        closeOverview();
                        return;
                    }
                }
            }["ScrollOverview.useEffect.handleWheel"];
            const handleKeyDown = {
                "ScrollOverview.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape" && isOverview.current) {
                        closeOverview();
                    }
                }
            }["ScrollOverview.useEffect.handleKeyDown"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("wheel", handleWheel, {
                passive: true
            });
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "ScrollOverview.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("wheel", handleWheel);
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["ScrollOverview.useEffect"];
        }
    }["ScrollOverview.useEffect"], [
        openOverview,
        closeOverview
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        "data-orchids-id": "components\\ScrollOverview.tsx:113:4",
        "data-orchids-name": "AnimatePresence",
        children: showOverview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            "data-orchids-id": "components\\ScrollOverview.tsx:115:8@closeOverview",
            "data-orchids-name": "motion.div",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.4
            },
            className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
            style: {
                background: "rgba(10,10,15,0.97)",
                backdropFilter: "blur(20px)"
            },
            onClick: closeOverview,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "components\\ScrollOverview.tsx:125:10",
                    "data-orchids-name": "div",
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                        backgroundImage: "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }
                }, void 0, false, {
                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "components\\ScrollOverview.tsx:135:10",
                    "data-orchids-name": "motion.div",
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.1
                    },
                    className: "text-center mb-8 z-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            "data-orchids-id": "components\\ScrollOverview.tsx:141:12",
                            "data-orchids-name": "h2",
                            className: "text-2xl font-black gradient-text mb-1",
                            children: "Page Overview"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            "data-orchids-id": "components\\ScrollOverview.tsx:142:12",
                            "data-orchids-name": "p",
                            className: "text-[#475569] text-sm",
                            children: "Click any section to navigate · Press Esc to close · Scroll down to return"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                    lineNumber: 135,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "components\\ScrollOverview.tsx:146:10",
                    "data-orchids-name": "motion.div",
                    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl w-full px-6 z-10 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: sectionPreviews.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            "data-map-index": i,
                            "data-orchids-id": "components\\ScrollOverview.tsx:151:14@sectionPreviews",
                            "data-orchids-name": "motion.button",
                            initial: {
                                scale: 0.6,
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                scale: 1,
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                scale: 0.6,
                                opacity: 0
                            },
                            transition: {
                                delay: i * 0.05,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 120
                            },
                            onClick: ()=>navigateTo(section.id),
                            className: "group relative flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-300",
                            style: {
                                background: section.color + "10",
                                borderColor: section.color + "30"
                            },
                            whileHover: {
                                scale: 1.06,
                                borderColor: section.color + "80",
                                background: section.color + "20"
                            },
                            whileTap: {
                                scale: 0.96
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\ScrollOverview.tsx:171:16@sectionPreviews",
                                    "data-orchids-name": "div",
                                    className: "w-full h-20 rounded-lg overflow-hidden relative",
                                    style: {
                                        background: "linear-gradient(135deg, ".concat(section.color, "15, ").concat(section.color, "05)")
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ScrollOverview.tsx:176:18@sectionPreviews",
                                            "data-orchids-name": "div",
                                            className: "p-3 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ScrollOverview.tsx:177:20@sectionPreviews",
                                                    "data-orchids-name": "div",
                                                    className: "h-2 rounded-full w-3/4",
                                                    style: {
                                                        background: section.color + "40"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ScrollOverview.tsx:181:20@sectionPreviews",
                                                    "data-orchids-name": "div",
                                                    className: "h-1.5 rounded-full w-1/2",
                                                    style: {
                                                        background: section.color + "25"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ScrollOverview.tsx:185:20@sectionPreviews",
                                                    "data-orchids-name": "div",
                                                    className: "h-1.5 rounded-full w-2/3",
                                                    style: {
                                                        background: section.color + "20"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": i,
                                                    "data-orchids-id": "components\\ScrollOverview.tsx:189:20@sectionPreviews",
                                                    "data-orchids-name": "div",
                                                    className: "flex gap-1 mt-2",
                                                    children: [
                                                        40,
                                                        60,
                                                        45
                                                    ].map((w, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "components\\ScrollOverview.tsx:191:24",
                                                            "data-orchids-name": "div",
                                                            className: "h-3 rounded",
                                                            style: {
                                                                background: section.color + "30",
                                                                width: "".concat(w, "%")
                                                            }
                                                        }, j, false, {
                                                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": i,
                                            "data-orchids-id": "components\\ScrollOverview.tsx:200:18@sectionPreviews",
                                            "data-orchids-name": "div",
                                            className: "absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white",
                                            style: {
                                                background: section.color
                                            },
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-map-index": i,
                                    "data-orchids-id": "components\\ScrollOverview.tsx:209:16@sectionPreviews",
                                    "data-orchids-name": "span",
                                    className: "text-sm font-semibold transition-colors",
                                    style: {
                                        color: section.color
                                    },
                                    children: section.label
                                }, void 0, false, {
                                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, section.id, true, {
                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "components\\ScrollOverview.tsx:220:10",
                    "data-orchids-name": "motion.div",
                    initial: {
                        y: 20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "mt-8 flex items-center gap-2 text-[#334155] text-xs z-10 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "components\\ScrollOverview.tsx:226:12",
                            "data-orchids-name": "div",
                            className: "w-8 h-0.5 bg-[#334155] rounded"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        "Scroll Overview",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "components\\ScrollOverview.tsx:228:12",
                            "data-orchids-name": "div",
                            className: "w-8 h-0.5 bg-[#334155] rounded"
                        }, void 0, false, {
                            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    "data-orchids-id": "components\\ScrollOverview.tsx:232:10@closeOverview",
                    "data-orchids-name": "motion.button",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.3
                    },
                    onClick: closeOverview,
                    className: "absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-[rgba(99,102,241,0.3)] text-[#475569] hover:text-white hover:border-[rgba(99,102,241,0.6)] transition-all z-10",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
            lineNumber: 115,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Project/portfolio/components/ScrollOverview.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(ScrollOverview, "1vcwoHCRpMwjjwEtGblYSw4wHA0=");
_c = ScrollOverview;
var _c;
__turbopack_context__.k.register(_c, "ScrollOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project/portfolio/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ParticleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/ParticleBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/SkillsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$AchievementsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/AchievementsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ConnectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/ConnectSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ScrollOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project/portfolio/components/ScrollOverview.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-orchids-id": "app\\page.tsx:17:4",
        "data-orchids-name": "main",
        className: "relative min-h-screen bg-[#0a0a0f] overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ParticleBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:19:6",
                "data-orchids-name": "ParticleBackground"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ScrollOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:22:6",
                "data-orchids-name": "ScrollOverview"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:25:6",
                "data-orchids-name": "Navbar"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:28:6",
                "data-orchids-name": "HeroSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:29:6",
                "data-orchids-name": "AboutSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$SkillsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:30:6",
                "data-orchids-name": "SkillsSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:31:6",
                "data-orchids-name": "ProjectsSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$AchievementsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:32:6",
                "data-orchids-name": "AchievementsSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ConnectSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:33:6",
                "data-orchids-name": "ConnectSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:34:6",
                "data-orchids-name": "ContactSection"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                "data-orchids-id": "app\\page.tsx:35:6",
                "data-orchids-name": "Footer"
            }, void 0, false, {
                fileName: "[project]/Project/portfolio/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Project/portfolio/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Project_portfolio_77a2e662._.js.map