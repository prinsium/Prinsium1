/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				marqueeOne: "marqueeOne 25s linear infinite",
				marqueeTwo: "marqueeTwo 25s linear infinite",
			  },
			  keyframes: {
				marqueeOne: {
				  from: {
					transform: 'translateX(0)',
				  },
				  to: {
					transform: 'translateX(calc(-100% - 2.5rem))',
				  },
				},
				marqueeTwo: {
					from: {
					  transform: 'translateX(calc(-100% - 2.5rem))',
					},
					to: {
					  transform: 'translateX(0)',
					},
				  },
			  },
		},
	},
	plugins: [],
}
