const {sector} = require('../components/findSector');

test('sector of two coordinates', () => {
    expect(sector(100, 200)).toEqual(0);
    expect(sector(450, 220)).toEqual(2);
    expect(sector(150, 550)).toEqual(1);
    expect(sector(500, 600)).toEqual(3);
    expect(sector(300, 500)).toEqual(0);
  });