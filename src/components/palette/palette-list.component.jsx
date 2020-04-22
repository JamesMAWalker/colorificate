import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './mini-palette.component';
import styles from '../../styles/paletteList.styles';

class PaletteList extends Component {
  
  goToPalette = id => {
    this.props.history.push(`palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
    const { root, ctnr, nav, pals } = classes;
    

    let listOfPalettes = palettes.map(p => (
      <MiniPalette deletePalette={this.props.deletePalette} id={p.id} key={p.id} {...p} handleClick={() => this.goToPalette(p.id)} />
    ));

    return (
      <div className={root}>
        <div className={ctnr}>
          <div className={nav}>
            <h1>COLORIFICATE</h1>
            <Link to='/palette/new' >Create A Palette</Link>
          </div>
          <div className={pals}>{listOfPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);