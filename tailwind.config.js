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
				lightBlue: '#F0F9FF',
				blue: '#BAE6FD',
				warmBlue: '#91d9fd',
				navy: '#0C4A6E',
				ivory: {
					50: '#fffff0',
					100: '#fefce8',
					200: '#fef3c7',
					300: '#fde68a',
					400: '#fcd34d',
					500: '#fbbf24',
					600: '#f59e0b',
					700: '#d97706',
					800: '#b45309',
					900: '#92400e',
				},
				'maroon': '#631717'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
