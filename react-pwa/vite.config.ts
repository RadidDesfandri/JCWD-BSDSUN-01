import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "React PWA",
        short_name: "React PWA",
        description: "React PWA",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#000000",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: "/src/assets/vite.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
          {
            src: "/src/assets/hero.png",
            sizes: "any",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
