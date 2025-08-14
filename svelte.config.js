// import adapter from "svelte-adapter-bun";
// error: Uncaught (in promise) TypeError: error loading dynamically imported module

import adapter from "@sveltejs/adapter-auto";

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    // To use non-type-only TypeScript features within Svelte components
    // https://svelte.dev/docs/svelte/typescript#Preprocessor-setup
    // this results on error on some dynamic paths
    //preprocess: vitePreprocess({ script: true }),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter()
    },

    postcss: {
        plugins: [tailwindcss]
    },

    compilerOptions: {
        // currently only in one file needed (about.svelte)?
        experimental: {
            async: true
    }
  },
};

export default config;
