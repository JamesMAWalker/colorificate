import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';  

import '../../styles/navbar.styles.scss';

class NavBar extends Component {

  render() {
    const { level, changeLvl } = this.props;

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
      </header>
    );
  }
}

export default NavBar;