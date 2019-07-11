$(document).ready(function() {
  var randomScore = Math.floor(Math.random() * 120) + 10; //this will generate the a random goal score from 20 to 100
  var randomGemValue1 = Math.floor(Math.random() * 1) + 1; //this will generate a value for one of the gems
  var randomGemValue2 = Math.floor(Math.random() * 10) + 2; //this will generate a value for another of the gems
  var randomGemValue3 = Math.floor(Math.random() * 15) + 2; //this will generate a value for another of the gems
  var randomGemValue4 = Math.floor(Math.random() * 35) + 2; //this will generate a value for another of the gems
  var gemValues = [
    randomGemValue1,
    randomGemValue2,
    randomGemValue3,
    randomGemValue4
  ]; //this array contains the possible values
  var gemNames = ["jade", "ruby", "sapphire", "topaz"]; //array to make sure each gem
  var currentScore = 0;
  var clickValue = 5; // !This is a temporary variable for testing.

  function addToScore(currentScore, clickValue) {
    //this function takes the value assigned to the crystal and adds that value to the current score.  It will be called in the click listeners.
    return (currentScore += clickValue);
    //clickValue is what the function takes when the user clicks
  }

  $(".goal").text("Goal: " + randomScore);
  $(".currentScore").text("Current Score: " + currentScore);

  $("#jade").on("click", function() {
    console.log("JADE");
    //  TODO:  function to get the value and add it to the score.
    addToScore();
  });

  $("#ruby").on("click", function() {
    console.log("RUBY");
    //  TODO:  function to get the value and add it to the score.
    addToScore();
  });

  $("#sapphire").on("click", function() {
    console.log("SAPPHIRE");
    //  TODO:  function to get the value and add it to the score.
    addToScore();
  });

  $("#topaz").on("click", function() {
    console.log("TOPAZ");
    //  TODO:  function to get the value and add it to the score.
    addToScore();
  });
});

// TODO function to assign values to each crystal

/* PseudoCode:---------------------------------------------------------------------------
TODO:  assign each gem a data value pulled from the gemValues array

TODO:  capture that data value when a user clicks on that gem
?? I think it has something to do with: this or .attr()

TODO:  capture the points when the user click on the gem
TODO:  add the points accumulated when clicking that gem to the currentScore
TODO:  change the currentScore and show it to the user

TODO:
  ?? is this maybe a function?  
  if the user is over the score, show the user they lose
  if the user === the score, they win
  if the user is under the score, they can keep playing
  if the user loses, reset the game
  if the user wins, reset the game


TODO: add a reset button which will reset the current score and the gem values but not wins or losses



DONE:
xx  put the ready function in
xx  variable to create a random score goal
xx  variables to create random gem values
xx  array to contain those values and the value 1 so the user can try with small increments
xx  variable for the current score
xx  capture the fact a user is clicking on a gem
xx  show the user what the goal is
xx  show the user what the current score is


*/
