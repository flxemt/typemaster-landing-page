/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        orange: '#F16718',
        'light-orange': '#FF9B62',
        'dark-blue': '#162542',
        'light-blue': '#7B8BAD',
        gray: '#E8EFF2'
      }
    },
    backgroundImage: {
      'pattern-squre': 'url("/shared/pattern-square.svg")'
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif']
    },
    fontSize: {
      h1: '3.5rem',
      'h1-mobile': '3rem',
      h2: '2rem',
      h3: '1.5rem',
      body: '1.125rem'
    },
    lineHeight: {
      h1: '3.5rem',
      'h1-mobile': '3rem',
      h2: '2.25rem',
      h3: '1.75rem',
      body: '1.625rem'
    },
    borderRadius: {
      btn: '8px',
      image: '20px',
      icon: '16px'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    },
    container: {
      center: true
    }
  },
  plugins: []
}
