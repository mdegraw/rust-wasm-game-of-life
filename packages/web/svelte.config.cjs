const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    sourceMap: !production,
    typescript: true,
    postcss: {
      plugins: [
       require("tailwindcss"), 
       require("autoprefixer"),
      ],
    },
  }),

}
