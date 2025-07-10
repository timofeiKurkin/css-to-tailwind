<template>
    <div
        class="grid lg:grid-cols-2 lg:grid-rows-[minmax(100px,0.75fr)_minmax(0,0.25fr)] gap-10 w-full h-full grid-cols-1 grid-rows-2">
        <!-- [0.7fr_0.3fr] -->
        <div class="flex flex-col gap-y-6 h-full">
            <Title title="Your CSS code:" />

            <div class="rounded-3xl overflow-hidden h-full shadow-sky-200/50">
                <MonacoWrapper :value="code" :update-value="updateInput" :error-exists="setErrorExists" />
            </div>
        </div>

        <div class="flex flex-col gap-y-6 h-full">
            <!-- max-h-[inherit] -->
            <Title title="Tailwind classes:" />

            <div class="rounded-3xl overflow-hidden h-full outline-2 outline-neutral-400 dark:outline-none">
                <div class="p-5 bg-neutral-100 dark:bg-zinc-800 overflow-y-auto overflow-x-hidden h-full">
                    <TailwindClassname :levels="CSSLevels" />
                </div>
            </div>
        </div>

        <div class="col-span-2 gap-y-3 hidden lg:flex lg:flex-col">
            <Title title="How does it work?" />

            <div class="flex flex-col gap-y-2">
                <p class="text-zinc-900 dark:text-zinc-100">Just paste your CSS (or SCSS) into the editor — the tool analyzes each selector and converts the
                    styles into matching Tailwind classes.</p>

                <p class="text-zinc-900 dark:text-zinc-100">For every block, you’ll see:</p>
                <ul class="text-zinc-900 dark:text-zinc-100 list-disc list-inside">
                    <li>The original selector (like .button or &:hover)</li>
                    <li>The Tailwind classes that recreate the same styles</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CSSHandler } from '@/func/postcss';
import type { CSSLevelType } from '@/types/func/postcss';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import TailwindClassname from './Blocks/ClassnameLevel.vue';
import MonacoWrapper from './UI/MonacoWrapper.vue';
import Title from "./UI/TextTemplates/Title.vue";

const timer = ref<ReturnType<typeof setTimeout> | null>(null)
const errorExists = ref(false)
const setErrorExists = (status: boolean) => errorExists.value = status

const code = ref<string>(localStorage.getItem("css") || "/* Your CSS or SCSS code here */")
const CSSLevels = ref<CSSLevelType[]>([])

const updateInput = (value: string) => {
    code.value = value
    localStorage.setItem("css", value)
}

watch(code, () => {
    if (timer.value !== null) {
        clearTimeout(timer.value)
    }

    timer.value = setTimeout(() => {
        CSSLevels.value = CSSHandler(code.value)
    }, 600)
})

onBeforeUnmount(() => {
    if (timer.value !== null) {
        clearTimeout(timer.value)
    }
})

onMounted(() => {
    CSSLevels.value = CSSHandler(code.value)
})

</script>

<style lang="css">
/* 
.data {
    display: flex;
    flex-direction: column;

    .text {
        text-align: center;
    }
} 
*/
</style>