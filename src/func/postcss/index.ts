import type { CSSLevelType, DeclarationItemType, LevelType } from "@/types/func/postcss"
import { isBlock, parseCss } from "./parsecss"
import { propertyMap } from "./styles/index"

const convertDeclaration = (declaration: DeclarationItemType): string => {
    const property = declaration.property.trim().toLowerCase()
    const handler = propertyMap[property]

    if (handler) return handler.converter(handler.ctx || {}, declaration.value)
    return ""
}

const convertRules = (rules: DeclarationItemType[] | undefined): string => {
    if (rules === undefined) return ""

    const fullClassname: string[] = []

    rules.forEach((rule) => fullClassname.push(convertDeclaration(rule)))

    fullClassname.filter(Boolean).sort()
    return fullClassname.join(" ")
}

const throughLevels = (levels: LevelType): CSSLevelType | undefined => {
    if (!isBlock(levels)) return

    const fullClassname = convertRules(levels?.rules)
    const res: CSSLevelType = {
        selector: levels.selector,
        classname: fullClassname,
    }

    const blocks = levels.blocks?.map(throughLevels).filter((item) => item !== undefined)

    if (blocks) res["blocks"] = blocks

    return res
}

export const CSSHandler = (css: string): CSSLevelType[] => {
    const levels = parseCss(css)

    if (levels)
        return levels.map(throughLevels).filter((item) => item !== undefined)

    return []
}
