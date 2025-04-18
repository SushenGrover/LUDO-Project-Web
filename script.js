let redPawns = document.querySelectorAll(".red-pawn");
// console.log(redPawns);
let yellowPawns = document.querySelectorAll(".yellow-pawn");
// console.log(yellowPawns);
let bluePawns = document.querySelectorAll(".blue-pawn");
// console.log(bluePawns);
let greenPawns = document.querySelectorAll(".green-pawn");
// console.log(greenPawns);

// fetching cells in the form of path arrays
function fetchCells(color) {
  let path = [];
  for (let i = 1; i <= 56; i++) {
    let name = "." + color + i;
    // console.log(name);
    let cell = document.querySelector(name);
    path.push(cell);
    // cell.textContent=i;
    // cell.style.backgroundColor="green";
  }
  return path;
}
function fetchStartCells(color) {
  let arr = document.querySelectorAll("." + color + "-start-cell");
  // console.log(arr);
  return arr;
}


let greenPath = fetchCells("g");
let redPath = fetchCells("r");
let bluePath = fetchCells("b");
let yellowPath = fetchCells("y");

let greenStartCells = fetchStartCells("green");
let redStartCells = fetchStartCells("red");
let yellowStartCells = fetchStartCells("yellow");
let blueStartCells = fetchStartCells("blue");

let i = 0;
//movement functions
//move after 800ms after dice button is pressed bcoz it takes 700 ms for dice rolling


dicePositions=new Array(6);
container=document.querySelector(".dice-container");
displayNum=document.querySelector(".display-turn-num");
for(let i=0;i<6;i++){
    dicePositions[i]=document.createElement("div");
}
dicePositions[0].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: grid;align-items: center;justify-items: center;color: red;" class="dice-position-1 dice-position"><div><i class="fa-solid fa-circle"></i></div></div>';
dicePositions[1].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: grid;align-items: center;justify-items: center;grid-template-rows: 1fr;grid-template-columns: 1fr 1fr;" class="dice-position-2 dice-position"><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div></div>';
dicePositions[2].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: flex;flex-direction: column;align-items: center;justify-content: center;rotate: 45deg;" class="dice-position-3 dice-position"><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div></div>';
dicePositions[3].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: grid;align-items: center;justify-items: center;grid-template-columns: 1fr 1fr;grid-template-rows: 1fr 1fr;" class="dice-position-4 dice-position"><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div></div>';
dicePositions[4].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: flex;flex-direction: column;justify-content: center;align-items: center;" class="dice-position-5 dice-position"><div><i class="fa-solid fa-circle"></i>&nbsp;&nbsp;<i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i>&nbsp;&nbsp;<i class="fa-solid fa-circle"></i></div></div>';
dicePositions[5].innerHTML='<div style="font-size: 0.7rem;width: 4rem;height: 4rem;display: grid;align-items: center;justify-items: center;color: red;grid-template-columns: 1fr 1fr;grid-template-rows: 1fr 1fr 1fr;" class="dice-position-6 dice-position"><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div><div><i class="fa-solid fa-circle"></i></div></div>';
container.appendChild(dicePositions[0]);

let turnSpecifierText=document.querySelector("#turn-specifier-div");
let currentPlayer="red";
let diceValue=0;
let gameState="waitingForRoll";

function startTurn(){
  
}

function rollDice(event) {
    event.preventDefault();
    container.innerHTML = '';
    let counter = 0;
    function showNextDice() {
        if (counter < 6) {
            container.innerHTML = '';
            container.appendChild(dicePositions[counter]);
            counter++;
            setTimeout(showNextDice, 100);
        } else {
            showFinalDice();
            startTurn();
        }
    }
    function showFinalDice() {
        container.innerHTML = '';
        // let num = Math.floor(Math.random() * 6) + 1;
        let num=6;
        diceValue=num;
        container.appendChild(dicePositions[num - 1]);
        displayNum.innerHTML=num;
    }
    showNextDice();
}



function transferPawn(oldParent, child, newParent) {
  const oldRect = oldParent.getBoundingClientRect();
  const newRect = newParent.getBoundingClientRect();

  const deltaX = oldRect.left - newRect.left;
  const deltaY = oldRect.top - newRect.top;

  child.style.transition = 'none';
  child.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

  newParent.appendChild(child);

  requestAnimationFrame(() => {
    child.style.transition = 'transform 1s ease-in-out';
    child.style.transform = 'translate(0, 0)';
  });

  child.addEventListener('transitionend', () => {
    child.style.transition = '';
    child.style.transform = '';
  }, { once: true });
}

let playButton=document.querySelector(".play-button");
playButton.addEventListener('click', rollDice);