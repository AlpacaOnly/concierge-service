import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss_tailwindcss from "tailwindcss";
import postcss_autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcss_tailwindcss, postcss_autoprefixer],
    },
  },
});
