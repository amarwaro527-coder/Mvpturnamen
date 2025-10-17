import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'node:path';

// Vite serves the 'frontend' directory as the app root.
// We allow importing from '../games', '../shared', and '../assets'.
export default defineConfig({
  root: 'frontend',
  publicDir: '../assets',
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        resolve(__dirname, 'games'),
        resolve(__dirname, 'shared'),
        resolve(__dirname, 'assets'),
      ],
    },
  },
  resolve: {
    alias: {
      '@games': resolve(__dirname, 'games'),
      '@shared': resolve(__dirname, 'shared'),
    },
  },
});
