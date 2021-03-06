import React, { Component } from "react";

import { arrayMove } from 'react-sortable-hoc';

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import ColorPicker from './color-picker.component';
import PaletteFormNav from './palette-form-nav.component';
import DraggableList from '../custom-palette/color-list-draggable.component';

import styles from '../../styles/paletteForm.styles';

class PaletteForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      crrClr: 'blue',
      open: false,
      newPaletteName: '',
      colors: this.props.palettes[0].colors,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  updateCrrClr = (nwClr) => {
    this.setState({ crrClr: nwClr.hex })
  }

  addClr = (newClr) => {
    this.setState(st => ({
      colors: [...st.colors, newClr], 
      newColorName: '',
    }))
  }

  removeClr = (clr) => {
    const { colors } = this.state;
    let newColors = colors.filter(c => c.name.toLocaleLowerCase() !== clr.toLowerCase())
    this.setState({
      colors: [...newColors]
    });
  }
  
  handlePaletteSubmit = (newPalette) => {
    const newColor = {
      paletteName: newPalette.newPaletteName,
      id: newPalette.newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: newPalette.emoji,
      colors: this.state.colors
    };

    this.props.savePalette(newColor);
    this.props.history.push('/');
  }

  addRandClr = () => {
    const { palettes } = this.props;
    const { colors } = this.state;

    const allClrs = palettes.map(p => p.colors).flat()
    const rIndex = arr => Math.floor(Math.random() * allClrs.length);
    let randCol = allClrs[rIndex(allClrs)];

    const unusedColor = () => {
      if (colors.includes(randCol)) {
        console.log('used color detected!', randCol);
        randCol = allClrs[rIndex(allClrs)];
      } else {
        console.log('new color added!', randCol);
        return randCol
      }
    }

    this.setState((st) => ({
      colors: [...st.colors, unusedColor()],
    }));
  }

  clearClrs = () => {
    this.setState({ colors: [] });
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  render() {
    const { classes, colorLimit, palettes } = this.props;
    const { open, colors } = this.state;

    let paletteIsFull = colors.length >= colorLimit;

    return (
      <div>
        <div className={classes.root}>
          <PaletteFormNav
            open={open}
            palettes={palettes}
            handleSubmit={this.handlePaletteSubmit}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeaders}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <div className={classes.drawerContainer}>
              <Typography className={classes.drawerHeader} variant='h2' color='inherit'>
                n e w c o l o r s
              </Typography>
              <div className={classes.btns}>
                <Button
                  onClick={this.clearClrs}
                  variant='contained'
                  color='secondary'
                >
                  Clear Palette
                </Button>
                <Button
                  variant='contained'
                  color={paletteIsFull ? 'default' : 'primary'}
                  onClick={this.addRandClr}
                  disabled={paletteIsFull}
                >
                  Random Color
                </Button>
              </div>
              <ColorPicker
                paletteIsFull={paletteIsFull}
                addClr={this.addClr}
                colors={colors}
              />
            </div>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <DraggableList
              onSortEnd={this.onSortEnd}
              axis='xy'
              removeClr={this.removeClr}
              colors={colors}
            />
          </main>
        </div>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(PaletteForm);
