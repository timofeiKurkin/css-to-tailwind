<template>
    <div @click="switchTheme" class="text-zinc-900 dark:text-zinc-100">
        switch theme
    </div>
</template>

<script setup lang="ts">
import { getLocalStorageValue, setLocalStorageValue } from '@/func/localStorage';

const switchTheme = () => {
    const currTheme = getLocalStorageValue('theme', "light")
    const html = document.getElementsByTagName('html')[0]

    if (currTheme === 'dark') {
        html.setAttribute('data-theme', 'light')
        setLocalStorageValue("theme", "light")
    } else {
        html.setAttribute('data-theme', 'dark')
        setLocalStorageValue("theme", "dark")
    }
}
</script>

<style scoped></style>