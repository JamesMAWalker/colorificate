import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '.5rem',
    overflow: 'hidden',
    cursor: 'pointer',
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
};

function MiniPalette(props) {
  const { paletteName, emoji, colors, handleClick} = props;
  const { root, clrs, ttl, emj, palClr } = props.classes;

  let miniClrs = colors.map(c => (
    <div style={{ backgroundColor: c.color }} key={c.name} className={palClr}></div>
  ));

  

  return (
    <div onClick={handleClick}  className={root}>
      <div className={clrs}>
        {miniClrs}
      </div>
      <h5 className={ttl}>{paletteName} <span className={emj}>{emoji}</span></h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);