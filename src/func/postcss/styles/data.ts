// Sets
export const GeneralSet = new Set([
    "auto", "avoid", "all", "avoid-page",
    "avoid-column", "page", "left", "right",
    "column", "slice", "clone", "both",
    "inline-start", "inline-end", "none", "subgrid", "from-front"
])

export const DisplaySet = new Set([
    "inline", "block", "inline-block", "flow-root",
    "flex", "inline-flex", "grid", "inline-grid",
    "contents", "table", "inline-table", "table-caption",
    "table-cell", "table-column", "table-column-group", "table-footer-group",
    "table-header-group", "table-row", "table-row-group", "list-item", "none"
])

export const CursorSet = new Set([
    "auto", "default", "pointer", "wait",
    "text", "move", "help", "not-allowed",
    "none", "context-menu", "progress", "cell",
    "crosshair", "vertical-text", "alias", "copy",
    "no-drop", "grab", "grabbing", "all-scroll",
    "col-resize", "row-resize", "n-resize", "e-resize",
    "s-resize", "w-resize", "ne-resize", "nw-resize",
    "se-resize", "sw-resize", "ew-resize", "ns-resize",
    "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"
])


export const ObjectFitSet = new Set(["contain", "cover", "fill", "none", "scale-down", "auto"])
export const OverflowSet = new Set(["auto", "hidden", "clip", "visible", "scroll"])
export const OverscrollSet = new Set(["auto", "contain", "none"])
export const PositionSet = new Set(["static", "fixed", "absolute", "sticky", "relative"])
export const VisibilitySet = new Set(["visibility", "hidden", "collapse"])
export const FlexWrapSet = new Set(["nowrap", "wrap", "wrap-reverse"])
export const FontStretchSet = new Set(["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"])
export const ListStylePositionSet = new Set(["inside", "outside"])
export const ListStyleTypeSet = new Set(["disc", "decimal", "none"])
export const TextAlignSet = new Set(["left", "right", "center", "justify", "start", "end"])
export const TextDecorationStyleSet = new Set(["solid", "double", "dotted", "dashed", "wavy"])
export const TextDecorationThicknessSet = new Set(["from-font", "auto"])
export const TextOverflowSet = new Set(["clip", "ellipsis"])
export const TextWrapSet = new Set(["wrap", "nowrap", "balance", "pretty"])
export const VerticalAlignSet = new Set(["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super"])
export const WhiteSpaceSet = new Set(["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"])
export const OverflowWrapSet = new Set(["normal", "break-word", "anywhere"])
export const HyphensSet = new Set(["none", "manual", "auto"])
export const BackgroundAttachmentSet = new Set(["scroll", "fixed", "local"])
export const BorderStyleSet = new Set(["solid", "dashed", "dotted", "double", "hidden", "none"])
export const BlendModeSet = new Set(["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-darker", "plus-lighter"])
export const MaskCompositeSet = new Set(["add", "subtract", "intersect", "exclude"])
export const AppearanceSet = new Set(["auto", "none"])
export const FieldSizingSet = new Set(["fixed", "content"])
export const PointerEventsSet = new Set(["auto", "none"])
export const ScrollBehaviorSet = new Set(["auto", "smooth"])
export const ScrollSnapStopSet = new Set(["normal", "always"])
export const TouchActionSet = new Set(["auto", "none", "pan-x", "pan-y", "pan-left", "pan-right", "pan-up", "pan-down", "pinch-zoom", "manipulation"])
export const UserSelectSet = new Set(["auto", "none", "text", "all"])
export const BorderCollapseSet = new Set(["collapse", "separate"])
export const TableLayoutSet = new Set(["auto", "fixed"])
export const CaptionSideSet = new Set(["top", "bottom"])
export const BackfaceVisibilitySet = new Set(["hidden", "visible"])


// Objects
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

export const FlexObj: Record<string, string> = { "1 1 auto": "auto", "0 1 auto": "initial" }

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

export const FlexDirectionObj: Record<string, string> = {
    "row": "row",
    "row-reverse": "row-reverse",
    "column": "col",
    "column-reverse": "col-reverse"
}

export const GridFlowObj: Record<string, string> = {
    "dense": "dense",
    "row": "row",
    "column": "col",
    "row dense": "row-dense",
    "column dense": "col-dense"
}

export const GridAutoXYObj: Record<string, string> = {
    "auto": "auto",
    "min-content": "min",
    "max-content": "max",
    "minmax(0, 1fr)": "fr"
}

