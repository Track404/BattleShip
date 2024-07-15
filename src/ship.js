export default class Ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.numberOfHit = 0;
    this.sunkShip = false;
  }

  hit() {
    this.numberOfHit += 1;
    return this.numberOfHit;
  }

  sunk(hit) {
    if (hit >= this.shipLength) {
      this.sunkShip = true;
    }
    return this.sunkShip;
  }
}
