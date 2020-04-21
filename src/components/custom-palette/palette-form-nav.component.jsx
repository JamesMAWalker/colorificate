import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import PaletteSubmitDialog from './palette-sumbit-dialog.component';

import styles from '../../styles/paletteFormNav.styles';

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
              className={classNames(classes.menuButton, {[classes.hide]: open})}
            >
              <ChevronRightIcon />
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
            formShowing={formShowing}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);