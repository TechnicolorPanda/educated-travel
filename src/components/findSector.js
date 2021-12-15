
  const defineSectors = {
    sectors: [
      {
       upperLeft: [706, 276], 
       upperRight: [436, 276],
       lowerLeft: [706, 4],
       lowerRight:[436, 4],
       probability: 2,
      },
      {
        upperLeft: [706, 706], 
        upperRight: [436, 706],
        lowerLeft: [706, 436],
        lowerRight: [436, 436],
        probability: 3,
      },
      {
        upperLeft: [276, 706], 
        upperRight: [4, 706],
        lowerLeft: [276, 436],
        lowerRight: [4, 436],
        probability: 1,
       },
    ]
  }

const sector = (x, y) => {
    for (i = 0; i < defineSectors.sectors.length; i++) {
      if (
          x >= defineSectors.sectors[i].upperRight[0] && 
          x <= defineSectors.sectors[i].upperLeft[0] &&
          y >= defineSectors.sectors[i].lowerLeft[1] &&
          y <= defineSectors.sectors[i].upperLeft[1]
          ) 
      {
          return defineSectors.sectors[i].probability;
        } 
    };
    return 0;
};

module.exports = {sector};