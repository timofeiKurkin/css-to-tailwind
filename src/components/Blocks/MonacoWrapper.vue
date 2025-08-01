<template>
    <vue-monaco-editor :value="model" @change="change" language="css" :theme="preferTheme"
        :options="MONACO_EDITOR_OPTIONS" @mount="handleMount" @validate="errorHandler"></vue-monaco-editor>
</template>

<script setup lang="ts">
import { useAppStore } from '@/libs/pinia/appStore';
import type { MonacoWrapperType } from '@/types/components/Blocks/MonacoWrapperType';
import { MarkerSeverity, type editor } from 'monaco-editor';
import { onMounted, ref, shallowRef, watch } from 'vue';

const props = defineProps<MonacoWrapperType>()
const model = defineModel<string>()

const MONACO_EDITOR_OPTIONS = {
    automaticLayout: true,
    formatOnType: true,
    formatOnPaste: true,
}

const appStore = useAppStore()
const preferTheme = ref<"vs" | "vs-dark">()
const editorRef = shallowRef()


const handleMount = (editorInstance: editor.IStandaloneCodeEditor) => {
    editorRef.value = editorInstance
    props.setEditorMounted()
}

const errorHandler = props.setErrorExists ? (markers: editor.IMarker[]) => {
    if (!props.setErrorExists) return

    let isError = false

    for (const marker of markers) {
        if (marker.severity === MarkerSeverity.Error) {
            isError = true
            break
        }
    }

    props.setErrorExists(isError)
} : undefined

const change = (value: string | undefined) => {
    model.value = value
}

onMounted(() => {
    if (appStore.theme === "dark") preferTheme.value = "vs-dark"
    else preferTheme.value = "vs"
})

watch(() => appStore.theme, (newTheme) => {
    if (newTheme === "dark") preferTheme.value = "vs-dark"
    else preferTheme.value = "vs"
})

</script>

<style scoped></style>