import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://orchardworks.github.io",
  base: "/flintdb.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
