import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/felipe-coaquira",
  plugins: [vue()],
  build: {
    outDir: "docs",
  },
});
