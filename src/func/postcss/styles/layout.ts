import type { ConvertFunctionType, FindByKeyOrEmptyParser } from "@/types/func/postcss";
import { findByKeyOrEmptyParser, otherValueParser, variableParser } from "./genericConverter";

export const isolationParser: ConvertFunctionType = function (this, value) {
    if (value === "isolate") return value
    if (value === "auto") return "isolation-auto"
    return ""
}

export const objectPositionParser: FindByKeyOrEmptyParser = function (this, value) {
    if (!this || !this.base || !this.obj) return ""

    const parsedByKey = findByKeyOrEmptyParser.call(this, value)
    if (parsedByKey) return parsedByKey

    const parsedVariable = variableParser.call(this, value)
    if (parsedVariable) return parsedVariable

    const parsedValue = otherValueParser.call(this, value)
    if (parsedValue) return parsedValue

    return ""
}

export const visibilityParser: ConvertFunctionType = function (this, value) {
    if (value === "visible" || value === "collapse") return value
    if (value === "hidden") return "invisible"
    return ""
}