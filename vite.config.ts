import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import flowbitePlugin from 'flowbite/plugin'

export default defineConfig({
	//plugins: [sveltekit(), tailwindcss(), flowbitePlugin()]
	plugins: [sveltekit(), tailwindcss(), flowbitePlugin]
});
