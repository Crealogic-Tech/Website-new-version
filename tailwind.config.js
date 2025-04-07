/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        '3xl': 'inset 5px 5px 50px -15px hsla(0,0%,100%, 0.98)',
        '4xxl': ' 5px 5px 50px -15px hsla(0,0%,100%, 0.98)',
      },
    },
  },
  plugins: [],
}