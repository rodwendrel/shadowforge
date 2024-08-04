import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "background-primary": "#1E1E1E",
        "background-secondary": "#111111",
        "primary": "#FF204E",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config