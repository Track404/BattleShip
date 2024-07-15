import Player from './player';
import Gameboard from './gameboard';

describe('creation of the player', () => {
  const game = new Player();
  test('player have their own gameboard ', () => {
    expect(game.player).toEqual(new Gameboard());
    expect(game.computer).toEqual(new Gameboard());
  });
});
