import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [
    react(),
    vitePluginManusRuntime()
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  // تم إزالة tailwindcss من هنا مؤقتاً لحين اكتمال التثبيت
  // حيث أن المشروع يستخدم postcss لمعالجة Tailwind في هذه النسخة
});
