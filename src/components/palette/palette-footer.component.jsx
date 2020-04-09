import React from 'react';

function PaletteFooter(props) {
  const { emoji, palName } = props; 

  return (
    <footer className='Palette-footer'>
      {palName}&nbsp;
      <span className='emoji'>{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;