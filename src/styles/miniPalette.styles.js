export default {
  root: {
    position: 'relative',
    height: '100%',
    padding: '.5rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    overflow: 'hidden',
    // marginBottom: '2rem',

    '&:hover svg': {
      opacity: '1',
      transition: 'all .2s',
    }
  },
  clrs: {
    backgroundColor: '#dae1e4',
    borderRadius: '4px',
    overflow: 'hidden',
    height: '150px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  ttl: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    padding: '.5rem',
    position: 'relative',
    fontSize: '1rem',
  },
  emj: {
    fontSize: '1.5rem',
    marginLeft: '.5rem',
  },
  palClr: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '-3.5px',
    overflow: 'hidden',
  },
  deleteIcon: {
    opacity: '0',
    position: 'absolute',
    top: '0px',
    right: '0px',
    padding: '1.5rem',
    backgroundColor: 'orangered',
    zIndex: '99',
    borderRadius: '4px',

    '&:hover': {
      color: 'white',
      transition: 'all .2s',
    } 
  }
};