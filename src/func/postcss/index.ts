import type { CSSHandlerType, CSSLevelType, DeclarationItemType, LevelType } from "@/types/func/postcss";
import { isBlock } from "@/types/type-guards/parsecss";
import * as Comlink from "comlink";
import { parseCSS } from "./parsecss";
import { propertyMap } from "./styles/index";


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

const parseCSSLevels = (levels: LevelType): CSSLevelType | undefined => {
    if (!isBlock(levels)) return

    const fullClassname = convertRules(levels?.rules)
    if (!fullClassname)
        return

    const res: CSSLevelType = {
        selector: levels.selector,
        classname: fullClassname,
    }

    const blocks = levels.blocks?.map(parseCSSLevels).filter((item) => item !== undefined)

    if (blocks) res["blocks"] = blocks

    return res
}

export const CSSHandler: CSSHandlerType = (css) => {
    const CSSLevels = parseCSS(css)

    if (CSSLevels)
        return CSSLevels.map(parseCSSLevels).filter((item) => item !== undefined)

    return []
}

Comlink.expose({ CSSHandler })

// class CSSParser {
//     parseCSS(css: string): CSSLevelType[] {
//         const CSSLevels = parseCSS(css)
//         if (CSSLevels)
//             return CSSLevels.map(throughLevels).filter((item) => item !== undefined)
//         return []
//     }
// }