import * as csstree from "css-tree"
import type { DeclarationItemType, ItemType, LevelType } from "../func/postcss"

export const isDeclaration = (node: LevelType): node is DeclarationItemType => {
    return node !== undefined && !Array.isArray(node) && "property" in node && "value" in node
}

export const isBlockList = (node: LevelType): node is ItemType[] => {
    return node !== undefined && Array.isArray(node) && isBlock(node[0])
}

export const isBlock = (node: LevelType): node is ItemType => {
    return node !== undefined && !Array.isArray(node) && "selector" in node
}

export const isStyleSheet = (node: unknown): node is csstree.StyleSheet => {
    return node instanceof Object && "type" in node && "children" in node && node.type === "StyleSheet"
}