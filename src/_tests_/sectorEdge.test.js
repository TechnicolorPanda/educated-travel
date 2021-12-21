const {edge} = require('../components/sectorEdge');

test('coordinates of the edge of a sector', () => {
    expect(edge(5, 437, 276, 708)).toEqual(
      expect.arrayContaining([
      expect.objectContaining({x: 4, y: 436}),
    ]));
});