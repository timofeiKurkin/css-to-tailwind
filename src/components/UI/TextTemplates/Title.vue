<template>
    <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">{{ props.title }}</h3>
</template>

<script setup lang="ts">
const props = defineProps<{title: string}>()
</script>

<style scoped>

</style>