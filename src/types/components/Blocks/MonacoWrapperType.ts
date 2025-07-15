export interface MonacoWrapperType {
    modelValue: string;
    setEditorMounted: () => void;
    setErrorExists?: (status: boolean) => void;
}