// 1.01 - Create this file


// 2.5 - Empty array
var gamePattern = [];


// 2.3 - The colors in Symon Game
let buttonColours = ["red","blue","green","yellow"];



// 2.1.2 - Function that generates a number 0-3
function nextSequence() {
  return Math.floor(Math.random() * 4);
}
//2.2.b variable stored
var randomNumber = nextSequence();

// 2.4 - pick a color from the list. list[]
function randomChosenColour() {
  return buttonColours[randomNumber];
}
//2.6 Add the randomChosenColour as last item in gamePattern
gamePattern.push(randomChosenColour);


// 3.1 select buttonColours using #id
$("#green");
$("#red");
$("#yellow");
$("#blue");
// 3.2 how to make the buttons flash
$("# ").fadeOut(120).fadeIn(120);



// 3.3 how to add sound to buttons
function greenSound(){
  var greenmp3 = new Audio("sounds/green.mp3");
  greenmp3.play();
}
function redSound(){
  var redmp3 = new Audio("sounds/red.mp3");
  rednmp3.play();
}
function yellowSound(){
  var yellowmp3 = new Audio("sounds/yellow.mp3");
  yellowmp3.play();
}
function blueSound(){
  var bluemp3 = new Audio("sounds/blue.mp3");
  bluemp3.play();
}
function wrongSound(){
  var wrongmp3 = new Audio("sounds/wrong.mp3");
  wrongmp3.play();
}
