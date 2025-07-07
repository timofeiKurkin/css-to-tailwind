export interface MonacoWrapperType {
    value: string;
    updateValue: (value: string) => void;
    errorExists: (status: boolean) => void;
}