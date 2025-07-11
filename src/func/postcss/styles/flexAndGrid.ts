import type { BaseParserType } from "@/types/func/postcss"
import { cleanValue } from "./genericConverter"

export const gridColumnParser: BaseParserType = (ctx, value) => {
    if (!ctx || !ctx.base) return ""
    const clean = cleanValue(value)

    if (/^span\s+(\d+)\s*\/\s*span\s+\1$/.test(clean))
        return ctx.base.concat(clean.split(" ")[1]).join("-")

    if (/^\s*1\s*\/\s*-1\s*$/.test(clean))
        return ctx.base.concat("full").join("-")


    if (/^span\s+var\(--([\w-]+)\)\s*\/\s*span\s+var\(--\1\)$/.test(clean))
        return ctx.base.concat(`[${clean.split(" ")[1]}]`).join("-")

    if (/^span\s+(.+?)\s*\/\s*span\s+\1$/.test(clean))
        return ctx.base.concat(`[${clean.split(" ")[1]}]`).join("-")

    return ""
}