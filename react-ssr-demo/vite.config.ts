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
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "React Vite Demo SEO",
        short_name: "React Vite Demo SEO",
        description: "React Vite Demo SEO",
        theme_color: "#ea5e94",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/src/assets/favicon.ico",
            sizes: "16x16",
            type: "image/x-icon",
          },
        ],
      },
    }),
  ],
  build: {
    ssr: true,
    rolldownOptions: {
      input: "src/entry-server.tsx",
    },
  },
});
