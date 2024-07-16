/* eslint-disable no-else-return */
/* eslint-disable comma-dangle */
import Ship from './ship';

/* eslint-disable consistent-return */
export default class Gameboard {
  constructor() {
    this.grid = Array.from({
      length: 10,
    }).map(() => Array(10).fill(null));
    this.allHit = 0;
  }

  placeShip(ship, positionX, positionY, axis) {
    if (axis === 'vertical') {
      const maxIndex = positionX + ship.shipLength;
      if (maxIndex >= 0 && maxIndex < this.grid.length - 1) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship.shipLength; i++) {
          this.grid[positionX + i].splice(positionY, 1, ship);
        }
        this.allHit += ship.shipLength;
        return true;
      }
      return false;
    }

    if (axis === 'horizontal') {
      const maxIndex = positionY + ship.shipLength;
      if (maxIndex >= 0 && maxIndex < this.grid[0].length - 1) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ship.shipLength; i++) {
          this.grid[positionX].splice(positionY + i, 1, ship);
        }
        this.allHit += ship.shipLength;
        return true;
      }
      return false;
    }
  }

  receiveAttack(positionX, positionY) {
    if (this.grid[positionX][positionY] instanceof Ship) {
      this.grid[positionX][positionY].hit();
      this.grid[positionX][positionY].sunk(
        this.grid[positionX][positionY].numberOfHit
      );
      this.allHit -= 1;
      return true;
    } else this.grid[positionX].splice(positionY, 1, 'Miss');
    if (this.allHit === 0) {
      return false;
    }
  }
}
