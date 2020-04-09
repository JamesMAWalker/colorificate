import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import MiniPalette from './mini-palette.component';

const styles = {
  root: {
    backgroundColor: 'greenyellow',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctnr: {
    width: '55%',
    height: '100%',
    alignSelf: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    fontSize: '2rem',
  },
  pals: {
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gap: '5%',
  }
}


class PaletteList extends Component {
  
  goToPalette = id => {
    this.props.history.push(`palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
    const { root, ctnr, nav, pals } = classes;
    

    let listOfPalettes = palettes.map(p => (
      <MiniPalette {...p} handleClick={() => this.goToPalette(p.id)} />
    ));

    return (
      <div className={root}>
        <div className={ctnr}>
          <div className={nav}>
            <h1>Palette List Component</h1>
          </div>
          <div className={pals}>{listOfPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);