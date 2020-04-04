import React from 'react';

import Palette from './components/palette/palette.component';

import seedColors from './data/seedColors';

import genPal from './utils/color.utils';

function App() {
  console.log(genPal(seedColors[2]));
  

  return (
    <div > 
      {/* Navbar */}
      <Palette palette={genPal(seedColors[2])} className='Palette-colors'/>
      {/* Footer */}
    </div>
  );
}

export default App;
