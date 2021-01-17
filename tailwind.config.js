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
            light: 'var(--accent-light)',
            DEFAULT: 'var(--accent)',
          },
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          overlay: '#000000de',
         }),
         boxShadow: {
           secondary: '0 4px 6px -1px var(--secondary), 0 2px 4px -1px var(--secondary)',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
