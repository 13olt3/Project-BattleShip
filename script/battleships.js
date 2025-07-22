import { charShift } from "./caesarCipher";

export class ships {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.xPos = undefined;
    this.yPos = undefined;
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
    this.attackedCells = [];
  }
  placeShip(xCoord, yCoord, direction, size = 4) {
    // board object with x,y co-ordinates range (a-j)x(0-10)y and ship object from input placeShip() makes a NEW ship and places it onto the board
    let newShip = new ships(size);

    newShip.xPos = xCoord;
    newShip.yPos = yCoord;
    newShip.direction = direction;
    this.board.push(newShip);
    let filledCells = this.#fillCells(newShip);
    for (let i = 0; i < filledCells.length; ++i) {
      this.occupiedCells.push(filledCells[i]);
    }

    return newShip.position;
  }

  #fillCells(shipObject) {
    //takes start position and ship direction and ship length and makes those cells occupied
    let fill = [];
    if (shipObject.direction == "up") {
      // minus yCoord indicates up
      for (let i = 0; i < shipObject.length; ++i) {
        fill.push(shipObject.xPos.concat(shipObject.yPos - i));
      }
    }
    if (shipObject.direction == "right") {
      // plus charShift (caesarCipher) indicates right
      for (let i = 0; i < shipObject.length; ++i) {
        fill.push(charShift(shipObject.xPos, i).concat(shipObject.yPos));
      }
    }
    if (shipObject.direction == "down") {
      // plus yCoord indicates down
      for (let i = 0; i < shipObject.length; ++i) {
        fill.push(shipObject.xPos.concat(shipObject.yPos + i));
      }
    }
    if (shipObject.direction == "left") {
      // minus charShift (caesarCipher) indicates left
      for (let i = 0; i < shipObject.length; ++i) {
        fill.push(charShift(shipObject.xPos, -i).concat(shipObject.yPos));
      }
    }
    return fill;
  }

  receiveAttack(xCoord, yCoord) {
    let target = xCoord.concat(yCoord);
    this.attackedCells.push(target);
    // maybe implement a missed attacks array
    let hit = false;
    for (let i = 0; i < this.board.length; ++i) {
      let filledCells = this.#fillCells(this.board[i]);
      if (filledCells.includes(target)) {
        hit = true;
        this.board[i].hit();
      }
    }
    return hit;
  }

  reportAllSunk() {
    for (let i = 0; i < this.board.length; ++i) {
      if (this.board[i].isSunk() === false) {
        return false;
      }
    }
    return true;
  }
}

export class Player {
  constructor(user) {
    //user determines of its Player one or Player two or computer(?)
    this.player = user;
    this.board = new Gameboard();
  }

  renderBoard() {
    for (let i = 0; i < this.board.occupiedCells.length; ++i) {
      this.#changeBoard(this.board.occupiedCells[i]);
    }
  }
  #changeBoard(cell) {
    let selector = `[${this.player}-base] > div > [${cell}]`;
    const selectedCell = document.querySelector(selector);
    selectedCell.style.backgroundColor = "green";
  }
}
