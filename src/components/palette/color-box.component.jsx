import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

import '../../styles/color-box.styles.scss';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1200);
    })
  }
  

  render() {
    const { bgco, name, palID, clrID, showLink } = this.props;
    const isDarkClr = chroma(bgco).luminance() <= .2;
    const isLightClr = chroma(bgco).luminance() >= .5;
    
    let isCopied = this.state.copied === true ? 'show' : '';

    return (
      <CopyToClipboard text={bgco} onCopy={this.changeCopyState}>
        <div className='Color-box' style={{ backgroundColor: bgco }}>
          <div
            className={`copy-overlay ${isCopied}`}
            style={{ backgroundColor: bgco }}
          />
          <div
            className={`copy-message ${isCopied} ${isLightClr && 'dark-text'}`}
          >
            <h1>
              COPIED <br /> {bgco}
            </h1>
          </div>
          <button className='copy-btn'>COPY</button>
          <div className={`color-content ${isDarkClr && 'light-text'}`}>
            <span>{name}</span>
            {showLink && (
              <Link
                className='more-colors'
                to={`/palette/${palID}/${clrID}`}
                onClick={(e) => e.stopPropagation()}
              >
                <div>MORE</div>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;