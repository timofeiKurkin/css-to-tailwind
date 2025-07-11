import type { ObjParserType } from "@/types/func/postcss";
import { cleanValue, findByKeyOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const positionParser: ObjParserType = (ctx, value) => {
    if (!ctx.base) return ""

    const clean = cleanValue(value)

    const parsedKeyword = findByKeyOrEmptyParser(ctx, clean)
    if (parsedKeyword) return parsedKeyword

    const additional = ctx.additional || []
    const contextCopy = { ...ctx, "base": [...ctx.base, ...additional] }
    const parsedVariable = variableParser(contextCopy, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser(contextCopy, value)
    if (parsedValue) return parsedValue

    return ""
}

