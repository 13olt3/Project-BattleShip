import { Player } from "../script/battleships";
import "./styles.css";

const startGame = document.querySelector("[start-game]");

// const base = document.querySelectorAll("[base-squares]>div>div");

// base.forEach((square) => {
//   square.addEventListener("click", () => {
//     // console.log("5");
//   });
// });

startGame.addEventListener("click", () => {
  let playerOne = new Player();
  playerOne.board.placeShip("b", 2, "down", 3);
  playerOne.board.placeShip("d", 10, "up", 4);
  playerOne.board.placeShip("j", 6, "left", 2);
  playerOne.board.placeShip("f", 3, "right", 5);

  playerOne.renderBoardOne();

  let playerTwo = new Player();
  playerTwo.board.placeShip("d", 2, "down", 5);
  playerTwo.board.placeShip("b", 10, "right", 4);
  playerTwo.board.placeShip("g", 8, "left", 3);
  playerTwo.board.placeShip("j", 2, "up", 2);

  playerTwo.renderBoardTwo();
  const instruct = document.querySelector("[instruction]");
  instruct.innerText = "Player one's turn to  attack";
});
