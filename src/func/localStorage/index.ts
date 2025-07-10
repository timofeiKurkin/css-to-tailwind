export function setLocalStorageValue(key: string, value: string) {
    try {
        if (typeof window === "undefined") return
        localStorage.setItem(key, value)
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message)
        }
    }
}

export function removeLocalStorageValue(key: string) {
    try {
        if (typeof window === "undefined") return
        localStorage.removeItem(key)
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message)
        }
    }
}

export function getLocalStorageValue<T>(key: string, defaultValue: T) {
    try {
        if (typeof window === "undefined") return defaultValue
        return localStorage.getItem(key) || defaultValue
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error(e.message)
        }
        return defaultValue
    }
}
