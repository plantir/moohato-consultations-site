import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapterNode(),
		paths: {
			base: process.env.NODE_ENV == 'production' ? '/consultation' : '/consultation'
		},
		alias: {
			'@ubeac/svelte': path.resolve('./src/lib/@ubeac'),
			'@hui/components': path.resolve('./src/lib/@hui/components'),
			'@app/components': path.resolve('./src/lib/App/components'),
			$service: path.resolve('./src/services'),
			$stores: path.resolve('./src/stores'),
			$types: path.resolve('./src/lib/types'),
			$helpers: path.resolve('./src/lib/helpers')
		}
	}
};

export default config;
