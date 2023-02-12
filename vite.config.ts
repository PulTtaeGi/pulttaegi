<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePluginHtmlEnv from "vite-plugin-html-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginHtmlEnv(),
    VitePluginHtmlEnv({ compiler: true }),
  ],
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePluginHtmlEnv(),
    VitePluginHtmlEnv({compiler: true})],
})
>>>>>>> a65aac8b9ee6ccdc717ba57fa5aa27edb0e6c7ab
