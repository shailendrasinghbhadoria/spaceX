/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'custom-image': "url('https://live.staticflickr.com/7706/26751237322_5a52540ea3_h.jpg')",
    },
  },
  },
  plugins: [],
}

