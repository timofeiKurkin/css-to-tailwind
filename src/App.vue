<template>
    <div class="lg:w-[90vw] grid grid-rows-[min-content_minmax(0,1fr)] h-full p-10 gap-y-12">
        <div class="flex justify-between flex-col gap-6 lg:flex-row lg:gap-0 flex-none">
            <div class="flex flex-col gap-3">
                <Logo :width="90" :height="66" />
                <MainTitle>
                    Convert your <span
                        class="css-gradient gradient-highlight italic font-black tracking-wider">CSS</span> code to <a
                        href="https://tailwindcss.com/docs" target="_blank"><span
                            class="tailwind-gradient gradient-highlight italic font-black tracking-wider">Tailwind</span></a>
                </MainTitle>
            </div>

            <div class="flex items-center lg:self-end gap-x-10">
                <a href="https://github.com/timofeiKurkin/css-to-tailwind" target="_blank">
                    <GitHub />
                </a>

                <SwitchTheme />
            </div>
        </div>

        <Converter />
    </div>
</template>


<script setup lang="ts">
import Converter from "@/components/Blocks/Converter.vue";
import { onBeforeMount } from "vue";
import SwitchTheme from "./components/Blocks/SwitchTheme.vue";
import GitHub from "./components/UI/SVG/GitHub.vue";
import Logo from "./components/UI/SVG/Logo.vue";
import MainTitle from "./components/UI/TextTemplates/MainTitle.vue";
import { useAppStore } from "./libs/pinia/appStore";

const store = useAppStore()

onBeforeMount(() => {
    const htmlElement = document.getElementsByTagName("html")[0]
    htmlElement.setAttribute("data-theme", store.theme)
})
</script>

<style scoped></style>
