const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#647EBF',
      secondary: '#BF9977',
      white: colors.white,
      black: colors.black,
      lightGrey: '#ECEBEB',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
