import type { DeclarationItemType, ItemType, LevelType } from "@/types/func/postcss"
import { isBlockList, isDeclaration, isStyleSheet } from "@/types/type-guards/parsecss"
import * as csstree from "css-tree"

const parseRaw = (css: string): csstree.CssNode | undefined => {
    try {
        return csstree.parse(css, { positions: true, context: "stylesheet" })
    } catch (e) {
        console.log("Error parsing CSS:", e)
    }
}

const parseLevel = (node: csstree.CssNode): LevelType => {
    if (node.type === "Raw") {
        const parsedCSS = parseRaw(node.value)
        if (!isStyleSheet(parsedCSS)) return
        return parsedCSS.children.toArray().map(parseLevel).filter(Boolean)
    }

    if (node.type === "Rule" || node.type === "Atrule") {
        if (node.prelude == null) return

        const selector = node.type === 'Rule' ?
            node.prelude?.type === 'SelectorList' ?
                csstree.generate(node.prelude) :
                '[Unknown Selector]' :
            '@' + node.name + ' ' + csstree.generate(node.prelude)

        if (!selector) return

        const children = node.block?.children.toArray().map(parseLevel).filter(Boolean)
        if (!children) return

        const res: ItemType = { selector }

        const rules = children.filter(isDeclaration)
        if (rules.length) res['rules'] = rules

        const blocks = children.filter(isBlockList).flat()
        if (blocks.length) res['blocks'] = blocks

        return res
    }

    if (node.type === "Declaration") {
        return {
            "property": node.property,
            "value": csstree.generate(node.value)
        } satisfies DeclarationItemType
    }

    return
}

export const parseCSS = (css: string): LevelType[] => {
    const parsedRaw = parseRaw(css)

    if (!isStyleSheet(parsedRaw))
        return []

    return parsedRaw.children.toArray().map(parseLevel).filter(Boolean)
}