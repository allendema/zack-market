// error: https://search.dismail.de/search?q=bun%20svelte%20Uncaught%20%28in%20promise%29%20TypeError%3A%20error%20loading%20dynamically%20imported%20module%3A%20http%3A//localhost%3A5173/node_modules/%40sveltejs/kit/src/runtime/client/entry.js%20&language=auto&time_range=&safesearch=0&categories=general
//import adapter from "svelte-adapter-bun";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	postcss: {
        plugins: [tailwindcss]
    }
};

export default config;
