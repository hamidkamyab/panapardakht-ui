import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");
export default defineConfig({
  plugins:[
    handlebars({
      partialDirectory: resolve(__dirname, "src/components"),
    }),
  ],
  server: {
    host: true,
    port: 8080,
  },
  preview: {
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src/assets"),
    },
  },
  root: root,
  publicDir: publicDir,
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }
});
