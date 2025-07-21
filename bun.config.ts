import adapter from "@sveltejs/adapter-bun";
//import { vitePreprocess } from "@sveltejs/kit/vite";
// the above does not work in svelte 5: https://github.com/sveltejs/svelte/issues/13462
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
