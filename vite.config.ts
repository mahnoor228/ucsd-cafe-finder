import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite React setup. The plugin was already in devDependencies
// but no vite.config existed, so JSX relied on esbuild defaults.
export default defineConfig({
  plugins: [react()],
});
