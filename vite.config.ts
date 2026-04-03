import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginManusRuntime()
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
