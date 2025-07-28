import { Game } from "./game";
import "./styles.css";

const gameStart = document.querySelectorAll("[game-screen-one] > button");
gameStart.forEach((button) => {
  button.addEventListener("click", (e) => {
    //chooses pve or pvp game mode
    let game = new Game(e.target.innerText);
    game.chooseLoadout();
  });
});
// pvp.addEventListener("click", () => {
//   let game = new Game();
//   game.startGamePvp();
// });
// pve.addEventListener("click", () => {
//   let game = new Game();
//   game.startGamePve();
// });

// startGame.addEventListener("click", () => {
//   let game = new Game();
//   game.startGame();
// });
