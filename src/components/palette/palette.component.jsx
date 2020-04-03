import React, { Component } from 'react';

import ColorBox from './color-box.component';

import '../../styles/palette.styles.scss';

class Palette extends Component {
  
  render() {
    const { colors } = this.props;

    const colorBoxes = colors.map(c => (
      <ColorBox bgco={c.color} name={c.name} />
    ))
    
    return (
      <div className='Palette'>
        <div className='Palette__colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;