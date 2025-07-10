import type { ThemeType } from "@/types";

export const defineTheme = (): ThemeType => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const isValidTheme = (theme: unknown): theme is ThemeType => {
    return theme === "dark" || theme === "light"
}