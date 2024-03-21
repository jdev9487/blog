import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Khula"', 'serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "main": '#4E8847',
      "secondary": '#476C85',
      "background-primary": '#FFFFFF',
      "background-secondary": '#F0F0F0',
      "alert": '#96031A',
      "warning": '#F17300',
      "text-light": '#888888',
      "code": "#CCCCCC"
    }
  },
  plugins: [],
};
export default config;
