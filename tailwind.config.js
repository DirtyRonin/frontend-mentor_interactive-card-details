/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-desktop-pattern': "url('./images/bg-main-desktop.png')",
        'main-mobile-pattern': "url('./images/bg-main-mobile.png')",
        'card-front-pattern': "url('./images/bg-card-front.png')",
        'card-back-pattern': "url('./images/bg-card-back.png')"
      },
      colors: {
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'input-error': 'hsl(0, 100%, 66%)',
        indigo: 'hsl(278, 94%, 30%)',
        'new-midnight-blue': 'hsl(249, 99%, 64%)'
      },
      fontSize: {
        xxs2: '.55rem',
        xxs: '.6rem',
        'label-mobile': '.75rem'
      },
      gridTemplateColumns: {
        'interactive-card-desktop': '483px minmax(22rem,53rem)',
        'form-desktop': '21rem',
        'form-mobile': '18rem'
      },
      height: {
        desktop: '900px',
        mobile: '240px',
        'card-desktop': '245px',
        'card-mobile': '160px'
      },
      padding: {
        7.5: '1.875rem'
      },
      width: {
        'card-desktop': '447px',
        'card-mobile': '300px'
      }
    }
  },
  plugins: []
}
