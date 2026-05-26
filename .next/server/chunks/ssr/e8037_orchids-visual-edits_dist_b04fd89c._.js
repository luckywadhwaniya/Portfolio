module.exports = [
"[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var import_react = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var import_jsx_runtime = __turbopack_context__.r("[project]/Project/portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var CHANNEL = "ORCHIDS_HOVER_v1";
var VISUAL_EDIT_MODE_KEY = "orchids_visual_edit_mode";
var FOCUSED_ELEMENT_KEY = "orchids_focused_element";
var _orchidsLastMsg = "";
var postMessageDedup = (data)=>{
    try {
        const key = JSON.stringify(data);
        if (key === _orchidsLastMsg) return;
        _orchidsLastMsg = key;
    } catch  {}
    window.parent.postMessage(data, "*");
};
var BOX_PADDING = 4;
var isTextEditable = (element)=>{
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
    if (editableTags.includes(tagName) && element.textContent?.trim()) {
        const hasDirectText = Array.from(element.childNodes).some((node)=>node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
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
    } catch  {
        return input;
    }
};
var wrapMultiline = (text)=>{
    if (text.includes("\n")) {
        const escaped = text.replace(/\n/g, "\\n");
        return `{\`${escaped}\`}`;
    }
    return text;
};
function HoverReceiver() {
    const [hoverBox, setHoverBox] = (0, import_react.useState)(null);
    const [hoverBoxes, setHoverBoxes] = (0, import_react.useState)([]);
    const [focusBox, setFocusBox] = (0, import_react.useState)(null);
    const [focusedElementId, setFocusedElementId] = (0, import_react.useState)(null);
    const [isVisualEditMode, setIsVisualEditMode] = (0, import_react.useState)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
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
            style.textContent = `
        [contenteditable="true"]:focus {
          outline: none !important;
          box-shadow: none !important;
          border-color: inherit !important;
        }
        [contenteditable="true"] {
          cursor: text !important;
        }
        /* Prevent the default blue highlight on contenteditable */
        [contenteditable="true"]::selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
        [contenteditable="true"]::-moz-selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
        /* Prevent child elements from being editable */
        [contenteditable="true"] [contenteditable="false"] {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          opacity: 0.7 !important;
          cursor: default !important;
        }
        /* Ensure protected elements can't be selected */
        [data-orchids-protected="true"] {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }
        /* Visual edit overlay styles */
        .orchids-hover-box {
          position: fixed;
          pointer-events: none;
          border: 0.5px dashed #38bdf8;
          background-color: rgba(191, 219, 254, 0.2);
          border-radius: 0.125rem;
        }
        .orchids-hover-tag {
          position: fixed;
          pointer-events: none;
          font-size: 10px;
          color: white;
          background-color: #38bdf8;
          padding: 0.125rem 0.25rem;
          border-radius: 0.125rem;
        }
        .orchids-focus-tag {
          position: fixed;
          font-size: 10px;
          font-weight: 600;
          color: white;
          background-color: #3b82f6;
          padding: 0 0.25rem;
          border-radius: 0.125rem;
          pointer-events: none;
          user-select: none;
        }
        .orchids-focus-box {
          position: fixed;
          pointer-events: none;
          border: 1.5px solid #38bdf8;
          border-radius: 0.125rem;
        }
        .orchids-resize-handle {
          position: fixed;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #38bdf8;
          border-radius: 50%;
          pointer-events: auto;
        }
        .orchids-resize-handle-nw {
          cursor: nw-resize;
        }
        .orchids-resize-handle-ne {
          cursor: ne-resize;
        }
        .orchids-resize-handle-sw {
          cursor: sw-resize;
        }
        .orchids-resize-handle-se {
          cursor: se-resize;
        }
        .orchids-resize-handle-n {
          cursor: n-resize;
        }
        .orchids-resize-handle-s {
          cursor: s-resize;
        }
        .orchids-resize-handle-w {
          cursor: w-resize;
        }
        .orchids-resize-handle-e {
          cursor: e-resize;
        }
      `;
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
        const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${orchidsId}"]`);
        allMatchingElements.forEach((el)=>{
            Object.entries(styles).forEach(([property, value])=>{
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
            if (e.data?.type === "ORCHIDS_STYLE_UPDATE") {
                const { elementId, styles } = e.data;
                const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${elementId}"]`);
                if (allMatchingElements.length > 0) {
                    const fam = styles.fontFamily || styles["fontFamily"];
                    if (fam) {
                        const familyKey = fam.replace(/['\s]+/g, "+");
                        if (!loadedFontFamilies.current.has(familyKey)) {
                            const link = document.createElement("link");
                            link.rel = "stylesheet";
                            link.href = `https://fonts.googleapis.com/css2?family=${familyKey}:wght@400&display=swap`;
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
                            Object.entries(styles).forEach(([property, value])=>{
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
            } else if (e.data?.type === "ORCHIDS_IMAGE_UPDATE") {
                const { elementId, src, oldSrc } = e.data;
                let element = null;
                const candidates = document.querySelectorAll(`[data-orchids-id="${elementId}"]`);
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
            } else if (e.data?.type === "RESIZE_ELEMENT") {
                const { elementId, width, height } = e.data;
                const element = document.querySelector(`[data-orchids-id="${elementId}"]`);
                if (element && focusedElementRef.current === element) {
                    element.style.setProperty("width", `${width}px`, "important");
                    element.style.setProperty("height", `${height}px`, "important");
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
            const dx = e.clientX - resizeStart.x;
            const dy = e.clientY - resizeStart.y;
            let newWidth = resizeStart.width;
            let newHeight = resizeStart.height;
            if (resizeHandle.includes("e")) newWidth = resizeStart.width + dx;
            if (resizeHandle.includes("w")) newWidth = resizeStart.width - dx;
            if (resizeHandle.includes("s")) newHeight = resizeStart.height + dy;
            if (resizeHandle.includes("n")) newHeight = resizeStart.height - dy;
            const parent = focusedElementRef.current?.parentElement;
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
                let widthValue = `${Math.round(width)}px`;
                let heightValue = `${Math.round(height)}px`;
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
                        widthValue = `${Math.round(widthPercent * 10) / 10}%`;
                    }
                    if (Math.abs(heightPercent - Math.round(heightPercent)) < 0.1 && [
                        25,
                        50,
                        75,
                        100
                    ].includes(Math.round(heightPercent))) {
                        heightValue = `${Math.round(heightPercent)}%`;
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
            if (isResizingRef.current) {
                return;
            }
            if (!isVisualEditModeRef.current) return;
            if (isScrolling) return;
            const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-orchids-id]") ?? null;
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
                const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${hitId}"]`);
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
            if (isResizingRef.current) return;
            if (!isVisualEditModeRef.current) return;
            const hit = e.target?.closest("[data-orchids-id]");
            if (hit && isTextEditable(hit)) {
                wasEditableRef.current = hit.contentEditable === "true";
                if (!wasEditableRef.current) {
                    const currentStyle = hit.getAttribute("style") || "";
                    hit.setAttribute("style", `${currentStyle}; outline: none !important; box-shadow: none !important;`);
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
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${hitId}"]`);
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
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
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
            if (e.data?.type !== CHANNEL) return;
            if (e.data.msg === "PREVIEW_FONT" && "elementId" in e.data) {
                const { elementId, fontFamily } = e.data;
                if (persistentFontMap.current.has(elementId)) {
                    return;
                }
                const element = document.querySelector(`[data-orchids-id="${elementId}"]`);
                if (!element) return;
                const familyKey = fontFamily.replace(/\s+/g, "+");
                if (!loadedFontFamilies.current.has(familyKey)) {
                    const link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = `https://fonts.googleapis.com/css2?family=${familyKey}:wght@400&display=swap`;
                    document.head.appendChild(link);
                    loadedFontFamilies.current.add(familyKey);
                }
                element.style.fontFamily = `'${fontFamily}', sans-serif`;
                return;
            }
            if (e.data.msg === "SCROLL" && "dx" in e.data && "dy" in e.data) {
                window.scrollBy(e.data.dx, e.data.dy);
            }
            if (e.data.msg === "VISUAL_EDIT_MODE" && "active" in e.data) {
                const newMode = e.data.active;
                setIsVisualEditMode(newMode);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
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
                const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${e.data.elementId}"]`);
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
                const allMatchingElements = document.querySelectorAll(`[data-orchids-id="${elementId}"]`);
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
"[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
var import_messenger = __toESM(__turbopack_context__.r("[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-ssr] (ecmascript)"));
var import_messenger2 = __turbopack_context__.r("[project]/Project/portfolio/node_modules/orchids-visual-edits/dist/messenger.js [app-ssr] (ecmascript)");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    CHANNEL,
    VisualEditsMessenger
}); //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=e8037_orchids-visual-edits_dist_b04fd89c._.js.map