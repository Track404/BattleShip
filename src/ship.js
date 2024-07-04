export default class Ship {
  constructor(name, shipLength) {
    this.name = name;
    this.shipLength = shipLength;
    this.numberOfHit = 0;
    this.sunk = false;
  }
}
