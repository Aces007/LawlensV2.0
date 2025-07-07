/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        min: '16px',
        sm: '24px',
        med: '36px',
        lg: '50px',
        xlg: '60px',
        max: '70px',
      },

      spacing: {
        min: '4px',
        sm: '8px',
        med: '12px',
        lg: '24px',
        xlg: '40px',
        max: '64px',
      },
      gap: {
        min: '20px',
        med: '30px',
        max: '60px',
      },
      height: {
        min: '24px',
        sm: '36px',
        med: '56px',
        lg: '64px',
        xlg: '72px',
        max: '80px',
      },

      borderWidth: {
        min: '1px',
        sm: '4px',
        med: '8px',
        lg: '12px',
        xlg: '16px',
        max: '20px',
      },

      colors: {
        primary: 'var(--primary-col-org)',
        secondary: 'var(--secondary-col-org)',
        highlight: 'var(--highlight-col-org)',
        background: 'var(--background-col-org)',
        buttons: 'var(--buttons-col-org)',
        textMain: 'var(--text-col-org)',
        textSecondary: 'var(--textII-col-org)',

        // Dark Mode Palette
        'primary-dark': 'var(--primary-col-dark)',
        'secondary-dark': 'var(--secondary-col-dark)',
        'highlight-dark': 'var(--highlight-col-dark)',
        'background-dark': 'var(--background-col-dark)',
        'buttons-dark': 'var(--buttons-col-dark)',
        'text-dark': 'var(--text-col-dark)',
      },

      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },

      fontWeight: {
        heading: '800',
        subheading: '700',
        body: '500',
        bodyii: '400',
        buttons: '700',
        buttonsii: '500',
        note: '600',
        noteii: '500',
      },
    },
  },
  plugins: [],
};
