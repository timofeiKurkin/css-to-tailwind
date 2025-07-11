import type { BaseParserType, GeneralParserType, ListParserType, ObjParserType } from "@/types/func/postcss"


export const cleanValue = (value: string): string => value.replace(/\s/g, '')

const escapeValue = (value: string): string => {
    return value.replace(/\\/g, '\\\\').replace(/([!\"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, '\\$1')
}

const isNegative = (value: string): boolean => value.startsWith("-")

export const findByKeyOrEmptyParser: ObjParserType = (ctx, value) => {
    if (!ctx || !ctx.obj) return ""

    const clean = cleanValue(value)
    const positiveValue = clean.replace(/^-/, "")

    // Match with keyword
    if (typeof ctx.obj[positiveValue] === "string") {
        const negative = isNegative(clean) ? "-" : ""
        return negative + (ctx.base ? ctx.base.concat(ctx.obj[positiveValue]).filter(Boolean).join("-") : ctx.obj[positiveValue])
    }

    return ""
}

export const findOrEmptyParser: ListParserType = (ctx, value) => {
    if (!ctx || !ctx.set) return ""

    const clean = cleanValue(value)

    // Match with keyword
    if (ctx.set.has(clean))
        return ctx.base ? ctx.base.concat(clean).join("-") : clean

    return ""
}


export const variableParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx.base) return ""

    // var(--custom-var)
    if (/^var\(--[\w-]+\)$/.test(value))
        return ctx.base.concat(`[${ctx.variablePrefix || ""}${value}]`).join("-")
    if (/^--[\w-]+$/.test(value))
        return ctx.base.concat(`[${ctx.variablePrefix || ""}var(${value})]`).join("-")

    return ""
}

const functionParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""

    // calc(), clamp(), min(), max()
    if (/^[a-z]+\(.+\)$/.test(value))
        return ctx.base.concat(`[${value}]`).join("-")

    return ""
}


export const fractionParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""
    const clean = cleanValue(value)

    // Fraction 3/2
    if (/^-?\d+\/\d+$/.test(clean)) {
        const value = clean.replace(/^-/, "")
        const negative = isNegative(value) ? "-" : ""
        return negative + ctx.base.concat(clean).join("-")
    }

    return ""
}


export const valueParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""

    const clean = cleanValue(value)

    // Any value in px, %, rem, em
    if (/^\d+(px|rem|em|%)$/.test(clean))
        return ctx.base.concat(`[${clean}]`).join("-")

    return ""
}

const numberParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""

    // Parse number
    if (/^[\d.]+$/.test(value))
        return ctx.base.concat(value).join("-")

    return ""
}


export const otherValueParser: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""

    // [value]
    if (/^[\w\s%\/\.\-\(\)\[\],:+*]*$/.test(value))
        return ctx.base.concat(`[${escapeValue(value)}]`).join("-")

    return ""
}

export const parseValueOrVariable: BaseParserType = (ctx, value) => {
    if (!ctx.base) return ""

    const parsedVariable = variableParser(ctx, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = valueParser(ctx, value)
    if (parsedValue) return parsedValue

    const parsedOtherValue = otherValueParser(ctx, value)
    if (parsedOtherValue) return parsedOtherValue

    return ""
}

export const genericConverter: GeneralParserType = (ctx, value) => {
    if (!ctx || !ctx?.base) return ""

    const clean = cleanValue(value)

    const parsedKeyword = findOrEmptyParser(ctx, clean)
    if (parsedKeyword) return parsedKeyword

    const parsedSizeKeyword = findByKeyOrEmptyParser(ctx, clean)
    if (parsedSizeKeyword) return parsedSizeKeyword

    const parsedFunction = functionParser(ctx, clean)
    if (parsedFunction) return parsedFunction

    const parsedFraction = fractionParser(ctx, clean)
    if (parsedFraction) return parsedFraction

    const parsedNumber = numberParser(ctx, clean)
    if (parsedNumber) return parsedNumber

    const parsedValueOrVariable = parseValueOrVariable(ctx, clean)
    if (parsedValueOrVariable) return parsedValueOrVariable

    return ""
}