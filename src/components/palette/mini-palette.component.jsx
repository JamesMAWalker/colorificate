import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from '../../styles/miniPalette.styles';

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