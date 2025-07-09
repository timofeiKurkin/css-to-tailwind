import type { GeneralParserType } from "@/types/func/postcss";
import { findByKeyOrEmptyParser, findOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const sizingParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx.base || !ctx.obj || !ctx.set) return ""

    const parsedKeyword = findOrEmptyParser(ctx, value)
    if (parsedKeyword) return parsedKeyword

    const parsedSizeKeyword = findByKeyOrEmptyParser(ctx, value)
    if (parsedSizeKeyword) return parsedKeyword

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(ctx, value)
    if (parsedValue) return parsedValue

    return ""
}