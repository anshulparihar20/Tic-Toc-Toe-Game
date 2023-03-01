console.log("Welcomne to Tic Tac Toe")

let music = new Audio("music.mp3");
let turnM = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let gameover = false;
let turn = "X"; 

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('textBox');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Win the game.";
            gameover = true;
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// music.play();
// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.textBox')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnM.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.textBox')
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.querySelector('.line').style.width = '0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width = "0";
})

