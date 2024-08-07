var player1 = document.getElementById('player1');
var dice = document.getElementById('pic');
var dice1 = document.getElementById('pic1');
var currscore1 = document.getElementById('currscore1');
var score1 = document.getElementById('score1');
var player2 = document.getElementById('player2');
var currscore2 = document.getElementById('currscore2');
var score2 = document.getElementById('score2');
score1.textContent = 0;
score2.textContent = 0;
currscore1.textContent = 0;
currscore2.textContent = 0;
let activePlayer = 0;
var val1 = 0;
var val2 = 0
function generateNumP1() {

    if (activePlayer == 0) {

        var randomNum = Math.floor(Math.random() * 6) + 1;
        dice.src = `./new/dice${randomNum}.png`;
        currscore1.innerHTML = randomNum;
        val1 = val1 + randomNum;
        score1.innerHTML = val1;
        console.log(randomNum);
        if (score1.innerHTML >= 100) {
            alert('Player 1 was Won');
        }
    }
    activePlayer++;
}
function generateNumP2() {

    if (activePlayer == 1) {
        var randomNum = Math.floor(Math.random() * 6) + 1;
          dice1.src=`./new/dice${randomNum}.png`;
        currscore2.innerHTML = randomNum;
        val2 = val2 + randomNum;
        score2.innerHTML = val2;
        console.log(randomNum);
        if (score2.innerHTML >= 100) {
            alert('Player 2 was Won');
        }
    }
    activePlayer--;
}
function clickToNewGame(){
score1.textContent = 0;
score2.textContent = 0;
currscore1.textContent = 0;
currscore2.textContent = 0;
}