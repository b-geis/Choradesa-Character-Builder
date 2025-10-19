<!-- // Vite config: sets base for GitHub Pages and enables React fast refresh -->
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


<!-- // IMPORTANT: base must match the repo name when using GitHub Pages -->
export default defineConfig({
base: '/choradesa-character-builder/',
plugins: [react()],
});
