const allBtn = document
  .getElementById("box-container")
  .querySelectorAll("button");
const container = document.getElementById("box-container");
const gameover = document.getElementById("gameover");
const winner = document.getElementById("winner");
const seeResult = document.getElementById("seeResult");
const resetBtn = document.getElementById("reset");
const player = document.getElementById("player");
const color = document.getElementById("color-text");
const crossAudio = new Audio("cross.wav");
const zeroAudio = new Audio("zero.wav");
const drawAudio = new Audio("draw.wav");
const winnerAudio = new Audio("win.wav");
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
        color.innerText = "X";
        color.style = "color:rgba(40,155,179,1)";
        clickO = false;
        zeroAudio.play();
      } else {
        btn.innerText = "X";
        btn.style = "color:rgba(40,155,179,1)";
        color.innerText = "O";
        color.style = "color:rgba(121,9,117,1)";
        clickO = true;
        crossAudio.play();
      }
      btn.disabled = true;
      checkWinner();
      if (click === 9) {
        document.getElementById("result").innerText = "Draw";
        container.classList.add("hidden");
        gameover.classList.remove("hidden");
        resetBtn.classList.add("hidden");
        player.classList.add("hidden");
        player.innerText = "Draw";
        player.style.color = "yellow";
        drawAudio.play();
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
        player.classList.add("hidden");
        findWinner(positionOne);
        winnerAudio.play();
      }
    }
  }
};
const restartGame = () => {
  window.location.reload();
};
const seResult = () => {
  resetBtn.classList.remove("hidden");
  resetBtn.innerText = "Play Again";
  container.classList.remove("hidden");
  player.classList.remove("hidden");
  gameover.classList.add("hidden");
  allBtn.forEach((btn) => {
    btn.disabled = true;
  });
};
const findWinner = (winner) => {
  player.innerText = `Winner is:${winner}`;
  player.style.color = "yellow";
};
startGame();
