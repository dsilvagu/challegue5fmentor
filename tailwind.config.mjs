/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'outfit': ['"Outfit Variable"', 'sans-serif']
			}
		},
		colors: {
			'pwhite': 'hsl(0, 0%, 100%)',
			'plgray': 'hsl(212, 45%, 89%)',
			'pgblue': 'hsl(220, 15%, 55%)',
			'pdblue': 'hsl(218, 44%, 22%)'
		}
	},
	plugins: [],
}
