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
		}
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
