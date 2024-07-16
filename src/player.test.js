import Player from './player';
import Gameboard from './gameboard';
import Ship from './ship';

describe('creation of the player', () => {
  const game = new Player();
  test('player have their own gameboard ', () => {
    expect(game.player).toEqual(new Gameboard());
    expect(game.computer).toEqual(new Gameboard());
  });
});

describe('put ship on player', () => {
  const game = new Player();
  test('palce ship in player  ', () => {
    expect(game.player).toEqual(new Gameboard());
    expect(game.computer).toEqual(new Gameboard());
  });

  test('attack hit a ship', () => {
    const ship = new Ship(3);
    const destroyer = new Ship(5);
    game.player.placeShip(ship, 0, 0, 'vertical');
    game.computer.placeShip(destroyer, 0, 2, 'vertical');
    expect(game.player.grid[0][0]).toBe(ship);
    expect(game.player.grid[2][0]).toBe(ship);
    expect(game.computer.grid[0][2]).toBe(destroyer);
    expect(game.computer.grid[2][2]).toBe(destroyer);
    expect(game.computer.grid[4][2]).toBe(destroyer);
  });
});
