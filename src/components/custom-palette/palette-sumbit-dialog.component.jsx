import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';

class PaletteSubmitDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      newPaletteName: '',
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.toggleForm();
  };

  render() {
    const { handleSubmit } = this.props;
    const { open, newPaletteName } = this.state;

    return (
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Submit Custom Palette</DialogTitle>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
            <DialogContent>
              <DialogContentText>
                Enter a name for this new custom palette and then click sumbit to add it to the collection of existing palettes.
              </DialogContentText>
              <TextValidator
                value={this.state.newPaletteName}
                label='Palette Name'
                name='newPaletteName'
                fullWidth
                margin='normal'
                onChange={this.handleChange}
                validators={['required', 'isPalNameUnique']}
                errorMessages={['Please enter a name!', 'Name already in use!']}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color='primary'>
                Cancel
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                SAVE PALETTE
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
    );
  }
}

export default PaletteSubmitDialog;