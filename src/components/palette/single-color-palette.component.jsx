import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';
import PaletteFooter from './palette-footer.component';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);

    const { palette, clrID } = this.props;
    this._shades = this.collectShades(palette, clrID);

    this.state = {
      format: 'hex',
    };
  }

  changeFormat = (val) => {
    this.setState({ format: val });
  };

  collectShades = (pltt, focusClr) => {
    let shades = [];
    let allClrs = pltt.colors;

    for (let key in allClrs) {
      shades = shades.concat(allClrs[key].filter((c) => c.id === focusClr));
    }

    console.log(shades);

    return shades.slice(1);
  };

  render() {
    const { format } = this.state; 
    const { palName, emoji, id } = this.props.palette;

    const colorBoxes = this._shades.map((c) => (
      <ColorBox
        key={c[format]}
        name={c.name}
        bgco={c[format]}
        showLink={false}
      />
    ));

    return (
      <div className='Palette Palette--single'>
        <NavBar handleChange={this.changeFormat} showSlider={false} />
        <div className='Palette__colors'>
          {colorBoxes}
          <div className="go-back">
            <Link className='back-btn' to={`/palette/${id}`}>BACK TO THE PAST</Link>
          </div>  
        </div>
        <PaletteFooter emoji={emoji} palName={palName} />
      </div>
    );
  }
}

export default SingleColorPalette;