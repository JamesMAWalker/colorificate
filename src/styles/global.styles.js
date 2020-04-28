export default {
  '@global': {
    '.fade-exit': {
      opacity: '1',
    },
    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity .2s ease-out',
    },
    '.page': {
      height: '100vh',
      position: 'fixed',
      width: '100%',
      transition: 'opacity .2s ease-in-out',
    },
    '.page-enter': {
      opacity: '0',
    },
    '.page-enter-active': {
      opacity: '1',
    },
    '.page-exit': {
      opacity: '1',
    },
    '.page-exit-active': {
      opacity: '0',
    },
  },
};