import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	// See: https://github.com/sveltejs/svelte-preprocess
	preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],
	kit: { adapter: adapter() },
};

export default config;
