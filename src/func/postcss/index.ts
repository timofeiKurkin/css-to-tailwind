import * as csstree from "css-tree"

const CSSFields = {
    "aspect-ratio": {

    }
}


const parseRaw = (css: string): csstree.StyleSheet => {
    return csstree.parse(css) as csstree.StyleSheet
}

interface ItemType {
    selector: string,
    rules?: any[],
    blocks?: any[]
}

interface DeclarationItemType {
    declaration: Record<"property" | "value", string>
}

type LevelType = DeclarationItemType | ItemType | null | LevelType[]

const parseLevel = (node: csstree.CssNode): LevelType => {
    if (node.type === "Raw") {
        return parseRaw(node.value).children.toArray().map(parseLevel).filter(Boolean)
    }

    if (node.type === "Rule" || node.type === "Atrule") {
        // '@' + node.name + ' ' + csstree.generate(node.prelude)
        const selector = node.type === 'Rule' ? node.prelude?.type === 'SelectorList' ? csstree.generate(node.prelude) : '[Unknown Selector]' : ""
        if (!selector) return null

        const children = node.block?.children.toArray().map(parseLevel).filter(Boolean)
        const res: ItemType = { selector }

        const rules = children?.filter((item) => !Array.isArray(item))
        if (rules) res['rules'] = rules

        const blocks = children?.filter((item) => Array.isArray(item))[0]
        if (blocks) res['blocks'] = blocks

        return res
    }

    if (node.type === "Declaration") {
        return {
            "declaration": {
                "property": node.property,
                "value": csstree.generate(node.value)
            }
        } satisfies DeclarationItemType
    }

    return null
}

export const parseCss = (css: string) => {
    // return await postcss([]).process(css, { parser: safeParser, from: undefined })

    const ast = parseRaw(css)
    const levels = ast.children.toArray().map(parseLevel).filter(Boolean)
    console.log(levels)

    // return csstree.lexer.matchType("Declaration", ast)
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