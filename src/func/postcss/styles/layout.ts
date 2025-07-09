import type { GeneralParserType, ObjParserType } from "@/types/func/postcss";
import { findByKeyOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const isolationParser: GeneralParserType = (_, value) => {
    if (value === "isolate") return value
    if (value === "auto") return "isolation-auto"
    return ""
}

export const objectPositionParser: ObjParserType = (ctx, value) => {
    if (!ctx || !ctx.base || !ctx.obj) return ""

    const parsedByKey = findByKeyOrEmptyParser(ctx, value)
    if (parsedByKey) return parsedByKey

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(ctx, value)
    if (parsedValue) return parsedValue

    return ""
}

export const visibilityParser: GeneralParserType = (_, value) => {
    if (value === "visible" || value === "collapse") return value
    if (value === "hidden") return "invisible"
    return ""
}