import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind(), vue()],
  base: '/MyFirstPortfolio/', // Reemplaza con el nombre de tu repositorio
});

