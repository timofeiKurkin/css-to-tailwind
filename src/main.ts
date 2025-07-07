import { install as VueMonacoEditorPlugin } from "@guolao/vue-monaco-editor"
import { createApp } from 'vue'
import App from './App.vue'
// import { pinia } from './libs/pinia'
import './style.css'

createApp(App)
    // .use(pinia)
    .use(VueMonacoEditorPlugin, { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } })
    .mount('#app')
