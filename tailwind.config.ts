import { bebas_neue } from "@/fonts/bebas-neue";
import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-libre-barcode)"],
        "bebas-neue": ["var(--font-bebas-neue)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
