/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'regal-blue': '#243c5a',
				gin: '#d8e4bc',
				'tea-green': '#d0f0c0',
				'italian-ice': '#e9f6ef',
				'chinese-white': '#e2e5de',
				'dirty-white': '#e8e4c9',
				honeydew: '#f0fff0',
        'grayscale': '#e1e1e1',
        'faint-green': '##d7ead7',
        salmon: {
          200: '#cfafaf'
        }
			},
		},
	},
	plugins: [],
};
