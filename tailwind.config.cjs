/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	safelist: [],
	theme: {
		extend: {
			fontFamily: {},
			spacing: {},
			colors: {
				primary: '#0080F6'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#0080F6',
					secondary: '#FF817C'
				}
			}
		],
		base: true,
		utils: true,
		logs: true,
		rtl: true,
		prefix: '',
		darkTheme: false
	}
};
