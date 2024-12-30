import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		height: {
			'mobileW': '100vw'
		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
		  'logo-light': '#fff8c1ff',
		  'logo-dark': '#370055ff',
		  'primary': '#5D0090ff',
		  'secondary': '#DAD086'
      },
    },
  },
  plugins: [],
} satisfies Config;
