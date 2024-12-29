// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets'
//   },
//     server: {
//       port: 3000,
//       open: true,
//   }
// })

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    hmr: {
      protocol: "ws",
    },
  },
});
