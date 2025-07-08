<template>
    <div class="grid grid-cols-2 gap-10 w-full">
            <div class="flex flex-col gap-8">
                <h3 class="h-min text-2xl font-bold text-zinc-900 dark:text-zinc-100">Your CSS code</h3>

                <div class="h-100">
                    <MonacoWrapper :value="code" :update-value="updateInput" :error-exists="setErrorExists"/>
                </div>
            </div>
            <div>
                <h3 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Tailwind class</h3>
            </div>
        </div>
</template>

<script setup lang="ts">
import { handler } from '@/func/postcss';
import { onMounted, ref, watch } from 'vue';
import MonacoWrapper from './UI/MonacoWrapper.vue';


const errorExists = ref(false)
const setErrorExists = (status: boolean) => errorExists.value = status

const code = ref<string>(localStorage.getItem("css") || "/* Your CSS or SCSS code here */")
// const code = reactive({value: "/* Your CSS or SCSS code here */"})
const updateInput = (value: string) => {
    code.value = value
    localStorage.setItem("css", value)
}

watch(code, () => {
    handler(code.value)
})

onMounted(() => {
    handler(code.value)
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