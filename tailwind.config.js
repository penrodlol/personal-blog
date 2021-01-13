module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.{html,ts}',
      ]
    },
    darkMode: false,
    theme: {
      fontFamily: {
        'nunito': ['"Fira Code"', 'monospace'],
      },
      extend: {
        colors: {
          transparent: 'transparent',
          currentColor: 'currentColor',
          primary: {
            DEFAULT: 'var(--primary)',
          },
          secondary: {
            DEFAULT: 'var(--secondary)',
          },
          tertiary: {
            DEFAULT: 'var(--tertiary)',
          },
          accent: {
            DEFAULT: 'var(--accent)',
          },
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          overlay: '#000000de',
         }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
