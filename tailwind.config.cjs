const theme = require("tailwindcss/defaultTheme");

const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {
			heading: "Montserrat, sans-serif",
			body: "'Open Sans', sans-serif",
			// mono: 'monospace',
		},
		extend: {
			colors: {
				brand: "#ff3e00",
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"code::before": { content: '""' },
						code: {
							background: theme("colors.gray.100"),
							border: `1px solid ${theme("colors.gray.200")}`,
							borderRadius: theme("borderRadius.sm"),
							padding: `${theme("spacing.1")} ${theme("spacing.2")}`,
						},
						"code::after": { content: '""' },
					},
				},
			}),
		},
	},

	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

module.exports = config;
