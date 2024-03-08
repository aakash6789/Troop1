/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "BkBook",
        primary1:"Hv"
      }
    },
  },
  plugins: [],
}

