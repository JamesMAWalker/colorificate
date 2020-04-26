import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

// import DeleteDialog from './delete-dialog.component';
import styles from '../../styles/miniPalette.styles';


class MiniPalette extends Component {
 
  handleDelete = (e) => {
    e.stopPropagation();
    this.props.openDeleteForm(this.props.id);
  };

  render() {
    const {
      paletteName,
      emoji,
      colors,
      handleClick,
      openDeleteForm,
    } = this.props;
    const { root, clrs, ttl, emj, palClr, deleteIcon } = this.props.classes;

    let miniClrs = colors.map((c) => (
      <div
        style={{ backgroundColor: c.color }}
        key={c.name}
        className={palClr}
      ></div>
    ));

    return (
      <div onClick={handleClick} className={root}>
        <DeleteRoundedIcon onClick={this.handleDelete} className={deleteIcon} />
        <div className={clrs}>{miniClrs}</div>
        <h5 className={ttl}>
          {paletteName} <span className={emj}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);