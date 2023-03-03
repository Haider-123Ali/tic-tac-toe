
const reset = document.querySelector(".btn")
const audio = new Audio("mp3")
const info = document.getElementById("info")
let x = "X"
let turn = Array("X" , "O")
let o = "O"
let currentPlayer = x;

info.innerText = "Turn For "+currentPlayer;

let spaces = Array(9).fill(null)
const boxes = Array.from( document.getElementsByClassName("box")); 
function startGame() {
   boxes.forEach(box=> box.addEventListener("click", 
   boxClicked
   ))
}

function boxClicked(e) {
   const id = e.target.id
   if (!spaces[id]) {
    spaces[id]= currentPlayer
    e.target.innerText = currentPlayer
    currentPlayer = currentPlayer === x ? o:x   }
   info.innerHTML = "Turn For " + currentPlayer;
}
reset.addEventListener(
    "click",
    ()=>{
        spaces.fill(null)
    boxes.forEach(box =>{
    box.innerText = ""
    })
    })
    function playerHasWon() {
    let box = document.querySelectorAll(".box")
    let roundWon = false;
    const wins =[
        [0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
    ]
    let aptions = ['','','','','','','','','']
for(let i = 0; i <wins.length; i++ ){
    const condition = wins[i];
    const cellA = option.condition[0]
    const cellB = option.condition[0]
    const cellC = option.condition[0]
    if (cellA ==cellB && cellB == cellC) {
        roundWon = true;
        break;
    }
    if (roundWon) {
        info.textContent = `${currentPlayer} Has Won!`;

    }
}}
startGame();