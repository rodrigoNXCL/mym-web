// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // escucha en todas las interfaces
    port: 5173,
    // Añadimos tu subdominio ngrok aquí:
    allowedHosts: ['.ngrok-free.app']  // permite cualquier host (p.ej. tus túneles ngrok)
    // Si quieres permitir cualquiera, puedes usar: allowedHosts: "all"
  },
});
