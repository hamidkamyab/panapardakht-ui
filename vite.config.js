import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");
export default defineConfig({
  base: './',
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
    assetsDir: '.',
    outDir: "../dist",
    emptyOutDir: true,
     rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop()
          if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
            return 'fonts/[name]-[hash][extname]'
          }
          return '[name]-[hash][extname]'
        },
        },
      },
  }
});
