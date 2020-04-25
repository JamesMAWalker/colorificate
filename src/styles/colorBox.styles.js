import chroma from 'chroma-js';
import mqs from './_media-queries.constants';

export default {
  colorBox: {
    position: 'relative',
    width: '20%',
    height: (props) => (props.showingFullPalette ? '25%' : '50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexFlow: 'column',
    backgroundColor: (props) => props.bgco,
    '&:hover button': {
      opacity: '1',
      transition: 'all .2s',
    },
    [mqs.down('lg')]: {
      width: '25%',
      height: (props) => (props.showingFullPalette ? '20%' : '50%'),
    },
    [mqs.down('md')]: {
      width: '50%',
      height: (props) => (props.showingFullPalette ? '10%' : '50%'),
    },
    [mqs.down('xs')]: {
      width: '100%',
      height: (props) => (props.showingFullPalette ? '5%' : '10%'),
    },
  },
  colorContent: {
    width: '100%',
    alignSelf: 'center',
    justifySelf: 'flex-end',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontSize: '1.2rem',

    '& span': {
      margin: '5px',
    },
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform .5s ease-in-out',
    transformOrigin: 'center',
    transform: 'scale(.1)',
  },
  showOverlay: {
    opacity: '1',
    zIndex: '99 !important',
    transform: 'scale(50)',
    position: 'absolute',
    overflow: 'hidden',
  },
  copyText: {
    color: (props) =>
      chroma(props.bgco).luminance() <= 0.2 ? 'white' : 'rgba(0, 0, 0, 0.5)',
  },
  colorBoxContent: {
    color: (props) =>
      chroma(props.bgco).luminance() >= 0.5 ? 'rgba(0, 0, 0, 0.5)' : 'white',
  },
  copyMessage: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(.1)',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    opacity: '0',
    transition: 'all .5s ease-in-out .2s',

    '& h1': {
      width: '100vw',
      textAlign: 'center',
      margin: '0',
    },
  },
  showMessage: {
    opacity: '1',
    transform: 'translate(-50%, -50%) scale(1)',
    zIndex: '99',
    overflow: 'hidden',
  },
  moreColors: {
    background: 'rgba(190, 190, 190, 0.2)',
    padding: '1rem 2rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      background: 'rgba(41, 41, 41, 0.3)',
      transition: 'all .5s',
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