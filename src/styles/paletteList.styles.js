import mqs from './_media-queries.constants';
import bgImg from './images/blue-maze.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: '1'
    },
    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity .2s ease-out'
    }
  },
  root: {
    backgroundImage: `url(${bgImg})`,
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  ctnr: {
    width: '55%',
    height: '100%',
    // paddingBottom: '5rem',
    // alignSelf: 'center',
    [mqs.down('lg')]: {
      width: '75%',
    },
    [mqs.down('md')]: {
      width: '85%',
    },
    [mqs.down('xs')]: {
      width: '65%',
    },
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
    // height: '100%',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    // paddingBottom: '5vh',
    [mqs.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [mqs.down('xs')]: {
      gridTemplateColumns: '1fr',
      gridGap: '2rem',
    },
  },
};
