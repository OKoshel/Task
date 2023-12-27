import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
    plugins: [react()],
})



// import { defineConfig } from 'vite';
// import react from "@vitejs/plugin-react";
// import svgr from 'vite-plugin-svgr';
// import path from 'path';
//
// export default defineConfig({
//     css: {
//         devSourcemap: true,
//     },
//     build: {
//         sourcemap: false,
//     },
//     plugins: [
//         react(),
//         svgr(),
//     ],
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, './src'),
//             '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//             '@images': path.resolve(__dirname, './src/images'),
//         },
//     },
//
// });
