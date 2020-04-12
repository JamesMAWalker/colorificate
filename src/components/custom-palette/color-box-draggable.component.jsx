import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  DragBox: {
    height: '25%',
    width: '20%',
    margin: '0 auto',
    position: 'relative',
    // marginBottom: '-3.5px',
    display: 'inline-block',
  },
};

function DraggableBox(props) {
  const { clr, name, classes }  = props;

  return <div 
      className={classes.DragBox}
      style={{ backgroundColor: clr }}
    >
    {name}
  </div>;
}

export default withStyles(styles)(DraggableBox);