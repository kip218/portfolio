/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "linkedin-blue": "#0077b5",
        "dark-bg": "rgb(39 39 42)",
        "light-bg": "rgb(248, 248, 248)",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
