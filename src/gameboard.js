export default class Gameboard {
  constructor() {
    this.grid = this.createGrid();
  }

  createGrid() {
    for (let i = 0; i < 10; i = +1) {
      this.grid[i] = [];

      for (let j = 0; i < 10; j = +1) {
        this.grid[i][j] = null;
      }
    }

    return this.grid;
  }
}
