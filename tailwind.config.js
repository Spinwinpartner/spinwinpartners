import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff2400",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #ff0000 0%, #ff7300 12.5%, #fffb00 25%, #48ff00 37.5%, #00ffd5 50%, #002bff 62.5%, #7a00ff 75%, #ff00c8 87.5%, #ff0000 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "button-pulse": {
          "0%": { transform: "scale(0.7, 0.5)" },
          "70%": { transform: "scale(1.2, 1.5)" },
          "100%": { transform: "scale(0.7, 0.5)" },
        },
        glowing: {
          "0%": { "background-position": "0 0" },
          "50%": { "background-position": "400% 0" },
          "100%": { "background-position": "0 0" },
        },
      },
      animation: {
        "button-pulse": "button-pulse 1.6s ease-out infinite 0.5s",
        glowing: "glowing 20s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
