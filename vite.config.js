// filepath: /b:/development/portfolio/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio",
  plugins: [react()],
  server: {
    mimeTypes: {
      "application/javascript": ["js", "jsx", "text/jsx"],
    },
  },
});
