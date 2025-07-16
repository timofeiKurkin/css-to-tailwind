<template>
    <div
        class="grid grid-rows-[500px_1fr_min-content] grid-cols-1 xl:grid-cols-2 xl:grid-rows-[minmax(0,0.75fr)_minmax(0,0.25fr)] gap-10 w-full">
        <div class="flex flex-col gap-y-6 col-1 row-1">
            <Title title="Your CSS code:" />

            <div class="rounded-3xl overflow-hidden outline-2 outline-neutral-200 dark:outline-none flex-1">
                <MonacoWrapper v-model="computedCSS" :set-editor-mounted="setEditorMounted" />
            </div>
        </div>

        <div class="flex flex-col gap-y-6 col-1 row-2 xl:col-2 xl:row-1">
            <Title title="Tailwind classes:" />

            <div
                class="rounded-3xl overflow-hidden outline-2 outline-neutral-200 dark:outline-none flex-1 flex flex-col">
                <div class="p-5 bg-zinc-50 dark:bg-zinc-800 overflow-y-auto overflow-x-hidden flex-1">
                    <TailwindClassname :levels="CSSLevels" />
                </div>
            </div>
        </div>

        <div class="xl:col-span-2 xl:row-2 flex flex-col gap-y-3">
            <Title title="🤔 How does it work?" />

            <div class="flex flex-col gap-y-2">
                <p class="text-zinc-900 dark:text-zinc-100">Just paste your CSS (or SCSS) into the editor — the tool
                    analyzes each selector and converts the
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
import TailwindClassname from '@/components/Blocks/ClassnameLevel.vue';
import MonacoWrapper from '@/components/Blocks/MonacoWrapper.vue';
import Title from "@/components/UI/TextTemplates/Title.vue";
import { getLocalStorageValue, setLocalStorageValue } from '@/func/localStorage';
import type { CSSParserWorkerType } from '@/types/components/Blocks/ConverterType';
import type { CSSLevelType } from '@/types/func/postcss';
import * as Comlink from "comlink";
import { computed, onBeforeUnmount, ref, watch } from 'vue';

const timer = ref<ReturnType<typeof setTimeout> | null>(null)
const worker = Comlink.wrap<CSSParserWorkerType>(new Worker(
    new URL('@/func/postcss', import.meta.url), { type: "module", name: "CSSParser" }
))

const editorMounted = ref(false)
const setEditorMounted = () => editorMounted.value = true

const CSSRef = ref<string>(getLocalStorageValue("css", "/* Your CSS or SCSS code here */"))
const CSSLevels = ref<CSSLevelType[]>([])
const setCSSLevels = (newCSS: CSSLevelType[]) => CSSLevels.value = newCSS

const computedCSS = computed<string, string>({
    get() {
        return CSSRef.value
    },
    set(newCode) {
        CSSRef.value = newCode
        setLocalStorageValue("css", newCode)
    }
})

const parseCSS = (CSS: string) => {
    timer.value = setTimeout(() => {
        worker.CSSHandler(CSS).then((res) => {
            if (res)
                setCSSLevels(res)
        })
    }, 800)
}

watch(() => computedCSS.value, (updatedCSS) => {
    if (timer.value !== null) {
        clearTimeout(timer.value)
    }

    parseCSS(updatedCSS)
})

onBeforeUnmount(() => {
    if (timer.value !== null) {
        clearTimeout(timer.value)
    }
})

watch(editorMounted, () => {
    parseCSS(computedCSS.value)
}, { once: true })

</script>
<style lang="css"></style>