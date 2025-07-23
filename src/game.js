import { Player } from "../script/battleships";

export class Game {
  startGame() {
    let playerOne = new Player("p-one");
    playerOne.board.placeShip("b", 2, "down", 3);
    playerOne.board.placeShip("d", 10, "up", 4);
    playerOne.board.placeShip("j", 6, "left", 2);
    playerOne.board.placeShip("f", 3, "right", 5);

    playerOne.renderBoard();

    let playerTwo = new Player("p-two");
    playerTwo.board.placeShip("d", 2, "down", 5);
    playerTwo.board.placeShip("b", 10, "right", 4);
    playerTwo.board.placeShip("g", 8, "left", 3);
    playerTwo.board.placeShip("j", 2, "up", 2);

    playerTwo.renderBoard();
    const instruct = document.querySelector("[instruction]");
    instruct.innerText = "Player one's turn to  attack";
    this.playerOneTurn(playerOne, playerTwo);
  }

  playerOneTurn(pOneObject, pTwoObject) {
    let selector = `[p-one-attack] > div > div`;
    const selectedCell = document.querySelectorAll(selector);
    selectedCell.forEach((square) => {
      square.addEventListener("click", (e) => {
        let attackCoord = e.target.attributes[0].name;

        if (pTwoObject.board.occupiedCells.includes(attackCoord)) {
          square.style.backgroundColor = "green";
          square.innerText = "hit!";
        } else {
          square.style.backgroundColor = "red";
          square.innerText = "miss!";
        }

        const otherBoard = document.querySelector(
          `[p-two-base] > div > [${e.target.attributes[0].name}]`
        );
        otherBoard.innerText = "x";
      });
    });
  }
}
