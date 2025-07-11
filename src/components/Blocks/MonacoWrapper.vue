<template>
    <vue-monaco-editor :value="props.value" language="css" :theme="preferTheme" :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount" @validate="errorHandler" @change="change" />
</template>

<script setup lang="ts">
import { useAppStore } from '@/libs/pinia/appStore';
import type { MonacoWrapperType } from '@/types/components/UI/MonacoWrapperType';
import monaco from 'monaco-editor';
import { onMounted, ref, shallowRef, watch } from 'vue';

const props = defineProps<MonacoWrapperType>()

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
}

// const preferTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'vs-dark' : 'vs'
const appStore = useAppStore()
const preferTheme = ref<"vs" | "vs-dark">()
// const code = ref<string>("/* Your CSS or SCSS code here */")
const editor = shallowRef()

const editorMounted = ref(false)

const handleMount = (editorInstance: monaco.editor.IStandaloneCodeEditor) => {
    editor.value = editorInstance
    editorMounted.value = true
}

const errorHandler = (markers: monaco.editor.IMarker[]) => {
    // markers.forEach((marker) => {
    //     marker
    // })

    props.errorExists(!markers.length)
}

const change = (value: string | undefined) => {
    if(value)
        props.updateValue(value)
}

onMounted(() => {
    if(appStore.theme === "dark") preferTheme.value = "vs-dark"
    else preferTheme.value = "vs"
})

watch(() => appStore.theme, () => {
    if (appStore.theme === "dark") preferTheme.value = "vs-dark"
    else preferTheme.value = "vs"
})

</script>

<style scoped></style>