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
        }
    }
    function showFinalDice() {
        container.innerHTML = '';
        let num = Math.floor(Math.random() * 6) + 1;
        container.appendChild(dicePositions[num - 1]);
        displayNum.innerHTML=num;
    }
    showNextDice();
}

document.querySelector(".play-button").addEventListener('click', rollDice);
