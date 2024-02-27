/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "rgb(252, 202, 136)",
        content: "rgb(74, 7, 14)",
        "content-accent": "rgb(89, 5, 15)",
        underline: "rgb(156, 152, 153)",
        "btn-secondary": "rgb(89, 88, 89)",
      },
    },
  },
  plugins: [],
};
