/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['Regular'],
        primaryMedium: ['Medium'],
        primaryBold: ['Bold'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#85d7ff',
        DEFAULT: '#515ebd',
        dark: '#303770',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

})