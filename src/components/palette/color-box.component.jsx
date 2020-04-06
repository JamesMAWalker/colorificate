import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    const { bgco, name } = this.props;

    let isCopied = this.state.copied === true ? 'show' : '';

    return (
      <CopyToClipboard text={bgco} onCopy={this.changeCopyState}>
        <div className='Color-box' style={{ backgroundColor: bgco }}>
          <div
            className={`copy-overlay ${isCopied}`}
            style={{ backgroundColor: bgco }}
          />
          <div className={`copy-message ${isCopied}`}>
            <h1>
              COPIED <br /> {bgco}
            </h1>
            <p></p>
          </div>
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