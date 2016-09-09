/*
- The Random Number Guessing Game -
This program generates a number between 1 and 6 and then gives
the player a chance to guess.
*/

//assume the player didn't guess correctly
var correctGuess = false;

//generates a number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. Can you guess it?');

/*
Test to see if the player is:
1) Correct
2) Guessed too high, try again
3) Guessed too low, try again
*/
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt("No, your guess was too small, Silly. Try something higher than " + guess + ".");
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if ( parseInt(guess) > randomNumber ) {
  var guessLess = prompt("Oh, come on! That number is too high.  Guess something higher than " + guess + ".");
  if (parseInt(guessLess) === randomNumber) {
      correctGuess = true;
  }
}

//test if the play is correct and output a response
if ( correctGuess ) {
    document.write("<p>You guessed the number! How'd you do that?</p>");
} else {
    document.write("<p>Nope. You are straight wrong! The number was " +  randomNumber + ".</p>");
}
