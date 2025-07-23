import { Game } from "./game";
import "./styles.css";
const startGame = document.querySelector("[start-game]");

// const base = document.querySelectorAll("[base-squares]>div>div");

// base.forEach((square) => {
//   square.addEventListener("click", () => {
//     // console.log("5");
//   });
// });

startGame.addEventListener("click", () => {
  let game = new Game();
  game.startGame();
});
