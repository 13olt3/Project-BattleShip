import { Game } from "./game";
import "./styles.css";
const startGame = document.querySelector("[start-game]");
const pvp = document.querySelector("[pvp]");
const pve = document.querySelector("[pve]");

pvp.addEventListener("click", () => {
  let game = new Game();
  game.startGamePvp();
});
pve.addEventListener("click", () => {
  let game = new Game();
  game.startGamePve();
});

startGame.addEventListener("click", () => {
  let game = new Game();
  game.startGame();
});
