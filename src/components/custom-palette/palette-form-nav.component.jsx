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
  }
});

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: '',
      open: true,
    };
  }

  // componentDidMount() {
  //   ValidatorForm.addValidationRule('isPalNameUnique', (value) =>
  //     this.props.palettes.every(
  //       ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
  //     )
  //   );
  // }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    const {
      classes,
      open,
      handleSubmit,
      palettes
    } = this.props;

    const { newPaletteName } = this.state;

    return (
      <div className={classes.root} >
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
            <Typography variant='h6' color='inherit' noWrap>
              create your palette
            </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
              {/* <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                <TextValidator
                  value={this.state.newPaletteName}
                  label='Palette Name'
                  name='newPaletteName'
                  onChange={this.handleChange}
                  validators={['required', 'isPalNameUnique']}
                  errorMessages={[
                    'Please enter a name!',
                    'Name already in use!',
                  ]}
                />
                <Button type='submit' variant='contained' color='primary'>
                  SAVE PALETTE
                </Button>
                </ValidatorForm> */}
                <PaletteSubmitDialog 
                  newPaletteName={newPaletteName}
                  handleSubmit={handleSubmit}
                  palettes={palettes}
                />
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button variant='outlined' color='secondary'>
                    BACK TO PALETTES
                  </Button>
                </Link>
            </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);