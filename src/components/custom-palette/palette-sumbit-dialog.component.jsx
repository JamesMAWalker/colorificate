import React, { Component } from 'react';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteSubmitDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: this.props.formShowing ? 'form' : '',
      newPaletteName: '',
      currEmoji: '😃',
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

  nextDialog = () => {
    this.setState({ stage: 'emoji' });
  }

  chooseEmoji = (emj) => {
    this.setState({ currEmoji: emj.native });
  }

  handlePaletteSubmit = () => {
    let newPalette = {
      newPaletteName: this.state.newPaletteName,
      emoji: this.state.currEmoji
    }

    this.props.handleSubmit(newPalette);
    this.setState({ stage: '' });
  }

  render() {
    const { newPaletteName, stage, currEmoji } = this.state;

    return (
      <div className='Save-palette-dialogs'>
        <Dialog
          onClose={this.handleClose}
          open={stage === 'emoji'}
          className='emoji-dialog'
        >
          <DialogTitle id='form-dialog-title'>
            Choose a Palette Emoji!
          </DialogTitle>
          <Picker
            title={`Submit with "${currEmoji}"`}
            onSelect={this.chooseEmoji}
          />
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button
              onClick={this.handlePaletteSubmit}
              type='submit'
              variant='contained'
              color='primary'
            >
              SAVE PALETTE
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Submit Custom Palette
          </DialogTitle>
          <ValidatorForm onSubmit={this.nextDialog}>
            <DialogContent>
              <DialogContentText>
                Enter a name for this new custom palette and then click sumbit
                to add it to the collection of existing palettes.
              </DialogContentText>
              <TextValidator
                value={newPaletteName}
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
                NEXT
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteSubmitDialog;