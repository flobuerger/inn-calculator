/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ufc: {
          primary: '#000000',
          secondary: '#8D918B',
          accent: '#D7B377',
          neutral: '#DDDFDF',
          text: '#FFFFFF',
        },
      },
    ],
  },
};
