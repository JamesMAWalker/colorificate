import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import ColorBox from './color-box.component';
import NavBar from '../navbar/navbar.component';
import PaletteFooter from './palette-footer.component';

import styles from '../../styles/palette.styles';

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
    const { classes } = this.props;
    
    const colorBoxes = colors[level].map((c) => (
      <ColorBox
        bgco={c[format]}
        name={c.name}
        palID={id}
        key={c.id}
        clrID={c.id}
        showingFullPalette
      />
    ));
    
    return (
      <div className={classes.Palette}>
        <NavBar 
          level={level} 
          changeLvl={this.changeLvl} 
          handleChange={this.changeFormat}
          showSlider
        />  
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter
          emoji={emoji}
          palName={palName}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);