import type { PropertyMapType } from "@/types/func/postcss"
import { positionParser } from "./backgrounds"
import { AppearanceSet, BackgroundAttachmentSet, BackgroundClipObj, BlendModeSet, BorderStyleSet, ColorObj, ColorSchemeObj, CursorSet, DisplaySet, FieldSizingSet, FlexDirectionObj, FlexObj, FlexWrapSet, FontFamilyObj, FontStretchSet, FontStyleObj, FontVariantNumericObj, FontWeightObj, GeneralObj, GeneralSet, GridAutoXYObj, GridFlowObj, HyphensSet, LayoutAlignmentObj, ListStylePositionSet, ListStyleTypeSet, MaskClipObj, MaskCompositeSet, MaskModeObj, MaskTypeObj, ObjectFitSet, ObjectPositionObj, OverflowSet, OverflowWrapSet, OverscrollSet, PointerEventsSet, PositionObj, PositionSet, RepeatMap, ResizeObj, ScrollBehaviorSet, ScrollSnapAlignObj, ScrollSnapStopSet, TextAlignSet, TextDecorationObj, TextDecorationStyleSet, TextDecorationThicknessSet, TextOverflowSet, TextTransformObj, TextWrapSet, TouchActionSet, UserSelectSet, VerticalAlignSet, VisibilitySet, WhiteSpaceSet, WillChangeObj, WordBreakObj } from "./data"
import { gridColumnParser } from "./flexAndGrid"
import { findByKeyOrEmptyParser, findOrEmptyParser, genericConverter, parseValueOrVariable } from "./genericConverter"
import { isolationParser, objectPositionParser, visibilityParser } from "./layout"
import { sizingParser } from "./sizing"
import { spacingParser } from "./spacing"
import { contentParser, fontFamilyParser, fontWeightParser } from "./typography"


