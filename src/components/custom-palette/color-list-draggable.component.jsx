import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import DraggableBox from '../custom-palette/color-box-draggable.component';

const DraggableList = SortableContainer(({colors, removeClr}) => {
  return (
    <div style={{ height: '100%' }} >
      {colors.map((c, i) => (
        <DraggableBox distance={5} index={i} removeClr={() => removeClr(c.name)} name={c.name} clr={c.color} />
      ))}
    </div>
  );
})

export default DraggableList;