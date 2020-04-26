import mqs from './_media-queries.constants';

export default {
  NavBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '7%',
  },
  logo: {
    padding: '2rem 4rem',
    borderRight: '1px solid rgb(28, 161, 223)',
    [mqs.down('xs')]: {
      display: props => props.showingFullPalette
    }
  },
  logoText: {
    textTransform: 'uppercase',
    fontSize: '2rem',
    letterSpacing: '4px',
    backgroundImage:
      'linear-gradient(to right, rgb(240, 23, 204), rgb(28, 161, 223))',
    '-webkit-background-clip': 'text',
    textFillColor: 'transparent',
  },

  SelectContainer: {
    margin: '1rem 2rem',
    marginLeft: 'auto',
  },
  valueEx: {
    fontSize: '1.5rem',
    color: 'rgb(110, 110, 110)',
  },
  formatMsg: {
    fontSize: '1.25rem',
    padding: '0',
    textAlign: 'center',
    width: '100%',
  },

  // RC Slider Styles

  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem',
    marginRight: 'auto',
  },
  slider: {
    width: '15vw',
    margin: '10px 20px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      backgroundColor: 'rgb(5, 85, 146)',
      outline: 'none',
      border: '2px',
    },
    '& .rc-slider-rail': {
      backgroundImage: 'linear-gradient(to right, rgb(212, 212, 212) 40%, black)',
    } 
  },
  sliderLevel: {
    fontSize: '1.4rem',
    color: 'grey',
  },
};