import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import chroma from 'chroma-js';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import styles from '../../styles/colorBoxDraggable.styles';

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