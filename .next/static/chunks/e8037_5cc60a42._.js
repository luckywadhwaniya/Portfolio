(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/VisualEditsMessenger.tsx
var VisualEditsMessenger_exports = {};
__export(VisualEditsMessenger_exports, {
    CHANNEL: ()=>CHANNEL,
    default: ()=>HoverReceiver
});
module.exports = __toCommonJS(VisualEditsMessenger_exports);
var import_react = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var import_jsx_runtime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var CHANNEL = "ORCHIDS_HOVER_v1";
var VISUAL_EDIT_MODE_KEY = "orchids_visual_edit_mode";
var FOCUSED_ELEMENT_KEY = "orchids_focused_element";
var _orchidsLastMsg = "";
var postMessageDedup = (data)=>{
    try {
        const key = JSON.stringify(data);
        if (key === _orchidsLastMsg) return;
        _orchidsLastMsg = key;
    } catch (e) {}
    window.parent.postMessage(data, "*");
};
var BOX_PADDING = 4;
var isTextEditable = (element)=>{
    var _element_textContent;
    const tagName = element.tagName.toLowerCase();
    const editableTags = [
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "span",
        "div",
        "li",
        "td",
        "th",
        "label",
        "a",
        "button"
    ];
    if (element.contentEditable === "true" || tagName === "input" || tagName === "textarea") {
        return true;
    }
    if (editableTags.includes(tagName) && ((_element_textContent = element.textContent) === null || _element_textContent === void 0 ? void 0 : _element_textContent.trim())) {
        const hasDirectText = Array.from(element.childNodes).some((node)=>{
            var _node_textContent;
            return node.nodeType === Node.TEXT_NODE && ((_node_textContent = node.textContent) === null || _node_textContent === void 0 ? void 0 : _node_textContent.trim());
        });
        if (element.childElementCount === 0 || element.childElementCount <= 1 && hasDirectText) {
            return true;
        }
    }
    return false;
};
var extractDirectTextContent = (element)=>{
    let text = "";
    for (const node of element.childNodes){
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent || "";
        }
    }
    return text;
};
var parseOrchidsId = (orchidsId)=>{
    const parts = orchidsId.split(":");
    if (parts.length < 3) return null;
    const column = parseInt(parts.pop() || "0");
    const line = parseInt(parts.pop() || "0");
    const filePath = parts.join(":");
    if (isNaN(line) || isNaN(column)) return null;
    return {
        filePath,
        line,
        column
    };
};
var getCurrentStyles = (element)=>{
    const computed = window.getComputedStyle(element);
    const normalizeValue = (value, property)=>{
        if (property === "backgroundColor") {
            if (value === "rgba(0, 0, 0, 0)" || value === "rgb(0, 0, 0, 0)" || value === "transparent" || value === "") {
                return "transparent";
            }
        }
        if (property === "backgroundImage" && (value === "none" || value === "")) {
            return "none";
        }
        if (property === "textDecoration") {
            if (value.includes("none") || value === "") {
                return "none";
            }
        }
        if (property === "fontStyle" && (value === "normal" || value === "")) {
            return "normal";
        }
        if (property === "fontWeight") {
            const weight = parseInt(value);
            if (!isNaN(weight)) {
                return String(weight);
            }
            return value || "400";
        }
        if (property === "opacity" && (value === "1" || value === "")) {
            return "1";
        }
        if ((property.includes("padding") || property.includes("margin")) && (value === "0px" || value === "0")) {
            return "0";
        }
        if (property === "borderRadius" && (value === "0px" || value === "0")) {
            return "0";
        }
        if (property === "letterSpacing" && (value === "normal" || value === "0px")) {
            return "normal";
        }
        if (property === "gap" && (value === "normal" || value === "0px")) {
            return "normal";
        }
        return value;
    };
    return {
        fontSize: normalizeValue(computed.fontSize, "fontSize"),
        color: normalizeValue(computed.color, "color"),
        fontWeight: normalizeValue(computed.fontWeight, "fontWeight"),
        fontStyle: normalizeValue(computed.fontStyle, "fontStyle"),
        textDecoration: normalizeValue(computed.textDecoration, "textDecoration"),
        textAlign: normalizeValue(computed.textAlign, "textAlign"),
        lineHeight: normalizeValue(computed.lineHeight, "lineHeight"),
        letterSpacing: normalizeValue(computed.letterSpacing, "letterSpacing"),
        paddingLeft: normalizeValue(computed.paddingLeft, "paddingLeft"),
        paddingRight: normalizeValue(computed.paddingRight, "paddingRight"),
        paddingTop: normalizeValue(computed.paddingTop, "paddingTop"),
        paddingBottom: normalizeValue(computed.paddingBottom, "paddingBottom"),
        marginLeft: normalizeValue(computed.marginLeft, "marginLeft"),
        marginRight: normalizeValue(computed.marginRight, "marginRight"),
        marginTop: normalizeValue(computed.marginTop, "marginTop"),
        marginBottom: normalizeValue(computed.marginBottom, "marginBottom"),
        backgroundColor: normalizeValue(computed.backgroundColor, "backgroundColor"),
        backgroundImage: normalizeValue(computed.backgroundImage, "backgroundImage"),
        borderRadius: normalizeValue(computed.borderRadius, "borderRadius"),
        fontFamily: normalizeValue(computed.fontFamily, "fontFamily"),
        opacity: normalizeValue(computed.opacity, "opacity"),
        display: normalizeValue(computed.display, "display"),
        flexDirection: normalizeValue(computed.flexDirection, "flexDirection"),
        alignItems: normalizeValue(computed.alignItems, "alignItems"),
        justifyContent: normalizeValue(computed.justifyContent, "justifyContent"),
        gap: normalizeValue(computed.gap, "gap")
    };
};
var normalizeImageSrc = (input)=>{
    if (!input) return "";
    try {
        const url = new URL(input, window.location.origin);
        if (url.pathname === "/_next/image") {
            const real = url.searchParams.get("url");
            if (real) return decodeURIComponent(real);
        }
        return url.href;
    } catch (e) {
        return input;
    }
};
var wrapMultiline = (text)=>{
    if (text.includes("\n")) {
        const escaped = text.replace(/\n/g, "\\n");
        return "{`".concat(escaped, "`}");
    }
    return text;
};
function HoverReceiver() {
    const [hoverBox, setHoverBox] = (0, import_react.useState)(null);
    const [hoverBoxes, setHoverBoxes] = (0, import_react.useState)([]);
    const [focusBox, setFocusBox] = (0, import_react.useState)(null);
    const [focusedElementId, setFocusedElementId] = (0, import_react.useState)(null);
    const [isVisualEditMode, setIsVisualEditMode] = (0, import_react.useState)(()=>{
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(VISUAL_EDIT_MODE_KEY);
            return stored === "true";
        }
        return false;
    });
    const [isResizing, setIsResizing] = (0, import_react.useState)(false);
    const [resizeHandle, setResizeHandle] = (0, import_react.useState)(null);
    const [resizeStart, setResizeStart] = (0, import_react.useState)(null);
    const [isScrolling, setIsScrolling] = (0, import_react.useState)(false);
    const [hoverTag, setHoverTag] = (0, import_react.useState)(null);
    const [focusTag, setFocusTag] = (0, import_react.useState)(null);
    const isResizingRef = (0, import_react.useRef)(false);
    const lastHitElementRef = (0, import_react.useRef)(null);
    const lastHitIdRef = (0, import_react.useRef)(null);
    const focusedElementRef = (0, import_react.useRef)(null);
    const isVisualEditModeRef = (0, import_react.useRef)(false);
    const scrollTimeoutRef = (0, import_react.useRef)(null);
    const originalContentRef = (0, import_react.useRef)("");
    const originalSrcRef = (0, import_react.useRef)("");
    const focusedImageElementRef = (0, import_react.useRef)(null);
    const editingElementRef = (0, import_react.useRef)(null);
    const wasEditableRef = (0, import_react.useRef)(false);
    const styleElementRef = (0, import_react.useRef)(null);
    const originalStylesRef = (0, import_react.useRef)({});
    const appliedStylesRef = (0, import_react.useRef)(/* @__PURE__ */ new Map());
    const hasStyleChangesRef = (0, import_react.useRef)(false);
    const lastClickTimeRef = (0, import_react.useRef)(0);
    const pendingCleanupRef = (0, import_react.useRef)(null);
    const loadedFontFamilies = (0, import_react.useRef)(/* @__PURE__ */ new Set());
    const persistentFontMap = (0, import_react.useRef)(/* @__PURE__ */ new Map());
    const persistentFontTimeouts = (0, import_react.useRef)(/* @__PURE__ */ new Map());
    (0, import_react.useEffect)(()=>{
        isVisualEditModeRef.current = isVisualEditMode;
        if (typeof window !== "undefined") {
            localStorage.setItem(VISUAL_EDIT_MODE_KEY, String(isVisualEditMode));
        }
    }, [
        isVisualEditMode
    ]);
    (0, import_react.useEffect)(()=>{
        if (isVisualEditMode) {
            window.parent.postMessage({
                type: CHANNEL,
                msg: "VISUAL_EDIT_MODE_ACK",
                active: true
            }, "*");
            window.parent.postMessage({
                type: CHANNEL,
                msg: "VISUAL_EDIT_MODE_RESTORED",
                active: true
            }, "*");
            setTimeout(()=>{
                if (typeof window !== "undefined") {
                    const focusedData = localStorage.getItem(FOCUSED_ELEMENT_KEY);
                    if (focusedData) {
                        try {
                            const { id } = JSON.parse(focusedData);
                            const element = document.querySelector('[data-orchids-id="'.concat(id, '"]'));
                            if (element) {
                                const rect = element.getBoundingClientRect();
                                const clickEvent = new MouseEvent("click", {
                                    clientX: rect.left + rect.width / 2,
                                    clientY: rect.top + rect.height / 2,
                                    bubbles: true,
                                    cancelable: true
                                });
                                element.dispatchEvent(clickEvent);
                            }
                        } catch (e) {}
                    }
                }
            }, 500);
        }
    }, []);
    const expandBox = (rect)=>({
            top: rect.top - BOX_PADDING,
            left: rect.left - BOX_PADDING,
            width: rect.width + BOX_PADDING * 2,
            height: rect.height + BOX_PADDING * 2
        });
    const updateFocusBox = ()=>{
        if (focusedElementRef.current) {
            const r = focusedElementRef.current.getBoundingClientRect();
            setFocusBox(expandBox(r));
        }
    };
    (0, import_react.useEffect)(()=>{
        if (isVisualEditMode && !styleElementRef.current) {
            const style = document.createElement("style");
            style.textContent = '\n        [contenteditable="true"]:focus {\n          outline: none !important;\n          box-shadow: none !important;\n          border-color: inherit !important;\n        }\n        [contenteditable="true"] {\n          cursor: text !important;\n        }\n        /* Prevent the default blue highlight on contenteditable */\n        [contenteditable="true"]::selection {\n          background-color: rgba(59, 130, 246, 0.3);\n        }\n        [contenteditable="true"]::-moz-selection {\n          background-color: rgba(59, 130, 246, 0.3);\n        }\n        /* Prevent child elements from being editable */\n        [contenteditable="true"] [contenteditable="false"] {\n          user-select: none !important;\n          -webkit-user-select: none !important;\n          -moz-user-select: none !important;\n          -ms-user-select: none !important;\n          opacity: 0.7 !important;\n          cursor: default !important;\n        }\n        /* Ensure protected elements can\'t be selected */\n        [data-orchids-protected="true"] {\n          user-select: none !important;\n          -webkit-user-select: none !important;\n          -moz-user-select: none !important;\n          -ms-user-select: none !important;\n        }\n        /* Visual edit overlay styles */\n        .orchids-hover-box {\n          position: fixed;\n          pointer-events: none;\n          border: 0.5px dashed #38bdf8;\n          background-color: rgba(191, 219, 254, 0.2);\n          border-radius: 0.125rem;\n        }\n        .orchids-hover-tag {\n          position: fixed;\n          pointer-events: none;\n          font-size: 10px;\n          color: white;\n          background-color: #38bdf8;\n          padding: 0.125rem 0.25rem;\n          border-radius: 0.125rem;\n        }\n        .orchids-focus-tag {\n          position: fixed;\n          font-size: 10px;\n          font-weight: 600;\n          color: white;\n          background-color: #3b82f6;\n          padding: 0 0.25rem;\n          border-radius: 0.125rem;\n          pointer-events: none;\n          user-select: none;\n        }\n        .orchids-focus-box {\n          position: fixed;\n          pointer-events: none;\n          border: 1.5px solid #38bdf8;\n          border-radius: 0.125rem;\n        }\n        .orchids-resize-handle {\n          position: fixed;\n          width: 0.5rem;\n          height: 0.5rem;\n          background-color: #38bdf8;\n          border-radius: 50%;\n          pointer-events: auto;\n        }\n        .orchids-resize-handle-nw {\n          cursor: nw-resize;\n        }\n        .orchids-resize-handle-ne {\n          cursor: ne-resize;\n        }\n        .orchids-resize-handle-sw {\n          cursor: sw-resize;\n        }\n        .orchids-resize-handle-se {\n          cursor: se-resize;\n        }\n        .orchids-resize-handle-n {\n          cursor: n-resize;\n        }\n        .orchids-resize-handle-s {\n          cursor: s-resize;\n        }\n        .orchids-resize-handle-w {\n          cursor: w-resize;\n        }\n        .orchids-resize-handle-e {\n          cursor: e-resize;\n        }\n      ';
            document.head.appendChild(style);
            styleElementRef.current = style;
        } else if (!isVisualEditMode && styleElementRef.current) {
            styleElementRef.current.remove();
            styleElementRef.current = null;
        }
        return ()=>{
            if (styleElementRef.current) {
                styleElementRef.current.remove();
                styleElementRef.current = null;
            }
        };
    }, [
        isVisualEditMode
    ]);
    const protectChildElements = (element)=>{
        const childElements = element.querySelectorAll("*");
        childElements.forEach((child)=>{
            const childEl = child;
            childEl.contentEditable = "false";
            childEl.setAttribute("data-orchids-protected", "true");
            childEl.style.userSelect = "none";
            childEl.style.webkitUserSelect = "none";
        });
    };
    const restoreChildElements = (element)=>{
        const protectedElements = element.querySelectorAll('[data-orchids-protected="true"]');
        protectedElements.forEach((child)=>{
            const childEl = child;
            childEl.removeAttribute("contenteditable");
            childEl.removeAttribute("data-orchids-protected");
            childEl.style.userSelect = "";
            childEl.style.webkitUserSelect = "";
        });
    };
    const handleTextChange = (element)=>{
        if (element !== editingElementRef.current) {
            console.warn("Attempting to handle text change for non-editing element");
            return;
        }
        const orchidsId = element.getAttribute("data-orchids-id");
        if (!orchidsId) return;
        let newText;
        let oldText;
        if (element.childElementCount > 0) {
            newText = extractDirectTextContent(element);
            oldText = originalContentRef.current;
        } else {
            newText = element.innerText || element.textContent || "";
            oldText = originalContentRef.current;
        }
        if (newText !== oldText) {
            const parsed = parseOrchidsId(orchidsId);
            if (!parsed) return;
            const msg = {
                type: CHANNEL,
                msg: "TEXT_CHANGED",
                id: orchidsId,
                oldText: wrapMultiline(oldText),
                newText: wrapMultiline(newText),
                filePath: parsed.filePath,
                line: parsed.line,
                column: parsed.column
            };
            postMessageDedup(msg);
            originalContentRef.current = newText;
        }
    };
    const handleStyleChange = (element, styles)=>{
        const orchidsId = element.getAttribute("data-orchids-id");
        if (!orchidsId) return;
        const parsed = parseOrchidsId(orchidsId);
        if (!parsed) return;
        const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(orchidsId, '"]'));
        allMatchingElements.forEach((el)=>{
            Object.entries(styles).forEach((param)=>{
                let [property, value] = param;
                const cssProp = property.replace(/([A-Z])/g, "-$1").toLowerCase();
                let finalValue = value;
                if (property === "backgroundColor" && (value === "transparent" || value === "rgba(0, 0, 0, 0)" || value === "rgb(0, 0, 0, 0)")) {
                    finalValue = "transparent";
                }
                if (property === "backgroundColor" && finalValue === "transparent" || property === "backgroundImage" && value === "none" || property === "textDecoration" && value === "none" || property === "fontStyle" && value === "normal" || property === "opacity" && value === "1" || (property.includes("padding") || property.includes("margin")) && value === "0" || property === "borderRadius" && value === "0" || property === "letterSpacing" && value === "normal" || property === "gap" && value === "normal") {
                    el.style.removeProperty(cssProp);
                } else {
                    el.style.setProperty(cssProp, finalValue, "important");
                }
            });
        });
        const existingStyles = appliedStylesRef.current.get(orchidsId) || {};
        appliedStylesRef.current.set(orchidsId, {
            ...existingStyles,
            ...styles
        });
        hasStyleChangesRef.current = true;
        requestAnimationFrame(()=>{
            updateFocusBox();
        });
    };
    const handleStyleBlur = (element)=>{
        if (!hasStyleChangesRef.current) return;
        const orchidsId = element.getAttribute("data-orchids-id");
        if (!orchidsId) return;
        const parsed = parseOrchidsId(orchidsId);
        if (!parsed) return;
        const appliedStyles = appliedStylesRef.current.get(orchidsId);
        if (!appliedStyles || Object.keys(appliedStyles).length === 0) return;
        const className = element.getAttribute("class") || "";
        const msg = {
            type: CHANNEL,
            msg: "STYLE_BLUR",
            id: orchidsId,
            styles: appliedStyles,
            className,
            filePath: parsed.filePath,
            line: parsed.line,
            column: parsed.column
        };
        postMessageDedup(msg);
        hasStyleChangesRef.current = false;
    };
    const flushImageSrcChange = ()=>{
        const imgElement = focusedImageElementRef.current;
        if (!imgElement) return;
        const orchidsId = imgElement.getAttribute("data-orchids-id");
        if (!orchidsId) return;
        const parsed = parseOrchidsId(orchidsId);
        if (!parsed) return;
        const newSrc = normalizeImageSrc(imgElement.src);
        const oldSrc = normalizeImageSrc(originalSrcRef.current);
        if (!newSrc || newSrc === oldSrc) return;
        const msg = {
            type: CHANNEL,
            msg: "IMAGE_BLUR",
            id: orchidsId,
            oldSrc,
            newSrc,
            filePath: parsed.filePath,
            line: parsed.line,
            column: parsed.column
        };
        postMessageDedup(msg);
        originalSrcRef.current = newSrc;
        focusedImageElementRef.current = null;
    };
    (0, import_react.useEffect)(()=>{
        function handleMessage(e) {
            var _e_data, _e_data1, _e_data2;
            if (((_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.type) === "ORCHIDS_STYLE_UPDATE") {
                const { elementId, styles } = e.data;
                const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(elementId, '"]'));
                if (allMatchingElements.length > 0) {
                    const fam = styles.fontFamily || styles["fontFamily"];
                    if (fam) {
                        const familyKey = fam.replace(/['\s]+/g, "+");
                        if (!loadedFontFamilies.current.has(familyKey)) {
                            const link = document.createElement("link");
                            link.rel = "stylesheet";
                            link.href = "https://fonts.googleapis.com/css2?family=".concat(familyKey, ":wght@400&display=swap");
                            document.head.appendChild(link);
                            loadedFontFamilies.current.add(familyKey);
                        }
                    }
                    if (fam) {
                        persistentFontMap.current.set(elementId, fam);
                        const existingTimeout = persistentFontTimeouts.current.get(elementId);
                        if (existingTimeout) {
                            clearTimeout(existingTimeout);
                        }
                        const timeoutId = window.setTimeout(()=>{
                            persistentFontMap.current.delete(elementId);
                            persistentFontTimeouts.current.delete(elementId);
                        }, 2e3);
                        persistentFontTimeouts.current.set(elementId, timeoutId);
                    }
                    allMatchingElements.forEach((element)=>{
                        if (focusedElementRef.current === element) {
                            handleStyleChange(element, styles);
                        } else {
                            Object.entries(styles).forEach((param)=>{
                                let [property, value] = param;
                                const cssProp = property.replace(/([A-Z])/g, "-$1").toLowerCase();
                                let finalValue = String(value);
                                if (property === "backgroundColor" && (value === "transparent" || value === "rgba(0, 0, 0, 0)" || value === "rgb(0, 0, 0, 0)")) {
                                    finalValue = "transparent";
                                }
                                if (property === "backgroundColor" && finalValue === "transparent" || property === "backgroundImage" && value === "none" || property === "textDecoration" && value === "none" || property === "fontStyle" && value === "normal" || property === "opacity" && value === "1" || (property.includes("padding") || property.includes("margin")) && value === "0" || property === "borderRadius" && value === "0" || property === "letterSpacing" && value === "normal" || property === "gap" && value === "normal") {
                                    element.style.removeProperty(cssProp);
                                } else {
                                    element.style.setProperty(cssProp, finalValue, "important");
                                }
                            });
                        }
                    });
                }
            } else if (((_e_data1 = e.data) === null || _e_data1 === void 0 ? void 0 : _e_data1.type) === "ORCHIDS_IMAGE_UPDATE") {
                const { elementId, src, oldSrc } = e.data;
                let element = null;
                const candidates = document.querySelectorAll('[data-orchids-id="'.concat(elementId, '"]'));
                candidates.forEach((el)=>{
                    if (el.tagName.toLowerCase() === "img") {
                        const img = el;
                        const norm = normalizeImageSrc(img.src);
                        if (!element) element = img;
                        if (oldSrc && normalizeImageSrc(oldSrc) === norm) {
                            element = img;
                        }
                    }
                });
                if (!element) return;
                if (element.tagName.toLowerCase() === "img") {
                    const imgEl = element;
                    {
                        imgEl.removeAttribute("srcset");
                        imgEl.srcset = "";
                        imgEl.src = src;
                        originalSrcRef.current = normalizeImageSrc(src);
                        focusedImageElementRef.current = imgEl;
                        imgEl.onload = ()=>updateFocusBox();
                    }
                }
            } else if (((_e_data2 = e.data) === null || _e_data2 === void 0 ? void 0 : _e_data2.type) === "RESIZE_ELEMENT") {
                const { elementId, width, height } = e.data;
                const element = document.querySelector('[data-orchids-id="'.concat(elementId, '"]'));
                if (element && focusedElementRef.current === element) {
                    element.style.setProperty("width", "".concat(width, "px"), "important");
                    element.style.setProperty("height", "".concat(height, "px"), "important");
                    updateFocusBox();
                }
            }
        }
        window.addEventListener("message", handleMessage);
        return ()=>window.removeEventListener("message", handleMessage);
    }, []);
    const handleResizeStart = (e, handle)=>{
        if (!focusedElementRef.current) return;
        e.preventDefault();
        e.stopPropagation();
        const rect = focusedElementRef.current.getBoundingClientRect();
        setHoverBox(null);
        lastHitElementRef.current = null;
        document.body.style.pointerEvents = "none";
        const resizeHandles = document.querySelectorAll(".resize-handle");
        resizeHandles.forEach((handle2)=>{
            handle2.style.pointerEvents = "auto";
        });
        setIsResizing(true);
        isResizingRef.current = true;
        setResizeHandle(handle);
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: rect.width,
            height: rect.height
        });
    };
    (0, import_react.useEffect)(()=>{
        if (!isResizing || !resizeStart || !resizeHandle || !focusedElementRef.current) return;
        const handleMouseMove = (e)=>{
            var _focusedElementRef_current;
            const dx = e.clientX - resizeStart.x;
            const dy = e.clientY - resizeStart.y;
            let newWidth = resizeStart.width;
            let newHeight = resizeStart.height;
            if (resizeHandle.includes("e")) newWidth = resizeStart.width + dx;
            if (resizeHandle.includes("w")) newWidth = resizeStart.width - dx;
            if (resizeHandle.includes("s")) newHeight = resizeStart.height + dy;
            if (resizeHandle.includes("n")) newHeight = resizeStart.height - dy;
            const parent = (_focusedElementRef_current = focusedElementRef.current) === null || _focusedElementRef_current === void 0 ? void 0 : _focusedElementRef_current.parentElement;
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const parentStyles = window.getComputedStyle(parent);
                const parentPaddingLeft = parseFloat(parentStyles.paddingLeft) || 0;
                const parentPaddingRight = parseFloat(parentStyles.paddingRight) || 0;
                const parentPaddingTop = parseFloat(parentStyles.paddingTop) || 0;
                const parentPaddingBottom = parseFloat(parentStyles.paddingBottom) || 0;
                const maxWidth = parentRect.width - parentPaddingLeft - parentPaddingRight;
                const maxHeight = parentRect.height - parentPaddingTop - parentPaddingBottom;
                const exceedsWidth = newWidth > maxWidth;
                const exceedsHeight = newHeight > maxHeight;
                newWidth = Math.max(20, exceedsWidth ? newWidth : Math.min(newWidth, maxWidth));
                newHeight = Math.max(20, exceedsHeight ? newHeight : Math.min(newHeight, maxHeight));
            } else {
                newWidth = Math.max(20, newWidth);
                newHeight = Math.max(20, newHeight);
            }
            if (hoverBox) {
                setHoverBox(null);
            }
            if (focusedElementId) {
                window.parent.postMessage({
                    type: CHANNEL,
                    msg: "RESIZE_ELEMENT",
                    elementId: focusedElementId,
                    width: Math.round(newWidth),
                    height: Math.round(newHeight)
                }, "*");
            }
        };
        const handleMouseUp = ()=>{
            if (focusedElementRef.current && focusedElementId) {
                const element = focusedElementRef.current;
                const computedStyle = window.getComputedStyle(element);
                const width = parseFloat(computedStyle.width) || element.offsetWidth;
                const height = parseFloat(computedStyle.height) || element.offsetHeight;
                const maxWidth = computedStyle.maxWidth;
                const maxHeight = computedStyle.maxHeight;
                const hasMaxWidth = maxWidth && maxWidth !== "none" && maxWidth !== "initial";
                const hasMaxHeight = maxHeight && maxHeight !== "none" && maxHeight !== "initial";
                const parent = element.parentElement;
                let widthValue = "".concat(Math.round(width), "px");
                let heightValue = "".concat(Math.round(height), "px");
                if (parent) {
                    const parentRect = parent.getBoundingClientRect();
                    const parentStyles = window.getComputedStyle(parent);
                    const parentPaddingLeft = parseFloat(parentStyles.paddingLeft) || 0;
                    const parentPaddingRight = parseFloat(parentStyles.paddingRight) || 0;
                    const parentPaddingTop = parseFloat(parentStyles.paddingTop) || 0;
                    const parentPaddingBottom = parseFloat(parentStyles.paddingBottom) || 0;
                    const parentInnerWidth = parentRect.width - parentPaddingLeft - parentPaddingRight;
                    const parentInnerHeight = parentRect.height - parentPaddingTop - parentPaddingBottom;
                    const widthPercent = width / parentInnerWidth * 100;
                    const heightPercent = height / parentInnerHeight * 100;
                    if (Math.abs(widthPercent - Math.round(widthPercent)) < 0.1 || [
                        25,
                        33.333,
                        50,
                        66.667,
                        75,
                        100
                    ].some((v)=>Math.abs(widthPercent - v) < 0.5)) {
                        widthValue = "".concat(Math.round(widthPercent * 10) / 10, "%");
                    }
                    if (Math.abs(heightPercent - Math.round(heightPercent)) < 0.1 && [
                        25,
                        50,
                        75,
                        100
                    ].includes(Math.round(heightPercent))) {
                        heightValue = "".concat(Math.round(heightPercent), "%");
                    }
                }
                const styles = {};
                styles.width = widthValue;
                styles.height = heightValue;
                if (hasMaxWidth) {
                    styles.maxWidth = widthValue;
                }
                if (hasMaxHeight) {
                    styles.maxHeight = heightValue;
                }
                const msg = {
                    type: CHANNEL,
                    msg: "STYLE_BLUR",
                    id: focusedElementId,
                    styles,
                    filePath: "",
                    line: 0,
                    column: 0,
                    className: element.getAttribute("class") || ""
                };
                const orchidsId = element.getAttribute("data-orchids-id");
                if (orchidsId) {
                    const parsed = parseOrchidsId(orchidsId);
                    if (parsed) {
                        msg.filePath = parsed.filePath;
                        msg.line = parsed.line;
                        msg.column = parsed.column;
                    }
                }
                window.parent.postMessage(msg, "*");
            }
            setIsResizing(false);
            isResizingRef.current = false;
            setResizeHandle(null);
            setResizeStart(null);
            document.body.style.pointerEvents = "";
            lastHitElementRef.current = null;
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [
        isResizing,
        resizeStart,
        resizeHandle,
        focusedElementId,
        hoverBox
    ]);
    const cleanupEditingElement = ()=>{
        if (editingElementRef.current) {
            const element = editingElementRef.current;
            editingElementRef.current = null;
            handleStyleBlur(element);
            handleTextChange(element);
            if (element.childElementCount > 0) {
                restoreChildElements(element);
            }
            if (!wasEditableRef.current) {
                element.contentEditable = "false";
            }
            const currentStyle = element.getAttribute("style") || "";
            const cleanedStyle = currentStyle.replace(/outline:\s*none\s*!important;?/gi, "").replace(/box-shadow:\s*none\s*!important;?/gi, "").trim().replace(/;\s*;/g, ";").replace(/^;|;$/g, "");
            if (cleanedStyle) {
                element.setAttribute("style", cleanedStyle);
            } else {
                element.removeAttribute("style");
            }
            element.blur();
            const handlers = element._editHandlers;
            if (handlers) {
                element.removeEventListener("focus", handlers.focus);
                element.removeEventListener("blur", handlers.blur);
                element.removeEventListener("input", handlers.input);
                delete element._editHandlers;
            }
            wasEditableRef.current = false;
            originalContentRef.current = "";
        }
    };
    (0, import_react.useEffect)(()=>{
        if (!isVisualEditMode) return;
        const preventLinkClick = (e)=>{
            const target = e.target;
            const link = target.closest("a");
            if (link && !link.isContentEditable) {
                e.preventDefault();
                e.stopPropagation();
            }
        };
        const preventFormSubmit = (e)=>{
            e.preventDefault();
            e.stopPropagation();
        };
        document.addEventListener("click", preventLinkClick, true);
        document.addEventListener("submit", preventFormSubmit, true);
        return ()=>{
            document.removeEventListener("click", preventLinkClick, true);
            document.removeEventListener("submit", preventFormSubmit, true);
        };
    }, [
        isVisualEditMode
    ]);
    (0, import_react.useEffect)(()=>{
        if (!isVisualEditMode) {
            cleanupEditingElement();
            appliedStylesRef.current.clear();
            hasStyleChangesRef.current = false;
            focusedImageElementRef.current = null;
        }
    }, [
        isVisualEditMode
    ]);
    (0, import_react.useEffect)(()=>{
        if (focusedElementRef.current) {
            const handleUpdate = ()=>{
                updateFocusBox();
                if (focusedElementRef.current && focusedElementId) {
                    const fr = focusedElementRef.current.getBoundingClientRect();
                    const fBox = expandBox(fr);
                    if ("TURBOPACK compile-time truthy", 1) {
                        const focMsg = {
                            type: CHANNEL,
                            msg: "FOCUS_MOVED",
                            id: focusedElementId,
                            rect: {
                                top: fBox.top,
                                left: fBox.left,
                                width: fBox.width,
                                height: fBox.height
                            }
                        };
                        postMessageDedup(focMsg);
                    }
                }
            };
            window.addEventListener("scroll", handleUpdate, true);
            window.addEventListener("resize", handleUpdate);
            const resizeObserver = new ResizeObserver(handleUpdate);
            resizeObserver.observe(focusedElementRef.current);
            return ()=>{
                window.removeEventListener("scroll", handleUpdate, true);
                window.removeEventListener("resize", handleUpdate);
                resizeObserver.disconnect();
            };
        }
    }, [
        focusedElementId
    ]);
    (0, import_react.useEffect)(()=>{
        function onPointerMove(e) {
            var _document_elementFromPoint;
            if (isResizingRef.current) {
                return;
            }
            if (!isVisualEditModeRef.current) return;
            if (isScrolling) return;
            var _document_elementFromPoint_closest;
            const hit = (_document_elementFromPoint_closest = (_document_elementFromPoint = document.elementFromPoint(e.clientX, e.clientY)) === null || _document_elementFromPoint === void 0 ? void 0 : _document_elementFromPoint.closest("[data-orchids-id]")) !== null && _document_elementFromPoint_closest !== void 0 ? _document_elementFromPoint_closest : null;
            if (hit !== lastHitElementRef.current) {
                lastHitElementRef.current = hit;
                if (!hit) {
                    setHoverBox(null);
                    setHoverBoxes([]);
                    setHoverTag(null);
                    lastHitIdRef.current = null;
                    flushImageSrcChange();
                    const msg2 = {
                        type: CHANNEL,
                        msg: "HIT",
                        id: null,
                        tag: null,
                        rect: null
                    };
                    postMessageDedup(msg2);
                    return;
                }
                const hitId = hit.getAttribute("data-orchids-id");
                if (hitId === lastHitIdRef.current) {
                    return;
                }
                lastHitIdRef.current = hitId;
                const tagName = hit.getAttribute("data-orchids-name") || hit.tagName.toLowerCase();
                const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(hitId, '"]'));
                const boxes = [];
                allMatchingElements.forEach((element)=>{
                    const elementId = element.getAttribute("data-orchids-id");
                    if (elementId === focusedElementId) {
                        return;
                    }
                    const rect = element.getBoundingClientRect();
                    boxes.push(expandBox(rect));
                });
                setHoverBoxes(boxes);
                if (hitId !== focusedElementId) {
                    const r = hit.getBoundingClientRect();
                    const expandedBox = expandBox(r);
                    setHoverBox(expandedBox);
                } else {
                    setHoverBox(null);
                }
                setHoverTag(tagName);
                const msg = {
                    type: CHANNEL,
                    msg: "HIT",
                    id: hitId,
                    tag: tagName,
                    rect: hitId !== focusedElementId ? expandBox(hit.getBoundingClientRect()) : null
                };
                postMessageDedup(msg);
            }
        }
        function onPointerLeave() {
            if (!isVisualEditModeRef.current) return;
            if (isResizingRef.current) return;
            setHoverBox(null);
            setHoverBoxes([]);
            setHoverTag(null);
            flushImageSrcChange();
            lastHitElementRef.current = null;
            lastHitIdRef.current = null;
            const msg = {
                type: CHANNEL,
                msg: "HIT",
                id: null,
                tag: null,
                rect: null
            };
            postMessageDedup(msg);
        }
        function onMouseDownCapture(e) {
            var _e_target;
            if (isResizingRef.current) return;
            if (!isVisualEditModeRef.current) return;
            const hit = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.closest("[data-orchids-id]");
            if (hit && isTextEditable(hit)) {
                wasEditableRef.current = hit.contentEditable === "true";
                if (!wasEditableRef.current) {
                    const currentStyle = hit.getAttribute("style") || "";
                    hit.setAttribute("style", "".concat(currentStyle, "; outline: none !important; box-shadow: none !important;"));
                    hit.contentEditable = "true";
                    if (hit.childElementCount > 0) {
                        protectChildElements(hit);
                    }
                }
            }
        }
        function onClickCapture(e) {
            if (isResizingRef.current) return;
            if (!isVisualEditModeRef.current) return;
            const now = Date.now();
            if (now - lastClickTimeRef.current < 100) {
                return;
            }
            lastClickTimeRef.current = now;
            const target = e.target;
            const hit = target.closest("[data-orchids-id]");
            if (hit) {
                const tagName = hit.getAttribute("data-orchids-name") || hit.tagName.toLowerCase();
                const hitId = hit.getAttribute("data-orchids-id");
                const isEditable = isTextEditable(hit);
                const isLink = hit.tagName.toLowerCase() === "a" || !!hit.closest("a");
                const isButton = hit.tagName.toLowerCase() === "button" || hit.getAttribute("role") === "button";
                if (isLink || isButton || !isEditable) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                const prevFocused = focusedElementRef.current;
                focusedElementRef.current = hit;
                setFocusedElementId(hitId);
                setFocusTag(tagName);
                if (hitId && typeof window !== "undefined") {
                    const focusedElementData = {
                        id: hitId,
                        tag: tagName
                    };
                    localStorage.setItem(FOCUSED_ELEMENT_KEY, JSON.stringify(focusedElementData));
                }
                const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(hitId, '"]'));
                const boxes = [];
                allMatchingElements.forEach((element)=>{
                    if (element === hit) {
                        return;
                    }
                    const rect = element.getBoundingClientRect();
                    boxes.push(expandBox(rect));
                });
                setHoverBoxes(boxes);
                if (boxes.length > 0) {
                    setHoverTag(tagName);
                }
                if (hit.tagName.toLowerCase() === "img") {
                    focusedImageElementRef.current = hit;
                } else {
                    focusedImageElementRef.current = null;
                }
                originalStylesRef.current = getCurrentStyles(hit);
                if (isEditable) {
                    if (pendingCleanupRef.current) {
                        clearTimeout(pendingCleanupRef.current);
                        pendingCleanupRef.current = null;
                    }
                    if (editingElementRef.current && editingElementRef.current !== hit) {
                        editingElementRef.current.blur();
                        cleanupEditingElement();
                    }
                    if (hit !== editingElementRef.current) {
                        editingElementRef.current = hit;
                        if (hit.childElementCount > 0) {
                            originalContentRef.current = extractDirectTextContent(hit);
                        } else {
                            originalContentRef.current = hit.innerText || hit.textContent || "";
                        }
                        const createHandlers = (element)=>{
                            const handleFocus = ()=>{
                                if (element !== editingElementRef.current) return;
                                handleStyleBlur(element);
                                if (element.childElementCount > 0) {
                                    originalContentRef.current = extractDirectTextContent(element);
                                } else {
                                    originalContentRef.current = element.innerText || element.textContent || "";
                                }
                                hasStyleChangesRef.current = false;
                            };
                            const handleBlur = ()=>{
                                if (element !== editingElementRef.current) return;
                                handleStyleBlur(element);
                                handleTextChange(element);
                            };
                            const handleInput = ()=>{
                                if (element !== editingElementRef.current) return;
                            };
                            return {
                                handleFocus,
                                handleBlur,
                                handleInput
                            };
                        };
                        const handlers = createHandlers(hit);
                        hit.addEventListener("focus", handlers.handleFocus);
                        hit.addEventListener("blur", handlers.handleBlur);
                        hit.addEventListener("input", handlers.handleInput);
                        hit._editHandlers = {
                            focus: handlers.handleFocus,
                            blur: handlers.handleBlur,
                            input: handlers.handleInput
                        };
                    }
                }
                const r = hit.getBoundingClientRect();
                const expandedBox = expandBox(r);
                setFocusBox(expandedBox);
                setHoverBox(null);
                const className = hit.getAttribute("class") || "";
                const srcRaw = hit.tagName.toLowerCase() === "img" ? hit.src : void 0;
                if (srcRaw) {
                    originalSrcRef.current = normalizeImageSrc(srcRaw);
                }
                const computedStyles = getCurrentStyles(hit);
                const msg = {
                    type: CHANNEL,
                    msg: "ELEMENT_CLICKED",
                    id: hitId,
                    tag: tagName,
                    rect: ("TURBOPACK compile-time truthy", 1) ? {
                        top: expandedBox.top,
                        left: expandedBox.left,
                        width: expandedBox.width,
                        height: expandedBox.height
                    } : "TURBOPACK unreachable",
                    clickPosition: {
                        x: e.clientX,
                        y: e.clientY
                    },
                    isEditable,
                    currentStyles: computedStyles,
                    className,
                    src: srcRaw
                };
                postMessageDedup(msg);
                setTimeout(()=>{
                    flushImageSrcChange();
                    if (prevFocused && prevFocused !== hit) {
                        handleStyleBlur(prevFocused);
                    }
                    if (editingElementRef.current && editingElementRef.current !== hit) {
                        cleanupEditingElement();
                    }
                }, 0);
            } else {
                if (focusedElementRef.current) {
                    flushImageSrcChange();
                    handleStyleBlur(focusedElementRef.current);
                    cleanupEditingElement();
                    focusedElementRef.current = null;
                    setFocusedElementId(null);
                    setFocusTag(null);
                    setFocusBox(null);
                    setHoverBox(null);
                    setHoverBoxes([]);
                    setHoverTag(null);
                    if (typeof window !== "undefined") {
                        localStorage.removeItem(FOCUSED_ELEMENT_KEY);
                    }
                    const msg = {
                        type: CHANNEL,
                        msg: "ELEMENT_CLICKED",
                        id: null,
                        tag: null,
                        rect: {
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        },
                        clickPosition: {
                            x: e.clientX,
                            y: e.clientY
                        },
                        isEditable: false,
                        currentStyles: {},
                        className: ""
                    };
                    postMessageDedup(msg);
                }
            }
        }
        function onMsg(e) {
            var _e_data;
            if (((_e_data = e.data) === null || _e_data === void 0 ? void 0 : _e_data.type) !== CHANNEL) return;
            if (e.data.msg === "PREVIEW_FONT" && "elementId" in e.data) {
                const { elementId, fontFamily } = e.data;
                if (persistentFontMap.current.has(elementId)) {
                    return;
                }
                const element = document.querySelector('[data-orchids-id="'.concat(elementId, '"]'));
                if (!element) return;
                const familyKey = fontFamily.replace(/\s+/g, "+");
                if (!loadedFontFamilies.current.has(familyKey)) {
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = "https://fonts.googleapis.com/css2?family=".concat(familyKey, ":wght@400&display=swap");
                    document.head.appendChild(link);
                    loadedFontFamilies.current.add(familyKey);
                }
                element.style.fontFamily = "'".concat(fontFamily, "', sans-serif");
                return;
            }
            if (e.data.msg === "SCROLL" && "dx" in e.data && "dy" in e.data) {
                window.scrollBy(e.data.dx, e.data.dy);
            }
            if (e.data.msg === "VISUAL_EDIT_MODE" && "active" in e.data) {
                const newMode = e.data.active;
                setIsVisualEditMode(newMode);
                if (!newMode && typeof window !== "undefined") {
                    localStorage.removeItem(VISUAL_EDIT_MODE_KEY);
                    localStorage.removeItem(FOCUSED_ELEMENT_KEY);
                }
                window.parent.postMessage({
                    type: CHANNEL,
                    msg: "VISUAL_EDIT_MODE_ACK",
                    active: newMode
                }, "*");
                if (!newMode) {
                    flushImageSrcChange();
                    cleanupEditingElement();
                    focusedImageElementRef.current = null;
                    setHoverBox(null);
                    setHoverBoxes([]);
                    setFocusBox(null);
                    setFocusedElementId(null);
                    lastHitElementRef.current = null;
                    focusedElementRef.current = null;
                    hasStyleChangesRef.current = false;
                    setHoverTag(null);
                    setFocusTag(null);
                    const msg = {
                        type: CHANNEL,
                        msg: "HIT",
                        id: null,
                        tag: null,
                        rect: null
                    };
                    postMessageDedup(msg);
                }
            }
            if (e.data.msg === "CLEAR_INLINE_STYLES" && "elementId" in e.data) {
                const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(e.data.elementId, '"]'));
                allMatchingElements.forEach((element)=>{
                    const stylesToClear = [
                        "fontSize",
                        "color",
                        "fontWeight",
                        "fontStyle",
                        "textDecoration",
                        "textAlign",
                        "paddingLeft",
                        "paddingRight",
                        "paddingTop",
                        "paddingBottom",
                        "marginLeft",
                        "marginRight",
                        "marginTop",
                        "marginBottom",
                        "backgroundColor",
                        "backgroundImage"
                    ];
                    stylesToClear.forEach((prop)=>{
                        element.style[prop] = "";
                    });
                });
                appliedStylesRef.current.delete(e.data.elementId);
            }
            if (e.data.msg === "SHOW_ELEMENT_HOVER" && "elementId" in e.data) {
                const { elementId } = e.data;
                if (!elementId) {
                    setHoverBoxes([]);
                    setHoverTag(null);
                    return;
                }
                const allMatchingElements = document.querySelectorAll('[data-orchids-id="'.concat(elementId, '"]'));
                if (allMatchingElements.length > 0) {
                    const boxes = [];
                    let tagName = "";
                    allMatchingElements.forEach((element)=>{
                        if (element === focusedElementRef.current) {
                            return;
                        }
                        const rect = element.getBoundingClientRect();
                        boxes.push(expandBox(rect));
                        if (!tagName) {
                            tagName = element.getAttribute("data-orchids-name") || element.tagName.toLowerCase();
                        }
                    });
                    setHoverBoxes(boxes);
                    setHoverTag(boxes.length > 0 ? tagName : null);
                }
            }
        }
        function onScroll() {
            if (isResizingRef.current) return;
            if (!isVisualEditModeRef.current) return;
            setIsScrolling(true);
            setHoverBox(null);
            setHoverBoxes([]);
            const scrollMsg = {
                type: CHANNEL,
                msg: "SCROLL_STARTED"
            };
            postMessageDedup(scrollMsg);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            scrollTimeoutRef.current = window.setTimeout(()=>{
                setIsScrolling(false);
                const scrollStopMsg = {
                    type: CHANNEL,
                    msg: "SCROLL_STOPPED"
                };
                postMessageDedup(scrollStopMsg);
            }, 16);
        }
        document.addEventListener("pointermove", onPointerMove, {
            passive: true
        });
        document.addEventListener("pointerleave", onPointerLeave);
        document.addEventListener("mousedown", onMouseDownCapture, {
            capture: true
        });
        document.addEventListener("click", onClickCapture, {
            capture: true
        });
        window.addEventListener("message", onMsg);
        window.addEventListener("scroll", onScroll, true);
        return ()=>{
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerleave", onPointerLeave);
            document.removeEventListener("mousedown", onMouseDownCapture, true);
            document.removeEventListener("click", onClickCapture, true);
            window.removeEventListener("message", onMsg);
            window.removeEventListener("scroll", onScroll, true);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, [
        focusedElementId,
        isResizing
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
            isVisualEditMode && !isResizing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
                children: hoverBoxes.filter((box)=>box !== null).map((box, index)=>/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-hover-box",
                                style: {
                                    zIndex: 1e5,
                                    left: box.left,
                                    top: box.top,
                                    width: box.width,
                                    height: box.height
                                }
                            }),
                            hoverTag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-hover-tag",
                                style: {
                                    zIndex: 100001,
                                    left: box.left,
                                    top: box.top - 20
                                },
                                children: hoverTag
                            })
                        ]
                    }, index))
            }),
            isVisualEditMode && focusBox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                children: [
                    focusTag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "orchids-focus-tag",
                        style: {
                            zIndex: 100003,
                            left: focusBox.left - 4,
                            top: focusBox.top - 16
                        },
                        children: focusTag
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "orchids-focus-box",
                        style: {
                            zIndex: 100001,
                            left: focusBox.left,
                            top: focusBox.top,
                            width: focusBox.width,
                            height: focusBox.height
                        }
                    }),
                    !isResizing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                        children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-nw resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left - 4,
                                    top: focusBox.top - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "nw")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-ne resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left + focusBox.width - 4,
                                    top: focusBox.top - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "ne")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-sw resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left - 4,
                                    top: focusBox.top + focusBox.height - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "sw")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-se resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left + focusBox.width - 4,
                                    top: focusBox.top + focusBox.height - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "se")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-n resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left + focusBox.width / 2 - 4,
                                    top: focusBox.top - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "n")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-s resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left + focusBox.width / 2 - 4,
                                    top: focusBox.top + focusBox.height - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "s")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-w resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left - 4,
                                    top: focusBox.top + focusBox.height / 2 - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "w")
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "orchids-resize-handle orchids-resize-handle-e resize-handle",
                                style: {
                                    zIndex: 100002,
                                    left: focusBox.left + focusBox.width - 4,
                                    top: focusBox.top + focusBox.height / 2 - 4
                                },
                                onMouseDown: (e)=>handleResizeStart(e, "e")
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CHANNEL
}); //# sourceMappingURL=messenger.js.map
}),
"[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod));
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
var src_exports = {};
__export(src_exports, {
    CHANNEL: ()=>import_messenger2.CHANNEL,
    VisualEditsMessenger: ()=>import_messenger.default
});
module.exports = __toCommonJS(src_exports);
var import_messenger = __toESM(__turbopack_context__.r("[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-client] (ecmascript)"));
var import_messenger2 = __turbopack_context__.r("[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-client] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CHANNEL,
    VisualEditsMessenger
}); //# sourceMappingURL=index.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function disableSmoothScrollDuringRouteTransition(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    // Since this is a breaking change, this is temporarily flagged
    // and will be false by default.
    // In the next major (v16), this will be automatically enabled
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Old behavior: always manipulate styles, but warn about upcoming change
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && !hasDataAttribute && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. In a future version, ' + 'Next.js will no longer automatically disable smooth scrolling during route transitions. ' + 'To prepare for this change, add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=disable-smooth-scroll.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bfcache.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Project/portfolio/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Project/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/use-action-queue.js [app-client] (ecmascript)");
const _bfcache = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const Activity = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                'refetch'
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:', element);
        }
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if ("TURBOPACK compile-time truthy", 1) {
                        var _domNode_parentElement;
                        if (((_domNode_parentElement = domNode.parentElement) == null ? void 0 : _domNode_parentElement.localName) === 'head') {
                        // TODO: We enter this state when metadata was rendered as part of the page or via Next.js.
                        // This is always a bug in Next.js and caused by React hoisting metadata.
                        // We need to replace `findDOMNode` in favor of Fragment Refs (when available) so that we can skip over metadata.
                        }
                    }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { tree, segmentPath, cacheNode, url } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const { tree: fullTree } = context;
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === 'object' && rsc !== null && typeof rsc.then === 'function' ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = cacheNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                '',
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            const navigatedAt = Date.now();
            cacheNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), {
                flightRouterState: refetchTree,
                nextUrl: includeNextUrl ? context.nextUrl : null
            }).then((serverResponse)=>{
                (0, _react.startTransition)(()=>{
                    (0, _useactionqueue.dispatchAppRouterAction)({
                        type: _routerreducertypes.ACTION_SERVER_PATCH,
                        previousTree: fullTree,
                        serverResponse,
                        navigatedAt
                    });
                });
                return serverResponse;
            });
            // Suspend while waiting for lazyData to resolve
            (0, _react.use)(lazyData);
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            // TODO-APP: overriding of url for parallel routes
            url: url
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { loading, children } = param;
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, url } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcache.useRouterBFCache)(activeTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        // Read segment path from the parallel router cache node.
        let cacheNode = segmentMap.get(cacheKey);
        if (cacheNode === undefined) {
            // When data is not available during rendering client-side we need to fetch
            // it from the server.
            const newLazyCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            };
            // Flight data fetch kicked off during render and put into the cache.
            cacheNode = newLazyCacheNode;
            segmentMap.set(cacheKey, newLazyCacheNode);
        }
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        // TODO: The loading module data for a segment is stored on the parent, then
        // applied to each of that parent segment's parallel route slots. In the
        // simple case where there's only one parallel route (the `children` slot),
        // this is no different from if the loading module data where stored on the
        // child directly. But I'm not sure this actually makes sense when there are
        // multiple parallel routes. It's not a huge issue because you always have
        // the option to define a narrower loading boundary for a particular slot. But
        // this sort of smells like an implementation accident to me.
        const loadingModuleData = parentCacheNode.loading;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndFocusHandler, {
                segmentPath: segmentPath,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            loading: loadingModuleData,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                                notFound: notFound,
                                forbidden: forbidden,
                                unauthorized: unauthorized,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            url: url,
                                            tree: tree,
                                            cacheNode: cacheNode,
                                            segmentPath: segmentPath
                                        }),
                                        segmentBoundaryTriggerNode
                                    ]
                                })
                            })
                        })
                    }),
                    segmentViewStateNode
                ]
            }),
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Project/portfolio/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
    }
    return "`" + target + "[" + JSON.stringify(prop) + "]`";
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    // fallthrough
    'then',
    'catch',
    'finally',
    // React Promise extension
    // fallthrough
    'status',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    // fallthrough
    'toJSON',
    '$$typeof',
    '__esModule'
]); //# sourceMappingURL=reflect-utils.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingSearchParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeUntrackedExoticSearchParamsWithDevWarnings`, but just logging
// the sync access without actually defining the search params on the promise.
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A searchParam property was accessed directly with " + expression + ". " + "`searchParams` should be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function warnForSyncSpread() {
    console.error("The keys of `searchParams` were accessed directly. " + "`searchParams` should be unwrapped with `React.use()` before accessing its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeUntrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.dev.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=search-params.browser.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration(unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticParamsWithDevWarnings`, but just
// logging the sync access without actually defining the params on the promise.
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration(unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error("A param property was accessed directly with " + expression + ". `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap `params` with `React.use()`.");
}
function warnForEnumeration(missingProperties) {
    if (missingProperties.length) {
        const describedMissingProperties = describeListOfPropertyNames(missingProperties);
        console.error("params are being enumerated incompletely missing these properties: " + describedMissingProperties + ". " + "`params` should be unwrapped with `React.use()` before using its value. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
    } else {
        console.error("params are being enumerated. " + "`params` should be unwrapped with `React.use()` before using its value. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis");
    }
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`" + properties[0] + "`";
        case 2:
            return "`" + properties[0] + "` and `" + properties[1] + "`";
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`" + properties[i] + "`, ";
                }
                description += ", and `" + properties[properties.length - 1] + "`";
                return description;
            }
    }
}
function createRenderParamsFromClient(clientParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeDynamicallyTrackedExoticParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.dev.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=params.browser.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return afterTaskAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=after-task-async-storage-instance.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
const _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=after-task-async-storage.external.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutError: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, " couldn't be rendered statically because it used ").concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
    });
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError("Route ".concat(route, ' with `dynamic = "error"` couldn\'t be rendered statically because it used ').concat(expression, ". See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering")), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    var _workStore;
    const error = Object.defineProperty(new Error("Route ".concat(workStore.route, ' used "searchParams" inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await "searchParams" outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache')), "__NEXT_ERROR_CODE", {
        value: "E779",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    var _invalidDynamicUsageError;
    (_invalidDynamicUsageError = (_workStore = workStore).invalidDynamicUsageError) !== null && _invalidDynamicUsageError !== void 0 ? _invalidDynamicUsageError : _workStore.invalidDynamicUsageError = error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function() {
        return makeErroringSearchParamsForUseCache;
    }
});
const _reflect = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerSearchParamsForMetadata = createServerSearchParamsForServerPage;
function createServerSearchParamsForServerPage(underlyingSearchParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage(workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringExoticSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : makeUntrackedExoticSearchParams(underlyingSearchParams));
}
function createRenderSearchParams(underlyingSearchParams, workStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, workStore);
        } else //TURBOPACK unreachable
        ;
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringExoticSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        if (workStore.dynamicShouldError) {
                            (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                        } else if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                        return;
                    }
                default:
                    {
                        if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop)) {
                            const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                            if (workStore.dynamicShouldError) {
                                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                            } else if (prerenderStore.type === 'prerender-ppr') {
                                // PPR Prerender (no cacheComponents)
                                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                            } else {
                                // Legacy Prerender
                                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                            }
                        }
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        },
        has (target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests trigger dynamic. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string') {
                const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
                return false;
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys () {
            const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
            if (workStore.dynamicShouldError) {
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            } else if (prerenderStore.type === 'prerender-ppr') {
                // PPR Prerender (no cacheComponents)
                (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
            } else {
                // Legacy Prerender
                (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
            }
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache(workStore) {
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has: function has(target, prop) {
            // We don't expect key checking to be used except for testing the existence of
            // searchParams so we make all has tests throw an error. this means that `promise.then`
            // can resolve to the then function on the Promise prototype but 'then' in promise will assume
            // you are testing whether the searchParams has a 'then' property.
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, has);
            }
            return _reflect.ReflectAdapter.has(target, prop);
        },
        ownKeys: function ownKeys() {
            (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, ownKeys);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedExoticSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (!_reflectutils.wellKnownProperties.has(prop)) {
            Object.defineProperty(promise, prop, {
                get () {
                    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                    if (workUnitStore) {
                        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    }
                    return underlyingSearchParams[prop];
                },
                set (value) {
                    Object.defineProperty(promise, prop, {
                        value,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    return promise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeDynamicallyTrackedExoticSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    let promiseInitialized = false;
    const proxiedUnderlying = new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized) {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
                const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
                if (workUnitStore) {
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (store.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (store.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
    // We don't use makeResolvedReactPromise here because searchParams
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingSearchParams);
    promise.then(()=>{
        promiseInitialized = true;
    });
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            Object.defineProperty(promise, prop, {
                get () {
                    return proxiedUnderlying[prop];
                },
                set (newValue) {
                    Object.defineProperty(promise, prop, {
                        value: newValue,
                        writable: true,
                        enumerable: true
                    });
                },
                enumerable: true,
                configurable: true
            });
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && store.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(store.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    syncIODev(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticSearchParamsWithDevWarnings`, but
// just logging the sync access without actually defining the search params on
// the promise.
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, store) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            warnForIncompleteEnumeration(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createSearchAccessError(route, expression) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`searchParams` should be awaited before using its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E249",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`searchParams` should be awaited before using its properties. " + "The following properties were not available through enumeration " + "because they conflict with builtin or well-known property names: " + "".concat(describeListOfPropertyNames(missingProperties), ". ") + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E2",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`".concat(properties[0], "`");
        case 2:
            return "`".concat(properties[0], "` and `").concat(properties[1], "`");
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`".concat(properties[i], "`, ");
                }
                description += ", and `".concat(properties[properties.length - 1], "`");
                return description;
            }
    }
} //# sourceMappingURL=search-params.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return dynamicAccessAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)(); //# sourceMappingURL=dynamic-access-async-storage-instance.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
const _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)"); //# sourceMappingURL=dynamic-access-async-storage.external.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Project$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project/portfolio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
const createServerParamsForMetadata = createServerParamsForServerSegment;
function createServerParamsForRoute(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, workStore) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, workStore, workUnitStore);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, workUnitStore);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const devFallbackParams = workUnitStore.devFallbackParams;
                    return createRenderParamsInDev(underlyingParams, devFallbackParams, workStore);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(let key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, workStore, prerenderStore) {
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            return makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return makeUntrackedExoticParams(underlyingParams);
    }
}
function createRuntimePrerenderParams(underlyingParams, workUnitStore) {
    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : makeUntrackedExoticParams(underlyingParams));
}
function createRenderParamsInProd(underlyingParams) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeUntrackedExoticParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, devFallbackParams, workStore) {
    let hasFallbackParams = false;
    if (devFallbackParams) {
        for(let key in underlyingParams){
            if (devFallbackParams.has(key)) {
                hasFallbackParams = true;
                break;
            }
        }
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore);
}
const CachedParams = new WeakMap();
const fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            const originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    const store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                    if (store) {
                        store.abortController.abort(Object.defineProperty(new Error("Accessed fallback `params` during prerendering."), "__NEXT_ERROR_CODE", {
                            value: "E691",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
                }
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringExoticParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
                Object.defineProperty(promise, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    set (newValue) {
                        Object.defineProperty(promise, prop, {
                            value: newValue,
                            writable: true,
                            enumerable: true
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
            } else {
                ;
                promise[prop] = underlyingParams[prop];
            }
        }
    });
    return promise;
}
function makeUntrackedExoticParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            ;
            promise[prop] = underlyingParams[prop];
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedExoticParamsWithDevWarnings(underlyingParams, hasFallbackParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams) : Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
            promise[prop] = underlyingParams[prop];
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    syncIODev(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            syncIODev(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
// Similar to `makeDynamicallyTrackedExoticParamsWithDevWarnings`, but just
// logging the sync access without actually defining the params on the promise.
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, store) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams) : Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    const unproxiedProperties = [];
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
            // These properties cannot be shadowed because they need to be the
            // true underlying value for Promises to work correctly at runtime
            unproxiedProperties.push(prop);
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(store.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForIncompleteEnumeration(store.route, expression, unproxiedProperties);
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function syncIODev(route, expression, missingProperties) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    // In all cases we warn normally
    if (missingProperties && missingProperties.length > 0) {
        warnForIncompleteEnumeration(route, expression, missingProperties);
    } else {
        warnForSyncAccess(route, expression);
    }
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
const warnForIncompleteEnumeration = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createIncompleteEnumerationError);
function createParamsAccessError(route, expression) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`params` should be awaited before using its properties. " + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E307",
        enumerable: false,
        configurable: true
    });
}
function createIncompleteEnumerationError(route, expression, missingProperties) {
    const prefix = route ? 'Route "'.concat(route, '" ') : 'This route ';
    return Object.defineProperty(new Error("".concat(prefix, "used ").concat(expression, ". ") + "`params` should be awaited before using its properties. " + "The following properties were not available through enumeration " + "because they conflict with builtin property names: " + "".concat(describeListOfPropertyNames(missingProperties), ". ") + "Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis"), "__NEXT_ERROR_CODE", {
        value: "E482",
        enumerable: false,
        configurable: true
    });
}
function describeListOfPropertyNames(properties) {
    switch(properties.length){
        case 0:
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected describeListOfPropertyNames to be called with a non-empty list of strings.'), "__NEXT_ERROR_CODE", {
                value: "E531",
                enumerable: false,
                configurable: true
            });
        case 1:
            return "`".concat(properties[0], "`");
        case 2:
            return "`".concat(properties[0], "` and `").concat(properties[1], "`");
        default:
            {
                let description = '';
                for(let i = 0; i < properties.length - 1; i++){
                    description += "`".concat(properties[i], "`, ");
                }
                description += ", and `".concat(properties[properties.length - 1], "`");
                return description;
            }
    }
} //# sourceMappingURL=params.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientPageRoot(param) {
    let { Component, searchParams, params, promises } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientSegmentRoot(param) {
    let { Component, slots, params, promise } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
}; //# sourceMappingURL=icon-mark.js.map
}),
"[project]/Project/portfolio/node_modules/next/dist/client/components/metadata/async-metadata.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AsyncMetadataOutlet", {
    enumerable: true,
    get: function() {
        return AsyncMetadataOutlet;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function MetadataOutlet(param) {
    let { promise } = param;
    const { error, digest } = (0, _react.use)(promise);
    if (error) {
        if (digest) {
            // The error will lose its original digest after passing from server layer to client layer；
            // We recover the digest property here to override the React created one if original digest exists.
            ;
            error.digest = digest;
        }
        throw error;
    }
    return null;
}
function AsyncMetadataOutlet(param) {
    let { promise } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(MetadataOutlet, {
            promise: promise
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-metadata.js.map
}),
]);

//# sourceMappingURL=e8037_5cc60a42._.js.map