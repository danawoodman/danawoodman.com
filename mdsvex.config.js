const config = {
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool",
  },
  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    _: "./src/layouts/article.svelte",
  },
};

export default config;
