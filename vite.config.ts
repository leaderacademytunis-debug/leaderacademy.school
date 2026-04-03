import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  // ملاحظة: معالجة CSS تتم تلقائياً عبر postcss.config.js الموجود في جذور المشروع
});
