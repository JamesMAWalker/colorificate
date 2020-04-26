import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Palette from './components/palette/palette.component';
import PaletteList from './components/palette/palette-list.component';
import SingleColorPalette from './components/palette/single-color-palette.component';
import PaletteForm from './components/custom-palette/palette-form.component';

import seedColors from './data/seedColors';

import genPal from './utils/color.utils';

class App extends Component {

  constructor(props) {
    super(props);

    const storedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    
    this.state = {
      palettes: storedPalettes || seedColors
    }
  }
  

  findPal = id => {
    return this.state.palettes.find(palette => palette.id === id);
  }

  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  savePalette = (newPal) => {
    console.log(newPal);
    
    this.setState(st => ({
      palettes: [...st.palettes, newPal] 
    }), this.syncLocalStorage);
  }

  deletePalette = (id) => {
    console.log(id);

    this.setState(st => ({ 
      palettes: st.palettes.filter(p => p.id !== id) 
    }),
      this.syncLocalStorage
    );
  }

 render () {
   const { palettes } = this.state;

   return (
     <Route
       render={({ location }) => (
         <TransitionGroup>
           <CSSTransition key={location.key} classNames='fade' timeout={200}>
             <Switch location={location}>
               <Route
                 exact
                 path='/palette/new'
                 render={(rp) => (
                   <div className='page'>
                     <PaletteForm
                       savePalette={this.savePalette}
                       {...rp}
                       palettes={this.state.palettes}
                       colorLimit={20}
                     />
                   </div>
                 )}
               />
               <Route
                 exact
                 path='/'
                 render={(rp) => (
                   <div className='page'>
                     <PaletteList
                       {...rp}
                       deletePalette={this.deletePalette}
                       palettes={palettes}
                     />
                   </div>
                 )}
               />
               <Route
                 exact
                 path='/palette/:id'
                 render={(rp) => (
                   <div className='page'>
                     <Palette
                       palette={genPal(this.findPal(rp.match.params.id))}
                     />
                   </div>
                 )}
               />
               <Route
                 exact
                 path='/palette/:palID/:clrID'
                 render={(rp) => (
                   <div className='page'>
                     <SingleColorPalette
                       clrID={rp.match.params.clrID}
                       palette={genPal(this.findPal(rp.match.params.palID))}
                     />
                   </div>
                 )}
               />
             </Switch>
           </CSSTransition>
         </TransitionGroup>
       )}
     />
   );
 }
}

export default App;
