$(document).ready(function() {
  var randomScore = Math.floor(Math.random() * 80) + 20; //this will generate the a random goal score from 20 to 100
  var randomGemValue1 = Math.floor(Math.random() * 20) + 8; //this will generate a value for one of the gems
  var randomGemValue2 = Math.floor(Math.random() * 9) + 2; //this will generate a value for another of the gems
  var randomGemValue3 = Math.floor(Math.random() * 11) + 3; //this will generate a value for another of the gems
  var gemValues = [1, randomGemValue1, randomGemValue2, randomGemValue3]; //this array contains the possible values
  var currentScore = 0;

  console.log("RandomScore " + randomScore);
  console.log("gemValues array " + gemValues);

  $(".goal").text("Goal: " + randomScore);
  $(".currentScore").text("Current Score: " + currentScore);

  $("#jade").on("click", function() {
    console.log("JADE");
  });

  $("#ruby").on("click", function() {
    console.log("RUBY");
  });

  $("#sapphire").on("click", function() {
    console.log("SAPPHIRE");
  });

  $("#topaz").on("click", function() {
    console.log("TOPAZ");
  });
});

/* PseudoCode:
xx  put the ready function in
xx  variable to create a random score goal
xx  variables to create random gem values
xx  array to contain those values and the value 1 so the user can try with small increments
xx  variable for the current score
xx  capture the fact a user is clicking on a gem
xx  show the user what the goal is
xx  show the user what the current score is


??  assign each gem a data value pulled from the gemValues array
capture that data value when a user clicks on that gem
add the points accumulated when clicking that gem to the currentScore
if the user is over the score, show the user they lose
if the user === the score, they win
if the user is under the score, they can keep playing
if the user loses, reset the game
if the user wins, reset the game

is this a function?
add a reset button which will reset the current score and the gem values but not wins or losses















*/
