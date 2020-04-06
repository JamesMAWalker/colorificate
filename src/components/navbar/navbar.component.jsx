import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';  
import '../../styles/navbar.styles.scss';

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
    const { level, changeLvl } = this.props;
    const { format, open } = this.state;

    return (
      <header className='Navbar'>
        <div className='logo'>
          <a className='logo-text' href='#'>
            colorificate
          </a>
        </div>
        <div className='Slider-container'>
          <div className='Slider-level'>level&nbsp; // &nbsp;{level}</div>
          <div className='Slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLvl}
            />
          </div>
        </div>
        <div className='Select-container'>
          <Select value={format} onChange={this.handleSelect}>
            <MenuItem className='value-name' value='hex'>
              <span className='value-ex'>HEX&nbsp;-&nbsp;#ffffff</span>
            </MenuItem>
            <MenuItem className='value-name' value='rgb'>
              <span className='value-ex'>
                RGB&nbsp;-&nbsp;rgb(255, 255, 255)
              </span>
            </MenuItem>
            <MenuItem className='value-name' value='rgba'>
              <span className='value-ex'>
                RGBA&nbsp;-&nbsp;rgba(255, 255, 255, 1.0)
              </span>
            </MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }} 
          open={open}
          autoHideDuration={2000}
          message={<span id="format-msg">Format changed to // {format.toUpperCase()}</span>}
          ContentProps={{ "aria-describedby": "format-msg" }}
          onClose={this.closeSnack}
          action={[
            <IconButton onClick={this.closeSnack} color="inherit" key="close" aria-label="close">
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default NavBar;