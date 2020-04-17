import React, { Component } from "react";
import { Link } from 'react-router-dom';

import { arrayMove } from 'react-sortable-hoc';
import { ChromePicker } from 'react-color';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import PaletteFormNav from './palette-form-nav.component';
import DraggableList from '../custom-palette/color-list-draggable.component';

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    // display: 'flex',
    // justifyContent: 'space-between',
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    // padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 3,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class PaletteForm extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      crrClr: 'blue',
      open: false,
      newColorName: '' ,
      newPaletteName: '',
      colors: this.props.palettes[0].colors,
    };
  }

  componentDidMount() {

    console.log('555', this.props.palettes);
    
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { colors } = this.state;
      let colorTaken = colors.map(c => c.name.toLowerCase()).includes(value.toLowerCase());
      return colorTaken ? false : true;
    });

    ValidatorForm.addValidationRule('isColorUnique', value => (
      this.state.colors.every(({ clr }) => clr !== this.state.crrClr)
    ));
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

  addClr = () => {
    const { crrClr, newColorName } = this.state;
    const newClr = {
      color: crrClr,
      name: newColorName,
      id: newColorName.toLowerCase().replace(/ /g, '-')
    }  
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
  
  handlePaletteSubmit = (newPaletteName) => {
    const newColor = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      emoji: '😂',
      colors: this.state.colors
    };

    this.props.savePalette(newColor);
    this.props.history.push('/');
  }

  addRandClr = () => {
    const { palettes, colorLimit } = this.props;
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
            classes={classes} 
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
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Typography variant='h2' color='inherit'>
              Create Your Palette
            </Typography>
            <div className=''>
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
            <ChromePicker
              color={this.state.crrClr}
              onChangeComplete={(newClr) => this.updateCrrClr(newClr)}
            />
            <ValidatorForm instantValidate={false} onSubmit={this.addClr}>
              <TextValidator
                name='newColorName'
                value={this.state.newColorName}
                onChange={this.handleChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={[
                  'Please enter a color name!',
                  'Color name taken!',
                  'Color already in palette!',
                ]}
              />
              <Button
                variant='contained'
                color='primary'
                style={{
                  backgroundColor: paletteIsFull ? 'grey' : this.state.crrClr,
                }}
                type='submit'
                disabled={paletteIsFull}
              >
                {paletteIsFull ? 'PALLETE FULL' : 'ADD COLOR'}
              </Button>
            </ValidatorForm>
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
              colors={this.state.colors}
            />
          </main>
        </div>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(PaletteForm);
