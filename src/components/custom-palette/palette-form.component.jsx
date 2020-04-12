import React, { Component } from "react";

import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import DraggableBox from '../custom-palette/color-box-draggable.component';

const drawerWidth = 350;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
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
      newName: '' ,
      clrs: [{ clr: 'blue', name: 'blue'}],
    };
  }

  componentDidMount() {
    
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { clrs } = this.state;
      let colorTaken = clrs.map(c => c.name.toLowerCase()).includes(value.toLowerCase());
      return colorTaken ? false : true;
    });

    ValidatorForm.addValidationRule('isColorUnique', value => (
      this.state.clrs.every(({ clr }) => clr !== this.state.crrClr)
    ));
  }

  updateCrrClr = (nwClr) => {
    this.setState({ crrClr: nwClr.hex })
  }

  addClr = () => {
    const { crrClr, newName } = this.state;

    const newClr = {
      clr: crrClr,
      name: newName
    }  

    this.setState(st => ({
      clrs: [...st.clrs, newClr], 
      newName: '',
    }))
  }
  
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({ newName: e.target.value })
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' color='inherit' noWrap>
                Persistent drawer
              </Typography>
            </Toolbar>
          </AppBar>
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
              <Button variant='contained' color='secondary'>
                Clear Palette
              </Button>
              <Button variant='contained' color='primary'>
                Random Color
              </Button>
            </div>
            <ChromePicker
              color={this.state.crrClr}
              onChangeComplete={(newClr) => this.updateCrrClr(newClr)}
            />
            <ValidatorForm instantValidate={false} onSubmit={this.addClr}>
              <TextValidator
                type='text'
                value={this.state.newName}
                onChange={this.handleChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={[
                  'Please enter a color name!',
                  'Color name taken!',
                  'Color already in palette!'
                ]}
              />
              <Button
                variant='contained'
                color='primary'
                style={{ backgroundColor: this.state.crrClr }}
                type='submit'
              >
                Add Color
              </Button>
            </ValidatorForm>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {this.state.clrs.map((c) => (
              <DraggableBox name={c.name} clr={c.clr} />
            ))}
          </main>
        </div>
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(PaletteForm);
