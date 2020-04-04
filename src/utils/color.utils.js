import chroma from 'chroma-js';

import seedColors from '../data/seedColors';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const genPal = (startPal) => {
  let newPal = {
    palName: startPal.paletteName,
    id: startPal.id,
    emoji: startPal.emoji,
    colors: {}
  };
  for (let lvl of levels) {
    newPal.colors[lvl] = [];
    
  }
  startPal.colors.forEach(clr => {
    let scale = genScale(clr.color, 10).reverse();
    
    for (let i in scale) {
      newPal.colors[levels[i]].push({
        name: `${clr.name} ${levels[i]}`,
        id: clr.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(), 
        rgba: chroma(scale[i])
        .css()
        .replace("rgb", "rgba")
        .replace(")", ", 1.0)"),
      })
    }
  })
  return newPal;
}

const getRange = (hex) => {
  const end = "#fff";

  return [
    chroma(hex).darken(1.4).hex(),
    hex,
    end
  ]
}

const genScale = (hex, numClrs) => {
  return chroma
  .scale(getRange(hex))
  .mode('lab')
  .colors(numClrs);
}

export default genPal;

