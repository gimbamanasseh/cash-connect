/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary color
        orange: "#CB1600",
        // for headings & text
        grey: {
          900: "#101928",
          400: "#667185",
          300: "#F0F2F5",
          500: "#D0D5DD",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
