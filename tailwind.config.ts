import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      fira: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
} satisfies Config;
