const production = !process.env.ROLLUP_WATCH;
const colors = require('tailwindcss/colors');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
  purge: {
    enabled: production, // disable purge in dev
    purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  },
}
