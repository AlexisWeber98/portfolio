/// <reference types="vite-react-ssg" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  // Static-site generation options consumed by `vite-react-ssg build`.
  ssgOptions: {
    entry: "src/main.tsx",
    dirStyle: "nested", // /blog/slug -> dist/blog/slug/index.html
    script: "async",
  },
})
