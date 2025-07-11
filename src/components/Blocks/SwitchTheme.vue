<template>
    <div @click="switchTheme"
        class="text-zinc-900 dark:text-zinc-100 w-26 h-[43px] border-2 rounded-3xl pt-2 pb-2 pl-3.5 pr-3.5 overflow-hidden relative cursor-pointer">

        <!-- :class="'grid grid-cols-[repeat(2,' + width + 'px)] justify-between items-center relative'"   -->
        <div class="flex justify-between items-center relative"
            :style="{ columnGap: '0px', width: `100%`, height: `${height}px` }">

            <div v-for="(item, index) in themeObj" :key="index" class="relative flex items-center justify-center"
                :style="{ width: `${width}px`, height: `${height}px` }">
                <component :is="item.component" :width="width" :height="height" class="absolute z-2" />

                <motion.div v-if="appStore.theme === item.theme" layout-id="underline"
                    class="absolute z-0 rounded-4xl bg-sky-200 dark:bg-zinc-700"
                    :style="{ width: `${width + 15}px`, height: `${height + 10}px` }" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/libs/pinia/appStore';
import type { SizeProps, ThemeType } from '@/types';
import { motion } from 'motion-v';
import { type Component } from 'vue';
import Moon from '../UI/SVG/Moon.vue';
import Sun from '../UI/SVG/Sun.vue';

const themeObj: { component: Component, theme: ThemeType }[] = [
    {
        component: Sun,
        theme: "light"
    },
    {
        component: Moon,
        theme: "dark"
    }
]

const { width = 25, height = 25 } = defineProps<SizeProps>()
const appStore = useAppStore()

const switchTheme = () => {
    const html = document.getElementsByTagName('html')[0]

    if (appStore.theme === 'dark') {
        html.setAttribute('data-theme', 'light')
        appStore.setTheme("light")
    } else {
        html.setAttribute('data-theme', 'dark')
        appStore.setTheme("dark")
    }
}
</script>

<style scoped>
.switch {
    width: 40px;
    height: 32px;

    /* top: -3px;
    left: -7px; */
}
</style>