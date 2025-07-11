import { getLocalStorageValue, setLocalStorageValue } from '@/func/localStorage'
import { defineTheme, isValidTheme } from '@/func/theme'
import type { ThemeType } from '@/types'
import type { AppStoreType } from '@/types/libs/pinia/AppStoreType'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// const state: AppStoreType = () => ({
//     theme: "dark"
// })

// {
//     state,
//     getters: {
//         getTheme: (state) => state.theme
//     },
//     actions: {
//         setTheme(theme: ThemeType) {
//             this.theme = theme
//         }
//     }
// }

export const useAppStore = defineStore<"app", AppStoreType>('app', () => {
    const currTheme: string = getLocalStorageValue<ThemeType>("theme", defineTheme())
    const validTheme = isValidTheme(currTheme) ? currTheme : (setLocalStorageValue("theme", defineTheme()), defineTheme())

    const theme = ref<ThemeType>(validTheme)

    const getTheme = computed(() => theme.value)
    const setTheme = (value: ThemeType) => {
        setLocalStorageValue("theme", value)
        theme.value = value
    }

    return { theme, getTheme, setTheme }
})
