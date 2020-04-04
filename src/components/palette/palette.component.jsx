import React, { Component } from 'react';


import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';

import '../../styles/palette.styles.scss';

class Palette extends Component {
  constructor(props) {
    super(props);
    
    this.state = { level: 400 };
  }

  changeLvl = level => {
    this.setState({ level });
  }
  
  
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(c => (
      <ColorBox bgco={c.rgb} name={c.name} key={c.name}/>
    ))
    
    return (
      <div className='Palette'>
        <NavBar level={level} changeLvl={this.changeLvl}/>  
        <div className='Palette__colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;