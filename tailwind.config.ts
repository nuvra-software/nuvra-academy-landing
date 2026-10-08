import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17202c",
        cloud: "#f5f1e8",
        electric: "#315fe8",
        cyan: "#315fe8",
        "cyan-soft": "#e07b59",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
