/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import Player from './player';
import Ship from './ship';
import './style.css';
import Icon from './images/battleshipLogo.jpg';
import { playerGameboard, computerGameboard } from './gameboardCreation';

// creation of the game

const game = new Player();
const destroyer = new Ship(3);
const destroyerComputer = new Ship(3);
const carrier = new Ship(5);
const carrierComputer = new Ship(5);
game.player.placeShip(destroyer, 6, 4, 'horizontal');
game.player.placeShip(carrier, 0, 2, 'vertical');
game.computer.placeShip(destroyerComputer, 0, 0, 'vertical');
game.computer.placeShip(carrierComputer, 0, 2, 'vertical');

// header log placement

const logo = document.querySelector('#logo');
logo.src = Icon;

// creation of players grid
playerGameboard(game);
computerGameboard(game);

// make player play the game
const players = [game.player, game.computer];

function PlayerTurn(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
function playerUI() {
  const gridSquarePlayer = document.querySelectorAll('.pixel');
  gridSquarePlayer.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      const row = pixel.getAttribute('row');
      const column = pixel.getAttribute('column');
      if (
        pixel.style.backgroundColor === 'red' ||
        pixel.style.backgroundColor === 'grey' ||
        pixel.style.backgroundColor === 'yellow' ||
        players[0] === game.computer
      ) {
        return;
      }
      if (players[0].receiveAttack(row, column) === true) {
        pixel.style.backgroundColor = 'red';
      } else {
        pixel.style.backgroundColor = 'grey';
        PlayerTurn(players, 0, 1);
      }
      if (players[0].grid[row][column].sunkShip === true) {
        playerGameboard(game);
        playerUI();
      }
      if (players[0].allHit === 0) {
        alert('player win the game');
      }
    });
  });
}
function computerUI() {
  const gridSquareComputer = document.querySelectorAll('.pixelComputer');

  gridSquareComputer.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      const row = pixel.getAttribute('row');
      const column = pixel.getAttribute('column');

      if (
        pixel.style.backgroundColor === 'red' ||
        pixel.style.backgroundColor === 'grey' ||
        pixel.style.backgroundColor === 'yellow' ||
        players[0] === game.player
      ) {
        return;
      }

      if (players[0].receiveAttack(row, column) === true) {
        pixel.style.backgroundColor = 'red';
      } else {
        pixel.style.backgroundColor = 'grey';
        PlayerTurn(players, 0, 1);
      }
      if (players[0].grid[row][column].sunkShip === true) {
        computerGameboard(game);
        computerUI();
      }
      if (players[0].allHit === 0) {
        alert('computer win the game');
      }
    });
  });
}

playerUI();
computerUI();
