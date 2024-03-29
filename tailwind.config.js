const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : {
        'backimage' : "url('/images/main.png')"
      },
    },
      screens: {
        'xs' : '475px',
        ...defaultTheme.screens
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
