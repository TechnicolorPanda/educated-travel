const {center} = require('../components/findCenter');

test('coordinates of the center of a sector', () => {
  expect(center(4, 436, 276, 708)).toEqual(
    expect.objectContaining({x: 140, y: 572})
  );
  expect(center(702, 440, 440, 702)).toEqual(
    expect.objectContaining({x: 571, y: 571})
  );
});