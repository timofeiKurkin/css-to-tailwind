import type { GeneralParserType } from "@/types/func/postcss";
import { cleanValue, findByKeyOrEmptyParser, findOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const sizingParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx.base || !ctx.obj || !ctx.set) return ""

    const clean = cleanValue(value)

    const parsedKeyword = findOrEmptyParser(ctx, clean)
    if (parsedKeyword) return parsedKeyword

    const parsedSizeKeyword = findByKeyOrEmptyParser(ctx, clean)
    if (parsedSizeKeyword) return parsedSizeKeyword

    const parsedVariable = variableParser(ctx, clean)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(ctx, clean)
    if (parsedValue) return parsedValue

    console.log(ctx.base, value)
    return ""
}