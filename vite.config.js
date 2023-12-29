import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
    plugins: [
        react(),
        svgr(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '@images': path.resolve(__dirname, './src/images'),
        },
    },
})


