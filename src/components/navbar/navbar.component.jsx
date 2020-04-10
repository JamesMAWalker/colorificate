import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';  
import styles from '../../styles/navBar.styles';

class NavBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      format: 'hex',
      open: false
    };
  }
  

  handleSelect = (e) => {
    const { value } = e.target;
    const { handleChange } = this.props;

    this.setState({ format: value, open: true }, () => handleChange(value));
  }

  closeSnack = () => {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLvl, showSlider, classes } = this.props;
    const { format, open } = this.state;

    return (
      <header className={classes.NavBar}>
        <div className={classes.logo}>
          <Link className={classes.logoText} to='/'>
            colorificate
          </Link>
        </div>
        {showSlider && (
          <div className={classes.sliderContainer}>
            <div className={classes.sliderLevel}>level&nbsp; // &nbsp;{level}</div>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLvl}
              />
            </div>
          </div>
        )}
        <div className={classes.SelectContainer}>
          <Select value={format} onChange={this.handleSelect}>
            <MenuItem value='hex'>
              <span className={classes.valueEx}>HEX&nbsp;-&nbsp;#ffffff</span>
            </MenuItem>
            <MenuItem value='rgb'>
              <span className={classes.valueEx}>
                RGB&nbsp;-&nbsp;rgb(255, 255, 255)
              </span>
            </MenuItem>
            <MenuItem value='rgba'>
              <span className={classes.valueEx}>
                RGBA&nbsp;-&nbsp;rgba(255, 255, 255, 1.0)
              </span>
            </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={2000}
          message={
            <span className={classes.formatMsg}>
              Format changed to // {format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aria-describedby': 'format-msg' }}
          onClose={this.closeSnack}
          action={[
            <IconButton
              onClick={this.closeSnack}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(NavBar);