import { Game } from "./game";
import "./styles.css";
const startGame = document.querySelector("[start-game]");

startGame.addEventListener("click", () => {
  let game = new Game();
  game.startGame();
});
