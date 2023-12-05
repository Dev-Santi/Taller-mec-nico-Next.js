import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          "100": "#ff9c3b",
          "200": "#e94615",
        },
        gray: {
          "100": "#ededed",
          "200": "#111111",
          "300": "#d6d6d6",
          "400": "#333333",
        },
      },
    },
  },
  plugins: [],
};
export default config;
