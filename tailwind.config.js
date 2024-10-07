/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#22D3EE",
      },
      backgroundColor: {
        primary: "#22D3EE",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
