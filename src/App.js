import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/palette/palette.component';
import PaletteList from './components/palette/palette-list.component';
import SingleColorPalette from './components/palette/single-color-palette.component';
import PaletteForm from './components/custom-palette/palette-form.component';

import seedColors from './data/seedColors';

import genPal from './utils/color.utils';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      palettes: seedColors
    }
  }
  

  findPal = id => {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette = (newPal) => {
    console.log(newPal);
    
    this.setState(st => ({
      palettes: [...st.palettes, newPal]
    }));
  }

 render () {
   const { palettes } = this.state;

   return (
     <div>
      <Switch>
        <Route 
          exact
          path='/palette/new' 
          render={(rp) => <PaletteForm 
            savePalette={this.savePalette} 
            {...rp}
            palettes={this.state.palettes}
            colorLimit={20}
          />}
        />
        <Route
          exact
          path='/'
          render={(rp) => <PaletteList {...rp} palettes={palettes} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(rp) => (
            <Palette palette={genPal(this.findPal(rp.match.params.id))} />
          )}
         />
        <Route
           exact
           path='/palette/:palID/:clrID'
           render={(rp) => (
            <SingleColorPalette 
              clrID={rp.match.params.clrID} 
              palette={genPal(this.findPal(rp.match.params.palID))} 
            />
           )}
         />
      </Switch>
    </div>
   );
 }
}

export default App;
