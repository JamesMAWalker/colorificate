import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';
import PaletteFooter from './palette-footer.component';

import styles from '../../styles/palette.styles';

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

    return shades.slice(1);
  };

  render() {
    const { format } = this.state; 
    const { palName, emoji, id } = this.props.palette;
    const { classes } = this.props;

    const colorBoxes = this._shades.map((c) => (
      <ColorBox
        key={c[format]}
        name={c.name}
        bgco={c[format]}
        showingFullPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <NavBar handleChange={this.changeFormat} showSlider={false} />
        <div className={classes.PaletteColors}>
          {colorBoxes}
          <div className={classes.goBackSquare}>
            <Link className={classes.boxButton} to={`/palette/${id}`}>
              BACK TO THE PAST
            </Link>
          </div>
        </div>
        <PaletteFooter emoji={emoji} palName={palName} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);