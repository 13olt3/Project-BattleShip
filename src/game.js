import { wholeKatsu, weinerSub, burger, wrap, katsu1of4 } from "./images/index";

export class Game {
  constructor(gameType) {
    this.gameType = gameType;
  }

  //Second screen of the game is choose your sub layout (using check boxes)
  chooseLoadout() {
    const firstScreen = document.querySelector("[game-screen-one]");
    firstScreen.classList.add("hidden");

    const secondScreen = document.querySelector("[choose-loadout]");
    secondScreen.classList.remove("hidden");
    this.#renderSubs();

    const katsu = document.querySelector("[select-katsu]");
    const weiner = document.querySelector("[select-weiner]");
    const burger = document.querySelector("[select-burger]");
    const wrap = document.querySelector("[select-wrap]");
    const selectSubs = document.querySelector("[select-subs]");
    const errorMsg = document.querySelector("[error-message]");
    let selection = [];

    selectSubs.addEventListener("click", () => {
      if (
        !katsu.checked &&
        !weiner.checked &&
        !burger.checked &&
        !wrap.checked
      ) {
        errorMsg.classList.remove("hidden");
      } else {
        errorMsg.classList.add("hidden");
        if (katsu.checked) {
          selection.push(4);
        }
        if (weiner.checked) {
          selection.push(3);
        }
        if (burger.checked) {
          selection.push(2);
        }
        if (wrap.checked) {
          selection.push(1);
        }

        //activates 3rd game screen
        this.placeSubs(selection);
      }
    });
  }

  #renderSubs() {
    const chooseKatsu = document.querySelector("[katsu-sub]");
    const chooseWeiner = document.querySelector("[weiner-sub]");
    const chooseBurger = document.querySelector("[burger]");
    const chooseWrap = document.querySelector("[wrap]");
    chooseKatsu.src = wholeKatsu;
    chooseWeiner.src = weinerSub;
    chooseBurger.src = burger;
    chooseWrap.src = wrap;
  }

  placeSubs(chosenSubs) {
    const secondScreen = document.querySelector("[choose-loadout]");
    secondScreen.classList.add("hidden");

    const thirdScreen = document.querySelector("[place-subs]");
    thirdScreen.classList.remove("hidden");

    this.#createSub(chosenSubs);

    const subsImg = document.querySelectorAll(".draggable");
    subsImg.forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        img.classList.add("dragging");
      });
      img.addEventListener("dragend", (e) => {
        img.classList.remove("dragging");
      });
    });

    const subBase = document.querySelector("[selected-subs]");
    subBase.addEventListener("dragover", () => {
      const draggable = document.querySelector(".dragging");
      subBase.appendChild(draggable);
    });

    const squares = document.querySelectorAll("[game-board] > div");
    squares.forEach((square) => {
      square.addEventListener("dragover", () => {
        const draggable = document.querySelector(".dragging");
        square.appendChild(draggable);
      });
    });

    const rotateSubs = document.querySelector("[rotate-subs]");
    rotateSubs.addEventListener("click", () => {
      const subs = document.querySelectorAll("[selected-subs] > img");
      if (rotateSubs.value === "off") {
        subs.forEach((image) => {
          image.classList.add("rotate");
        });
        rotateSubs.setAttribute("value", "on");
      } else if (rotateSubs.value === "on") {
        subs.forEach((image) => {
          image.classList.remove("rotate");
        });
        rotateSubs.setAttribute("value", "off");
      }
    });
  }

  #createSub(subArray) {
    const selectedSubs = document.querySelector("[selected-subs]");
    console.log(subArray);
    console.log(subArray.includes(2));

    if (subArray.includes(4)) {
      let subImage = document.createElement("img");
      subImage.classList.add("draggable");
      subImage.setAttribute("draggable", "true");
      subImage.src = wholeKatsu;
      selectedSubs.appendChild(subImage);
    }
    if (subArray.includes(3)) {
      let subImage = document.createElement("img");
      subImage.classList.add("draggable");
      subImage.setAttribute("draggable", "true");
      subImage.src = weinerSub;
      selectedSubs.appendChild(subImage);
    }
    if (subArray.includes(2)) {
      let subImage = document.createElement("img");
      subImage.classList.add("draggable");
      subImage.setAttribute("draggable", "true");
      subImage.src = burger;
      selectedSubs.appendChild(subImage);
    }
    if (subArray.includes(1)) {
      let subImage = document.createElement("img");
      subImage.classList.add("draggable");
      subImage.setAttribute("draggable", "true");
      subImage.src = wrap;
      selectedSubs.appendChild(subImage);
    }
  }
}

