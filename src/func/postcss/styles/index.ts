import type { PropertyMapType } from "@/types/func/postcss"
import { findByKeyOrEmptyParser, findOrEmptyParser, genericConverter } from "./genericConverter"
import { isolationParser, objectPositionParser, visibilityParser } from "./layout"

export const GeneralSet = new Set([
    "auto", "avoid", "all", "avoid-page",
    "avoid-column", "page", "left", "right",
    "column", "slice", "clone", "both",
    "inline-start", "inline-end", "none"
])

const DisplaySet = new Set([
    "inline", "block", "inline-block", "flow-root",
    "flex", "inline-flex", "grid", "inline-grid",
    "contents", "table", "inline-table", "table-caption",
    "table-cell", "table-column", "table-column-group", "table-footer-group",
    "table-header-group", "table-row", "table-row-group", "list-item", "none"
])

const ObjectFitSet = new Set(["contain", "cover", "fill", "none", "scale-down"])
const OverflowSet = new Set(["auto", "hidden", "clip", "visible", "scroll"])
const OverscrollSet = new Set(["auto", "contain", "none"])
const PositionSet = new Set(["static", "fixed", "absolute", "sticky", "relative"])
const VisibilitySet = new Set(["visibility", "hidden", "collapse"])
const FlexWrapSet = new Set(["nowrap", "wrap", "wrap-reverse"])

export const GeneralObj: Record<string, string> = {
    "100%": "full",
    "100vw": "screen",
    "100dvw": "dvw",
    "100dvh": "dvh",
    "100lvw": "lvw",
    "100lvh": "lvh",
    "100svw": "svw",
    "100svh": "svh",

    'min-content': 'min',
    'max-content': 'max',
    'fit-content': 'fit',

    'border-box': 'border',
    'content-box': 'content',
}

export const ObjectPositionObj: Record<string, string> = {
    "top left": "top-left",
    "top": "top",
    "top right": "top-right",
    "left": "left",
    "center": "center",
    "right": "right",
    "bottom left": "bottom-left",
    "bottom": "bottom",
    "bottom right": "bottom-right",
}

export const FlexDirection: Record<string, string> = {
    "row": "row",
    "row-reverse": "row-reverse",
    "column": "col",
    "column-reverse": "col-reverse"
}


export const propertyMap: PropertyMapType = {
    // Layout
    "aspect-ratio": {
        "ctx": { "base": ["aspect-ratio"] }, "converter": genericConverter
    },
    "columns": {
        "ctx": { "base": ["columns"] }, "converter": genericConverter
    },
    "break-after": {
        "ctx": { "base": ["break-after"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "break-before": {
        "ctx": { "base": ["break-before"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "break-inside": {
        "ctx": { "base": ["break-inside"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "box-decoration-break": {
        "ctx": { "base": ["box-decoration"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "box-sizing": {
        "ctx": { "base": ["box"], "obj": GeneralObj }, "converter": findByKeyOrEmptyParser
    },
    "display": {
        "ctx": { "set": DisplaySet }, "converter": findOrEmptyParser
    },
    "float": {
        "ctx": { "base": ["float"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "clear": {
        "ctx": { "base": ["clear"], "set": GeneralSet }, "converter": findOrEmptyParser
    },
    "isolation": {
        "ctx": {}, "converter": isolationParser
    },
    "object-fit": {
        "ctx": { "base": ["object"], "set": ObjectFitSet }, "converter": findOrEmptyParser
    },
    "object-position": {
        "ctx": { "base": ["object"], "obj": ObjectPositionObj }, "converter": objectPositionParser
    },
    "overflow": {
        "ctx": { "base": ["overflow"], "set": OverflowSet }, "converter": findOrEmptyParser
    },
    "overflow-y": {
        "ctx": { "base": ["overflow-y"], "set": OverflowSet }, "converter": findOrEmptyParser
    },
    "overflow-x": {
        "ctx": { "base": ["overflow-x"], "set": OverflowSet }, "converter": findOrEmptyParser
    },
    "overscroll": {
        "ctx": { "base": ["overscroll"], "set": OverscrollSet }, "converter": findOrEmptyParser
    },
    "overscroll-y": {
        "ctx": { "base": ["overscroll-y"], "set": OverscrollSet }, "converter": findOrEmptyParser
    },
    "overscroll-x": {
        "ctx": { "base": ["overscroll-x"], "set": OverscrollSet }, "converter": findOrEmptyParser
    },
    "position": {
        "ctx": { "set": PositionSet }, "converter": findOrEmptyParser
    },
    "visibility": {
        "ctx": { "set": VisibilitySet }, "converter": visibilityParser
    },
    "z-index": {
        "ctx": { "base": ["z"] }, "converter": genericConverter
    },

    // Flexbox & Grid
    "flex-basis": {
        "ctx": { "base": ["basis"] }, "converter": genericConverter
    },
    "flex-direction": {
        "ctx": { "base": ["flex"], "obj": FlexDirection }, "converter": findByKeyOrEmptyParser
    },
    "flex-wrap": {
        "ctx": { "base": ["flex"], "set": FlexWrapSet }, "converter": findOrEmptyParser
    }
}
