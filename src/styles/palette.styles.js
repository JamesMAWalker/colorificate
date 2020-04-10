export default {
  Palette: {
    height: '100vh',
  },
  PaletteColors: {
    height: '90%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  PaletteFooter: {
    height: '3%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textTransform: 'uppercase',
    padding: '0 1rem',
  },
  goBackSquare: {
    height: '50%',
    width: '20%',
    position: 'relative',
    backgroundColor: 'rgb(29, 29, 29)',

    '& a': {
      opacity: '1',
    },
  },
  boxButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    textDecoration: 'none',
    fontSize: '1.5rem',
    background: 'rgba(41, 41, 41, 0.3)',
    padding: '.5rem 2rem',
    color: 'white',
    opacity: '0',

    '&:hover': {
      backgroundColor: 'rgba(156, 156, 156, 0.35)',
      transition: 'all .1s',
    },
  },
};