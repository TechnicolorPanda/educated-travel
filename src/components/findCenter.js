
const center = (x1, y1, x2, y2) => {
  let x = (x1 + x2)/2;
  let y = (y1 + y2)/2;
  return {'x': x, 'y': y};
};

module.exports = {center};