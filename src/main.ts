import { install as VueMonacoEditorPlugin } from "@guolao/vue-monaco-editor"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(VueMonacoEditorPlugin, { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } })
    .mount('#app')
