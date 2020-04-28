import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles} from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Page from './components/base/page.container';
import Palette from './components/palette/palette.component';
import PaletteList from './components/palette/palette-list.component';
import SingleColorPalette from './components/palette/single-color-palette.component';
import PaletteForm from './components/custom-palette/palette-form.component';

import seedColors from './data/seedColors';
import genPal from './utils/color.utils';

import styles from './styles/global.styles';

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
           <CSSTransition key={location.key} classNames='page' timeout={200}>
             <Switch location={location}>
               <Route
                 exact
                 path='/palette/new'
                 render={(rp) => (
                   <Page>
                     <PaletteForm
                       savePalette={this.savePalette}
                       {...rp}
                       palettes={this.state.palettes}
                       colorLimit={20}
                     />
                   </Page>
                 )}
               />
               <Route
                 exact
                 path='/'
                 render={(rp) => (
                   <Page>
                     <PaletteList
                       {...rp}
                       deletePalette={this.deletePalette}
                       palettes={palettes}
                     />
                   </Page>
                 )}
               />
               <Route
                 exact
                 path='/palette/:id'
                 render={(rp) => (
                   <Page>
                     <Palette
                       palette={genPal(this.findPal(rp.match.params.id))}
                     />
                   </Page>
                 )}
               />
               <Route
                 exact
                 path='/palette/:palID/:clrID'
                 render={(rp) => (
                   <Page>
                     <SingleColorPalette
                       clrID={rp.match.params.clrID}
                       palette={genPal(this.findPal(rp.match.params.palID))}
                     />
                   </Page>
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

export default withStyles(styles)(App);