// export class Game {
//   constructor() {
//     this.gameState = undefined;
//   }

//   startGamePve() {
//     const hardVeil = document.querySelector("[hardVeil]");
//     hardVeil.style.zIndex = "0";
//     this.renderSubs();
//     this.subsChosen();
//   }
//   startGamePvp() {
//     const hardVeil = document.querySelector("[hardVeil]");

//     hardVeil.style.zIndex = "0";
//     this.renderSubs();
//     this.subsChosen();
//   }

//   subsChosen() {
//     const placeSubsButton = document.querySelector("[place-button]");
//     const gameSetup = document.querySelector("[game-setup]");
//     const katsu = document.querySelector("[select-katsu]");
//     const weiner = document.querySelector("[select-weiner]");
//     const burger = document.querySelector("[select-burger]");
//     const wrap = document.querySelector("[select-wrap]");
//     let selection = [];

//     placeSubsButton.addEventListener("click", () => {
//       if (
//         !katsu.checked &&
//         !weiner.checked &&
//         !burger.checked &&
//         !wrap.checked
//       ) {
//         //do the condition if something is checked.
//         console.log("nothing checked");
//       } else {
//         gameSetup.style.display = "none";
//         if (katsu.checked) {
//           selection.push(4);
//         }
//         if (weiner.checked) {
//           selection.push(3);
//         }
//         if (burger.checked) {
//           selection.push(2);
//         }
//         if (wrap.checked) {
//           selection.push(1);
//         }
//       }
//       this.positionSubs(selection);
//     });
//   }

//   positionSubs(selection) {
//     const dragContainer = document.querySelector("[draggable]");
//     let katsu = document.createElement("img");
//     let weiner = document.createElement("img");
//     let burg = document.createElement("img");
//     let smallWrap = document.createElement("img");
//     if (selection.includes(4)) {
//       katsu.src = wholeKatsu;
//       katsu.style.height = "20px";
//       katsu.setAttribute("draggable", "true");
//       katsu.setAttribute("size", "4");
//       katsu.classList.add("draggable");
//       dragContainer.appendChild(katsu);
//     }
//     if (selection.includes(3)) {
//       weiner.src = weinerSub;
//       weiner.style.height = "20px";
//       weiner.setAttribute("draggable", "true");
//       weiner.setAttribute("size", "3");
//       weiner.classList.add("draggable");
//       dragContainer.appendChild(weiner);
//     }
//     if (selection.includes(2)) {
//       burg.src = burger;
//       burg.style.height = "20px";
//       burg.setAttribute("draggable", "true");
//       burg.setAttribute("size", "2");
//       burg.classList.add("draggable");
//       dragContainer.appendChild(burg);
//     }
//     if (selection.includes(1)) {
//       smallWrap.src = wrap;
//       smallWrap.style.height = "20px";
//       smallWrap.setAttribute("draggable", "true");
//       smallWrap.setAttribute("size", "1");
//       smallWrap.classList.add("draggable");
//       dragContainer.appendChild(smallWrap);
//     }

//     this.dragOver();
//   }

