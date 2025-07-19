import { ships, Gameboard } from "../script/battleships";

test.skip("Not sunk", () => {
  let ship = new ships(3);
  expect(ship.sunk).toBeFalsy();
});

test.skip("Length", () => {
  let ship = new ships(3);
  expect(ship.length).toBe(3);
});

test.skip("Sunk 2", () => {
  let ship = new ships(2);
  expect(ship.isSunk()).toBeFalsy;
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy;
});

test.skip("ship position", () => {
  let game = new Gameboard();

  expect(game.placeShip(5, 5, "up")).toEqual([5, 5]);
});

test("board fill", () => {
  let game = new Gameboard();
  game.placeShip("e", 5, "right");
  expect(game.occupiedCells.length).toBe(4);
});

test("board fill 2", () => {
  let game = new Gameboard();
  game.placeShip("e", 5, "right");
  expect(game.occupiedCells).toContain("g5");
});

test("board fill 3", () => {
  let game = new Gameboard();
  game.placeShip("e", 5, "down");
  expect(game.occupiedCells).toContain("e7");
});

test("recieve attack miss", () => {
  let game = new Gameboard();
  game.placeShip("e", 5, "up");
  expect(game.receiveAttack("c", 3)).toBe(false);
});

test("recieve attack hit", () => {
  let game = new Gameboard();
  game.placeShip("e", 5, "up");
  expect(game.receiveAttack("e", 5)).toBe(true);
});
