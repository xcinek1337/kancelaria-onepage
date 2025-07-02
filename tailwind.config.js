/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brownie: "#DFBF8F",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  // plugins: [require("@tailwindcss/typography")],
};
