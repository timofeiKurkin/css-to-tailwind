export interface ItemType {
    selector: string,
    rules?: DeclarationItemType[],
    blocks?: ItemType[]
}

export type DeclarationItemType = Record<"property" | "value", string>

export type LevelType = DeclarationItemType | ItemType | undefined | LevelType[]

export interface ClassnameTreeType {
    selector: string;
    classname: string;
    blocks?: ClassnameTreeType[]
}

type Context = { base?: string[] }
type SetContext = { set?: Set<string> }
type ObjContext = { obj?: Record<string, string> }
export type ConvertFunctionType = (this: Context, value: string) => string
export type FindOrEmptyParser = (this: Context & SetContext, value: string) => string
export type FindByKeyOrEmptyParser = (this: Context & ObjContext, value: string) => string

// type FieldType = Record<"base" | "converter", string | ConvertFunctionType >
interface FieldType {
    ctx?: Context & SetContext & ObjContext;
    converter: ConvertFunctionType | FindOrEmptyParser;
}

export type PropertyMapType = Record<string, FieldType>
