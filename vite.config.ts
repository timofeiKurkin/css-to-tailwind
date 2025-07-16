import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const prefix = `monaco-editor/esm/vs`;

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            'monaco-editor/esm/vs/language/json/json.worker': path.resolve(__dirname, 'src/empty.js'),
            'monaco-editor/esm/vs/language/html/html.worker': path.resolve(__dirname, 'src/empty.js'),
            'monaco-editor/esm/vs/language/typescript/ts.worker': path.resolve(__dirname, 'src/empty.js'),
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    cssWorker: [`${prefix}/language/css/css.worker`],
                    editorWorker: [`${prefix}/editor/editor.worker`],
                }
            },
        },
    },
})
