import type { DeclarationItemType, ItemType, LevelType } from "@/types/func/postcss"
import * as csstree from "css-tree"

const parseRaw = (css: string): csstree.StyleSheet => {
    return csstree.parse(css) as csstree.StyleSheet
}

export const isDeclaration = (node: LevelType): node is DeclarationItemType => {
    return node !== undefined && !Array.isArray(node) && "property" in node && "value" in node
}

export const isBlockList = (node: LevelType): node is ItemType[] => {
    return node !== undefined && Array.isArray(node) && isBlock(node[0])
}

export const isBlock = (node: LevelType): node is ItemType => {
    return node !== undefined && !Array.isArray(node) && "selector" in node
}

const parseLevel = (node: csstree.CssNode): LevelType => {
    if (node.type === "Raw") {
        return parseRaw(node.value).children.toArray().map(parseLevel).filter(Boolean)
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

export const parseCss = (css: string): LevelType[] => {
    return parseRaw(css).children.toArray().map(parseLevel).filter(Boolean)
}