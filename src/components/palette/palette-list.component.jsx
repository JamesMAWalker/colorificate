import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

import MiniPalette from './mini-palette.component';
import styles from '../../styles/paletteList.styles';

class PaletteList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      deleting: false,
      idToDelete: ''
    };
  }

  toggleDeleteForm = (id) => {
    this.setState((st) => ({
      deleting: !st.deleting,
      idToDelete: id
    }));
  };

  handleDelete = () => {
    this.props.deletePalette(this.state.idToDelete);
    this.toggleDeleteForm();
  };

  goToPalette = (id) => {
    this.props.history.push(`palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    const { root, ctnr, nav, pals, footer } = classes;

    let listOfPalettes = palettes.map((p) => (
      <CSSTransition key={p.id} classNames='fade' timeout={500}>
        <MiniPalette
          openDeleteForm={this.toggleDeleteForm}
          id={p.id}
          key={p.id}
          {...p}
          handleClick={() => this.goToPalette(p.id)}
        />
      </CSSTransition>
    ));

    return (
      <div className={root}>
        <div className={ctnr}>
          <div className={nav}>
            <h1>COLORIFICATE</h1>
            <Link to='/palette/new'>Create A Palette</Link>
          </div>
          <TransitionGroup className={pals}>{listOfPalettes}</TransitionGroup>
        </div>
        <Dialog
          aria-labelledby='delete-palette-dialog-title'
          open={this.state.deleting}
          onClose={this.toggleDeleteForm}
        >
          <DialogTitle id='delete-palette-dialog-title'>
            Delete this palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <DeleteRoundedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={this.toggleDeleteForm}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);