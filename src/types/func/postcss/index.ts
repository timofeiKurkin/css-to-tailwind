export interface ItemType {
    selector: string,
    rules?: DeclarationItemType[],
    blocks?: ItemType[]
}

export type DeclarationItemType = Record<"property" | "value", string>

export type LevelType = DeclarationItemType | ItemType | undefined | LevelType[]

export interface CSSLevelType {
    selector: string;
    classname: string;
    blocks?: CSSLevelType[]
}

type Context = { base?: string[], additional?: string[], variablePrefix?: string };
type SetContext = { set?: Set<string> };
type ObjContext = { obj?: Record<string, string> };
type RootContext = Context & SetContext & ObjContext;
export type GeneralParserType = (ctx: RootContext, value: string) => string;
export type BaseParserType = (ctx: Context, value: string) => string;
export type ListParserType = (ctx: Context & SetContext, value: string) => string;
export type ObjParserType = (ctx: Context & ObjContext, value: string) => string;

// type FieldType = Record<"base" | "converter", string | ConvertFunctionType >
interface FieldType {
    ctx?: RootContext;
    converter: GeneralParserType | ListParserType;
}

export type PropertyMapType = Record<string, FieldType>
export type CSSHandlerType = (CSS: string) => CSSLevelType[]
