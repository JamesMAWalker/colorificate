import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { arrayMove } from 'react-sortable-hoc';
import { ChromePicker } from 'react-color';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: '',
      open: true,
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPalNameUnique', (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      classes,
      open,
      handleSubmit,
      handleDrawerOpen,
    } = this.props;

    const { newPaletteName } = this.state;

    return (
      <div>
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
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
              <TextValidator
                value={this.state.newPaletteName}
                label='Palette Name'
                name='newPaletteName'
                onChange={this.handleChange}
                validators={['required', 'isPalNameUnique']}
                errorMessages={['Please enter a name!', 'Name already in use!']}
              />
              <Button type='submit' variant='contained' color='primary'>
                SAVE PALETTE
              </Button>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button variant='outlined' color='secondary'>
                  BACK TO PALETTES
                </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;