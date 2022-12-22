import colors from 'windicss/colors';

export default {
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      '.cache',
      '*.template.html',
      'app.html'
    ],
    include: []
  },
  transformCSS: 'pre',
  preflight: {
    alias: {
      // add gridsome aliases
      'g-link': 'a',
      'g-image': 'img'
    }
  },
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1440px' }
      },
      fontFamily: {
        roobert: [
          'Roobert',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      colors: {
        black: '#111111',
        white: '#F8F8F8',
        purple: {
          300: '#D2C3F2',
          600: '#5D57F6'
        }
      }
    }
  }
};
