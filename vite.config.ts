/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: '/VITE-RHF-zod-mui5/',
    build: {
      chunkSizeWarningLimit: 1600,
      // minify: 'esbuild',
      // outDir: 'build',
      rollupOptions: {
        treeshake: true,
      },
    },
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    test: {
      globals: true,
      coverage: {
        provider: 'v8',
        reporter: ['lcov', 'text'],
      },
      environment: 'jsdom',
      css: true,
      setupFiles: ['./src/test/test-utils.tsx'],
    },
  });
};
