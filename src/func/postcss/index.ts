import type { ClassnameTreeType, DeclarationItemType, LevelType } from "@/types/func/postcss"
import { isBlock, parseCss } from "./parsecss"
import { propertyMap } from "./styles/index"

const convertDeclaration = (declaration: DeclarationItemType): string => {
    const property = declaration.property.trim().toLowerCase()
    const handler = propertyMap[property]
    // return handler ? handler(declaration.value) : ""

    if (handler) return handler.converter.call(handler.ctx || {}, declaration.value)

    return ""
}

const convertRules = (rules: DeclarationItemType[] | undefined): string => {
    if (rules === undefined) return ""

    const fullClassname: string[] = []

    rules.forEach((rule) => fullClassname.push(convertDeclaration(rule)))

    fullClassname.filter(Boolean).sort()
    return fullClassname.join(" ")
}

const throughLevels = (levels: LevelType): ClassnameTreeType | undefined => {
    if (!isBlock(levels)) return

    const fullClassname = convertRules(levels?.rules)
    const res: ClassnameTreeType = {
        selector: levels.selector,
        classname: fullClassname,
    }

    const blocks = levels.blocks?.map(throughLevels).filter((item) => item !== undefined)

    if (blocks) res["blocks"] = blocks

    return res
}

export const handler = (css: string) => {
    const levels = parseCss(css)
    const parsedLevels = levels?.map(throughLevels)

    console.log("levels: ", levels)
    console.log("parsedLevels: ", parsedLevels)
}

/* 
.data {
    display: flex;
    flex-direction: column;

    .text {
        text-align: center;
    }
} 
*/