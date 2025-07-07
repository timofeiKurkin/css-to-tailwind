<script setup lang="ts">
import ComponentPreview from "@/components/Converter.vue";

// const element = document.getEl
</script>

<template>
  <div class="flex justify-center pt-10 pb-10">
    <div class="w-[80vw] flex gap-y-12 flex-col items-center">
      <h1 class="text-zinc-900 dark:text-zinc-100 text-4xl font-bold tracking-wide">Convert your CSS code into Tailwind</h1>

      <ComponentPreview />
    </div>
  </div>
</template>

<style scoped></style>
