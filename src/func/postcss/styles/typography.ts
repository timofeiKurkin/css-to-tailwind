import type { ObjParserType } from "@/types/func/postcss";
import { cleanValue, findByKeyOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const fontFamilyParser: ObjParserType = (ctx, value) => {
    if (!ctx || !ctx.base || !ctx.obj) return ""

    const clean = cleanValue(value)

    if (ctx.obj[clean])
        return ctx.base.concat(ctx.obj[clean]).join("-")

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(ctx, value)
    if (parsedValue) return parsedValue

    return ""
}

export const fontWeightParser: ObjParserType = (ctx, value) => {
    if (!ctx || !ctx.obj) return ""

    const parsedKeyword = findByKeyOrEmptyParser(ctx, value)
    if (parsedKeyword) return parsedKeyword

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(ctx, value)
    if (parsedValue) return parsedValue

    return ""
}