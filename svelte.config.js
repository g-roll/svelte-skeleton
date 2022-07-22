import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		browser: {
			router: false
		},
		trailingSlash: "always"
	},
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	]
};

export default config;