export const LayoutAlignmentObj: Record<string, string> = {
    "stretch": "stretch",
    "baseline": "baseline",
    "center": "center",
    "normal": "normal",
    "start": "start",
    "end": "end",
    "auto": "auto",
    "flex-start": "start",
    "flex-end": "end",
    "safe flex-end": "end-safe",
    "safe center": "center-safe",
    "safe end": "end-safe",
    "space-between": "between",
    "space-around": "around",
    "space-evenly": "evenly",
    "last baseline": "baseline-last",
}

export const FontFamilyObj: Record<string, string> = { "var(--font-sans)": "sans", "var(--font-serif)": "serif", "var(--font-mono)": "mono", }
export const FontStyleObj: Record<string, string> = { "italic": "italic", "normal": "not-italic", }

export const FontWeightObj: Record<string, string> = {
    "100": "thin",
    "200": "extralight",
    "300": "light",
    "400": "normal",
    "500": "medium",
    "600": "semibold",
    "700": "bold",
    "800": "extrabold",
    "900": "black",
}

export const FontVariantNumericObj: Record<string, string> = {
    "normal": "normal-nums",
    "ordinal": "ordinal",
    "slashed-zero": "slashed-zero",
    "lining-nums": "lining-nums",
    "oldstyle-nums": "oldstyle-nums",
    "proportional-nums": "proportional-nums",
    "tabular-nums": "tabular-nums",
    "diagonal-fractions": "diagonal-fractions",
    "stacked-fractions": "stacked-fractions",
}

export const ColorObj: Record<string, string> = {
    "currentColor": "current",
    "transparent": "transparent",
    "inherit": "inherit",
    "none": "none",
}

export const TextDecorationObj: Record<string, string> = {
    "none": "no-underline",
    "underline": "underline",
    "overline": "overline",
    "line-through": "line-through",
}

export const TextTransformObj: Record<string, string> = {
    "uppercase": "uppercase",
    "lowercase": "lowercase",
    "capitalize": "capitalize",
    "none": "normal-case",
}

export const WordBreakObj: Record<string, string> = {
    "normal": "normal",
    "break-all": "all",
    "keep-all": "keep",
}

export const BackgroundClipObj: Record<string, string> = {
    "border-box": "border",
    "padding-box": "padding",
    "content-box": "content",
    "text": "text"
}

export const RepeatMap: Record<string, string> = {
    "repeat": "repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "space": "repeat-space",
    "round": "repeat-round",
    "no-repeat": "no-repeat",
}

export const MaskClipObj: Record<string, string> = {
    "border-box": "border",
    "padding-box": "padding",
    "content-box": "content",
    "fill-box": "fill",
    "stroke-box": "stroke",
    "view-box": "view",
    "no-clip": "no-clip",
}

export const MaskTypeObj: Record<string, string> = {
    "alpha": "alpha",
    "luminance": "luminance",
}

export const MaskModeObj: Record<string, string> = {
    ...MaskTypeObj,
    "match-source": "match",
}

export const ColorSchemeObj: Record<string, string> = {
    "light": "light",
    "dark": "dark",
    "normal": "normal",
    "light dark": "light-dark",
    "only dark": "only-dark",
    "only light": "only-light",
}

export const ResizeObj: Record<string, string> = {
    "none": "none",
    "both": "",
    "vertical": "y",
    "horizontal": "x"
}

export const ScrollSnapAlignObj: Record<string, string> = {
    "start": "start",
    "end": "end",
    "center": "center",
    "none": "align-none",
}

export const WillChangeObj: Record<string, string> = {
    "auto": "auto",
    "scroll-position": "scroll",
    "contents": "contents",
    "transform": "transform",
}

export const PositionObj: Record<string, string> = {
    "100%": "full",
    "1px": "-1px",
    "auto": "auto",
}

export const TransitionBehaviorObj: Record<string, string> = {
    "normal": "normal",
    "allow-discrete": "discrete",
}

export const PerspectiveOriginObj: Record<string, string> = {
    "center": "center",
    "top": "top",
    "top right": "top-right",
    "right": "right",
    "bottom right": "bottom-right",
    "bottom": "bottom",
    "bottom left": "bottom-left",
    "left": "left",
    "top left": "top-left",
}

export const TransformStyleObj: Record<string, string> = {
    "preserve-3d": "3d",
    "flat": "flat",
}
