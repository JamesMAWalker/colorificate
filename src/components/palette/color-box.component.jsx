import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from '../../styles/colorBox.styles';


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
    const { bgco, name, palID, clrID, showingFullPalette, classes } = this.props;
    
    
    let isCopied = this.state.copied;
    return (
      <CopyToClipboard text={bgco} onCopy={this.changeCopyState}>
        <div className={classes.colorBox}>
          <div
            className={`${classes.copyOverlay} ${isCopied && classes.showOverlay}`}
            style={{ backgroundColor: bgco }}
          />
          <div
            className={`${classes.copyMessage} ${isCopied && classes.showMessage} ${classes.copyText}`}
          >
            <h1>
              COPIED <br /> {bgco}
            </h1>
          </div>
          <button className={`${classes.boxButton}`}>COPY</button>
          <div className={`${classes.colorContent} ${classes.colorBoxContent}`}>
            <span>{name}</span>
            {showingFullPalette && (
              <Link
                className={classes.moreColors}
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

export default withStyles(styles)(ColorBox);