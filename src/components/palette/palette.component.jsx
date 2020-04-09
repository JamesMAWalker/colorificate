import React, { Component } from 'react';


import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';
import PaletteFooter from './palette-footer.component';

import '../../styles/palette.styles.scss';

class Palette extends Component {
  constructor(props) {
    super(props);
    
    this.state = { level: 400, format: 'hex' };
  }

  changeLvl = level => {
    this.setState({ level });
  }

  changeFormat = (val) => {
    this.setState({ format: val })
  }
  
  
  render() {
    const { colors, palName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    
    const colorBoxes = colors[level].map(c => (
      <ColorBox 
        bgco={c[format]} 
        name={c.name} 
        palID={id} 
        key={c.id} 
        clrID={c.id}
        showLink
      />
    ))
    
    return (
      <div className='Palette'>
        <NavBar 
          level={level} 
          changeLvl={this.changeLvl} 
          handleChange={this.changeFormat}
          showSlider
        />  
        <div className='Palette__colors'>{colorBoxes}</div>
        <PaletteFooter
          emoji={emoji}
          palName={palName}
        />
      </div>
    );
  }
}

export default Palette;