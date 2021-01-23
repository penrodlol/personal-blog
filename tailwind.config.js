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
        sans: ['"Fira Code"'],
      },
      extend: {
        colors: {
          transparent: 'transparent',
          currentColor: 'currentColor',
          alpha: {
            DEFAULT: 'var(--alpha)',
          },
          beta: {
            DEFAULT: 'var(--beta)',
          },
          charlie: {
            DEFAULT: 'var(--charlie)',
          },
          delta: {
            lightest: 'var(--delta-transparent)',
            light: 'var(--delta-light)',
            DEFAULT: 'var(--delta)',
          },
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          overlay: '#000000de',
         }),
         boxShadow: {
          beta: '0 4px 6px -1px var(--beta), 0 2px 4px -1px var(--beta)',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
