/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * DONE: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
var correctNumber;
var guesses = [];
var aa = new Audio('932.wav');
var bb = new Audio('933.wav');
// add sound 
// var audio1 = document.getElementById('audio1').addEventListener('click',play);
// var audio2 = document.getElementById('audio2');
// var count = 0;

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    initGame();
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
    // *CODE GOES BELOW HERE *
    getRandomNumber();
    console.log(correctNumber,'......');
    guesses = [];
    resetResultContent();
    document.getElementById("history").innerHTML = '';
    document.getElementById('number-guess').placeholder = "What's your guess?";
}
/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
    // *CODE GOES BELOW HERE *
    correctNumber = Math.floor((Math.random() * 100) + 1);
 }


/**
 * Functionality for playing the whole game
 */
function playGame(){
  // *CODE GOES BELOW HERE *
  var numberGuess = document.getElementById('number-guess').value;
  if(numberGuess !== ''){
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory()
    } 
    document.getElementById('number-guess').value = '';
}
/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess){
    if(numberGuess > correctNumber ) {
        showNumberAbove()
      } else if (numberGuess < correctNumber) {
          showNumberBelow()
      } else {
          showYouWon()
      }
}



/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
  
}



/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.unshift(guess)
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  for(let guess of guesses){
      list += `<li class='list-group-item'>You guessed ${guess}</li>`
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}






function showYouWon(){
    const text = "Awesome job, you got it!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'won' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    var dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = '';
    bb.play()
}

function showNumberAbove(){
    const text = "Your guess is too high!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    var dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = 'Guess again !!';
    // aa.play()
    document.getElementById('audiotag1').play();
}

function showNumberBelow(){
    const text = "Your guess is too low!"
    /**
     * Retrieve the dialog using the getDialog() function
     * and save it to variable called dialog
     * HINT: Use the 'warning' and text parameters 
     */
    // *CODE GOES BELOW HERE *
    var dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
    document.getElementById('number-guess').placeholder = 'Guess again !!';
    aa.play()
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
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




