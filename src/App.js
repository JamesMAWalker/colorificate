import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/palette/palette.component';
import PaletteList from './components/palette/palette-list.component';
import SingleColorPalette from './components/palette/single-color-palette.component';
import PaletteForm from './components/custom-palette/palette-form.component';

import seedColors from './data/seedColors';

import genPal from './utils/color.utils';

class App extends Component {

  findPal = id => {
    return seedColors.find(palette => palette.id === id);
  }

 render () {
   return (
     <div>
      <Switch>
        <Route 
          exact
          path='/palette/new' 
          render={(rp) => <PaletteForm {...rp}/>}
        />
        <Route
          exact
          path='/'
          render={(rp) => <PaletteList {...rp} palettes={seedColors} />}
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
