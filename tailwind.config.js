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
        LoraCustom: ["LoraCustom", "serif"],
        Lora: ["Lora", "serif"],
        Mulish: ["Mulish", "serif"],
      },
    },
  },
  // plugins: [require("@tailwindcss/typography")],
};
