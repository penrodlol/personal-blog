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
      extend: {
        colors: {
          transparent: 'transparent',
          currentColor: 'currentColor',
          alpha: {
            DEFAULT: 'var(--alpha)',
          },
          beta: {
            DEFAULT: 'var(--beta)',
          }
        },
        backgroundColor: theme => ({
          ...theme('colors'),
          overlay: '#00000091',
         })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
