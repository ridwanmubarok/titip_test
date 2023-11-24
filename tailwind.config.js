/** @type {import('tailwindcss').Config} */
const Color = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...Color,
      success: '#16a34a', 
      warning: '#eab308',
      danger: '#dc2626',
      info: '#2563eb',
    },
    extend: {
      
    },
  },
  plugins: [],
}