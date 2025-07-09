<template>
    <ul class="flex flex-col gap-y-10">
        <li v-for="(level, index) in props.levels" :key="index" class="flex flex-col gap-3">
            <div class="flex flex-col gap-1.5">
                <p class="text-base select-none flex gap-2 items-center">
                    <span class="text-zinc-600 dark:text-zinc-400">Selector:</span>
                    <span class="text-zinc-900 dark:text-zinc-100">{{ level.selector }}</span>
                </p>

                <p class="flex gap-2 items-center">
                    <ClassnameItem :classname="level.classname"/>
                </p>
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

</script>

<style scoped></style>