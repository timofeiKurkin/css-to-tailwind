import type { CSSHandlerType } from "@/types/func/postcss";
import type { Remote } from "comlink";

export type CSSParserWorkerType = Remote<{
    CSSHandler: CSSHandlerType // | Promise<CSSLevelType[]>
}>