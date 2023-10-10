/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['"poppins"', "sans-serif"],
        dmSerifDisplay : ['"DM Serif Display"', "serif"]
      },
    },
  },
  plugins: [],
}

