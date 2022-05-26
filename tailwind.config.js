module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'card-image-text': '50rem',
        'card-image-text-button': '45rem',
        'button': '3.75rem'
      },
      width: {
        'card': '34rem',
        'button': '9rem'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'header2': '2.5rem',
        'header3': '1.5rem',
        'body1': '1rem',
        'button': '0.875rem',
      },
      lineHeight: {
        'header2': '3.404375rem',
        'header3': '2.0625rem',
        'body1': '1.375rem',
        'button': '1.1875rem'
      },
      letterSpacing: {
        'header2': '-0.02em',
        'header3': '-0.02em',
        'button': '0.04em',
      },
      colors: {
        'primary-brand':'#98C93C',
        'secondary-brand':'#10110D',
        'tertiary-brand':'#F6F6F6',
      },
      padding: {
        'card-image-text-horizontal':'2.3125rem',
        'card-image-text-button-horizontal':'4.0625rem',
        'card-vertical':'3.75rem',
        'button': '0.625rem'
      },
      gap: {
        'desktop': '2rem',
        'card-text-image-vertical': '2.25rem',
        'card-text-image-button-vertical': '2.5rem',
      },
      margin: {
        'desktop': '4.625rem',
      },
      borderRadius: {
        'button': '0.9375rem'
      }
    },
  },
  plugins: [],
}
