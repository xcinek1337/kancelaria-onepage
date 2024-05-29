import type { Config } from "tailwindcss";

const config: Config = {
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
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