//   dragOver() {
//     const draggables = document.querySelectorAll(".draggable");
//     let subLength = "4";
//     let direction = "right";
//     draggables.forEach((draggable) => {
//       draggable.addEventListener("dragstart", (e) => {
//         subLength = e.target.attributes.size.value;
//         draggable.classList.add("dragging");
//       });

//       draggable.addEventListener("dragend", () => {
//         draggable.classList.remove("dragging");
//       });
//     });

//     const squares = document.querySelectorAll("[p-one-base]>div>div");
//     squares.forEach((square) => {
//       square.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         const draggable = document.querySelector(".dragging");
//         square.appendChild(draggable);
//       });
//     });
//     const dragSquare = document.querySelector("[draggable]");
//     dragSquare.addEventListener("dragover", (e) => {
//       e.preventDefault();
//       const draggable = document.querySelector(".dragging");
//       dragSquare.appendChild(draggable);
//     });

//     squares.forEach((square) => {
//       square.addEventListener("mouseenter", (e) => {
//         // console.log(e.target.attributes[0].name);

//         e.target.style.backgroundColor = this.checkSpace(
//           e.target.attributes[0].name,
//           subLength,
//           direction
//         );
//       });
//       square.addEventListener("mouseleave", (e) => {
//         e.target.style.backgroundColor = "";
//       });
//     });
//   }

//   checkSpace(tile, length, direction) {
//     if ((direction = "right")) {
//       if (tile.charCodeAt(0) + Number(length) > 107) {
//         return "red";
//       } else return "green";
//     }
//   }

//   renderSubs() {
//     const katsu4 = document.querySelector("[katsu-sub]");
//     const burger2 = document.querySelector("[burger]");
//     const weiner3 = document.querySelector("[weiner-sub]");
//     const wrap1 = document.querySelector("[wrap]");

//     katsu4.src = wholeKatsu;
//     burger2.src = burger;
//     weiner3.src = weinerSub;
//     wrap1.src = wrap;
//   }

//   startGame() {
//     let playerOne = new Player("p-one");
//     playerOne.board.placeShip("b", 2, "down", 3);
//     // playerOne.board.placeShip("d", 10, "up", 4);
//     // playerOne.board.placeShip("j", 6, "left", 2);
//     // playerOne.board.placeShip("f", 3, "right", 5);

//     playerOne.renderBoard();

//     let playerTwo = new Player("p-two");
//     // playerTwo.board.placeShip("d", 2, "down", 5);
//     // playerTwo.board.placeShip("b", 10, "right", 4);
//     // playerTwo.board.placeShip("g", 8, "left", 3);
//     playerTwo.board.placeShip("j", 2, "up", 2);

//     playerTwo.renderBoard();

//     const start = document.querySelector("[start-instruction]");
//     start.style.display = "none";

//     //popup functionality
//     const popup = document.querySelector("[popup]");
//     const popupInstruction = document.querySelector("[instruction-next]");
//     const veil = document.querySelector("[veil]");
//     popupInstruction.innerText = `Game start. \nPlayer One's turn.`;
//     veil.style.zIndex = "3";
//     popup.style.zIndex = "4";

//     this.gameState = "p1turn";

//     this.buttonStart();

//     //button move logic should be in start game function
//     //turn function should JUST turn display on and off and change instruction

//     this.pOneButtonFunctionality(playerOne, playerTwo);
//     this.pTwoButtonFunctionality(playerOne, playerTwo);
//   }

//   pOneButtonFunctionality(pOneObject, pTwoObject) {
//     const pOneselector = `[p-one-attack] > div > div`;
//     const selectedCell = document.querySelectorAll(pOneselector);

//     selectedCell.forEach((square) => {
//       square.addEventListener("click", (e) => {
//         const popup = document.querySelector("[popup]");
//         const popupInstruction = document.querySelector("[instruction-next]");
//         const veil = document.querySelector("[veil]");
//         let attackCoord = e.target.attributes[0].name;
//         pTwoObject.board.receiveAttack(attackCoord);

