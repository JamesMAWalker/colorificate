export default {
  root: {
    backgroundImage: 'linear-gradient(to right, #ffa8c4, #92d2e1)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctnr: {
    width: '55%',
    height: '100%',
    alignSelf: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    margin: '3rem 0',

    '& h1': {
      fontWeight: '100',
      margin: '0',
      letterSpacing: '4px',
      textShadow: '2px 2px 4px rgba(0,0,0,.25)',
      backgroundImage: 'linear-gradient(to right, white, white)',
      '-webkit-background-clip': 'text',
      textFillColor: 'transparent',
    },

    '& a': {
      fontSize: '1.25rem',
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      padding: '.5rem 1rem',
      borderRadius: '5px',
      backgroundColor: '#70d888',

      '&:hover': {
        color: 'hotpink',
        transition: 'all .2s',
        border: '1px solid hotpink',
      },
    },
  },
  pals: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};
