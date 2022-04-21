module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layout/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./utilities/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			poppins: 'Poppins, sans-serif',
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};
