export class ships {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.position = undefined;
    this.direction = undefined;
  }

  hit() {
    this.hits++;
    this.#sunkCheck();
  }

  isSunk() {
    return this.sunk;
  }

  #sunkCheck() {
    if (this.hits == this.length) {
      this.sunk = true;
    }
  }
}

export class Gameboard {
  constructor() {
    this.board = [];
    this.occupiedCells = [];
  }
  placeShip(xCoord, yCoord, direction, size = 4) {
    // board object with x,y co-ordinates range (0-10) and ship object from input placeShip() makes a NEW ship and places it onto the board
    let newShip = new ships(size);
    // ship won't be able to be placed outside of (0,0) and (10,10)
    newShip.position = [xCoord, yCoord];
    newShip.direction = direction;
    this.board.push(newShip);
    this.#fillCells(newShip);

    return newShip.position;
  }

  #fillCells(shipObject) {
    let fill = [];
    if (shipObject.direction === "up") {
      for (let i = 0; i < shipObject.length; ++i) {
        let tile = [];
        tile.push(shipObject.position[0]);
        //y-coord in the up direction
        tile.push(shipObject.position[1] - i);
        fill.push(tile);
      }
    }
    if (shipObject.direction === "right") {
      for (let i = 0; i < shipObject.length; ++i) {
        let tile = [];
        //x-coord in the right direction
        tile.push(shipObject.position[0] + i);
        tile.push(shipObject.position[1]);
        fill.push(tile);
      }
    }
    if (shipObject.direction === "down") {
      for (let i = 0; i < shipObject.length; ++i) {
        let tile = [];

        tile.push(shipObject.position[0]);
        //y-coord in the down direction
        tile.push(shipObject.position[1] + i);
        fill.push(tile);
      }
    }
    if (shipObject.direction === "left") {
      for (let i = 0; i < shipObject.length; ++i) {
        let tile = [];
        //x-coord in the left direction
        tile.push(shipObject.position[0] - i);
        tile.push(shipObject.position[1]);
        fill.push(tile);
      }
    }

    for (let i = 0; i < fill.length; ++i) {
      this.occupiedCells.push(fill[i]);
    }

    //takes start position and ship direction and ship length and makes those cells occupied
  }
}
