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
game.player.placeShip(destroyer, 0, 0, 'vertical');
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
  }
  computerGrid.appendChild(div);
}
