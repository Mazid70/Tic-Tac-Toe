const allBtn = document
  .getElementById("box-container")
  .querySelectorAll("button");
const container = document.getElementById("box-container");
const gameover = document.getElementById("gameover");
const winner = document.getElementById("winner");
const seeResult = document.getElementById("seeResult");
const resetBtn = document.getElementById("reset");
let clickO = true;
const winCount = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let click = 0;
const startGame = () => {
  allBtn.innerText = "";
  allBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      click++;
      console.log("count");
      if (clickO) {
        btn.innerText = "O";
        btn.style = "color:rgba(121,9,117,1)";
        clickO = false;
      } else {
        btn.innerText = "X";
        clickO = true;
        btn.style = "color:rgba(40,155,179,1)";
      }
      btn.disabled = true;
      checkWinner();
      if (click === 9) {
        document.getElementById("result").innerText = "draw";
        container.classList.add("hidden");
        gameover.classList.remove("hidden");
      }
    });
  });
};

const checkWinner = () => {
  for (let count of winCount) {
    let positionOne = allBtn[count[0]].innerText;
    let positionTwo = allBtn[count[1]].innerText;
    let positionThree = allBtn[count[2]].innerText;
    if (positionOne != "" && positionTwo != "" && positionThree != "") {
      if (positionOne === positionTwo && positionTwo === positionThree) {
        winner.innerText = positionOne;
        container.classList.add("hidden");
        resetBtn.classList.add("hidden");
        gameover.classList.remove("hidden");
      }
    }
  }
};
const restartGame = () => {
  window.location.reload();
};
const seResult = () => {
  resetBtn.classList.remove("hidden");
  container.classList.remove("hidden");
  gameover.classList.add("hidden");
  allBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      seeResult.classList.add("hidden");
    });
  });
};
startGame();