//         // checks if attacked cell of player two is occupied
//         if (pTwoObject.board.occupiedCells.includes(attackCoord)) {
//           square.style.backgroundColor = "green";
//           square.innerText = "O";
//           popupInstruction.innerText = `Hit!\nPlayer Two's turn.`;
//         } else {
//           square.style.backgroundColor = "red";
//           square.innerText = "X";
//           popupInstruction.innerText = `Miss!\nPlayer Two's turn.`;
//         }

//         //this reveals the popup button and veil to show next phase of the game
//         if (!pTwoObject.board.reportAllSunk()) {
//           pOneObject.board.attackedCells.push(attackCoord);
//           veil.style.zIndex = "3";
//           popup.style.zIndex = "4";

//           const otherBoard = document.querySelector(
//             `[p-two-base] > div > [${e.target.attributes[0].name}]`
//           );
//           otherBoard.innerText = "x";
//           otherBoard.style.textAlign = "center";
//           this.gameState = "p2turn";
//         } else if (pTwoObject.board.reportAllSunk()) {
//           /// game over code
//         }
//       });
//     });
//   }

//   pTwoButtonFunctionality(pOneObject, pTwoObject) {
//     const pTwoselector = `[p-two-attack] > div > div`;
//     const selectedCell = document.querySelectorAll(pTwoselector);

//     selectedCell.forEach((square) => {
//       square.addEventListener("click", (e) => {
//         const popup = document.querySelector("[popup]");
//         const popupInstruction = document.querySelector("[instruction-next]");
//         const veil = document.querySelector("[veil]");
//         let attackCoord = e.target.attributes[0].name;
//         pOneObject.board.receiveAttack(attackCoord);

//         // checks if attacked cell of player two is occupied
//         if (pOneObject.board.occupiedCells.includes(attackCoord)) {
//           square.style.backgroundColor = "green";
//           square.innerText = "O";
//           popupInstruction.innerText = `Hit!\nPlayer One's turn.`;
//         } else {
//           square.style.backgroundColor = "red";
//           square.innerText = "X";
//           popupInstruction.innerText = `Miss!\nPlayer One's turn.`;
//         }
//         //NEED TO PUT report ALL sunk check here and determine next game move

//         //this reveals the popup button and veil to show next phase of the game
//         if (!pOneObject.board.reportAllSunk()) {
//           pTwoObject.board.attackedCells.push(attackCoord);
//           veil.style.zIndex = "3";
//           popup.style.zIndex = "4";

//           const otherBoard = document.querySelector(
//             `[p-one-base] > div > [${e.target.attributes[0].name}]`
//           );
//           otherBoard.innerText = "x";
//           otherBoard.style.textAlign = "center";
//           this.gameState = "p1turn";
//         } else if (pOneObject.board.reportAllSunk()) {
//           /// game over code
//         }
//       });
//     });
//   }

//   showPOneBoard() {
//     const pOne = document.querySelector("[board-frame-one");
//     const pTwo = document.querySelector("[board-frame-two");
//     pOne.style.zIndex = "2";
//     pTwo.style.zIndex = "1";
//   }
//   showPTwoBoard() {
//     const pOne = document.querySelector("[board-frame-one");
//     const pTwo = document.querySelector("[board-frame-two");
//     pOne.style.zIndex = "1";
//     pTwo.style.zIndex = "2";
//   }

//   buttonStart() {
//     const button = document.querySelector("[popup-button]");
//     button.addEventListener("click", () => {
//       const popup = document.querySelector("[popup]");
//       const veil = document.querySelector("[veil]");
//       veil.style.zIndex = "0";
//       popup.style.zIndex = "0";
//       this.nextTurn(this.gameState);
//     });
//   }
//   nextTurn(gameState) {
//     if (gameState === "p1turn") {
//       this.showPOneBoard();
//     }
//     if (gameState === "p2turn") {
//       this.showPTwoBoard();
//     }
//   }
// }
