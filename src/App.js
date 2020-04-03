import React from 'react';

import Palette from './components/palette/palette.component';

import seedColors from './data/seedColors';

function App() {
  return (
    <div >
      {/* Navbar */}
      <Palette colors={seedColors[6].colors} className='Palette-colors'/>
      {/* Footer */}
    </div>
  );
}

export default App;
