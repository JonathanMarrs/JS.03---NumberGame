var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt("I'm thinking of a number between 1 and 6.  What is it?");

if (parseInt(guess) === randomNumber ) {
  document.write("<p>You guessed right!</p>")
} else {
  document.write("<p>Nope. You are straight wrong! The number was " + randomNumber + ".</p>")
}
