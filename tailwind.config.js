module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'card': '50rem'
      },
      width: {
        'card': '34rem'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'header2': '2.5rem',
        'body1': '1rem',
      },
      lineHeight: {
        'header2': '3.404375rem',
        'body1': '1.375rem'
      },
      letterSpacing: {
        'header2': '-0.02em'
      },
      colors: {
        'primary-brand':'#98C93C',
        'secondary-brand':'#10110D',
        'tertiary-brand':'#F6F6F6',
      },
      padding: {
        'card-horizontal':'2.3125rem',
        'card-vertical':'3.75rem',        
      },
      gap: {
        'card-vertical': '2.25rem',
      },
      margin: {
        'desktop': '4.625rem',
      },
      gap: {
        'desktop': '2rem',
      },
    },
  },
  plugins: [],
}
