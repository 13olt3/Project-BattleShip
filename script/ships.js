export class ships {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
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
