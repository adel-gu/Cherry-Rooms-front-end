/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        prime: '#97bf11',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require('flowbite/plugin')],
};
