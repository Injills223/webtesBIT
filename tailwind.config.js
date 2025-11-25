// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-dark": "#3E2522",
        "secondary": "#8C6E63",
        "warm-beige": "#D3A376",
        "cream-pastel": "#FFE0B2",
        "creamy-white": "#FFF2DF"
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'title': ['Dancing Script', 'cursive']
      },
    },
  },
  plugins: [],
}