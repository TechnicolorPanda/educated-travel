let lineCoordinates = [];

const line = (x1, y1, x2, y2) => {
  const slope = (y2 - y1)/(x2 - x1);
  for (i = -2156; i <=2668; i++) {
    let nextY = y2 - slope * (x2 - i);
    lineCoordinates.push({x: i, y: nextY});
  }
  return lineCoordinates;
};

module.exports = {line};