/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B55AF4",
        secondary: "#4F5D98",
      },
    },
  },
  plugins: [require("daisyui")],
};
