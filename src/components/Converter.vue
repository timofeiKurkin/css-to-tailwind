<template>
    <div class="grid grid-cols-2 gap-10 w-full">
            <div class="flex flex-col gap-8">
                <h3 class="h-min text-2xl font-bold text-zinc-900 dark:text-zinc-100">Your CSS code</h3>

                <div class="h-150 border-2 rounded-3xl overflow-hidden">
                    <MonacoWrapper :value="code" :update-value="updateInput" :error-exists="setErrorExists"/>
                </div>
            </div>
            <div class="flex flex-col gap-8">
                <h3 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tailwind class</h3>

                <div class="h-150 rounded-3xl overflow-hidden">
                    <div class="p-5 bg-zinc-800 h-full overflow-y-auto overflow-x-hidden">
                        <TailwindClassname :levels="CSSLevels" />
                    </div>
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
    }, 800)
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