/* eslint-disable comma-dangle */
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
const templateGame = new Player();
/*
game.player.placeShip(destroyer, 6, 4, 'horizontal');
game.player.placeShip(carrier, 0, 2, 'vertical');
game.computer.placeShip(destroyerComputer, 0, 0, 'vertical');
game.computer.placeShip(carrierComputer, 0, 2, 'vertical');
*/
// header log placement
const messageTurn = document.querySelector('#messageTurn');
const logo = document.querySelector('#logo');
logo.src = Icon;
const showButtonProject = document.querySelector('#createGame');
const projectDialog = document.querySelector('dialog');
const ConfirmGame = document.querySelector('#confirmGame');
showButtonProject.addEventListener('click', () => {
  projectDialog.showModal();
});

// creation of players grid
playerGameboard(templateGame);
computerGameboard(templateGame);
// make player play the game
let players = [];

function PlayerTurn(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function getRndInteger(max, min) {
  return Math.floor(Math.random() * (max - min));
}

// eslint-disable-next-line consistent-return
function attackPlayerUI(game) {
  const row = getRndInteger(10, 0);
  const column = getRndInteger(10, 0);
  const pixel = document.querySelector(`[row='${row}'][column='${column}']`);
  if (
    pixel.style.backgroundColor === 'red' ||
    pixel.style.backgroundColor === 'grey' ||
    pixel.style.backgroundColor === 'yellow' ||
    players[0].allHit === 0
  ) {
    return setTimeout(() => {
      attackPlayerUI(game);
    }, '100');
  }
  if (players[0].receiveAttack(row, column) === true) {
    pixel.style.backgroundColor = 'red';
    if (players[0].grid[row][column].sunkShip === true) {
      playerGameboard(game);
    }
    attackPlayerUI(game);
  } else {
    PlayerTurn(players, 0, 1);
    pixel.style.backgroundColor = 'grey';
    messageTurn.innerHTML = '<p>Computer Attack<p>';
  }
  if (players[0].allHit === 0) {
    alert('computer win the game');
  }
}

function attackComputerUI(game) {
  const gridSquareComputer = document.querySelectorAll('.pixelComputer');

  gridSquareComputer.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      const row = pixel.getAttribute('row');
      const column = pixel.getAttribute('column');

      if (
        pixel.style.backgroundColor === 'red' ||
        pixel.style.backgroundColor === 'grey' ||
        pixel.style.backgroundColor === 'yellow' ||
        players[0].allHit === 0 ||
        players[0] === game.player
      ) {
        return;
      }

      if (players[0].receiveAttack(row, column) === true) {
        pixel.style.backgroundColor = 'red';
        if (players[0].grid[row][column].sunkShip === true) {
          computerGameboard(game);
          attackComputerUI(game);
        }
      } else {
        pixel.style.backgroundColor = 'grey';
        PlayerTurn(players, 0, 1);
        attackPlayerUI(game);
        messageTurn.innerHTML = '<p>Player Attack<p>';
      }

      if (players[0].allHit === 0) {
        alert('player win the game');
      }
    });
  });
}

function newGame() {
  const game = new Player();
  const destroyer = new Ship(2);
  const submarine = new Ship(3);
  const cruiser = new Ship(3);
  const battleship = new Ship(4);
  const carrier = new Ship(5);
  const carrierComputer = new Ship(5);
  const battleshipComputer = new Ship(4);
  const submarineComputer = new Ship(3);
  const cruiserComputer = new Ship(3);
  const destroyerComputer = new Ship(2);

  players = [game.computer, game.player];

  const inputCarrierX = document.querySelector('#carrierX');
  const inputCarrierY = document.querySelector('#carrierY');
  const inputCarrierAxis = document.querySelector('#carrierAxis');

  const inputBattleShipX = document.querySelector('#battleShipX');
  const inputBattleShipY = document.querySelector('#battleShipY');
  const inputBattleShipAxis = document.querySelector('#battleShipAxis');

  const inputCruiserX = document.querySelector('#cruiserX');
  const inputCruiserY = document.querySelector('#cruiserY');
  const inputCruiserAxis = document.querySelector('#cruiserAxis');

  const inputSubmarineX = document.querySelector('#submarineX');
  const inputSubmarineY = document.querySelector('#submarineY');
  const inputSubmarineAxis = document.querySelector('#submarineAxis');

  const inputDestroyerX = document.querySelector('#destroyerX');
  const inputDestroyerY = document.querySelector('#destroyerY');
  const inputDestoyerAxis = document.querySelector('#destroyerAxis');

  game.player.placeShip(
    carrier,
    Number(inputCarrierX.value),
    Number(inputCarrierY.value),
    inputCarrierAxis.value
  );
  game.player.placeShip(
    battleship,
    Number(inputBattleShipX.value),
    Number(inputBattleShipY.value),
    inputBattleShipAxis.value
  );
  game.player.placeShip(
    cruiser,
    Number(inputCruiserX.value),
    Number(inputCruiserY.value),
    inputCruiserAxis.value
  );
  game.player.placeShip(
    submarine,
    Number(inputSubmarineX.value),
    Number(inputSubmarineY.value),
    inputSubmarineAxis.value
  );
  game.player.placeShip(
    destroyer,
    Number(inputDestroyerX.value),
    Number(inputDestroyerY.value),
    inputDestoyerAxis.value
  );
  // ship placement for computer
  game.computer.placeShip(
    carrierComputer,
    getRndInteger(10, 0),
    getRndInteger(4, 0),
    'horizontal'
  );
  game.computer.placeShip(
    battleshipComputer,
    getRndInteger(5, 0),
    getRndInteger(10, 0),
    'vertical'
  );
  game.computer.placeShip(
    cruiserComputer,
    getRndInteger(10, 0),
    getRndInteger(6, 0),
    'horizontal'
  );
  game.computer.placeShip(
    submarineComputer,
    getRndInteger(6, 0),
    getRndInteger(10, 0),
    'vertical'
  );
  game.computer.placeShip(
    destroyerComputer,
    getRndInteger(10, 0),
    getRndInteger(7, 0),
    'horizontal'
  );
  playerGameboard(game);
  computerGameboard(game);
  attackComputerUI(game);

  messageTurn.innerHTML = '<p>Player Attack<p>';
}
ConfirmGame.addEventListener('click', (event) => {
  const form = document.querySelector('form');
  event.preventDefault();
  newGame();
  projectDialog.close();
  form.reset();
});
