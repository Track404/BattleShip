/* eslint-disable no-plusplus */
import Ship from './ship';

export function playerGameboard(game) {
  const playerGrid = document.querySelector('#playerGrid');
  playerGrid.innerHTML = '';
  for (let i = 0; i < game.player.grid.length; i++) {
    const div = document.createElement('div');
    div.classList.add('rowgrid');
    for (let j = 0; j < game.player.grid[i].length; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.setAttribute('row', i);
      pixel.setAttribute('column', j);
      div.appendChild(pixel);
      if (game.player.grid[i][j] instanceof Ship) {
        pixel.style.backgroundColor = 'blue';
        if (game.player.grid[i][j].sunkShip === true) {
          pixel.style.backgroundColor = 'yellow';
        }
      } else if (game.player.grid[i][j] === 'Miss') {
        pixel.style.backgroundColor = 'grey';
      }
    }
    playerGrid.appendChild(div);
  }
}
export function computerGameboard(game) {
  const computerGrid = document.querySelector('#computerGrid');
  computerGrid.innerHTML = '';
  for (let i = 0; i < game.computer.grid.length; i++) {
    const div = document.createElement('div');
    div.classList.add('rowgrid');

    for (let j = 0; j < game.computer.grid[i].length; j++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixelComputer');
      pixel.setAttribute('row', i);
      pixel.setAttribute('column', j);

      div.appendChild(pixel);
      if (game.computer.grid[i][j] instanceof Ship) {
        pixel.style.backgroundColor = 'blue';
        if (game.computer.grid[i][j].sunkShip === true) {
          pixel.style.backgroundColor = 'yellow';
        }
      }
    }
    computerGrid.appendChild(div);
  }
}
