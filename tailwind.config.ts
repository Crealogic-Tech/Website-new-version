import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
} satisfies Config;
