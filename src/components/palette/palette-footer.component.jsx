import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from '../../styles/paletteFooter.styles';

function PaletteFooter(props) {
  const { emoji, palName, classes } = props; 

  return (
    <footer className={classes.PaletteFooter}>
      {palName}&nbsp;
      <span className={classes.Emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);