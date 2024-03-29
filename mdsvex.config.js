const config = {
	extensions: [".svx"],
	smartypants: { dashes: "oldschool" },
	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		_: "./src/routes/layouts/_article.svelte",
		plain: "./src/routes/layouts/_plain.svelte",
	},
};

export default config;
