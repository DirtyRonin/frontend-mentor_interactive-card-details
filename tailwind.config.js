/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'input-error': 'hsl(0, 100%, 66%)',
        indigo: 'hsl(278, 94%, 30%)',
        'new-midnight-blue': 'hsl(249, 99%, 64%)'
      },
      fontSize: {
        xxs: '.6rem'
      }
    }
  },
  plugins: []
}
