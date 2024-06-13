import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    daisyui,
    ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) => {
      const newUtilities = {
        ".mask-gradient": {
          maskImage: "linear-gradient(to bottom, black 95%, transparent)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: ["light", "dark", "dim", "sunset"],
  },
};
export default config;
