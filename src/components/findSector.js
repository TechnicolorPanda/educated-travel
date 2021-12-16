
  const defineSectors = require('./sectors.json');

const sector = (x, y) => {
    for (i = 0; i < defineSectors.length; i++) {
      if (
          x >= defineSectors[i].right && 
          x <= defineSectors[i].left &&
          y >= defineSectors[i].bottom &&
          y <= defineSectors[i].top
          ) 
      {
          return defineSectors[i].probability;
        } 
    };
    return 0;
};

module.exports = {sector};