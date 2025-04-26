/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "768px",
			md: "1024px",
			lg: "1440px"
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "16px",
				sm: "24px",
				md: "28px",
				lg: "32px"
			},
		},
		extend: {
			fontFamily: {
				heading: ['Playfair Display', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			colors: {
				lightBlue: '#F7F2EC',
				blue: '#c8daea',
				warmBlue: '#946A52',
				navy: '#2D2512',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
