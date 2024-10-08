import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#101828",
        secondary: "#475467",
        tertiary: "#F9FAFB",
        accent: "#7F56D9",
      },
    },
  },
  plugins: [],
};
export default config;