export const propertyMap: PropertyMapType = {
    // Layout
    "aspect-ratio": { "ctx": { "base": ["aspect-ratio"], "set": GeneralSet }, "converter": genericConverter },
    "columns": { "ctx": { "base": ["columns"], "set": GeneralSet }, "converter": genericConverter },
    "break-after": { "ctx": { "base": ["break-after"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "break-before": { "ctx": { "base": ["break-before"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "break-inside": { "ctx": { "base": ["break-inside"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "box-decoration-break": { "ctx": { "base": ["box-decoration"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "box-sizing": { "ctx": { "base": ["box"], "obj": GeneralObj }, "converter": findByKeyOrEmptyParser },
    "display": { "ctx": { "set": DisplaySet }, "converter": findOrEmptyParser },
    "float": { "ctx": { "base": ["float"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "clear": { "ctx": { "base": ["clear"], "set": GeneralSet }, "converter": findOrEmptyParser },
    "isolation": { "converter": isolationParser },
    "object-fit": { "ctx": { "base": ["object"], "set": ObjectFitSet }, "converter": findOrEmptyParser },
    "object-position": { "ctx": { "base": ["object"], "obj": ObjectPositionObj }, "converter": objectPositionParser },
    "overflow": { "ctx": { "base": ["overflow"], "set": OverflowSet }, "converter": findOrEmptyParser },
    "overflow-y": { "ctx": { "base": ["overflow-y"], "set": OverflowSet }, "converter": findOrEmptyParser },
    "overflow-x": { "ctx": { "base": ["overflow-x"], "set": OverflowSet }, "converter": findOrEmptyParser },
    "overscroll": { "ctx": { "base": ["overscroll"], "set": OverscrollSet }, "converter": findOrEmptyParser },
    "overscroll-y": { "ctx": { "base": ["overscroll-y"], "set": OverscrollSet }, "converter": findOrEmptyParser },
    "overscroll-x": { "ctx": { "base": ["overscroll-x"], "set": OverscrollSet }, "converter": findOrEmptyParser },
    "position": { "ctx": { "set": PositionSet }, "converter": findOrEmptyParser },
    "visibility": { "ctx": { "set": VisibilitySet }, "converter": visibilityParser },
    "z-index": { "ctx": { "base": ["z"], "set": GeneralSet }, "converter": genericConverter },
    "inset": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "inset-inline": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "inset-block": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "inset-inline-start": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "inset-inline-end": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "top": { "ctx": { "base": ["top"], "obj": PositionObj }, "converter": positionParser },
    "left": { "ctx": { "base": ["left"], "obj": PositionObj }, "converter": positionParser },
    "right": { "ctx": { "base": ["right"], "obj": PositionObj }, "converter": positionParser },
    "bottom": { "ctx": { "base": ["bottom"], "obj": PositionObj }, "converter": positionParser },


    // Flexbox & Grid
    "flex-basis": { "ctx": { "base": ["basis"], "set": GeneralSet }, "converter": genericConverter },
    "flex-direction": { "ctx": { "base": ["flex"], "obj": FlexDirectionObj }, "converter": findByKeyOrEmptyParser },
    "flex-wrap": { "ctx": { "base": ["flex"], "set": FlexWrapSet }, "converter": findOrEmptyParser },
    "flex": { "ctx": { "base": ["flex"], "obj": FlexObj, "set": GeneralSet }, "converter": genericConverter },
    "flex-grow": { "ctx": { "base": ["grow"] }, "converter": genericConverter },
    "flex-shrink": { "ctx": { "base": ["shrink"] }, "converter": genericConverter },
    "order": { "ctx": { "base": ["order"] }, "converter": genericConverter },
    "grid-template-columns": { "ctx": { "base": ["grid-cols"], "set": GeneralSet }, "converter": genericConverter },
    "grid-column": { "ctx": { "base": ["cal-span"], }, "converter": gridColumnParser },
    "grid-template-rows": { "ctx": { "base": ["grid-rows"], "set": GeneralSet }, "converter": genericConverter },
    // grid-row
    "grid-auto-flow": { "ctx": { "base": ["grid-flow"], "obj": GridFlowObj }, "converter": findByKeyOrEmptyParser },
    "grid-auto-columns": { "ctx": { "base": ["auto-cols"], "obj": GridAutoXYObj }, "converter": genericConverter },
    "grid-auto-rows": { "ctx": { "base": ["auto-rows"], "obj": GridAutoXYObj }, "converter": genericConverter },
    "gap": { "ctx": { "base": ["gap"] }, "converter": genericConverter },
    "column-gap": { "ctx": { "base": ["gap-x"] }, "converter": genericConverter },
    "row-gap": { "ctx": { "base": ["gap-y"] }, "converter": genericConverter },
    "justify-content": { "ctx": { "base": ["justify"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "justify-items": { "ctx": { "base": ["justify-items"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "justify-self": { "ctx": { "base": ["justify-self"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "align-content": { "ctx": { "base": ["content"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "align-items": { "ctx": { "base": ["items"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "align-self": { "ctx": { "base": ["self"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "place-content": { "ctx": { "base": ["place-content"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "place-items": { "ctx": { "base": ["place-items"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },
    "place-self": { "ctx": { "base": ["place-self"], "obj": LayoutAlignmentObj }, "converter": findByKeyOrEmptyParser },


    // Spacing
    "padding": { "ctx": { "base": ["p"] }, "converter": spacingParser },
    "padding-inline": { "ctx": { "base": ["px"] }, "converter": spacingParser },
    "padding-block": { "ctx": { "base": ["py"] }, "converter": spacingParser },
    "padding-inline-start": { "ctx": { "base": ["ps"] }, "converter": spacingParser },
    "padding-inline-end": { "ctx": { "base": ["pe"] }, "converter": spacingParser },
    "padding-top": { "ctx": { "base": ["pt"] }, "converter": spacingParser },
    "padding-right": { "ctx": { "base": ["pr"] }, "converter": spacingParser },
    "padding-bottom": { "ctx": { "base": ["pb"] }, "converter": spacingParser },
    "padding-left": { "ctx": { "base": ["pl"] }, "converter": spacingParser },
    "margin": { "ctx": { "base": ["m"] }, "converter": spacingParser },
    "margin-inline": { "ctx": { "base": ["mx"] }, "converter": spacingParser },
    "margin-block": { "ctx": { "base": ["my"] }, "converter": spacingParser },
    "margin-inline-start": { "ctx": { "base": ["ms"] }, "converter": spacingParser },
    "margin-inline-end": { "ctx": { "base": ["me"] }, "converter": spacingParser },
    "margin-top": { "ctx": { "base": ["mt"] }, "converter": spacingParser },
    "margin-right": { "ctx": { "base": ["mr"] }, "converter": spacingParser },
    "margin-bottom": { "ctx": { "base": ["mb"] }, "converter": spacingParser },
    "margin-left": { "ctx": { "base": ["ml"] }, "converter": spacingParser },


    // Sizing
    "width": { "ctx": { "base": ["w"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },
    "min-width": { "ctx": { "base": ["min-w"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },
    "max-width": { "ctx": { "base": ["max-w"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },
    "height": { "ctx": { "base": ["h"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },
    "min-height": { "ctx": { "base": ["min-h"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },
    "max-height": { "ctx": { "base": ["max-h"], "set": GeneralSet, "obj": GeneralObj }, "converter": sizingParser },


    // Typography
    "font-family": { "ctx": { "base": ["font"], "obj": FontFamilyObj }, "converter": fontFamilyParser },
    "font-size": { "ctx": { "base": ["text"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "font-style": { "ctx": { "obj": FontStyleObj }, "converter": findByKeyOrEmptyParser },
    "font-weight": { "ctx": { "base": ["font"], "obj": FontWeightObj }, "converter": fontWeightParser },
    "font-stretch": { "ctx": { "base": ["font-stretch"], "set": FontStretchSet }, "converter": genericConverter },
    "font-variant-numeric": { "ctx": { "obj": FontVariantNumericObj }, "converter": findByKeyOrEmptyParser },
    "letter-spacing": { "ctx": { "base": ["tracking"] }, "converter": genericConverter },
    "line-clamp": { "ctx": { "base": ["line-clamp"] }, "converter": parseValueOrVariable },
    "line-height": { "ctx": { "base": ["leading"] }, "converter": parseValueOrVariable },
    "list-style-image": { "ctx": { "base": ["list-image"] }, "converter": parseValueOrVariable },
    "list-style-position": { "ctx": { "base": ["list"], "set": ListStylePositionSet }, "converter": findOrEmptyParser },
    "list-style-type": { "ctx": { "base": ["list"], "set": ListStyleTypeSet }, "converter": genericConverter },
    "text-align": { "ctx": { "base": ["text"], "set": TextAlignSet }, "converter": findOrEmptyParser },
    "color": { "ctx": { "base": ["text"], "obj": ColorObj }, "converter": genericConverter },
    "text-decoration": { ctx: { "obj": TextDecorationObj }, "converter": findByKeyOrEmptyParser },
    "text-decoration-color": { "ctx": { "base": ["decoration"], "obj": ColorObj }, "converter": genericConverter },
    "text-decoration-style": { "ctx": { "base": ["decoration"], "set": TextDecorationStyleSet }, "converter": findOrEmptyParser },
    "text-decoration-thickness": { "ctx": { "base": ["decoration"], "set": TextDecorationThicknessSet }, "converter": genericConverter },
    "text-underline-offset": { "ctx": { "base": ["underline"], "set": GeneralSet }, "converter": genericConverter },
    "text-transform": { "ctx": { "obj": TextTransformObj }, "converter": findByKeyOrEmptyParser },
    "text-overflow": { "ctx": { "base": ["text"], "set": TextOverflowSet }, "converter": findOrEmptyParser },
    "text-wrap": { "ctx": { "base": ["text"], "set": TextWrapSet }, "converter": findOrEmptyParser },
    "text-indent": { "ctx": { "base": ["indent"] }, "converter": parseValueOrVariable },
    "vertical-align": { "ctx": { "base": ["align"], "set": VerticalAlignSet }, "converter": genericConverter },
    "white-space": { "ctx": { "base": ["whitespace"], "set": WhiteSpaceSet }, "converter": findOrEmptyParser },
    "word-break": { "ctx": { "base": ["break"], "obj": WordBreakObj }, "converter": findByKeyOrEmptyParser },
    "overflow-wrap": { "ctx": { "base": ["wrap"], "set": OverflowWrapSet }, "converter": findOrEmptyParser },
    "hyphens": { "ctx": { "base": ["hyphens"], "set": HyphensSet }, "converter": findOrEmptyParser },
    "content": { "ctx": { "base": ["content"], }, "converter": contentParser },


    // Backgrounds
    "background-attachment": { "ctx": { "base": ["bg"], "set": BackgroundAttachmentSet }, "converter": findOrEmptyParser },
    "background-clip": { "ctx": { "base": ["bg-clip"], "obj": BackgroundClipObj }, "converter": findByKeyOrEmptyParser },
    "background-color": { "ctx": { "base": ["bg"], "obj": ColorObj, "variablePrefix": "color:" }, "converter": genericConverter },
    "background-image": { "ctx": { "base": ["bg"], "set": GeneralSet }, "converter": genericConverter },
    "background-origin": { "ctx": { "base": ["bg-origin"], "obj": BackgroundClipObj }, "converter": findByKeyOrEmptyParser },
    "background-position": { "ctx": { "base": ["bg"], "obj": ObjectPositionObj, "additional": ["position"] }, "converter": positionParser },
    "background-repeat": { "ctx": { "base": ["bg"], "obj": RepeatMap }, "converter": findByKeyOrEmptyParser },
    "background-size": { "ctx": { "base": ["bg"], "set": ObjectFitSet, "additional": ["size"] }, "converter": positionParser },


    // Borders
    "border-radius": { "ctx": { "base": ["rounded"] }, "converter": parseValueOrVariable },
    "border-start-start-radius": { "ctx": { "base": ["rounded-ss"] }, "converter": parseValueOrVariable },
    "border-start-end-radius": { "ctx": { "base": ["rounded-se"] }, "converter": parseValueOrVariable },
    "border-end-end-radius": { "ctx": { "base": ["rounded-ee"] }, "converter": parseValueOrVariable },
    "border-end-start-radius": { "ctx": { "base": ["rounded-es"] }, "converter": parseValueOrVariable },
    "border-top-left-radius": { "ctx": { "base": ["rounded-tl"] }, "converter": parseValueOrVariable },
    "border-top-right-radius": { "ctx": { "base": ["rounded-tr"] }, "converter": parseValueOrVariable },
    "border-bottom-right-radius": { "ctx": { "base": ["rounded-br"] }, "converter": parseValueOrVariable },
    "border-bottom-left-radius": { "ctx": { "base": ["rounded-bl"] }, "converter": parseValueOrVariable },
    "border-width": { "ctx": { "base": ["border"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-inline-width": { "ctx": { "base": ["border-x"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-block-width": { "ctx": { "base": ["border-y"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-inline-start-width": { "ctx": { "base": ["border-s"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-inline-end-width": { "ctx": { "base": ["border-e"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-top-width": { "ctx": { "base": ["border-t"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-right-width": { "ctx": { "base": ["border-r"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-left-width": { "ctx": { "base": ["border-l"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "border-color": { "ctx": { "base": ["border"], "obj": ColorObj }, "converter": genericConverter },
    "border-style": { "ctx": { "base": ["border"], "set": BorderStyleSet }, "converter": findOrEmptyParser },
    "outline-width": { "ctx": { "base": ["outline"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
    "outline-color": { "ctx": { "base": ["outline"], "obj": ColorObj }, "converter": genericConverter },
    "outline-style": { "ctx": { "base": ["outline"], "set": BorderStyleSet }, "converter": findOrEmptyParser },
    "outline-offset": { "ctx": { "base": ["outline-offset"], }, "converter": parseValueOrVariable },


    // Effects
    "box-shadow": { "ctx": { "base": ["shadow"], "variablePrefix": "color:" }, "converter": parseValueOrVariable },
    "text-shadow": { "ctx": { "base": ["text-shadow"], "variablePrefix": "color:" }, "converter": parseValueOrVariable },
    "opacity": { "ctx": { "base": ["opacity"] }, "converter": parseValueOrVariable },
    "mix-blend-mode": { "ctx": { "base": ["mix-blend"], "set": BlendModeSet }, "converter": findOrEmptyParser },
    "background-blend-mode": { "ctx": { "base": ["bg-blend"], "set": BlendModeSet }, "converter": findOrEmptyParser },
    "mask-clip": { "ctx": { "base": ["mask-clip"], "obj": MaskClipObj }, "converter": findByKeyOrEmptyParser },
    "mask-composite": { "ctx": { "base": ["mask-composite"], "set": MaskCompositeSet }, "converter": findOrEmptyParser },
    "mask-image": { "ctx": { "base": ["mask"] }, "converter": parseValueOrVariable },
    "mask-mode": { "ctx": { "base": ["mask-mode"], "obj": MaskModeObj }, "converter": findByKeyOrEmptyParser },
    "mask-origin": { "ctx": { "base": ["mask-origin"], "obj": MaskClipObj }, "converter": findByKeyOrEmptyParser },
    "mask-position": { "ctx": { "base": ["mask"], "obj": ObjectPositionObj, "additional": ["position"] }, "converter": positionParser },
    "mask-repeat": { "ctx": { "base": ["mask"], "obj": RepeatMap }, "converter": findByKeyOrEmptyParser },
    "mask-size": { "ctx": { "base": ["mask"], "set": ObjectFitSet, "additional": ["size"] }, "converter": positionParser },
    "mask-type": { "ctx": { "base": ["mask-type"], "obj": MaskTypeObj }, "converter": findByKeyOrEmptyParser },

    // TODO: Add filters, tables, transitions & animations, transforms

    // Interactivity
    "accent-color": { "ctx": { "base": ["accent-color"], "obj": ColorObj }, "converter": genericConverter },
    "appearance": { "ctx": { "base": ["appearance"], "set": AppearanceSet }, "converter": findOrEmptyParser },
    "caret-color": { "ctx": { "base": ["caret-color"], "obj": ColorObj }, "converter": genericConverter },
    "color-scheme": { "ctx": { "base": ["color-scheme"], "obj": ColorSchemeObj }, "converter": findByKeyOrEmptyParser },
    "cursor": { "ctx": { "base": ["cursor"], "set": CursorSet }, "converter": findOrEmptyParser },
    "field-sizing": { "ctx": { "base": ["field-sizing"], "set": FieldSizingSet }, "converter": findOrEmptyParser },
    "pointer-events": { "ctx": { "base": ["pointer-events"], "set": PointerEventsSet }, "converter": findOrEmptyParser },
    "resize": { "ctx": { "base": ["resize"], "obj": ResizeObj }, "converter": findByKeyOrEmptyParser },
    "scroll-behavior": { "ctx": { "base": ["scroll-behavior"], "set": ScrollBehaviorSet }, "converter": findOrEmptyParser },
    "scroll-snap-align": { "ctx": { "base": ["snap"], "obj": ScrollSnapAlignObj }, "converter": findByKeyOrEmptyParser },
    "scroll-snap-stop": { "ctx": { "base": ["snap"], "set": ScrollSnapStopSet }, "converter": findOrEmptyParser },
    "touch-action": { "ctx": { "base": ["touch"], "set": TouchActionSet }, "converter": findOrEmptyParser },
    "user-select": { "ctx": { "base": ["user-select"], "set": UserSelectSet }, "converter": findOrEmptyParser },
    "will-change": { "ctx": { "base": ["will-change"], "obj": WillChangeObj }, "converter": genericConverter },

    // SVG
    "fill": { "ctx": { "base": ["fill"], "obj": ColorObj }, "converter": genericConverter },
    "stroke": { "ctx": { "base": ["stroke"], "obj": ColorObj }, "converter": genericConverter },
    "stroke-width": { "ctx": { "base": ["stroke"], "variablePrefix": "length:" }, "converter": parseValueOrVariable },
}
