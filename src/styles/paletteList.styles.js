export default {
  root: {
    backgroundColor: 'greenyellow',
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
    color: 'white',
    fontSize: '2rem',
  },
  pals: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
  },
};
