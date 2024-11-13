/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background-gradient': 'linear-gradient(#fef9f9 26%, #fff0)',
      },
    },
  },
  plugins: [],
}

