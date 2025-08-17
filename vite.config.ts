import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // separa libs grandes em chunks diferentes
          react: ["react", "react-dom"],
          swiper: ["swiper"],
          motion: ["motion"],
        },
        // Otimizações adicionais
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Otimizações para produção
    minify: "terser",
    // Gera source maps para debug
    sourcemap: false,
    // Otimizações de chunk
    chunkSizeWarningLimit: 1000,
  },
  // Otimizações de desenvolvimento
  server: {
    port: 3000,
    open: true,
  },
  // Otimizações de preview
  preview: {
    port: 4173,
  },
});
