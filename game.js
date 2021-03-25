var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
  if (!started){
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
})

//What the player choose
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");  //this: it refers to the element that received the event.
  userClickedPattern.push(userChosenColour);
  simonSound(userChosenColour);
  animatedPress(userChosenColour);
});

//The game give us the patterns to follow
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  simonSound(randomChosenColour);
}
//  select buttonColours using #id and randomNumber
// $("#"+ randomChosenColour)
// $(#0) = "red"
// $(#1) = "blue"
// $(#2) = "green"
// $(#3) = "yellow"


//add sound to buttons
function simonSound(){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function wrongSound(){
  var wrongmp3 = new Audio("sounds/wrong.mp3");
  wrongmp3.play();
}

//add animation to buttons
function animatedPress(currentCoulour) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  };100);
}

