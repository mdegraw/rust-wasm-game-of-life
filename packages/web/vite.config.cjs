const { defineConfig } = require('vite');
const { svelte } = require('@sveltejs/vite-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    svelte({      
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [require("tailwindcss")],
        },
      }),
    })
  ]
})

