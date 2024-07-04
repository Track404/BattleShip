/* eslint-disable implicit-arrow-linebreak */
import Ship from './ship';

const ship = new Ship(5);

describe('hit function test', () => {
  test('increase the hit variable by one ', () =>
    expect(ship.hit()).toEqual(1));
});
describe('sunk fucntion test', () => {
  beforeEach(() => {
    ship.sunkShip = false;
  });
  test('check if the ship is sunk numberOfHit=shipLength', () => {
    expect(ship.sunk(5)).toBeTruthy();
  });
  test('check if the ship is sunk when numberOfHit>shipLength', () => {
    expect(ship.sunk(2)).toBeFalsy();
  });
});
