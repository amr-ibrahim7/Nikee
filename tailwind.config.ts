import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1360px" },
        lg: { max: "1200px" },
        md: { max: "768px" },
        sm: { max: "639px" },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fill,minmax(350px,1fr))",
        fluidTwo: "repeat(auto-fill,minmax(300px,1fr))",
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
};
export default config;
