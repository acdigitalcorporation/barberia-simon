// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx"; // Soporte para Markdown con JSX
import vercel from "@astrojs/vercel/serverless"; // Adaptador para despliegue en Vercel
import sitemap from "@astrojs/sitemap"; // Genera automáticamente un sitemap para SEO

// Configuración de Astro
export default defineConfig({
  // URL del sitio (asegúrate de que esté correcta para producción)
  site: "https://example.com",

  // Integraciones adicionales (Markdown, Sitemap, etc.)
  integrations: [mdx(), sitemap()],

  // Configuración de salida como servidor para Vercel
  output: "server",

  // Adaptador para Vercel
  adapter: vercel(),
});
