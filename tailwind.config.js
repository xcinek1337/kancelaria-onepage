/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{astro,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{astro,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{astro,js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{astro,js,ts,jsx,tsx,mdx}",
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
