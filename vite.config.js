import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    open: true,
    watch: true,
    host: true,
  },
  root: "src",
  build: {
    outDir: "../",
    emptyOutDir: false,
  },
});
