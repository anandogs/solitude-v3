module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'h2': ['2.5rem', {
        lineHeight: '3.375rem',
        letterSpacing: '-0.02em',
      }],
      'h3': ['1.5rem', {
        lineHeight: '2.0625rem',
        letterSpacing: '-0.02em',
      }],
      // Or with a default line-height as well
      
    },
    extend: {
      height: {
        'card-image-text': '50rem',
        'card-image-text-button': '45rem',
      },
      width: {
        'card': '34rem',
      },
      colors: {
        'primary-brand':'#98C93C',
        'secondary-brand':'#10110D',
        'tertiary-brand':'#F6F6F6',
        'dark-grey':'#EAEAEA',
      },
      padding: {
        'card-image-text-horizontal':'2.3125rem',
        'card-image-text-button-horizontal':'4.0625rem',
        'card-image-text-vertical':'3.75rem',
      },
      gap: {
        'desktop': '2rem',
        'card-text-image-vertical': '2.25rem',
        'card-text-image-button-vertical': '2.5rem',
      },
      margin: {
        'desktop': '4.625rem',
      },
    },
  },
  plugins: [],
}
