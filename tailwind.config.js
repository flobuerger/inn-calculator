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
          primary: '#6F732F',
          secondary: '#9DC0BC',
          accent: '#D7B377',
          neutral: '#D8D0C1',
          text: '#FFFFFF',
        },
      },
    ],
  },
};
