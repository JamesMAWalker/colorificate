import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import chroma from 'chroma-js';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

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
      color: 'white'
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

const DraggableBox = SortableElement((props) => {
  const { clr, name, classes, removeClr }  = props;

  return (
    <div className={classes.DragBox} style={{ backgroundColor: clr }}>
      <div className={classes.DragBoxContent}>
        <span>{name}</span>
        <DeleteRoundedIcon onClick={removeClr} className={classes.deleteIcon} />
      </div>
    </div>
  );
})

export default withStyles(styles)(DraggableBox);