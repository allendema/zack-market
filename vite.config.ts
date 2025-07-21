import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
//import tailwindcss from './node_modules/tailwindcss/vite/dist/index.mjs';
//import tailwindcss from './node_modules/tailwindcss/dist/plugin.d.ts';

import flowbitePlugin from 'flowbite/plugin'

export default defineConfig({
	//plugins: [sveltekit(), tailwindcss(), flowbitePlugin()]
	plugins: [sveltekit(), tailwindcss(), flowbitePlugin]
});
