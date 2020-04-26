import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MiniPalette from './mini-palette.component';
import styles from '../../styles/paletteList.styles';

class PaletteList extends Component {

  constructor(props) {
    super(props);
    
  
  }
  
  
  goToPalette = id => {
    this.props.history.push(`palette/${id}`)
  }

  render() {
    const { palettes, classes } = this.props;
    const { root, ctnr, nav, pals, footer } = classes;
    

    let listOfPalettes = palettes.map((p) => (
      <CSSTransition key={p.id} classNames='fade' timeout={500} >
        <MiniPalette
          deletePalette={this.props.deletePalette}
          id={p.id}
          key={p.id}
          {...p}
          handleClick={() => this.goToPalette(p.id)}
        />
      </CSSTransition>
    ));

    return (
      <div className={root}>
        <div className={ctnr}>
          <div className={nav}>
            <h1>COLORIFICATE</h1>
            <Link to='/palette/new'>Create A Palette</Link>
          </div>
            <TransitionGroup className={pals}>{listOfPalettes}</TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);