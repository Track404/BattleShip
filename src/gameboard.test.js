import Gameboard from './gameboard';
import Ship from './ship';

describe('gameboard init', () => {
  const gameboard = new Gameboard();
  test('gameboard is created', () => {
    expect(gameboard.grid[9][9]).toBeNull();
    expect(gameboard.grid[0][0]).toBeNull();
    expect(!!gameboard.grid[10]).toBeFalsy();
  });
});

describe('place ship on the gameboard is possible', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(5);

  test('vertical placement of the ship is in array range', () => {
    expect(gameboard.placeShip(ship.shipLength, 0, 0, 'vertical')).toBeTruthy();
    expect(gameboard.placeShip(ship.shipLength, 8, 0, 'vertical')).toBeFalsy();
  });
  test('horizontal placement of the ship is in array range', () => {
    expect(
      gameboard.placeShip(ship.shipLength, 0, 0, 'horizontal')
    ).toBeTruthy();
    expect(
      gameboard.placeShip(ship.shipLength, 0, 8, 'horizontal')
    ).toBeFalsy();
  });
});

describe('place ship on the gameboard array ', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  test('vertical placement of the ship in the array', () => {
    gameboard.placeShip(ship.shipLength, 0, 0, 'vertical');
    expect(gameboard.grid[0][0].status).toBe('O');
    expect(gameboard.grid[1][0].status).toBe('O');
    expect(gameboard.grid[2][0].status).toBe('O');
    expect(gameboard.grid[3][0]).toBeNull();
  });
  test('horizontal placement of the ship in the array', () => {
    gameboard.placeShip(ship.shipLength, 0, 0, 'horizontal');
    expect(gameboard.grid[0][0]).toBe('O');
    expect(gameboard.grid[0][1]).toBe('O');
    expect(gameboard.grid[0][2]).toBe('O');
    expect(gameboard.grid[0][3]).toBeNull();
  });
});
