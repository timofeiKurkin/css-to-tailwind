import type { ThemeType } from "@/types";
import type { ComputedRef, Ref } from "vue";

export type AppStoreType = {
    theme: Ref<ThemeType, ThemeType>;
    getTheme: ComputedRef<ThemeType>;
    setTheme: (value: ThemeType) => void;
}