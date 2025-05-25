import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


import { svelte } from '@sveltejs/vite-plugin-svelte';
import svelteSvgr from 'vite-plugin-svelte-svgr';

export default defineConfig({
	plugins: [sveltekit(), svelteSvgr()]
});
