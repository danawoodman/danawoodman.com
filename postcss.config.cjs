const tailwindcss = require("tailwindcss");
const importCSS = require("postcss-import");
const autoprefixer = require("autoprefixer");

const config = {
	plugins: [
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		importCSS(),
		tailwindcss(),
		// But others, like autoprefixer, need to run after,
		autoprefixer,
	],
};

module.exports = config;
