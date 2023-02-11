import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // preview: {
  //   proxy: {     
  //     "/api": {
  //       target: "https://api.deezer.com",
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ''),
  //       // servira para produccion?
  //       rewrite: (path) =>
  //         path.replace(
  //           /^.*\/api/,
  //           i,
  //           ""
  //         ),
  //     },
  //   },
  // },
  base: "/song-finder/",
});
