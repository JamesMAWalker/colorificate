import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from '../../styles/colorPicker.styles';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      crrClr: 'orangered',
      newColorName: '',
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { colors } = this.props;
      let colorTaken = colors
        .map((c) => c.name.toLowerCase())
        .includes(value.toLowerCase());
      return colorTaken ? false : true;
    });

    ValidatorForm.addValidationRule('isColorUnique', value =>
      this.props.colors.every(({ color }) => color !== this.state.crrClr)
    );
  }

  updateCrrClr = (nwClr) => {
    this.setState({ crrClr: nwClr.hex });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { crrClr, newColorName } = this.state;
    const newClr = {
      color: crrClr,
      name: newColorName,
    };

    this.props.addClr(newClr);
    this.setState({ newColorName: '' });
  };

  render() {
    const { paletteIsFull, classes } = this.props;
    const { crrClr, newColorName } = this.state;
    return (
      <div className={classes.ColorPicker}>
        <ChromePicker className={classes.pickerTool} color={crrClr} onChangeComplete={this.updateCrrClr} />
        <ValidatorForm className={classes.addColorForm} instantValidate={true} onSubmit={this.handleSubmit}>
          <TextValidator
            name='newColorName'
            placeholder='name your color!'
            className={classes.colorNameInput}
            variant='filled'
            value={newColorName}
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Please enter a color name!',
              'Color name taken!',
              'Color already in palette!',
            ]}
          />
          <Button
            className={classes.addClrBtn}
            variant='contained'
            color='primary'
            style={{
              backgroundColor: paletteIsFull ? 'grey' : crrClr,
            }}
            type='submit'
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'PALLETE FULL' : 'ADD COLOR'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPicker);