const {line} = require('../components/coordinatesOfLine');
const {sector} = require('../components/findSector');

let edgeCoordinates = [];

const edge = (x1, y1, x2, y2) => {
  const lineCoordinates = line(x1, y1, x2, y2);
  const numberOfCoordinates = lineCoordinates.length;
  let nextSector;
  let previousSector;

  for (let i = 0; i < 5; i++) {
    nextSector = sector(lineCoordinates[i].x, lineCoordinates[i].y);
    if (i > 0) {
      previousSector = sector(lineCoordinates[i-1].x, lineCoordinates[i-1].y);
    }

    // Check to see if the sector values are different for adjacent coordinates
    if (nextSector !== previousSector && previousSector >= 0) {
      if (nextSector !== 0) {
        edgeCoordinates.push({x: lineCoordinates[i].x, y: lineCoordinates[i].y});
      } else {
        edgeCoordinates.push({x: lineCoordinates[i-1].x, y: lineCoordinates[i-1].y})
      }
    }
  }
  return edgeCoordinates;
};

module.exports = {edge};