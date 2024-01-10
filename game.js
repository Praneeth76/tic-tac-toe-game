let boxes = document.querySelectorAll('.btn');
let newBtn = document.querySelector('.new-btn');
let resetBtn = document.querySelector('.reset-btn');
let rest = document.querySelector('.result');
let msgContainer = document.querySelector('.msg-container');

let turnO = true;

const moves = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

boxes.forEach((btn) => {
  btn.addEventListener("click",() => {
    if(turnO){
      btn.innerHTML = "O";
      turnO = false;
    } else{
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  })
})

const enableBoxes = () => {
  for(btn of boxes){
    btn.disabled = false;
    btn.innerText = "";
  }
}

const disableBoxes = () => {
  for(btn of boxes){
    btn.disabled = true;
  }
}

const showWinner = (winner) => {
  rest.innerText = `Congratulation to Winner ${winner}`;
  msgContainer.classList.remove('hide');
  disableBoxes();
}

const checkWinner = () => {
  for(let move of moves){
    let pos1 = boxes[move[0]].innerText;
    let pos2 = boxes[move[1]].innerText;
    let pos3 = boxes[move[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1 === pos2 && pos2 === pos3){
        showWinner(pos1);
      }
    }
  }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);