import { Player } from "../script/battleships";

export class Game {
  constructor() {
    this.gameState = undefined;
  }
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

    const start = document.querySelector("[start-instruction]");
    start.style.display = "none";

    //popup functionality
    const popup = document.querySelector("[popup]");
    const popupInstruction = document.querySelector("[instruction-next]");
    const veil = document.querySelector("[veil]");
    popupInstruction.innerText = `Game start. \nPlayer One's turn.`;
    veil.style.zIndex = "3";
    popup.style.zIndex = "4";

    this.gameState = "p1turn";

    this.buttonStart();

    //button move logic should be in start game function
    //turn function should JUST turn display on and off and change instruction

    this.pOneButtonFunctionality(playerOne, playerTwo);
    this.pTwoButtonFunctionality(playerOne, playerTwo);
  }

  pOneButtonFunctionality(pOneObject, pTwoObject) {
    const pOneselector = `[p-one-attack] > div > div`;
    const selectedCell = document.querySelectorAll(pOneselector);

    selectedCell.forEach((square) => {
      square.addEventListener("click", (e) => {
        const popup = document.querySelector("[popup]");
        const popupInstruction = document.querySelector("[instruction-next]");
        const veil = document.querySelector("[veil]");
        let attackCoord = e.target.attributes[0].name;

        // checks if attacked cell of player two is occupied
        if (pTwoObject.board.occupiedCells.includes(attackCoord)) {
          square.style.backgroundColor = "green";
          square.innerText = "O";
          popupInstruction.innerText = `Hit!\nPlayer Two's turn.`;
        } else {
          square.style.backgroundColor = "red";
          square.innerText = "X";
          popupInstruction.innerText = `Miss!\nPlayer Two's turn.`;
        }
        pOneObject.board.attackedCells.push(attackCoord);
        veil.style.zIndex = "3";
        popup.style.zIndex = "4";

        const otherBoard = document.querySelector(
          `[p-two-base] > div > [${e.target.attributes[0].name}]`
        );
        otherBoard.innerText = "x";
        otherBoard.style.textAlign = "center";
        this.gameState = "p2turn";
      });
    });
  }

  pTwoButtonFunctionality(pOneObject, pTwoObject) {
    const pTwoselector = `[p-two-attack] > div > div`;
    const selectedCell = document.querySelectorAll(pTwoselector);

    selectedCell.forEach((square) => {
      square.addEventListener("click", (e) => {
        const popup = document.querySelector("[popup]");
        const popupInstruction = document.querySelector("[instruction-next]");
        const veil = document.querySelector("[veil]");
        let attackCoord = e.target.attributes[0].name;

        // checks if attacked cell of player two is occupied
        if (pOneObject.board.occupiedCells.includes(attackCoord)) {
          square.style.backgroundColor = "green";
          square.innerText = "O";
          popupInstruction.innerText = `Hit!\nPlayer One's turn.`;
        } else {
          square.style.backgroundColor = "red";
          square.innerText = "X";
          popupInstruction.innerText = `Miss!\nPlayer One's turn.`;
        }
        pTwoObject.board.attackedCells.push(attackCoord);
        veil.style.zIndex = "3";
        popup.style.zIndex = "4";

        const otherBoard = document.querySelector(
          `[p-one-base] > div > [${e.target.attributes[0].name}]`
        );
        otherBoard.innerText = "x";
        otherBoard.style.textAlign = "center";
        this.gameState = "p1turn";
      });
    });
  }

  showPOneBoard() {
    const pOne = document.querySelector("[board-frame-one");
    const pTwo = document.querySelector("[board-frame-two");
    pOne.style.zIndex = "2";
    pTwo.style.zIndex = "1";
  }
  showPTwoBoard() {
    const pOne = document.querySelector("[board-frame-one");
    const pTwo = document.querySelector("[board-frame-two");
    pOne.style.zIndex = "1";
    pTwo.style.zIndex = "2";
  }

  buttonStart() {
    const button = document.querySelector("[popup-button]");
    button.addEventListener("click", () => {
      const popup = document.querySelector("[popup]");
      const veil = document.querySelector("[veil]");
      veil.style.zIndex = "0";
      popup.style.zIndex = "0";
      this.nextTurn(this.gameState);
    });
  }
  nextTurn(gameState) {
    if (gameState === "p1turn") {
      this.showPOneBoard();
    }
    if (gameState === "p2turn") {
      this.showPTwoBoard();
    }
  }
}
