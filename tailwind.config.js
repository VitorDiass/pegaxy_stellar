module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage : {
        'backimage' : "url('./src/styles/assets/main.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
