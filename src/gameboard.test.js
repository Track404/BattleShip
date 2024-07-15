/* eslint-disable comma-dangle */
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
    expect(gameboard.placeShip(ship, 0, 0, 'vertical')).toBeTruthy();
    expect(gameboard.placeShip(ship, 8, 0, 'vertical')).toBeFalsy();
  });
  test('horizontal placement of the ship is in array range', () => {
    expect(gameboard.placeShip(ship, 0, 0, 'horizontal')).toBeTruthy();
    expect(gameboard.placeShip(ship, 0, 8, 'horizontal')).toBeFalsy();
  });
});

describe('place ship on the gameboard array ', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);

  test('vertical placement of the ship in the array', () => {
    gameboard.placeShip(ship, 0, 0, 'vertical');
    expect(gameboard.grid[0][0]).toBe(ship);
    expect(gameboard.grid[1][0]).toBe(ship);
    expect(gameboard.grid[2][0]).toBe(ship);
    expect(gameboard.grid[3][0]).toBeNull();
  });
  test('horizontal placement of the ship in the array', () => {
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    expect(gameboard.grid[0][0]).toBe(ship);
    expect(gameboard.grid[0][1]).toBe(ship);
    expect(gameboard.grid[0][2]).toBe(ship);
    expect(gameboard.grid[0][3]).toBeNull();
  });
});

describe('make an attack', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  const destroyer = new Ship(5);
  gameboard.placeShip(ship, 0, 0, 'vertical');
  gameboard.placeShip(destroyer, 0, 2, 'vertical');
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(2, 0);
  gameboard.receiveAttack(0, 2);
  gameboard.receiveAttack(1, 2);
  gameboard.receiveAttack(2, 2);
  gameboard.receiveAttack(0, 4);
  test('attack hit a ship', () => {
    expect(gameboard.grid[0][0]).toBe(ship);
    expect(gameboard.grid[2][0]).toBe(ship);
    expect(gameboard.grid[0][2]).toBe(destroyer);
    expect(gameboard.grid[2][2]).toBe(destroyer);
    expect(gameboard.grid[4][2]).toBe(destroyer);
    expect(gameboard.grid[0][4]).toBe('Miss');
  });
  test('make the ship counter of hit go up', () => {
    expect(ship.numberOfHit).toBe(2);
    expect(destroyer.numberOfHit).toBe(3);
  });
  test('check if the ship are sunk', () => {
    expect(ship.sunkShip).toBeFalsy();
    gameboard.receiveAttack(1, 0);
    expect(ship.sunkShip).toBeTruthy();
  });
  test('check if all the ship are sunk', () => {
    expect(gameboard.allHit).toBe(2);
  });
});
