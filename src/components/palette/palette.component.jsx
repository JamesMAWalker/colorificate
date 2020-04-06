import React, { Component } from 'react';


import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';

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
    this.setState({ format: val})
  }
  
  
  render() {
    const { colors, palName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(c => (
      <ColorBox bgco={c[format]} name={c.name} key={c.id}/>
    ))
    
    return (
      <div className='Palette'>
        <NavBar 
          level={level} 
          changeLvl={this.changeLvl} 
          handleChange={this.changeFormat}
        />  
        <div className='Palette__colors'>{colorBoxes}</div>
        <footer className="Palette-footer">
          {palName}&nbsp;
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;