<template>
    <ul class="flex flex-col gap-y-7">
        <li v-for="(level, index) in props.levels" :key="index" class="flex flex-col gap-3">
            <div class="flex flex-col gap-1.5 font-medium shrink min-h-0">
                <ClassnameItem>
                    <span class="select-none text-zinc-500 dark:text-zinc-400 mt-0.4">Selector:</span>
                    <span class="select-none text-zinc-900 dark:text-zinc-100 break-all">{{ level.selector }}</span>
                </ClassnameItem>

                <ClassnameItem>
                    <span class="select-none text-zinc-500 dark:text-zinc-400 mt-0.4">Tailwind:</span>
                    <span class="bg-sky-300 dark:bg-cyan-800 rounded-sm cursor-pointer" @click="copyToClipboard(level.classname)">
                        <span class="flex tracking-wide text-zinc-900 dark:text-zinc-100 p-1">"{{ level.classname }}"</span>
                    </span>
                </ClassnameItem>
            </div>

            <div class="pl-10" v-if="level.blocks && level.blocks.length">
                <classname-level :levels="level.blocks" />
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { CSSLevelType } from '@/types/func/postcss';
import ClassnameItem from "./ClassnameItem.vue";

const props = defineProps<{ levels: CSSLevelType[] }>()

const copyToClipboard = (clasname: string) => {
    navigator.clipboard.writeText(clasname)
}
</script>

<style scoped></style>