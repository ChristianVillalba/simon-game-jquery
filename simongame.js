var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

// Start Game
// Start: Click on the Title
$("#level-title").click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// Start: PRESS ANY KEY
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


//The game give us the patterns to follow
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  userClickedPattern = [];
  level++;
  $("#level-title").html("Simon Game<br> <br> <small>Level    </small>" + level);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  simonSound(randomChosenColour);
}

//What the player choose and how the document reacts to their actions
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  simonSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

//Check Player Anwser
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      $("body").addClass("game-over");
      $("#level-title").html("Game Over <br> <br> <small> <span class=only-large-view>Press Any Key </span> <span class=here >Press Here</span> to Restart </small>");
      wrongSound();
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Audio in the game
function simonSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function wrongSound(){
  var wrongmp3 = new Audio("sounds/wrong.mp3");
  wrongmp3.play();
}

// Game Over : start again
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
