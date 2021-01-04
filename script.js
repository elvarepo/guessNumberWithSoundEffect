
var correctNumber;
var guesses = [];
var aa = new Audio('932.wav');
var bb = new Audio('933.wav');

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    initGame();
}

function initGame(){
    getRandomNumber();
    console.log(correctNumber,'......');
    guesses = [];
    resetResultContent();
    document.getElementById("history").innerHTML = '';
    document.getElementById('number-guess').placeholder = "What's your guess?";
}

function getRandomNumber(){
    correctNumber = Math.floor((Math.random() * 100) + 1);
 }

function playGame(){
  var numberGuess = document.getElementById('number-guess').value;
  if(numberGuess !== ''){
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory()
    } 
    document.getElementById('number-guess').value = '';
}

function displayResult(numberGuess){
    if(numberGuess > correctNumber ) {
        showNumberAbove()
      } else if (numberGuess < correctNumber) {
          showNumberBelow()
      } else {
          showYouWon()
      }
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
  
}

function saveGuessHistory(guess) {
  guesses.unshift(guess)
}
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  for(let guess of guesses){
      list += `<li class='list-group-item'>You guessed ${guess}</li>`
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}


function showYouWon(){
    const text = "Awesome job, you got it!"
    var dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = '';
    bb.play()
}

function showNumberAbove(){
    const text = "Your guess is too high!"

    var dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = 'Guess again !!';
    document.getElementById('audiotag1').play();
}

function showNumberBelow(){
    const text = "Your guess is too low!"

    var dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = 'Guess again !!';
    aa.play()
}


function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}




