/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import Player from './player';
import Gameboard from './gameboard';
import Ship from './ship';
import './style.css';
import Icon from './images/battleshipLogo.jpg';

const game = new Player();
const destroyer = new Ship(3);
const carrier = new Ship(5);
game.player.placeShip(destroyer, 6, 4, 'horizontal');
game.player.placeShip(carrier, 0, 2, 'vertical');
game.computer.placeShip(destroyer, 0, 0, 'vertical');
game.computer.placeShip(carrier, 0, 2, 'vertical');

// header log placement

const logo = document.querySelector('#logo');
logo.src = Icon;

// creation of players grid

for (let i = 0; i < game.player.grid.length; i++) {
  const playerGrid = document.querySelector('#playerGrid');
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
      if (game.player.grid[i][j].sunkShip) {
        pixel.style.backgroundColor = 'yellow';
      }
    }
  }
  playerGrid.appendChild(div);
}

for (let i = 0; i < game.computer.grid.length; i++) {
  const computerGrid = document.querySelector('#computerGrid');
  const div = document.createElement('div');
  div.classList.add('rowgrid');

  for (let j = 0; j < game.computer.grid[i].length; j++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    div.appendChild(pixel);
    if (game.computer.grid[i][j] instanceof Ship) {
      pixel.style.backgroundColor = 'blue';
    }
  }
  computerGrid.appendChild(div);
}
const gridSquare = document.querySelectorAll('.pixel');

gridSquare.forEach((pixel) => {
  pixel.addEventListener('click', () => {
    const row = pixel.getAttribute('row');
    const column = pixel.getAttribute('column');
    game.player.receiveAttack(row, column);
    if (
      pixel.style.backgroundColor === 'red' ||
      pixel.style.backgroundColor === 'grey'
    ) {
      return;
    }
    if (game.player.grid[row][column] instanceof Ship) {
      pixel.style.backgroundColor = 'red';
      pixel.classList.add('hit');
      if (game.player.grid[row][column].sunkShip === true) {
        const sunk = document.querySelectorAll('.hit');
        sunk.forEach((hitPixel) => {
          hitPixel.style.backgroundColor = 'yellow';
        });
      }
    } else {
      pixel.style.backgroundColor = 'grey';
      pixel.classList.add('miss');
    }
    if (game.player.allHit === 0) {
      alert('player win game');
    }
  });
});
