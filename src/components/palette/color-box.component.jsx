import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import '../../styles/color-box.styles.scss';

class ColorBox extends Component {
  render() {
    const { bgco, name } = this.props;

    return (
      <CopyToClipboard text={bgco}>
        <div className='Color-box' style={{ backgroundColor: bgco }}>
          <button className='copy-btn'>COPY</button>
          <div className='color-content'>
            <span>{name}</span>
            <div className='more-colors'>MORE</div>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;