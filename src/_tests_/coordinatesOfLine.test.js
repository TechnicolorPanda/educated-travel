const {line} = require('../components/coordinatesOfLine');

test('coordinates on same line as two points', () => {
    expect(line(100, 200, 200, 400)).toEqual(
      expect.arrayContaining([
      expect.objectContaining({x: 300, y: 600}),
    ]));
    expect(line(100, -300, 200, -600)).toEqual(
      expect.arrayContaining([
      expect.objectContaining({x: 300, y: -900}),
    ]));
    expect(line(-100, -200, -200, -500)).toEqual(
      expect.not.arrayContaining([
        expect.objectContaining({x: -300, y: -500}),
      ]));
});