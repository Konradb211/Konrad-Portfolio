module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				redTheme: "#F95454",
			},
			fontFamily: {
				"space-grotesk": ['"Space Grotesk"', "sans-serif"],
			},
		},
	},
	plugins: [],
}
