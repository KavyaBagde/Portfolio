let choices = document.querySelectorAll(".choices");
let resetBtn = document.querySelector("#reset");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let turnO = true;
let clicks = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (turnO) {
      choice.innerText = "O";
      turnO = false;
    } else {
      choice.innerText = "X";
      turnO = true;
    }
    choice.disabled = true;
    checkWinner();
  });
});

const reset = ()=>{
    turnO=true;
    anableChoices();
    left.classList.remove("left");
    left.innerText="";
    right.classList.remove("right");
    right.innerText="";
}

const disableChoices = () => {
  for (let choice of choices) {
    choice.disabled = true;
  }
};

const anableChoices = () => {
  for (let choice of choices) {
    choice.disabled = false;
    choice.innerText="";
  }
};


const leftDrawer = () => {
  left.innerText = ` O  win's  `;
  left.classList.add("left");
};

const rightDrawer = () => {
  right.innerText =  ` X win's`
  right.classList.add("right");
};

const showWinner = (winner) => {
  if (winner === "O") {
    leftDrawer();
  } else {
    rightDrawer();
  }
  disableChoices();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = choices[pattern[0]].innerText;
    let pos2val = choices[pattern[1]].innerText;
    let pos3val = choices[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

resetBtn.addEventListener("click" , reset);
