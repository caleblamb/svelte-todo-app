import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel'
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
