import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/",
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor chunks
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['lucide-react', 'framer-motion'],
            i18n: ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
          }
        }
      },
      chunkSizeWarningLimit: 600
    },
  };
});
