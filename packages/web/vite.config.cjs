const { defineConfig } = require('vite');
const { svelte } = require('@sveltejs/vite-plugin-svelte');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    svelte()
  ]
})

