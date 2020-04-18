import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import PaletteSubmitDialog from './palette-sumbit-dialog.component';

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  navBtns: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

    '& *': {
      margin: '.5rem',
    }
  }
});

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: '',
      formShowing: false,
      open: true,
    };
  }

  toggleForm = () => {
    console.log('clicked showForm');
    
    this.setState(st => ({
      formShowing: !st.formShowing
    }));
  }

  render() {
    const {
      classes,
      open,
      handleSubmit,
      palettes
    } = this.props;

    const { newPaletteName, formShowing } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          color='default'
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>New Palette</Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Button
              variant='contained'
              color='primary'
              onClick={this.toggleForm}
            >
              SUBMIT NEW PALETTE
            </Button>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Button variant='text' color='secondary'>
                BACK TO PALETTES
              </Button>
            </Link>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteSubmitDialog
            newPaletteName={newPaletteName}
            handleSubmit={handleSubmit}
            palettes={palettes}
            toggleForm={this.toggleForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);