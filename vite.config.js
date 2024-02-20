import { defineConfig } from "vite";

export default defineConfig({
  css: {
    postcss: "./postcss.config.js",
  },
  base: "./",
  server: {
    open: true,
    watch: true,
    host: true,
  },
  root: "src",
  build: {
    outDir: "../",
  },
});
