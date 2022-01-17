const {edge} = require('../components/sectorEdge');

test('coordinates of the edge of a sector', () => {
  expect(edge(5, 437, 276, 708)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({x: 4, y: 436})
    ])
  );
  expect(edge(702, 440, 440, 702)).toEqual(
    expect.arrayContaining([
      expect.objectContaining({x: 436, y: 706})
    ])
  );
});

// TODO: Add test designed to test for wrong coordinates