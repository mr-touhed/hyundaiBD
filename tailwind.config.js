/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary:"#002C5F",
      dark:"#1C1B1B",
      lightDark:"#767676",
      skylight:'#00AAD2'
    }
  },
  plugins: [],
};
