<template>
    <span class="text-base select-none text-zinc-600 dark:text-zinc-400">Tailwind:</span>
    <span class="bg-cyan-400 dark:bg-cyan-800 rounded-sm cursor-pointer" @click="copyToClipboard">
        <span class="flex text-zinc-900 dark:text-zinc-100 text-base p-1">"{{ props.classname }}"</span>
    </span>
</template>

<script setup lang="ts">
const props = defineProps<{ classname: string }>()

const copyToClipboard = () => {
    navigator.clipboard.writeText(props.classname)
}

</script>

<style scoped></style>