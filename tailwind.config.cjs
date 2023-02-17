/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {},
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      colors: {
        "green-1": "#D7FFF1",
        "green-2": "#8CD790",
        "green-3": "#77AF9C",
        "green-4": "#285943",
      }
    },
    placeholderColor: {
      "primary": "#77AF9C"
    },
>>>>>>> af42c51de34ab7927b584489329e170f296057a4
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["emerald", "dark", "forest", "synthwave"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
