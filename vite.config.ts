
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// IMPORTANT: base must match the repo name when using GitHub Pages
export default defineConfig({
base: '/Choradesa-Character-Builder/',
plugins: [react()],
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
base: '/choradesa-character-builder/',
plugins: [react()],
});
