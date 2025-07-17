import { ships } from "../script/ships";

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
