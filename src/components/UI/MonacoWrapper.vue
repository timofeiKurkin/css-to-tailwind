<template>
    <vue-monaco-editor :value="props.value" language="css" :theme="preferedTheme" :options="MONACO_EDITOR_OPTIONS"
        @mount="handleMount" @validate="errorHandler" @change="change" />
</template>

<script setup lang="ts">
import type { MonacoWrapperType } from '@/types/components/UI/MonacoWrapperType';
import monaco from 'monaco-editor';
import { ref, shallowRef } from 'vue';

const props = defineProps<MonacoWrapperType>()

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
}

const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'vs-dark' : 'vs'
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

</script>

<style scoped></style>