import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import genPal from '../../utils/color.utils';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    let listOfPalettes = palettes.map(p => (
      <Link className='palette-link' to={`/palette/${p.id}`} >{p.paletteName}</Link>
    ));

    return (
      <div className='Palette-list'>
        <h1 className='Palette-list__title'>Palette List Component</h1>
        <div className='Palette-list__list'>{listOfPalettes}</div>
      </div>
    );
  }
}

export default PaletteList;