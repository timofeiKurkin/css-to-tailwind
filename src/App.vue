<template>
    <div class="lg:w-[85vw] flex flex-col gap-y-12 flex-1 p-10 box-border">
        <div class="flex justify-between items-center">
            <MainTitle>
                Convert your <span class=" text-blue-500 italic">CSS</span> code into <a
                    href="https://tailwindcss.com/docs" target="_blank"><span
                        class="italic text-sky-500">Tailwind</span></a>
            </MainTitle>

            <SwitchTheme />
        </div>

        <Converter />
    </div>
</template>


<script setup lang="ts">
import Converter from "@/components/Converter.vue";
import { onBeforeMount } from "vue";
import SwitchTheme from "./components/Blocks/SwitchTheme.vue";
import MainTitle from "./components/UI/TextTemplates/MainTitle.vue";
import { useAppStore } from "./libs/pinia/appStore";

const store = useAppStore()

onBeforeMount(() => {
    const htmlElement = document.getElementsByTagName("html")[0]
    htmlElement.setAttribute("data-theme", store.theme)
})
</script>

<style scoped></style>
