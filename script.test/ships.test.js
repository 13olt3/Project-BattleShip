import { ships, Gameboard } from "../script/battleships";

test("Not sunk", () => {
  let ship = new ships(3);
  expect(ship.sunk).toBeFalsy();
});

test("Length", () => {
  let ship = new ships(3);
  expect(ship.length).toBe(3);
});

test("Sunk 2", () => {
  let ship = new ships(2);
  expect(ship.isSunk()).toBeFalsy;
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy;
});

test("ship position", () => {
  let game = new Gameboard();

  expect(game.placeShip(5, 5, "up")).toEqual([5, 5]);
});

test("board fill", () => {
  let game = new Gameboard();
  game.placeShip(5, 5, "up");
  expect(game.occupiedCells.length).toBe(4);
});
