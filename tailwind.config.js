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
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        'col-span-2',
        'col-span-4',
        'col-span-6',
        'col-span-8',
        'col-span-12',
        // Add your dynamic classes here as needed
      ],
    },
  },
  plugins: [],
}