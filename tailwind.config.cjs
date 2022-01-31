const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      heading: "Montserrat, sans-serif",
      body: "'Open Sans', sans-serif",
    },
    extend: {
      colors: {
        brand: "#ff3e00",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
