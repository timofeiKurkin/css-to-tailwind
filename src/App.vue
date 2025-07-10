<template>
    <div class="flex justify-center pt-10 pb-10 h-full">
        <div class="w-[85vw] flex gap-y-12 flex-col items-center h-full">
            <div>
                <MainTitle>
                    Convert your <span class="gradient-highlight italic">CSS</span> code into <a
                        href="https://tailwindcss.com/docs" target="_blank"><span
                            class="italic text-sky-500">Tailwind</span></a>
                </MainTitle>

                <SwitchTheme />
            </div>

            <ComponentPreview />
        </div>
    </div>
</template>


<script setup lang="ts">
import ComponentPreview from "@/components/Converter.vue";
import { onBeforeMount } from "vue";
import SwitchTheme from "./components/Blocks/SwitchTheme.vue";
import MainTitle from "./components/UI/TextTemplates/MainTitle.vue";
import { getLocalStorageValue, setLocalStorageValue } from "./func/localStorage";
import { defineTheme } from "./func/theme";

onBeforeMount(() => {
    let theme = getLocalStorageValue("theme", defineTheme())
    setLocalStorageValue("theme", theme)

    const htmlElement = document.getElementsByTagName("html")[0]
    htmlElement.setAttribute("data-theme", theme)
})
</script>

<style scoped></style>
