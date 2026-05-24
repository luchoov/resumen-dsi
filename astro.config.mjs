import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://resumen-dsi.local",
  output: "static",
  integrations: [
    expressiveCode({
      themes: ["github-dark", "github-light"]
    }),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1200
    }
  }
});
