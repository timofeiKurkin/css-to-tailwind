import type { ListParserType } from "@/types/func/postcss";
import { findOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const spacingParser: ListParserType = (ctx, value) => {
    if (!ctx.base) return ""

    if (value === "1px")
        return ctx.base?.concat("px").join("-")

    if (value === "-1px")
        return "-" + ctx.base?.concat("px").join("-")

    const parsedKeyword = findOrEmptyParser(ctx, value)
    if (parsedKeyword) return parsedKeyword

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedOtherValue = otherValueParser(ctx, value)
    if (parsedOtherValue) return parsedOtherValue

    return ""
}