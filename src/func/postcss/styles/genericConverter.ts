import type { ConvertFunctionType, FindByKeyOrEmptyParser, FindOrEmptyParser } from "@/types/func/postcss"
import { GeneralSet } from "."


const escapeValue = (value: string): string => {
    return value.replace(/\\/g, '\\\\').replace(/([!\"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, '\\$1')
}

export const findByKeyOrEmptyParser: FindByKeyOrEmptyParser = function (this, value) {
    if (!this || !this?.base || !this.obj) return ""

    const clean = value.replace(/\s/g, '')

    // Match with keyword
    if (this.obj[clean])
        return this.base.concat(this.obj[clean]).join("-")

    return ""
}

export const findOrEmptyParser: FindOrEmptyParser = function (this, value) {
    if (!this || !this.set) return ""

    const clean = value.replace(/\s/g, '')

    // Match with keyword
    if (this.set.has(clean))
        return this.base ? this.base.concat(clean).join("-") : clean

    return ""
}


export const variableParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // var(--custom-var)
    if (/^var\(--[\w-]+\)$/.test(value))
        return this.base.concat(`[${value}]`).join("-")
    if (/^--[\w-]+$/.test(value))
        return this.base.concat(`[var(${value})]`).join("-")

    return ""
}


const functionParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // calc(), clamp(), min(), max()
    if (/^[a-z]+\(.+\)$/.test(value))
        return this.base.concat(`[${value}]`).join("-")

    return ""
}


const fractionParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // Fraction 3/2
    if (/^\d+\/\d+$/.test(value))
        return this.base.concat(value).join("-")

    return ""
}


const valueParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // Any value in px, %, rem, em
    if (/^\d+(px|rem|em|%)$/.test(value))
        return this.base.concat(value).join("-")

    return ""
}

const numberParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // Parse number
    if (/^[\d.]+$/.test(value))
        return this.base.concat(value).join("-")

    return ""
}


export const otherValueParser: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    // [value]
    if (/^[\w\s%\/\.\-\(\)\[\],:+*]*$/.test(value))
        return this.base.concat(`[${escapeValue(value)}]`).join("-")

    return ""
}


export const genericConverter: ConvertFunctionType = function (this, value) {
    if (!this || !this?.base) return ""

    const clean = value.replace(/\s/g, '')

    const parsedKeyword = findOrEmptyParser.call(Object.assign({ set: GeneralSet }, this), clean)
    if (parsedKeyword) return parsedKeyword

    const parsedSizeKeyword = findByKeyOrEmptyParser.call(this, clean)
    if (parsedSizeKeyword) return parsedSizeKeyword

    const parsedVariable = variableParser.call(this, clean)
    if (parsedVariable) return parsedVariable

    const parsedFunction = functionParser.call(this, clean)
    if (parsedFunction) return parsedFunction

    const parsedFraction = fractionParser.call(this, clean)
    if (parsedFraction) return parsedFraction

    const parsedNumber = numberParser.call(this, clean)
    if (parsedNumber) return parsedNumber

    const parsedNumeric = valueParser.call(this, clean)
    if (parsedNumeric) return parsedNumeric

    const parsedValue = otherValueParser.call(this, clean)
    if (parsedValue) return parsedValue

    return ""
}