import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: colors.white,
        orange: colors.orange,
        primary: "#492b81",
        secondary: "#b72576",
        header: "#011024db",
      
      },
    },
  },
  plugins: [],
};
export default config;
