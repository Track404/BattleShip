/* eslint-disable consistent-return */
export default class Gameboard {
  constructor() {
    this.grid = Array.from({
      length: 10,
    }).map(() => Array(10).fill(null));
  }

  placeShip(ship, positionX, positionY, axis) {
    if (axis === 'vertical') {
      const maxIndex = positionX + ship;
      if (maxIndex >= 0 && maxIndex < this.grid.length - 1) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship; i++) {
          this.grid[positionX + i].splice(positionY, 1, {
            status: 'O',
            name: ship.name,
          });
        }

        return true;
      }
      return false;
    }

    if (axis === 'horizontal') {
      const maxIndex = positionY + ship;
      if (maxIndex >= 0 && maxIndex < this.grid[0].length - 1) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship; i++) {
          this.grid[positionX].splice(positionY + i, 1, 'O');
        }
        return true;
      }
      return false;
    }
  }
}
