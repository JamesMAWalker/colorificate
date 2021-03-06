import mqs from './_media-queries.constants';

const styles = {
  DragBox: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    position: 'relative',
    // marginBottom: '-3.5px',
    display: 'inline-block',

    '&:hover svg': {
      transform: 'scale(1.5)',
      transition: 'all .2s ease-in-out',
      color: 'white',
    },
    [mqs.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [mqs.down('md')]: {
      width: '50%',
      height: '10%',
    },
    [mqs.down('sm')]: {
      width: '100%',
      height: '5%',
    },
  },
  DragBoxContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    '& span': {
      margin: '.5rem .75rem',
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: '1.15rem',
      textTransform: 'uppercase',
    },
  },
  deleteIcon: {
    color: 'rgba(0, 0, 0, 0.5)',
    margin: '.75rem',
  },
};

export default styles;