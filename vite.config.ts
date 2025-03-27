import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react()],
    base: './',
    root: resolve('./src/renderer'),
    build: {
        outDir: resolve('./dist/renderer'),
        emptyOutDir: true
    },
    server: {
        port: 3000
    }
})