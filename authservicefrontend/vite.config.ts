import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:7216",
        changeOrigin: true,
        secure: false, // Отключение проверки SSL (для разработки)
      },
    },
  },
});